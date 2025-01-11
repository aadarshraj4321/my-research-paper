// import React from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';

// interface PaperHeaderProps {
//   title: string;
//   authorName: string;
//   citationStyle: string;
// }

// export const PaperHeader: React.FC<PaperHeaderProps> = ({ title, authorName, citationStyle }) => (
//   <div className="text-center mb-12 space-y-6">
//     <h1 className="text-4xl font-serif font-bold leading-tight tracking-tight">
//       {title}
//     </h1>
//     <p className="text-lg font-medium">{authorName}</p>
//     <div className="flex items-center justify-center space-x-4">
//       <Badge variant="secondary">{citationStyle.toUpperCase()}</Badge>
//       <Separator orientation="vertical" className="h-4" />
//       <span className="text-sm text-muted-foreground">
//         {new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         })}
//       </span>
//     </div>
//   </div>
// );

// export default PaperHeader;















import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface PaperHeaderProps {
  title: string;
  authorName: string;
}

export const PaperHeader: React.FC<PaperHeaderProps> = ({ title, authorName }) => {
  // Function to format author names with superscripts
  const formatAuthors = (authors: string): React.ReactNode => {
    return authors.split(',').map((author, index) => (
      <React.Fragment key={index}>
        {index > 0 && ', '}
        <span>
          {author.trim()}
          <sup>{index + 1}</sup>
        </span>
      </React.Fragment>
    ));
  };

  return (
    <div className="text-center mb-12 space-y-6">
      <h1 className="text-4xl font-serif font-bold leading-tight tracking-tight">
        {title}
      </h1>
      <p className="text-lg font-medium">
        {formatAuthors(authorName)}
      </p>
      <div className="flex items-center justify-center space-x-4">
        {/* <Badge variant="secondary">{citationStyle.toUpperCase()}</Badge> */}
        <Separator orientation="vertical" className="h-4" />
        <span className="text-sm text-muted-foreground">
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>
    </div>
  );
};

export default PaperHeader;