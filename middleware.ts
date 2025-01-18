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
  // Check if it's a POST request from PayU
  if (request.method === 'POST' && request.nextUrl.pathname === '/payment/success') {
    // Let the API route handle the POST request
    return NextResponse.next();
  }
  
  // For GET requests to /payment/success, redirect to home with success parameter
  if (request.method === 'GET' && request.nextUrl.pathname === '/payment/success') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('payment', 'success');
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/payment/success',
};