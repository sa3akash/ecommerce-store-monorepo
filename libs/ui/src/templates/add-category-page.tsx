'use client';

import React from 'react';
import AddCategoryCard from '../components/organisms/AddCategoryCard';
import UpdaloadImageCard from '../components/molecules/UpdaloadImageCard';
import { AddCategoryFormProvider } from '@ecommerce/form/src/forms/category/addCategory.form';

const AddCategoryPage = () => {
  return (
    <AddCategoryFormProvider>
      <div className="p-4 flex flex-col lg:flex-row gap-4 relative h-full pb-40">
        <AddCategoryCard />
        <UpdaloadImageCard />
      </div>
    </AddCategoryFormProvider>
  );
};

export default AddCategoryPage;
