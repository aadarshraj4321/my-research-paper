// "use client"
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { useState, useEffect } from 'react';
// import { useAuth } from '@/app/lib/hooks/useAuth';

// export default function Header() {
//   const { user, signOut } = useAuth(); // Use the hook to get the user state
//   const [isMounted, setIsMounted] = useState(false);

//   // Ensuring the component is only rendered after client-side rendering
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null; // Return nothing on the server-side
//   }

//   return (
//     <header className="bg-white border-b shadow-sm">
//       <nav className="container mx-auto px-6 flex items-center justify-between h-16">
//         <Link href="/" className="text-2xl font-semibold text-gray-900">
//           ResearchAI
//         </Link>

//         <div className="flex items-center space-x-6">
//           {user ? (
//             <>
//               <Link href="/generate">
//                 <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 transition-all">
//                   Generate Paper
//                 </Button>
//               </Link>
//               <Button
//                 variant="outline"
//                 onClick={signOut}
//                 className="text-gray-700 hover:bg-gray-100 transition-all"
//               >
//                 Sign Out
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 transition-all">
//                   Login
//                 </Button>
//               </Link>
//               <Link href="/signup">
//                 <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
//                   Sign Up
//                 </Button>
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }









// "use client";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function Header() {
//   const [isMounted, setIsMounted] = useState(false);

//   // Ensuring the component is only rendered after client-side rendering
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null; // Return nothing on the server-side
//   }

//   return (
//     <header className="bg-slate-800 border-b shadow-sm">
//       <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//         {/* Logo and Brand Name */}
//         <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//           <Image
//             src="/logo.png" // Path to your logo in the public folder
//             alt="ResearchAI Logo"
//             width={40} // Adjust the width as needed
//             height={40} // Adjust the height as needed
//             className="rounded-lg"
//           />
//           <span className="text-2xl font-semibold text-white">
//             MyResearchPaper
//           </span>
//         </Link>

//         <div className="flex items-center space-x-6">
//           {/* Always display the "Generate Paper" button */}
//           <Link href="/generate">
//             <Button
//               variant="ghost"
//               className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
//             >
//               Generate Paper
//             </Button>
//           </Link>

//           {/* Optionally, you can add other buttons here */}
//           {/* <Link href="/login">
//             <Button
//               variant="ghost"
//               className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
//             >
//               Login
//             </Button>
//           </Link>
//           <Link href="/signup">
//             <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
//               Sign Up
//             </Button>
//           </Link> */}
//         </div>
//       </nav>
//     </header>
//   );
// }












// "use client";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { useState, useEffect } from 'react';
// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from './themeContext';


// export default function Header() {
//   const [isMounted, setIsMounted] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo and Brand Name */}
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
//               MyResearchPaper
//             </span>
//           </Link>

//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//               className="rounded-full"
//             >
//               {theme === 'light' ? (
//                 <Moon className="h-5 w-5 text-gray-700 hover:text-gray-900" />
//               ) : (
//                 <Sun className="h-5 w-5 text-gray-300 hover:text-white" />
//               )}
//             </Button>

//             {/* Generate Paper Button */}
//             {/* <Link href="/dashboard/generate">
//               <Button
//                 className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700
//                           dark:from-indigo-500 dark:to-purple-500 dark:hover:from-indigo-600 dark:hover:to-purple-600
//                           text-white"
//               >
//                 Generate Paper
//               </Button>
//             </Link> */}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

















"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import CheckoutPage from '../CheckoutPage';
// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from './themeContext';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  // const { theme, toggleTheme } = useTheme();

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


            <div>
  <a href="https://pmny.in/Cr7qji0hECrG" className="w-[135px] bg-[#1CA953] text-center font-extrabold py-[11px] text-white text-[12px] inline-block no-underline rounded-[3.229px]">
    Pay Now
  </a>
</div>


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