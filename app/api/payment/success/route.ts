import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
   
    return NextResponse.redirect(new URL('/payment/success', request.url), {
      status: 303 
    });
  } catch (error) {
    console.error('Payment success handling error:', error);
    return NextResponse.redirect(new URL('/payment/error', request.url));
  }
}






