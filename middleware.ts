// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // Handle only the success path
//   if (request.nextUrl.pathname === '/payment/success') {
//     // Allow the page to load but modify headers to prevent caching
//     const response = NextResponse.next();
//     response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
//     response.headers.set('Pragma', 'no-cache');
//     response.headers.set('Expires', '0');
//     return response;
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: '/payment/success',
// };







import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle only the success path
  if (request.nextUrl.pathname === '/payment/success') {
    // Allow the page to load but modify headers to prevent caching
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/payment/success',
};








