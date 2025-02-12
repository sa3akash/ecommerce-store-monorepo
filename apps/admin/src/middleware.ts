import { NextRequest, NextResponse } from 'next/server';
import { apiAuthPrefix, authRoutes, DEFAULT_Logged_Redirect, publicRoutes } from './routes';
import { getSession } from '@ecommerce/network/src/sessions/session';
// import { getSession } from "@/lib/session";



export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  // const isLoggedIn = await getSession();

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  // const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  // const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

  const sess = await getSession()
  console.log(sess)

  console.log(nextUrl.pathname)



  if (isApiAuthRoutes) {
    return NextResponse.next();
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
