// // app/api/payment/webhook/route.ts
// import { NextResponse } from "next/server";
// import crypto from "crypto";

// const RESEND_API_KEY = 're_U9TKLqCY_F5YVmoRAH78sE3BVvCd6Ny4M'

// // Function to generate 6 digit random number
// function generateCode(): string {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// // Function to send email using Resend's API
// async function sendEmail(to: string, name: string, code: string) {
//   try {
//     const response = await fetch('https://api.resend.com/v1/email/send', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${RESEND_API_KEY}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         from: 'onboarding@resend.dev',
//         to: to,
//         subject: 'Your Verification Code',
//         html: `
//           <h1>Payment Successful!</h1>
//           <p>Dear ${name},</p>
//           <p>Your verification code is: <strong>${code}</strong></p>
//           <p>Use this code to access your content.</p>
//           <br>
//           <p>Best regards,</p>
//           <p>Your Team</p>
//         `
//       })
//     });

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Email sending failed:', error);
//     throw error;
//   }
// }

// export async function POST(req: Request) {
//   try {
//     // Get the raw request body as text
//     const rawBody = await req.text();
//     const formData = new URLSearchParams(rawBody);
    
//     // Extract PayU parameters
//     const status = formData.get("status");
//     const txnid = formData.get("txnid");
//     const amount = formData.get("amount");
//     const productinfo = formData.get("productinfo");
//     const firstname = formData.get("firstname");
//     const email = formData.get("email");
//     const mihpayid = formData.get("mihpayid");
//     const hash = formData.get("hash");
    
//     // Your PayU merchant key and salt from environment variables
//     const MERCHANT_KEY = process.env.PAYU_MERCHANT_KEY;
//     const MERCHANT_SALT = process.env.PAYU_SALT;

//     if (!MERCHANT_KEY || !MERCHANT_SALT) {
//       console.error("Missing PayU credentials");
//       return NextResponse.json(
//         { error: "Server configuration error" },
//         { status: 500 }
//       );
//     }

//     // Verify the hash to ensure request is from PayU
//     const hashString = `${MERCHANT_SALT}|${status}|||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${MERCHANT_KEY}`;
//     const calculatedHash = crypto
//       .createHash("sha512")
//       .update(hashString)
//       .digest("hex");

//     if (hash !== calculatedHash) {
//       console.error("Hash verification failed");
//       return NextResponse.json(
//         { error: "Invalid signature" },
//         { status: 400 }
//       );
//     }

//     // Process the payment status
//     if (status === "success" && email && firstname) {
//       // Generate 6 digit code
//       const verificationCode = generateCode();

//       // Send email using Resend
//       await sendEmail(email, firstname, verificationCode);

//       return NextResponse.json(
//         { 
//           message: "Payment processed successfully and email sent",
//           txnid,
//           mihpayid,
//           verificationCode
//         },
//         { status: 200 }
//       );
//     } else {
//       return NextResponse.json(
//         { 
//           message: "Payment processing failed",
//           status,
//           txnid 
//         },
//         { status: 200 }
//       );
//     }

//   } catch (error) {
//     console.error("Webhook error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }