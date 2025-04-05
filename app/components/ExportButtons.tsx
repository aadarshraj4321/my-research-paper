import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { FormState } from '@/app/types/paper';
import { exportToPDF, exportToWord } from '../utils/documentExport';

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

export default ExportButtons;
