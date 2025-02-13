import { ICategory } from '@ecommerce/utils/src/interfaces/category/category.interface';
import slugify from 'slugify';
import { CategoryModel } from '@modules/category/category.model';
import { ServerError } from 'error-express';
import { categoryQueue } from '@/services/queues/categoryQueue';

class CategoryServices {
  public async addCategory(data: Omit<ICategory, '_id' | 'slug'>) {
    const slug = slugify(data.name);
    const categoryExist = await CategoryModel.findOne({ slug });
    if (categoryExist) throw new ServerError('Category already exist.', 400);

    const readData = {
      ...data,
      slug
    };

    categoryQueue.add('addCategory', readData);

    return {
      message: 'Category added successfull.',
      data: readData
    };
  }

  // =============================

  public async saveCategory(data: Omit<ICategory, '_id'>) {
    return CategoryModel.create(data);
  }
}

export const categoryServices: CategoryServices = new CategoryServices();
