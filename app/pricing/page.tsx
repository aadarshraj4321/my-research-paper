import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Check, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <Card className="w-full max-w-md relative transform transition-all hover:scale-105 duration-300 hover:shadow-2xl border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-xl transition-all duration-500 group-hover:opacity-20" />
        
        <CardHeader className="text-center space-y-6 pb-8 relative">
          <div className="mx-auto bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 w-16 h-16 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Create Research Paper
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">₹49</p>
              <span className="text-gray-500 dark:text-gray-400">/paper</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 relative">
          <ul className="space-y-4">
            {[
              'Professional Research Format',
              'In-depth Analysis',
              'Citation Support',
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/10 dark:to-purple-400/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="relative">
          <Link href="/dashboard/generate" className="w-full">
            <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
                             dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600
                             text-white py-6 group relative overflow-hidden">
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingPage;