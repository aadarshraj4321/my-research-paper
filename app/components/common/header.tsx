"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              MyResearchPaper
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Pricing Button */}
            <Link href="/pricing">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Pricing
              </Button>
            </Link>


            {/* Theme Toggle */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 hover:text-gray-900" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300 hover:text-white" />
              )}
            </Button> */}

            {/* Generate Paper Button */}
            {/* <Link href="/dashboard/generate">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
                          dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600
                          text-white"
              >
                Generate Paper
              </Button>
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
