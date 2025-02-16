'use client';

import React, { FC, useMemo } from 'react';
import { Button } from '../ui/button';
import { Plus, X } from 'lucide-react';
import { useAddCategoryForm } from '@ecommerce/form/src/forms/category/addCategory.form';
import { useWatch } from 'react-hook-form';
import { cn } from '../../lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  buttonText: string;
  onClick: () => void;
}

const ProgressUI: FC<Props> = ({ buttonText, onClick, title, className, ...prop }) => {
  const { reset, control } = useAddCategoryForm();

  const watchAllFields = useWatch({ control });

  // Calculate progress based on non-empty fields
  const progress = useMemo(() => {
    const totalFields = Object.keys(watchAllFields || {}).length;

    const filledFields = Object.values(watchAllFields || {}).filter((value) => {
      if (typeof value === 'string') {
        return value.trim() !== '';
      }
      // Check for filled nested fields like image
      if (typeof value === 'object' && value !== null) {
        return value.url && value.url.trim() !== '';
      }
      return false;
    }).length;

    // Prevent division by zero
    return totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  }, [watchAllFields]);

  return (
    <div
      className={cn(
        'w-full mx-auto p-4 absolute bottom-0 left-0 right-0 bg-muted/50 flex gap-4 items-center transition-all flex-col md:flex-row',
        className,
        progress === 0 && 'hidden'
      )}
      {...prop}
    >
      <div className="flex items-start justify-between mb-2 flex-col flex-1 gap-2 w-full">
        <span className="text-[15px] text-muted-foreground font-medium">
          {title} {progress}%
        </span>
        <div className="relative h-3 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-300 ease-out progress-stripe"
            style={{
              width: `${progress}%`,
              backgroundImage: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 25%, 
            transparent 25%, 
            transparent 50%, 
            rgba(255, 255, 255, 0.2) 50%, 
            rgba(255, 255, 255, 0.2) 75%, 
            transparent 75%, 
            transparent)`,
              backgroundColor: '#7C3AED',
              backgroundSize: '14px 14px',
              animation: 'move 1s linear infinite'
            }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="h-9 px-4 text-[13px] font-medium" onClick={() => reset()}>
          <X className="h-4 w-4 mr-1.5" />
          Cancel
        </Button>
        <Button size="sm" className="h-9 px-4 text-[13px] font-medium bg-[#7C3AED] hover:bg-[#6D28D9] text-white" onClick={onClick}>
          <Plus className="h-4 w-4 mr-1.5" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProgressUI;
