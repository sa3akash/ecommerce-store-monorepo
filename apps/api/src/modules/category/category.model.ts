import mongoose from 'mongoose';
import { ICategory } from '@ecommerce/utils/src/interfaces/category/category.interface';

const CategorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase:true,
      index: true
    },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
    },
    description: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

export const CategoryModel = mongoose.model('Category', CategorySchema, 'Category');
