// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['via.placeholder.com'], // Allow images from placeholder.com
//   },
//   async headers() {
//     return [
//       {
//         // API route for PayU POST
//         source: '/api/payment/success',
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: '*',
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET, POST, OPTIONS',
//           },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value: 'Content-Type',
//           },
//         ],
//       },
//       {
//         // Frontend success page
//         source: '/payment/success',
//         headers: [
//           {
//             key: 'Access-Control-Allow-Origin',
//             value: '*',
//           },
//           {
//             key: 'Access-Control-Allow-Methods',
//             value: 'GET',
//           },
//         ],
//       },
//     ];
//   },
//   async rewrites() {
//     return {
//       beforeFiles: [
//         // Handle PayU POST request
//         {
//           source: '/payment/success',
//           destination: '/api/payment/success',
//           has: [
//             {
//               type: 'header',
//               key: 'content-type',
//               value: 'application/x-www-form-urlencoded',
//             },
//           ],
//         },
//       ],
//       afterFiles: [], // Required by type definition
//       fallback: [],   // Required by type definition
//     };
//   },
// };

// export default nextConfig;











import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
  async headers() {
    return [
      {
        source: '/api/payment/success',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      }
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/payment/success',
          destination: '/api/payment/success',
          has: [
            {
              type: 'header',
              key: 'content-type',
              value: 'application/x-www-form-urlencoded',
            },
          ],
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;