import React from 'react';
import { cn } from '@/lib/utils';

export const Container = ({ className, children }) => {
  return (
    <div
      className={cn('mx-auto max-w-screen-xl px-4 xs:px-6 sm:px-8', className)}
    >
      {children}
    </div>
  );
};
