import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import * as z from 'zod';

const addCategorySchema = z.object({
  name: z.string().min(3, { message: 'Name must contain atleast 3 characters.' }),
  description: z.string(),
  image: z.object({
    url: z.string().min(2),
    public_id: z.string()
  })
});

export type IAddCategorySchema = z.infer<typeof addCategorySchema>;

export const useAddCategory = () =>
  useForm<IAddCategorySchema>({
    resolver: zodResolver(addCategorySchema),
    defaultValues: {
      description: '',
      image: {
        public_id: '',
        url: ''
      },
      name: ''
    }
  });



export const AddCategoryFormProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useAddCategory()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const useAddCategoryForm = () => useFormContext<IAddCategorySchema>()