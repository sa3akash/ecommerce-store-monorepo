import Joi, { ObjectSchema } from 'joi';

export const AddCategorySchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().min(2).max(250).messages({
    'string.base': 'Category Name must be of type string.',
    'string.min': 'Category Name must be 2 characters.',
    'string.max': 'Category Name must be less then 250 characters.',
    'any.required': 'Category Name is a required field.',
    'string.empty': 'Category Name is a required field.'
  }),
  description: Joi.string().optional().min(2).max(650).messages({
    'string.base': 'Category description must be of type string.',
    'string.min': 'Category description must be 2 characters.',
    'string.max': 'Category description must be less then 600 characters.',
    'string.empty': 'Category description is a required field.'
  }),

  image: Joi.object({
    url: Joi.string().required().messages({
      'string.base': 'Image url must be of type string.',
      'string.empty': 'Image url is a required field.'
    }),
    public_id: Joi.string().required().messages({
      'string.base': 'Image public_id must be of type string.',
      'string.empty': 'Image public_id is a required field.'
    })
  })
});
