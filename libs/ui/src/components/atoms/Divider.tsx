import React from 'react';
import { cn } from '../../lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}
const Divider = ({ text, className, ...prop }: DividerProps) => {
  return (
    <div className={cn('relative', className)} {...prop}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">{text}</span>
      </div>
    </div>
  );
};

export default Divider;
