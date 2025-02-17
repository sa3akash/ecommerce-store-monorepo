'use client';

import { cn } from '../../lib/utils';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import ContinueWithSocial from '../atoms/ContinueWithSocial';
import SeparateWith from '../atoms/SeparateWith';
import TermsAndService from '../atoms/TermsAndService';
import { useActionState } from 'react';
import { signupAction } from '@ecommerce/network/src/actions/auth.action';
import AlertCommon from '../atoms/AlertCommon';

export const RegisterForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const [state, action, pending] = useActionState(signupAction, undefined);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form action={action}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <ShoppingBag className="size-6" />
              </div>
              <span className="sr-only">Pixmart Shop.</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Pixmart Shop.</h1>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" disabled={pending} type="name" placeholder="jonn" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" disabled={pending} type="email" placeholder="jonn@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="********" required name="password" disabled={pending} />
            </div>

            <AlertCommon isError={state?.success !== true} message={state?.message}/>
            <Button type="submit" className="w-full" disabled={pending}>
              Register
            </Button>
          </div>
          <SeparateWith text="Or Continue with" />
          <ContinueWithSocial />
        </div>
      </form>
      <TermsAndService />
    </div>
  );
};
