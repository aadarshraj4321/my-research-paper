import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Download, Share2 } from 'lucide-react';
import PaperDisplay from '@/app/components/PaperDisplay';
import type { GeneratedPaperData } from "@/app/types/paper";

interface SuccessContentProps {
  paperData: GeneratedPaperData;
  onDownload: () => void;
  onShare: () => void;
}

export const SuccessContent: React.FC<SuccessContentProps> = ({
  paperData,
  onDownload,
  onShare
}) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your research paper has been generated successfully
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-end space-x-4 mb-6">
          <Button 
            onClick={onDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button 
            onClick={onShare}
            variant="outline"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <Card className="border border-gray-100 dark:border-gray-700">
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
  );
};

export default SuccessContent;