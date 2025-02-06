import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Input } from '../ui/input';

import { Checkbox } from '../ui/checkbox';

const SignInCard = () => {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-[#1a1f36]">
    <div className="w-full max-w-[480px] mx-auto px-6 py-12 flex flex-col">
      {/* Logo */}
      <div className="mb-12">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/img1.jpg"
            alt="TidalFlow Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            TidalFlow
          </span>
        </Link>
      </div>

      {/* Sign In Form */}
      <div className="flex-1 flex flex-col">
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-semibold text-white">Sign In</h1>
          <p className="text-gray-400">Log In To Your Account To Continue</p>
        </div>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full h-12 text-gray-300 bg-[#252b43] border-[#2e365f] hover:bg-[#2e365f]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 text-gray-300 bg-[#252b43] border-[#2e365f] hover:bg-[#2e365f]"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
            </svg>
            Sign in with Facebook
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2e365f]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1a1f36] px-2 text-gray-400">Or login with email</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-400" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="h-12 bg-[#252b43] border-[#2e365f] text-gray-200 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400" htmlFor="password">
                Password
              </label>
              <Input
                id="password"
                type="password"
                className="h-12 bg-[#252b43] border-[#2e365f] text-gray-200 placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-[#2e365f] data-[state=checked]:bg-indigo-500" />
                <label htmlFor="remember" className="text-sm font-medium leading-none text-gray-400">
                  Remember me
                </label>
              </div>

              <Link href="/forgot-password" className="text-sm text-indigo-400 hover:text-indigo-300">
                Forget password
              </Link>
            </div>

            <Button className="w-full h-12 bg-indigo-500 hover:bg-indigo-600">Sign in</Button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t Have An Account?{" "}
          <Link href="/sign-up" className="text-indigo-400 hover:text-indigo-300">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="hidden lg:block relative bg-[#151929]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzEuMjA3IDY0OS44MDJDOTM1LjQ4NCA2NDkuODAyIDExMDIuMDIgNTA2LjI4NiAxMTAyLjAyIDMyOC41YzAtMTc3Ljc4NC0xNjYuNTM2LTMyMS4zLTM3MC44MTMtMzIxLjNTMzYwLjM5NCAxNTAuNzE2IDM2MC4zOTQgMzI4LjVjMCAxNzcuNzg2IDE2Ni41MzYgMzIxLjMwMiAzNzAuODEzIDMyMS4zMDJ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4wNSIvPiAgICA8ZGVmcz4gICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjYyLjI5JSIgeTE9IjAlIiB4Mj0iMTA4LjQ0JSIgeTI9IjEwMCUiPiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0MTBGRTciIG9mZnNldD0iMCUiLz4gICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTk0NUZGIiBvZmZzZXQ9IjEwMCUiLz4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+ICAgIDwvZGVmcz48L3N2Zz4=')] opacity-40" />
      <div className="relative h-full flex items-center justify-center p-12">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
              <Image
                src="/img1.jpg"
                alt="TidalFlow Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-3xl font-semibold text-white mb-4">Securely connect to your account</h2>
            <p className="text-gray-400">
              We provide you the only icon manager that makes it easy to find your icons.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/img1.jpg"
              alt="Dashboard Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignInCard;
