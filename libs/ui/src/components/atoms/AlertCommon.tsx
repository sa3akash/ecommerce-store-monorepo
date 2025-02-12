import React, { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { CheckCheck, ShieldAlert } from 'lucide-react';

interface Props extends HTMLAttributes<HTMLDivElement>{
  message?: string;
  isError?: boolean;
}

const AlertCommon = ({message,isError,...prop}:Props) => {
  if(!message) return;
  return (
    <div className={cn(
      "px-4 py-3 rounded-md text-sm flex items-center gap-2",
      isError ? "bg-rose-300 text-rose-800" : "bg-green-300 text-green-800",
      prop.className
    )} {...prop}>
      {isError ? <ShieldAlert />: <CheckCheck />}
      {message}
    </div>
  );
};

export default AlertCommon;
