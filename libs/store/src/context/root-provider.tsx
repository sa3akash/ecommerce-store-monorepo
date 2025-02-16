'use client';

import React from 'react';
import { PropsWithChildren } from 'react';
import { AuthProvider } from './auth-provider';
import { ThemeProviderLayout } from './theme-provider';
import {Toaster} from '@ecommerce/ui/src/components/ui/sonner'

export const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <ThemeProviderLayout>{children}</ThemeProviderLayout>
      <Toaster position='top-right'/>
    </AuthProvider>
  );
};
