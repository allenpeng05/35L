// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log the request path for debugging
  console.log('Request path:', request.nextUrl.pathname);

  // Check for a token in cookies
  const token = request.cookies.get('token');
  console.log('Token value in cookie:', token);

  // Define protected paths.
  const protectedPaths = ['/', '/profile'];
  const { pathname } = request.nextUrl;

  // If the path is protected and there's no token, redirect to /login.
  if (protectedPaths.includes(pathname) && !token) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    console.log(`Redirecting to /login because token not found for path: ${pathname}`);
    return NextResponse.redirect(url);
  }

  // Otherwise, continue as normal.
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/profile/:path*'],
};

