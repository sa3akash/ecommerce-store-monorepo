'use client';

import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import TermsAndService from '../atoms/TermsAndService';
import { useActionState } from 'react';
import { verifyEmailAction } from '@ecommerce/network/src/actions/auth.action';
import { useRouter, useSearchParams } from 'next/navigation';

export const VerifyEmailForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const [state, action, pending] = useActionState(verifyEmailAction, undefined);

  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  if (!token) {
    return router.push('signin');
  }

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
            <h1 className="text-xl font-bold">Verify your email address.</h1>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/signin" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <input type="text" name="token" defaultValue={token} className="sr-only" />
            <Button type="submit" variant={(state?.success === false && 'destructive') || 'default'} className="w-full" disabled={pending || state?.success !== true}>
              {(state?.success !== true && state?.message) || 'Verify'}
            </Button>
          </div>
        </div>
      </form>
      <TermsAndService />
    </div>
  );
};
