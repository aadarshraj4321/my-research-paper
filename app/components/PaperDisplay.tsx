// import React from 'react';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import LoadingPaper from './LoadingPaper';
// import PaperHeader from './PaperHeader';
// import PaperSection from './PaperSection';
// import { PaperDisplayProps } from '../types/paper';

// export const PaperDisplay: React.FC<PaperDisplayProps> = ({ 
//   content, 
//   citationStyle, 
//   authorName, 
//   isGenerating 
// }) => {
//   if (!content && !isGenerating) return null;

//   const renderContent = () => {
//     if (isGenerating) {
//       return <LoadingPaper />;
//     }

//     const sections = content.split('\n\n').filter(Boolean);
//     const title = sections[0].replace(/^# /, '');
//     const abstract = sections[1];
//     const mainContent = sections.slice(2);

//     return (
//       <>
//         <PaperHeader title={title} authorName={authorName} citationStyle={citationStyle} />
        
//         <div className="mb-12">
//           <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
//           <div className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg">
//             {abstract}
//           </div>
//         </div>

//         <div className="space-y-8">
//           {mainContent.map((section, index) => (
//             <PaperSection key={index} content={section} index={index} />
//           ))}
//         </div>

//         <div className="mt-16 pt-8 border-t">
//           <h2 className="text-2xl font-serif font-bold mb-6">References</h2>
//           <div className="space-y-4 text-sm text-gray-700">
//             {/* References will be included in the content */}
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <ScrollArea className="h-[800px] w-full rounded-lg border bg-white shadow-sm">
//       <div className="max-w-4xl mx-auto p-12">
//         {renderContent()}
//       </div>
//     </ScrollArea>
//   );
// };

// export default PaperDisplay;










import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import LoadingPaper from './LoadingPaper';
import PaperHeader from './PaperHeader';
import PaperSection from './PaperSection';
import { PaperDisplayProps } from '../types/paper';

export const PaperDisplay: React.FC<PaperDisplayProps> = ({ 
  content, 
  // citationStyle, 
  authorName, 
  isGenerating 
}) => {
  if (!content && !isGenerating) return null;

  // Function to remove asterisks from content
  const removeAsterisks = (text: string): string => {
    return text.replace(/\*/g, ''); // Remove all asterisks
  };

  const renderContent = () => {
    if (isGenerating) {
      return <LoadingPaper />;
    }

    const sections = content.split('\n\n').filter(Boolean);
    const title = removeAsterisks(sections[0].replace(/^# /, '')); // Remove asterisks from title
    //const abstract = removeAsterisks(sections[1]); // Remove asterisks from abstract
    const mainContent = sections.slice(2).map(section => removeAsterisks(section)); // Remove asterisks from main content

    return (
      <>
        <PaperHeader title={title} authorName={authorName} />
        
        {/* Render Abstract section only once */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
 
        </div>

        {/* Render main content (excluding the abstract) */}
        <div className="space-y-8">
          {mainContent.map((section, index) => (
            <PaperSection key={index} content={section} />
          ))}
        </div>
      </>
    );
  };

  return (
    <ScrollArea className="h-[800px] w-full">
      <div className="max-w-4xl mx-auto p-12">
        {renderContent()}
      </div>
    </ScrollArea>
  );
};

export default PaperDisplay;