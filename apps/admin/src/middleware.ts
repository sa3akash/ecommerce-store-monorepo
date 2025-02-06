import { NextRequest, NextResponse } from 'next/server';
import { apiAuthPrefix } from './routes';
// import { cookies } from "next/headers";
// import { getSession } from "@/lib/session";

// 1. Specify protected and public routes

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  // const isLoggedIn = await getSession();

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  console.log({
    path: nextUrl.pathname
  })

  if (isApiAuthRoutes) {
    return undefined;
  }

  // if (isAuthRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_Logged_Redirect, nextUrl));
  //   }
  //   return NextResponse.next();
  // }

  // if (!isLoggedIn && !isPublicRoutes) {
  //   return Response.redirect(new URL("/signin", nextUrl));
  // }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
};
