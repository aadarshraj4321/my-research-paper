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









"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensuring the component is only rendered after client-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing on the server-side
  }

  return (
    <header className="bg-slate-800 border-b shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png" // Path to your logo in the public folder
            alt="ResearchAI Logo"
            width={40} // Adjust the width as needed
            height={40} // Adjust the height as needed
            className="rounded-lg"
          />
          <span className="text-2xl font-semibold text-white">
            MyResearchPaper
          </span>
          <span className='text-2xl font-semibold text-white'>400 INR subscription</span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Always display the "Generate Paper" button */}
          <Link href="/generate">
            <Button
              variant="ghost"
              className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
            >
              Generate Paper
            </Button>
          </Link>

          {/* Optionally, you can add other buttons here */}
          {/* <Link href="/login">
            <Button
              variant="ghost"
              className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all">
              Sign Up
            </Button>
          </Link> */}
        </div>
      </nav>
    </header>
  );
}
