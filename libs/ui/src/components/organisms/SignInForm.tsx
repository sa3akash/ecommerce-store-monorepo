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
import { FC, HTMLAttributes, useActionState, useEffect } from 'react';
import { signinAdminAction } from '@ecommerce/network/src/actions/auth.action';
import AlertCommon from '../atoms/AlertCommon';
import { useRouter } from 'next/navigation';
import { useAuth } from '@ecommerce/store/src/context/auth-provider';

type Props = HTMLAttributes<HTMLDivElement>;

const LoginForm: FC<Props> = ({ className, ...props }) => {
  const [state, action, pending] = useActionState(signinAdminAction, undefined);

  const { setUser } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (state?.success === true) {
      setUser(state.user);
      router.push('/');
    }
  }, [router, setUser, state?.success, state?.user]);

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
            <h2 className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" disabled={pending} type="email" placeholder="jonn@example.com" required />
            </div>
            {/* {state?.errors?.email && <p className='space-y-2 text-rose-400'>{state.errors.email}</p>} */}
            <div className="grid gap-2">
              <h3 className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                  Forgot your password?
                </a>
              </h3>
              <Input disabled={pending} id="password" name="password" type="password" required placeholder="********" />
            </div>

            <AlertCommon isError={state?.success === false} message={state?.message} />
            <Button type="submit" className="w-full" disabled={pending}>
              Login
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

export default LoginForm;
