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

  public async update(data: Omit<ICategory, '_id' | 'slug'>, slug: string) {
    const slugNew = slugify(data.name);

    const categoryExist = await CategoryModel.findOne({ slug });
    if (!categoryExist) throw new ServerError('Category does not exist.', 404);

    if (slug !== slugNew) {
      const categoryExistNew = await CategoryModel.findOne({ slug: slugNew });
      if (categoryExistNew) throw new ServerError('Category name already exist.', 400);
    }

    const readData = {
      ...data,
      _id: categoryExist._id,
      slug: slugNew
    };

    categoryQueue.add('updateCategory', {
      ...readData,
      oldSlug: slug
    });

    return {
      message: 'Category updated successfull.',
      data: readData
    };
  }

  public async delete(slug: string) {
    const categoryExist = await CategoryModel.findOne({ slug });
    if (!categoryExist) throw new ServerError('Category does not exist.', 404);

    categoryQueue.add('deleteCategory', {
      slug
    });

    return {
      message: 'Category deleted successfull.'
    };
  }

  public async getSingle(slug: string) {
    const data = await CategoryModel.findOne({ slug });
    if(!data) throw new ServerError('Category does not exist.')

    return data;
  }

  public async getAll(skip:number,limit:number) {
    return CategoryModel.find().skip(skip).limit(limit);
  }

  // =============================

  public async saveCategory(data: Omit<ICategory, '_id'>) {
    return CategoryModel.create(data);
  }

  public async updateCategory({ oldSlug, ...data }: ICategory & { oldSlug: string }) {
    return CategoryModel.findOneAndUpdate({ slug: oldSlug }, { $set: data });
  }

  public async deleteCategory({ slug }: { slug: string }) {
    return CategoryModel.findOneAndDelete({ slug });
  }
}

export const categoryServices: CategoryServices = new CategoryServices();
