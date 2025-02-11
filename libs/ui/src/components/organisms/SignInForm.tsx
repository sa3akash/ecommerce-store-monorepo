import { cn } from '../../lib/utils';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import ContinueWithSocial from '../atoms/ContinueWithSocial';
import SeparateWith from '../atoms/SeparateWith';
import TermsAndService from '../atoms/TermsAndService';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form>
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
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jonn@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required placeholder="********"/>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <SeparateWith text='Or Continue with' />
          <ContinueWithSocial />
        </div>
      </form>
      <TermsAndService />
    </div>
  );
}
