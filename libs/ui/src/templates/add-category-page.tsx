'use client';

import React from 'react';
import AddCategoryCard from '../components/organisms/AddCategoryCard';
import UpdaloadImageCard from '../components/molecules/UpdaloadImageCard';
import { AddCategoryFormProvider } from '@ecommerce/form/src/forms/category/addCategory.form';

const AddCategoryPage = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4 flex-nowrap">
      <AddCategoryFormProvider>
        <AddCategoryCard />
        <UpdaloadImageCard />
      </AddCategoryFormProvider>
    </div>
  );
};

export default AddCategoryPage;
