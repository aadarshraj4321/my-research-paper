// // app/api/payment/route.ts
// import { NextResponse } from 'next/server';
// import Instamojo from 'instamojo-nodejs';
// import { auth } from '@/lib/auth';

// export async function POST(request: Request) {
//   try {
//     const session = await auth();
//     if (!session) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const { paperId, format } = await request.json();
    
//     // Create payment request
//     const paymentRequest = await Instamojo.createPayment({
//       purpose: `Research Paper Download - ${format.toUpperCase()}`,
//       amount: format === 'pdf' ? '299' : '499',
//       buyer_name: session.user.name,
//       email: session.user.email,
//       redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/callback`,
//       webhook_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/webhook`,
//     });

//     return NextResponse.json({ 
//       paymentUrl: paymentRequest.payment_request.longurl 
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Payment initiation failed' },
//       { status: 500 }
//     );
//   }
// }
