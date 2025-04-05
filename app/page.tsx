"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import { ArrowRight, Book, FileText, Layout } from 'lucide-react';

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
            Build Research
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
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
              <h1 className="mt-10 text-6xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                   Transforming Research
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">AI-Powered</span>
              </h1>
              
              <motion.p 
                className="mt-8 text-xl text-purple-600 dark:text-gray-800 leading-8"
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
                    bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl
                    dark:shadow-gray-900/50`}
                  whileHover={{ y: -5 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 
                    ${hoveredFeature === index ? 'opacity-5 dark:opacity-10' : ''} 
                    rounded-2xl transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                      {feature.icon}
                    </div>
                    <dt className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </dt>
                    <dd className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </dd>
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
