// // app/api/payment/webhook/route.ts
// import { NextResponse } from 'next/server';
// import { updatePaymentStatus } from '@/lib/db';

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
    
//     // Verify payment status
//     if (data.payment_status === 'Credit') {
//       await updatePaymentStatus(data.payment_request_id, 'completed');
//       // Generate and store document download links
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Webhook processing failed' },
//       { status: 500 }
//     );
//   }
// }