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
















// // app/page.tsx
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import Header from './components/common/header';
// import Footer from './components/common/footer';



// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
//       {/* Header */}
//       <Header />

//       <main className="flex-grow">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl leading-tight">
//             AI-Powered Research Writing Assistant
//             </h1>
//             <p className="mt-6 text-lg text-gray-600 leading-8">
//               Create professional research papers in minutes using advanced AI. Choose your topic,
//               citation style, and let our platform do the heavy lifting.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <Link href="/dashboard/generate">
//                 <Button
//                   size="lg"
//                   className="bg-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95"
//                 >
//                   Start Generating
//                 </Button>
//               </Link>

//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="relative p-8 bg-white rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300"
//               >
//                 <dt className="text-lg font-semibold text-gray-900">{feature.title}</dt>
//                 <dd className="mt-2 text-gray-600">{feature.description}</dd>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
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













// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import Header from './components/common/header';
// import Footer from './components/common/footer';
// import { motion } from 'framer-motion';
// import { ArrowRight, Book, FileText, Layout } from 'lucide-react';

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 }
// };

// const features = [
//   {
//     title: 'Multiple Citation Styles',
//     description: 'Support for IEEE, APA, MLA, and other popular citation formats.',
//     icon: <FileText className="w-6 h-6" />,
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     title: 'AI-Powered Content',
//     description: 'Leveraging advanced AI to generate high-quality research content.',
//     icon: <Book className="w-6 h-6" />,
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     title: 'Custom Formatting',
//     description: 'Choose your preferred format and download as DOCX or PDF.',
//     icon: <Layout className="w-6 h-6" />,
//     color: 'from-green-500 to-emerald-500'
//   },
// ];

// export default function HomePage() {
//   const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
//       <Header />

//       <main className="flex-grow">
//         <div className="container mx-auto px-4 py-16">
//           {/* Hero Section */}
//           <motion.div 
//             className="max-w-4xl mx-auto text-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-6xl font-extrabold tracking-tight">
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//                 AI-Powered Research
//               </span>
//               <br />
//               Writing Assistant
//             </h1>
            
//             <motion.p 
//               className="mt-8 text-xl text-gray-600 leading-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               Create professional research papers in minutes using advanced AI. 
//               Choose your topic, citation style, and let our platform do the heavy lifting.
//             </motion.p>

//             <motion.div 
//               className="mt-12"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               <Link href="/dashboard/generate">
//                 <Button
//                   size="lg"
//                   className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
//                 >
//                   <span className="relative flex items-center gap-2 text-white text-lg">
//                     Start Generating
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Features Section */}
//           <motion.div 
//             className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={{
//               hidden: { opacity: 0 },
//               show: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.2
//                 }
//               }
//             }}
//             initial="hidden"
//             animate="show"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative p-8 rounded-2xl transition-all duration-300 cursor-pointer
//                   ${hoveredFeature === index ? 'scale-105' : 'scale-100'}
//                   bg-white shadow-lg hover:shadow-2xl`}
//                 variants={fadeIn}
//                 onMouseEnter={() => setHoveredFeature(index)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 
//                   ${hoveredFeature === index ? 'opacity-5' : ''} rounded-2xl transition-opacity duration-300`}
//                 />
                
//                 <div className="relative z-10">
//                   <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
//                     {feature.icon}
//                   </div>
//                   <dt className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</dt>
//                   <dd className="text-gray-600 leading-relaxed">{feature.description}</dd>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }














"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import { ArrowRight, Book, FileText, Layout } from 'lucide-react';

// Interactive Button Component
const AnimatedButton = () => {
  return (
    <Link href="/dashboard/generate">
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="group relative inline-flex items-center px-8 py-6 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></span>
          <span className="relative flex items-center gap-3 text-white text-lg font-semibold">
            Start Generating
            <motion.span
              animate={{
                x: [0, 5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.span>
          </span>
        </Button>
        <div className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </motion.div>
    </Link>
  );
};







// Mouse Background Effect Component
// const MouseBackground = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('mouse-canvas') as HTMLCanvasElement;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     const setSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     setSize();
//     window.addEventListener('resize', setSize);

//     // Mouse position
//     let mouse = { x: 0, y: 0 };
//     let circles: Array<{ x: number; y: number; radius: number; opacity: number }> = [];

//     // Update mouse position
//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
      
//       // Add new circle
//       circles.push({
//         x: mouse.x,
//         y: mouse.y,
//         radius: 0,
//         opacity: 0.5
//       });
      
//       // Limit number of circles
//       if (circles.length > 3) {
//         circles.shift();
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       circles.forEach((circle, i) => {
//         circle.radius += 2;
//         circle.opacity -= 0.01;
        
//         if (circle.opacity > 0) {
//           ctx.beginPath();
//           ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(99, 102, 241, ${circle.opacity})`;
//           ctx.fill();
//         }
//       });

//       circles = circles.filter(circle => circle.opacity > 0);
//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener('resize', setSize);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       id="mouse-canvas"
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{ opacity: 0.6 }}
//     />
//   );
// };






const features = [
  {
    title: 'Multiple Citation Styles',
    description: 'Support for IEEE, APA, MLA, and other popular citation formats.',
    icon: <FileText className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI-Powered Content',
    description: 'Leveraging advanced AI to generate high-quality research content.',
    icon: <Book className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Custom Formatting',
    description: 'Choose your preferred format and download as DOCX or PDF.',
    icon: <Layout className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  },
];

export default function HomePage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* <MouseBackground /> */}
      <ParticleBackground />
      <div className="relative z-10">
        <Header />

        <main className="flex-grow">
          <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  AI-Powered Research
                </span>
                <br />
                <span className='text-white'>My Research Paper</span>
              </h1>
              
              <motion.p 
                className="mt-8 text-xl text-gray-400 leading-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Create professional research papers in minutes using advanced AI. 
                Choose your topic, citation style, and let our platform do the heavy lifting.
              </motion.p>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <AnimatedButton />
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div 
              className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`relative p-8 rounded-2xl transition-all duration-300 cursor-pointer
                    ${hoveredFeature === index ? 'scale-105' : 'scale-100'}
                    bg-white shadow-lg hover:shadow-2xl`}
                  whileHover={{ y: -5 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 
                    ${hoveredFeature === index ? 'opacity-5' : ''} rounded-2xl transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                      {feature.icon}
                    </div>
                    <dt className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</dt>
                    <dd className="text-gray-600 leading-relaxed">{feature.description}</dd>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}




































