// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";



// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//   useEffect(() => {
//     const savedPaperData = localStorage.getItem('generatedPaper');
//     if (savedPaperData) {
//       setPaperData(JSON.parse(savedPaperData));
//     }
//   }, []);

//   const handleDownload = () => {
//     toast({
//       title: "Download Started",
//       description: "Your paper is being downloaded as a PDF.",
//     });
//   };

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   if (!paperData) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//           <p className="text-gray-600 mb-6">We couldn't find your generated paper. Please try generating a new one.</p>
//           <Link href="/">
//             <Button>
//               Return to Home
//             </Button>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//             <CheckCircle className="w-8 h-8 text-green-500" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Payment Successful!
//           </h1>
//           <p className="text-xl text-gray-600">
//             Your research paper has been generated successfully
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex justify-end space-x-4 mb-6">
//             <Button 
//               onClick={handleDownload}
//               className="bg-blue-600 hover:bg-blue-700"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Download PDF
//             </Button>
//             <Button 
//               onClick={handleShare}
//               variant="outline"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Card className="border border-gray-100">
//             <PaperDisplay
//               content={paperData.fullContent}
//               isGenerating={false}
//               paperData={paperData.formState}
//             />
//           </Card>
//         </div>

//         <div className="text-center">
//           <Link href="/">
//             <Button variant="outline" className="mx-2">
//               Generate Another Paper
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";

// const EmptyState = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//       <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
//       <Link href="/">
//         <Button>
//           Return to Home
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//   useEffect(() => {
//     try {
//       const savedPaperData = localStorage.getItem('generatedPaper');
//       if (savedPaperData) {
//         setPaperData(JSON.parse(savedPaperData));
//       }
//     } catch (error) {
//       console.error('Error retrieving paper data:', error);
//       toast({
//         title: "Error",
//         description: "Failed to load your paper data.",
//         variant: "destructive",
//       });
//     }
//   }, [toast]);

//   const handleDownload = () => {
//     toast({
//       title: "Download Started",
//       description: "Your paper is being downloaded as a PDF.",
//     });
//   };

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   if (!paperData) {
//     return <EmptyState />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//             <CheckCircle className="w-8 h-8 text-green-500" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Payment Successful!
//           </h1>
//           <p className="text-xl text-gray-600">
//             Your research paper has been generated successfully
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex justify-end space-x-4 mb-6">
//             <Button 
//               onClick={handleDownload}
//               className="bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Download PDF
//             </Button>
//             <Button 
//               onClick={handleShare}
//               variant="outline"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Card className="border border-gray-100">
//             <PaperDisplay
//               content={paperData.fullContent}
//               isGenerating={false}
//               paperData={paperData.formState}
//             />
//           </Card>
//         </div>

//         <div className="text-center">
//           <Link href="/">
//             <Button variant="outline" className="mx-2">
//               Generate Another Paper
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";

// const EmptyState = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//       <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
//       <Link href="/">
//         <Button>
//           Return to Home
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//   useEffect(() => {
//     // Load paper data from localStorage
//     try {
//       const savedPaperData = localStorage.getItem('generatedPaper');
//       if (savedPaperData) {
//         setPaperData(JSON.parse(savedPaperData));
//         // Clear the localStorage after successful load
//         localStorage.removeItem('generatedPaper');
//       }
//     } catch (error) {
//       console.error('Error retrieving paper data:', error);
//       toast({
//         title: "Error",
//         description: "Failed to load your paper data.",
//         variant: "destructive",
//       });
//     }
//   }, [toast]);

//   const handleDownload = () => {
//     if (paperData) {
//       // Add your download logic here
//       toast({
//         title: "Download Started",
//         description: "Your paper is being downloaded as a PDF.",
//       });
//     }
//   };

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   if (!paperData) {
//     return <EmptyState />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//             <CheckCircle className="w-8 h-8 text-green-500" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Payment Successful!
//           </h1>
//           <p className="text-xl text-gray-600">
//             Your research paper has been generated successfully
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex justify-end space-x-4 mb-6">
//             <Button 
//               onClick={handleDownload}
//               className="bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Download PDF
//             </Button>
//             <Button 
//               onClick={handleShare}
//               variant="outline"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Card className="border border-gray-100">
//             <PaperDisplay
//               content={paperData.fullContent}
//               isGenerating={false}
//               paperData={paperData.formState}
//             />
//           </Card>
//         </div>

//         <div className="text-center">
//           <Link href="/">
//             <Button variant="outline" className="mx-2">
//               Generate Another Paper
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }















// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";
// import { useRouter } from 'next/navigation';

// const EmptyState = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//       <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
//       <Link href="/">
//         <Button>
//           Return to Home
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//   useEffect(() => {
//     // Hide the /payment/success from URL immediately
//     window.history.replaceState({}, '', '/');
    
//     // Load paper data from localStorage
//     try {
//       const savedPaperData = localStorage.getItem('generatedPaper');
//       if (savedPaperData) {
//         setPaperData(JSON.parse(savedPaperData));
//         // Clear the localStorage after successful load
//         localStorage.removeItem('generatedPaper');
//       } else {
//         // If no paper data, redirect to home after a short delay
//         setTimeout(() => {
//           router.push('/');
//         }, 1500);
//       }
//     } catch (error) {
//       console.error('Error retrieving paper data:', error);
//       toast({
//         title: "Error",
//         description: "Failed to load your paper data.",
//         variant: "destructive",
//       });
//       // Redirect to home after error
//       setTimeout(() => {
//         router.push('/');
//       }, 1500);
//     }
//   }, [toast, router]);

//   const handleDownload = () => {
//     if (paperData) {
//       // Add your download logic here
//       toast({
//         title: "Download Started",
//         description: "Your paper is being downloaded as a PDF.",
//       });
//     }
//   };

//   const handleShare = () => {
//     // Use the root URL since we're hiding the success path
//     const shareUrl = window.location.origin;
//     navigator.clipboard.writeText(shareUrl);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   // Prevent flash of empty state during initial load
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//       </div>
//     );
//   }

//   if (!paperData) {
//     return <EmptyState />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//             <CheckCircle className="w-8 h-8 text-green-500" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Payment Successful!
//           </h1>
//           <p className="text-xl text-gray-600">
//             Your research paper has been generated successfully
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//           <div className="flex justify-end space-x-4 mb-6">
//             <Button 
//               onClick={handleDownload}
//               className="bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               <Download className="w-4 h-4 mr-2" />
//               Download PDF
//             </Button>
//             <Button 
//               onClick={handleShare}
//               variant="outline"
//             >
//               <Share2 className="w-4 h-4 mr-2" />
//               Share
//             </Button>
//           </div>

//           <Card className="border border-gray-100">
//             <PaperDisplay
//               content={paperData.fullContent}
//               isGenerating={false}
//               paperData={paperData.formState}
//             />
//           </Card>
//         </div>

//         <div className="text-center">
//           <Link href="/">
//             <Button variant="outline" className="mx-2">
//               Generate Another Paper
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }














// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";
// import { useRouter } from 'next/navigation';
// import Script from 'next/script';

// // Instant URL replacement script
// const UrlReplacementScript = () => (
//   <Script
//     id="url-replacement"
//     strategy="beforeInteractive"
//   >{`
//     (function() {
//       if (window.location.pathname === '/payment/success') {
//         window.history.replaceState({}, '', '/');
//       }
//     })();
//   `}</Script>
// );

// const EmptyState = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//       <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
//       <Link href="/">
//         <Button>
//           Return to Home
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//   // Handle URL replacement and data loading
//   useEffect(() => {
//     const loadData = async () => {
//       // Ensure URL is replaced immediately
//       if (typeof window !== 'undefined' && window.location.pathname === '/payment/success') {
//         window.history.replaceState({}, '', '/');
//       }
      
//       // Load paper data from localStorage
//       try {
//         const savedPaperData = localStorage.getItem('generatedPaper');
//         if (savedPaperData) {
//           setPaperData(JSON.parse(savedPaperData));
//           // Clear the localStorage after successful load
//           localStorage.removeItem('generatedPaper');
//         } else {
//           // If no paper data, redirect to home after a short delay
//           setTimeout(() => {
//             router.push('/');
//           }, 1500);
//         }
//       } catch (error) {
//         console.error('Error retrieving paper data:', error);
//         toast({
//           title: "Error",
//           description: "Failed to load your paper data.",
//           variant: "destructive",
//         });
//         // Redirect to home after error
//         setTimeout(() => {
//           router.push('/');
//         }, 1500);
//       }
//     };

//     loadData();
//   }, [toast, router]);

//   const handleDownload = () => {
//     if (paperData) {
//       toast({
//         title: "Download Started",
//         description: "Your paper is being downloaded as a PDF.",
//       });
//     }
//   };

//   const handleShare = () => {
//     const shareUrl = window.location.origin;
//     navigator.clipboard.writeText(shareUrl);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   // Prevent flash of empty state during initial load
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <>
//         <UrlReplacementScript />
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//         </div>
//       </>
//     );
//   }

//   if (!paperData) {
//     return (
//       <>
//         <UrlReplacementScript />
//         <EmptyState />
//       </>
//     );
//   }

//   return (
//     <>
//       <UrlReplacementScript />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//               <CheckCircle className="w-8 h-8 text-green-500" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               Payment Successful!
//             </h1>
//             <p className="text-xl text-gray-600">
//               Your research paper has been generated successfully
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//             <div className="flex justify-end space-x-4 mb-6">
//               <Button 
//                 onClick={handleDownload}
//                 className="bg-blue-600 hover:bg-blue-700 text-white"
//               >
//                 <Download className="w-4 h-4 mr-2" />
//                 Download PDF
//               </Button>
//               <Button 
//                 onClick={handleShare}
//                 variant="outline"
//               >
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </Button>
//             </div>

//             <Card className="border border-gray-100">
//               <PaperDisplay
//                 content={paperData.fullContent}
//                 isGenerating={false}
//                 paperData={paperData.formState}
//               />
//             </Card>
//           </div>

//           <div className="text-center">
//             <Link href="/dashboard/generate">
//               <Button variant="outline" className="mx-2">
//                 Generate Another Paper
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



























// "use client"
// import React, { useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { CheckCircle, Download, Share2 } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import PaperDisplay from '@/app/components/PaperDisplay';
// import Link from 'next/link';
// import { GeneratedPaperData } from "@/app/types/paper";
// import { useRouter } from 'next/navigation';
// import Script from 'next/script';

// // Instant URL replacement script
// const UrlReplacementScript = () => (
//   <Script
//     id="url-replacement"
//     strategy="beforeInteractive"
//   >{`
//     (function() {
//       if (window.location.pathname === '/payment/success') {
//         window.history.replaceState({}, '', '/');
//       }
//     })();
//   `}</Script>
// );

// const EmptyState = () => (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//     <div className="max-w-4xl mx-auto text-center">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
//       <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
//       <Link href="/">
//         <Button>
//           Return to Home
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// export default function SuccessPage(): React.ReactElement {
//   const { toast } = useToast();
//   const router = useRouter();
//   const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
//  // Handle URL replacement and data loading
// useEffect(() => {
//   const loadData = async () => {
//     // Ensure URL is replaced immediately
//     if (typeof window !== 'undefined' && window.location.pathname === '/payment/success') {
//       window.history.replaceState({}, '', '/');
//     }
    
//     // Load paper data from localStorage
//     try {
//       const savedPaperData = localStorage.getItem('generatedPaper');
//       if (savedPaperData) {
//         const parsedData = JSON.parse(savedPaperData);
//         setPaperData(parsedData);
//         // Clear the localStorage after successful load
//         localStorage.removeItem('generatedPaper');
        
//         // Trigger automatic download after a short delay
//         setTimeout(() => {
//           handleDownload();
//         }, 1500); // Add delay to ensure content is loaded
        
//       } else {
//         // If no paper data, redirect to home after a short delay
//         setTimeout(() => {
//           router.push('/');
//         }, 1500);
//       }
//     } catch (error) {
//       console.error('Error retrieving paper data:', error);
//       toast({
//         title: "Error",
//         description: "Failed to load your paper data.",
//         variant: "destructive",
//       });
//       // Redirect to home after error
//       setTimeout(() => {
//         router.push('/');
//       }, 1500);
//     }
//   };

//   loadData();
// }, [toast, router]);

//   const handleDownload = () => {
//     if (paperData) {
//       toast({
//         title: "Download Started",
//         description: "Your paper is being downloaded as a PDF.",
//       });
//     }
//   };

//   const handleShare = () => {
//     const shareUrl = window.location.origin;
//     navigator.clipboard.writeText(shareUrl);
//     toast({
//       title: "Link Copied!",
//       description: "Share this link to show your research paper.",
//     });
//   };

//   // Prevent flash of empty state during initial load
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <>
//         <UrlReplacementScript />
//         <div className="min-h-screen flex items-center justify-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//         </div>
//       </>
//     );
//   }

//   if (!paperData) {
//     return (
//       <>
//         <UrlReplacementScript />
//         <EmptyState />
//       </>
//     );
//   }

//   return (
//     <>
//       <UrlReplacementScript />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
//               <CheckCircle className="w-8 h-8 text-green-500" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               Payment Successful!
//             </h1>
//             <p className="text-xl text-gray-600">
//               Your research paper has been generated successfully
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
//             <div className="flex justify-end space-x-4 mb-6">
//               <Button 
//                 onClick={handleDownload}
//                 className="bg-blue-600 hover:bg-blue-700 text-white"
//               >
//                 <Download className="w-4 h-4 mr-2" />
//                 Download PDF
//               </Button>
//               <Button 
//                 onClick={handleShare}
//                 variant="outline"
//               >
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </Button>
//             </div>

//             <Card className="border border-gray-100">
//               <PaperDisplay
//                 content={paperData.fullContent}
//                 isGenerating={false}
//                 paperData={paperData.formState}
//               />
//             </Card>
//           </div>

//           <div className="text-center">
//             <Link href="/dashboard/generate">
//               <Button variant="outline" className="mx-2">
//                 Generate Another Paper
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }












"use client"
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Share2, FileDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { GeneratedPaperData, FormState, PaperDisplayProps } from "@/app/types/paper";
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { ScrollArea } from '@/components/ui/scroll-area';
import { exportToPDF, exportToWord } from '@/app/utils/documentExport';
import PaperHeader from '@/app/components/PaperHeader';
import LoadingPaper from '@/app/components/LoadingPaper';
import PaperSection from '@/app/components/PaperSection';



// Export Buttons Component
interface ExportButtonsProps {
  content: string;
  paperData: FormState;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ content, paperData }) => {
  const handleExport = async (type: 'pdf' | 'docx') => {
    const exportOptions = {
      title: content.split('\n')[0].replace(/^# /, ''),
      authorName: paperData.authorName,
      content: content,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    try {
      if (type === 'pdf') {
        await exportToPDF(exportOptions);
      } else {
        await exportToWord(exportOptions);
      }
    } catch (error) {
      console.error(`Error exporting to ${type}:`, error);
    }
  };

  return (
    <div className="flex space-x-4 mb-6">
      <Button
        onClick={() => handleExport('pdf')}
        className="flex items-center space-x-2"
      >
        <FileDown className="w-4 h-4" />
        <span>Download PDF</span>
      </Button>
      
      <Button
        onClick={() => handleExport('docx')}
        variant="outline"
        className="flex items-center space-x-2"
      >
        <FileDown className="w-4 h-4" />
        <span>Download DOCX</span>
      </Button>
    </div>
  );
};

// Paper Display Component
const PaperDisplay: React.FC<PaperDisplayProps> = ({ 
  content, 
  isGenerating,
  paperData
}) => {
  if (!content && !isGenerating) return null;

  const removeAsterisks = (text: string): string => {
    return text.replace(/\*/g, '');
  };

  const renderContent = () => {
    if (isGenerating) {
      return <LoadingPaper />;
    }

    const sections = content.split('\n\n').filter(Boolean);
    const title = removeAsterisks(sections[0].replace(/^# /, ''));
    const abstract = removeAsterisks(sections[1]);
    const mainContent = sections.slice(2).map(section => removeAsterisks(section));

    return (
      <>
        <PaperHeader 
          title={title} 
          authorName={paperData.authorName}
        />
        
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
          <div className="text-gray-800 leading-relaxed">
            {abstract}
          </div>
        </div>

        <div className="space-y-8">
          {mainContent.map((section, index) => (
            <PaperSection 
              key={index} 
              content={section}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <ScrollArea className="h-[800px] w-full">
      <div className="max-w-4xl mx-auto p-12">
        {content && !isGenerating && (
          <ExportButtons content={content} paperData={paperData} />
        )}
        {renderContent()}
      </div>
    </ScrollArea>
  );
};

// URL Replacement Script
const UrlReplacementScript = () => (
  <Script
    id="url-replacement"
    strategy="beforeInteractive"
  >{`
    (function() {
      if (window.location.pathname === '/payment/success') {
        window.history.replaceState({}, '', '/');
      }
    })();
  `}</Script>
);

// Empty State Component
const EmptyState = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Paper Found</h2>
      <p className="text-gray-600 mb-6">We couldn&apos;t find your generated paper. Please try generating a new one.</p>
      <Link href="/">
        <Button>
          Return to Home
        </Button>
      </Link>
    </div>
  </div>
);

// Main Success Page Component
export default function SuccessPage(): React.ReactElement {
  const { toast } = useToast();
  const router = useRouter();
  const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
  // Handle URL replacement and data loading with auto-download
  useEffect(() => {
    const loadData = async () => {
      if (typeof window !== 'undefined' && window.location.pathname === '/payment/success') {
        window.history.replaceState({}, '', '/');
      }
      
      try {
        const savedPaperData = localStorage.getItem('generatedPaper');
        if (savedPaperData) {
          const parsedData = JSON.parse(savedPaperData);
          setPaperData(parsedData);
          localStorage.removeItem('generatedPaper');
          
          // Auto-download DOCX after a short delay
          setTimeout(() => {
            const exportOptions = {
              title: parsedData.fullContent.split('\n')[0].replace(/^# /, ''),
              authorName: parsedData.formState.authorName,
              content: parsedData.fullContent,
              date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            };
            
            exportToWord(exportOptions).catch(error => {
              console.error('Error auto-downloading document:', error);
              toast({
                title: "Download Error",
                description: "Failed to auto-download your paper. Please use the download button.",
                variant: "destructive",
              });
            });
          }, 1500);
          
        } else {
          setTimeout(() => {
            router.push('/');
          }, 1500);
        }
      } catch (error) {
        console.error('Error retrieving paper data:', error);
        toast({
          title: "Error",
          description: "Failed to load your paper data.",
          variant: "destructive",
        });
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    };

    loadData();
  }, [toast, router]);

  const handleShare = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied!",
      description: "Share this link to show your research paper.",
    });
  };

  // Prevent flash of empty state during initial load
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
        <UrlReplacementScript />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
        </div>
      </>
    );
  }

  if (!paperData) {
    return (
      <>
        <UrlReplacementScript />
        <EmptyState />
      </>
    );
  }

  return (
    <>
      <UrlReplacementScript />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600">
              Your research paper has been generated successfully
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-end space-x-4 mb-6">
              <Button 
                onClick={handleShare}
                variant="outline"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <Card className="border border-gray-100">
              <PaperDisplay
                content={paperData.fullContent}
                isGenerating={false}
                paperData={paperData.formState}
              />
            </Card>
          </div>

          <div className="text-center">
            <Link href="/dashboard/generate">
              <Button variant="outline" className="mx-2">
                Generate Another Paper
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}