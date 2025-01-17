import Link from 'next/link';

export default function Footer() {
 return (
   <footer className="border-t border-gray-800 bg-gray-900 py-8">
     <div className="container mx-auto px-6 md:px-12 max-w-6xl">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
         {/* Company Info */}
         <div className="space-y-4">
           <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
             MyResearchPaper
           </h3>
           <p className="text-gray-400 text-sm leading-relaxed">
             Revolutionizing research paper generation with artificial intelligence. Empowering researchers to save time and improve quality.
           </p>
         </div>

         {/* Contact Info */}
         <div className="space-y-4">
           <h3 className="font-bold text-xl text-white">Contact</h3>
           <ul className="space-y-3">
             <li>
        
                 {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg> */}
                 <span className='text-white'>aadarshraj4321@gmail.com</span>
               
             </li>
             <li> <span className='text-white'>asunny583@gmail.com</span></li>
             <li className="text-gray-400 flex items-center gap-2 text-sm">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               Prem Nagar, Sabour, Bhagalpur, Bihar, India
             </li>
           </ul>
         </div>

         {/* Quick Links */}
         <div className="space-y-4">
           <h3 className="font-bold text-xl text-white">Quick Links</h3>
           <div className="space-y-3">
             <Link 
               href="/terms" 
               className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm group"
             >
               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
               Terms and Conditions
             </Link>
           </div>
         </div>
       </div>

       {/* Copyright Section */}
       <div className="mt-8 pt-6 border-t border-gray-800 text-center">
         <p className="text-sm text-gray-500">
           © {new Date().getFullYear()} MyResearchPaper. All rights reserved.
         </p>
       </div>
     </div>
   </footer>
 );
}