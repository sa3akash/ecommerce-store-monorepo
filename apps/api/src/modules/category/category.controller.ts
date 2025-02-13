import { auth } from '@/middleware/auth';
import { joiValidation } from '@/services/utils/joiValidation';
import { Request, Response } from 'express';
import { AddCategorySchema } from '@modules/category/category.schemas';
import { categoryServices } from '@modules/category/category.services';

export class CategoryController {
  @auth('admin')
  @joiValidation(AddCategorySchema)
  public async add(req: Request, res: Response) {
    const data = await categoryServices.addCategory(req.body);

    res.status(201).json(data);
  }
}
