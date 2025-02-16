'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageIcon } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import { useAddCategoryForm } from '@ecommerce/form/src/forms/category/addCategory.form';
import Image from 'next/image';
import { useWatch } from 'react-hook-form';

const UpdaloadImageCard = () => {
  // const onDrop = useCallback((acceptedFiles: File[]) => {
  //   console.log(Array.from(acceptedFiles));
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { setValue, control, register } = useAddCategoryForm();

  const image = useWatch({ control, name: 'image' });

  return (
    <Card className="bg-muted/50 lg:w-[264px] h-max">
      <CardHeader>
        <CardTitle>Image</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-center">
        <div className="border border-dashed  cursor-pointer rounded-lg">
          <div className="flex flex-col gap-3 justify-center min-h-[150px] rounded-lg overflow-hidden relative h-full items-center py-6">
            {image?.url ? (
              <>
                <Image src={image.url} alt="selected image" fill className="object-cover" />
                <input type="text" className="sr-only" {...register('image.url')} />
                <input type="text" className="sr-only" {...register('image.public_id')} />
              </>
            ) : (
              <>
                <ImageIcon />
              </>
            )}
          </div>
        </div>
        <CldUploadWidget
          uploadPreset="ecommerce"
          onSuccess={(result) => {
            // console.log(result.info);
            setValue('image.public_id', `${(result?.info as { public_id: string }).public_id}`);
            setValue('image.url', (result?.info as { secure_url: string }).secure_url);
          }}
          // onQueuesEnd={(result, { widget }) => {
          //    widget.close();
          // }}
          options={{
            sources: ['local', 'url', 'unsplash']
            // multiple: true,
            // maxFiles: 5
          }}
        >
          {({ open }) => {
            const handleOnClick = () => open();
            return (
              <Button size="sm" onClick={handleOnClick}>
                {image?.url ? 'Change Image' : 'Add Image'}
              </Button>
            );
          }}
        </CldUploadWidget>
      </CardContent>
    </Card>
  );
};

export default UpdaloadImageCard;

{
  /* <div {...getRootProps()} className="border border-dashed  cursor-pointer rounded-lg">
<input {...getInputProps()} />
<div className="flex flex-col gap-3 justify-center h-full items-center py-6">
  <ImageIcon />
  {isDragActive ? <p className='text-center'>Drop the files here ...</p> : <p className='text-center'>Drag and drop image here, or click add image</p>}
  <Button>Add Image</Button>
</div>
</div> */
}
