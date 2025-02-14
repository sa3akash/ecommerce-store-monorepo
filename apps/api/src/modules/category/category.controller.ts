import { auth } from '@/middleware/auth';
import { joiValidation } from '@/services/utils/joiValidation';
import { Request, Response } from 'express';
import { AddCategorySchema } from '@modules/category/category.schemas';
import { categoryServices } from '@modules/category/category.services';
import { ServerError } from 'error-express';

const PAGE_SIZE = 10;

export class CategoryController {
  @auth('admin')
  @joiValidation(AddCategorySchema)
  public async add(req: Request, res: Response) {
    const data = await categoryServices.addCategory(req.body);

    res.status(201).json(data);
  }

  @auth('admin')
  @joiValidation(AddCategorySchema)
  public async update(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);

    const data = await categoryServices.update(req.body, slug);
    res.status(200).json(data);
  }

  @auth('admin')
  public async delete(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);

    const data = await categoryServices.delete(slug);
    res.status(200).json(data);
  }

  public async getSingle(req: Request, res: Response) {
    const { slug } = req.params;
    if (!slug) throw new ServerError('CategoryId params is required.', 400);

    const data = await categoryServices.getSingle(slug);
    res.status(200).json(data);
  }

  public async getAll(req: Request, res: Response) {
    const page = Number(req.query.page) || 1;
    const skip: number = (page - 1) * PAGE_SIZE;
    const limit: number = PAGE_SIZE * page;

    const data = await categoryServices.getAll(skip, limit);
    res.status(200).json(data);
  }
}
