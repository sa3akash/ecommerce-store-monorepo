'use client'

import React, { useCallback } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../../components/ui/button';

export const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Name (A-Z)", value: "asc" },
  { label: "Name (Z-A)", value: "desc" },
  // { label: "Stock (High-Low)", value: "stock-desc" },
  // { label: "Stock (Low-High)", value: "stock-asc" },
]

export const STOCK_FILTERS = [
  { label: "All Stock", value: "all" },
  { label: "In Stock", value: "in-stock" },
  { label: "Out of Stock", value: "out-of-stock" },
]

const Category = () => {


  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  return (
    <div className="p-4 h-full flex flex-col gap-6">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-4">
       <div className='w-full md:max-w-sm flex'>
       <input type="text" className='flex-1'/>
       </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Select onValueChange={(value)=>{
            router.push(pathname + '?' + createQueryString('stock', value))
          }}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Stock" />
            </SelectTrigger>
            <SelectContent >
            {STOCK_FILTERS.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value)=>{
            router.push(pathname + '?' + createQueryString('sort', value))
          }}>
            <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
            </SelectContent>
          </Select>
          <Button >Add Category</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className=' flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            {Array.from({length:20}).map((item,i)=>(
              <div key={i} className='bg-green-400 min-h-[250px]'>{i+1}</div>
            ))}
        </div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Category;
