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





"use client"
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PaperDisplay from '@/app/components/PaperDisplay';
import Link from 'next/link';
import { GeneratedPaperData } from "@/app/types/paper";

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

export default function SuccessPage(): React.ReactElement {
  const { toast } = useToast();
  const [paperData, setPaperData] = useState<GeneratedPaperData | null>(null);
  
  useEffect(() => {
    try {
      const savedPaperData = localStorage.getItem('generatedPaper');
      if (savedPaperData) {
        setPaperData(JSON.parse(savedPaperData));
      }
    } catch (error) {
      console.error('Error retrieving paper data:', error);
      toast({
        title: "Error",
        description: "Failed to load your paper data.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your paper is being downloaded as a PDF.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Share this link to show your research paper.",
    });
  };

  if (!paperData) {
    return <EmptyState />;
  }

  return (
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
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
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
          <Link href="/">
            <Button variant="outline" className="mx-2">
              Generate Another Paper
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}