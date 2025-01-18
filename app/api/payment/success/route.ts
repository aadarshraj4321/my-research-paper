import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // You can add payment verification logic here if needed
    return NextResponse.redirect(new URL('/payment/success', request.url), {
      status: 303 // Using 303 for POST to GET redirect
    });
  } catch (error) {
    console.error('Payment success handling error:', error);
    return NextResponse.redirect(new URL('/payment/error', request.url));
  }
}