'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { useAddCategoryForm } from '@ecommerce/form/src/forms/category/addCategory.form'

const AddCategoryCard = () => {
  const { register } = useAddCategoryForm()




  return (
    <Card className='bg-muted/50 flex-1'>
       <CardHeader>
        <CardTitle>General Information</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form action="" className='space-y-6'>
        <div className="grid gap-2">
              <Label htmlFor="name">Category Name *</Label>
              <Input id="name" disabled={false} {...register('name')} type="text" placeholder="Type category name here. . ." required />
            </div>
        <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register('description')} disabled={false} placeholder="Type category description here. . ." rows={4} className='resize-none'/>
            </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddCategoryCard