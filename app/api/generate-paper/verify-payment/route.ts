// app/api/verify-payment/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { txnid, status, mihpayid } = body;

    // Add your payment verification logic here
    // You should verify the payment status with PayU using their API
    // This is just a basic example
    if (status === 'success') {
      return NextResponse.json({ verified: true });
    }

    return NextResponse.json({ verified: false }, { status: 400 });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json({ error: 'Payment verification failed' }, { status: 500 });
  }
}