import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Input } from '../ui/input';
import AuthSocial from '../atoms/AuthSocial';
import Divider from '../atoms/Divider';
import { Label } from '../ui/label';
import { Card, CardContent } from '../ui/card';

const SignUpCard = () => {
  return (
    <Card className="w-full max-w-[1200px] grid md:grid-cols-2 overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="space-y-6 max-w-[400px] mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
            <h2 className="text-muted-foreground">
              A brand new day is here. It&apos;s your day to shape. Sign in and get started on your projects.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="email">
                Email
              </Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm" htmlFor="password">
                Password
              </Label>
              <Input id="password" type="password" placeholder="At least 8 characters" />
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full bg-emerald-800 hover:bg-emerald-900">Sign in</Button>
          </div>

          <Divider text="Or" />

          <AuthSocial />

          <h3 className="text-center text-sm">
            Don&apos;t you have an account?{' '}
            <Link href="/sign-up" className="text-emerald-600 hover:underline">
              Sign up
            </Link>
          </h3>

          <div className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
        </div>
      </CardContent>

      <div className="hidden md:block relative h-full min-h-[500px]">
        <Image src="/img1.jpg" alt="shop background image" fill className="object-cover" priority />
      </div>
    </Card>
  );
};

export default SignUpCard;
