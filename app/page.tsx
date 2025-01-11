// import Image from "next/image";

// export default function Home() {
//   return (
//     <h1>Hola</h1>
//   );
// }













// // app/page.tsx

// "use client";  // Add this at the top to make this component client-side

// import Link from 'next/link';
// import { Button } from '@/components/ui/button'; // Make sure this is styled correctly

// export default function HomePage() {
//   return (
//     <div style={{ minHeight: 'calc(100vh - 4rem)', background: 'linear-gradient(to bottom, white, #f8fafc)' }}>
//       <div style={{ maxWidth: '48rem', margin: 'auto', padding: '4rem 2rem' }}>
//         <div style={{ maxWidth: '48rem', margin: 'auto', textAlign: 'center' }}>
//           <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#1f2937', letterSpacing: '-0.02em' }}>
//             Generate Research Papers with AI
//           </h1>
//           <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: '1.75rem', color: '#4b5563' }}>
//             Create professional research papers in minutes using advanced AI. Choose your topic,
//             citation style, and let our platform do the heavy lifting.
//           </p>
//           <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
//             <Link href="/generate">
//               <Button
//                 size="lg"
//                 style={{
//                   backgroundColor: '#3b82f6',
//                   color: 'white',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '0.375rem',
//                   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                   transition: 'transform 0.2s ease-in-out',
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//                 onMouseDown={(e) => {
//                   e.currentTarget.style.transform = 'scale(0.95)';
//                 }}
//                 onMouseUp={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//               >
//                 Start Generating
//               </Button>
//             </Link>
//             <Link href="/login">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 style={{
//                   border: '2px solid #d1d5db',
//                   color: '#374151',
//                   padding: '0.75rem 1.5rem',
//                   borderRadius: '0.375rem',
//                   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                   transition: 'transform 0.2s ease-in-out',
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.backgroundColor = '#f3f4f6';
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.backgroundColor = 'transparent';
//                 }}
//                 onMouseDown={(e) => {
//                   e.currentTarget.style.transform = 'scale(0.95)';
//                 }}
//                 onMouseUp={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//               >
//                 Sign In
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               style={{
//                 position: 'relative',
//                 padding: '1.5rem',
//                 backgroundColor: 'white',
//                 borderRadius: '1rem',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                 border: '1px solid #e5e7eb',
//                 transition: 'box-shadow 0.3s ease',
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
//               }}
//             >
//               <dt style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' }}>{feature.title}</dt>
//               <dd style={{ marginTop: '0.5rem', color: '#4b5563' }}>{feature.description}</dd>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const features = [
//   {
//     title: 'Multiple Citation Styles',
//     description: 'Support for IEEE, APA, MLA, and other popular citation formats.'
//   },
//   {
//     title: 'AI-Powered Content',
//     description: 'Leveraging advanced AI to generate high-quality research content.'
//   },
//   {
//     title: 'Custom Formatting',
//     description: 'Choose your preferred format and download as DOCX or PDF.'
//   },
// ];
















// app/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from './components/common/header';
import Footer from './components/common/footer';



export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
            AI-Powered Research Writing Assistant
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-8">
              Create professional research papers in minutes using advanced AI. Choose your topic,
              citation style, and let our platform do the heavy lifting.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/dashboard/generate">
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  Start Generating
                </Button>
              </Link>
              {/* <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:border-gray-400 transition-all transform hover:scale-105 active:scale-95"
                >
                  Sign In
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300"
              >
                <dt className="text-lg font-semibold text-gray-900">{feature.title}</dt>
                <dd className="mt-2 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const features = [
  {
    title: 'Multiple Citation Styles',
    description: 'Support for IEEE, APA, MLA, and other popular citation formats.'
  },
  {
    title: 'AI-Powered Content',
    description: 'Leveraging advanced AI to generate high-quality research content.'
  },
  {
    title: 'Custom Formatting',
    description: 'Choose your preferred format and download as DOCX or PDF.'
  },
];





