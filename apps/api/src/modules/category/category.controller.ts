import { auth } from '@/middleware/auth';
import { joiValidation } from '@/services/utils/joiValidation';
import { Request, Response } from 'express';
import { AddCategorySchema } from '@modules/category/category.schemas';
import { categoryServices } from '@modules/category/category.services';
import { ServerError } from 'error-express';
import { redisClient } from '@/services/utils/redisClient';
import { generateCacheKey } from '@/services/utils/generateCacheKey';

const PAGE_SIZE = 10;

export class CategoryController {
  @auth('admin')
  @joiValidation(AddCategorySchema)
  public async add(req: Request, res: Response) {
    const data = await categoryServices.addCategory(req.body);
    redisClient.deleteCache('api:v1:category*');

    res.status(201).json(data);
  }

  @auth('admin')
  @joiValidation(AddCategorySchema)
  public async update(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);
    const data = await categoryServices.update(req.body, slug);
    redisClient.deleteCache('api:v1:category*');

    res.status(200).json(data);
  }

  @auth('admin')
  public async delete(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);
    const data = await categoryServices.delete(slug);

    redisClient.deleteCache('api:v1:category*');

    res.status(200).json(data);
  }

  public async getSingle(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);

    const key = generateCacheKey(req);
    const cachedCategory = await redisClient.client.get(key);
    if (cachedCategory) {
      res.status(200).json(JSON.parse(cachedCategory));
      return;
    }

    const data = await categoryServices.getSingle(slug);
    if (data.slug) {
      await redisClient.client.set(key, JSON.stringify(data));
    }

    res.status(200).json(data);
  }

  public async getAll(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const skip: number = (page - 1) * PAGE_SIZE;
    const limit: number = PAGE_SIZE * page;

    const key = generateCacheKey(req);
    const cachedCategory = await redisClient.client.get(key);
    if (cachedCategory) {
      res.status(200).json(JSON.parse(cachedCategory));
      return;
    }
    const data = await categoryServices.getAll(skip, limit);

    if (data.length > 0) {
      await redisClient.client.set(key, JSON.stringify(data));
    }
    res.status(200).json(data);
  }
}
