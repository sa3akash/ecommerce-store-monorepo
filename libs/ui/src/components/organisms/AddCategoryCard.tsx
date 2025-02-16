'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useAddCategoryForm } from '@ecommerce/form/src/forms/category/addCategory.form';
import ProgressUI from '../atoms/ProgressUI';

const AddCategoryCard = () => {
  const { register, getValues } = useAddCategoryForm();

  const handleSubmit = async () => {
    const data = getValues();

    console.log(data);
  };

  return (
    <Card className="bg-muted/50 flex-1 h-max">
      <CardHeader>
        <CardTitle>General Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Category Name *</Label>
            <Input id="name" disabled={false} {...register('name')} type="text" placeholder="Type category name here. . ." required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              disabled={false}
              placeholder="Type category description here..."
              rows={4}
              className="resize-none"
            />
          </div>
          <ProgressUI buttonText="Add Category" onClick={handleSubmit} title="Category Completion" />
        </div>
      </CardContent>
    </Card>
  );
};

export default AddCategoryCard;
