import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import LoadingPaper from './LoadingPaper';
import PaperHeader from './PaperHeader';
import PaperSection from './PaperSection';
import { PaperDisplayProps } from '../types/paper';
import ExportButtons from './ExportButtons';

export const PaperDisplay: React.FC<PaperDisplayProps> = ({ 
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

export default PaperDisplay;
