// import React from 'react';
// import ReactMarkdown from 'react-markdown';

// interface PaperSectionProps {
//   content: string;
//   index: number;
// }

// export const PaperSection: React.FC<PaperSectionProps> = ({ content, index }) => {
//   // Handle image sections
//   if (content.startsWith('![')) {
//     const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
//     if (imgMatch) {
//       return (
//         <figure className="my-8">
//           <img
//             src={`/api/placeholder/800/400`}
//             alt={imgMatch[1]}
//             className="rounded-lg shadow-md mx-auto"
//           />
//           <figcaption className="text-center text-sm text-gray-600 mt-2">
//             {imgMatch[1]}
//           </figcaption>
//         </figure>
//       );
//     }
//   }

//   // Handle headings
//   if (content.startsWith('#')) {
//     const level = (content.match(/^#+/) || [''])[0].length;
//     const text = content.replace(/^#+\s/, '');
//     const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
//     return (
//       <div className="mt-12 mb-6">
//         <HeadingTag className={`font-serif font-bold text-${4-level}xl`}>
//           {text}
//         </HeadingTag>
//       </div>
//     );
//   }

//   // Handle regular text with markdown
//   return (
//     <div className="text-gray-700 leading-relaxed prose">
//       <ReactMarkdown>{content}</ReactMarkdown>
//     </div>
//   );
// };

// export default PaperSection;
















// import React from 'react';
// import ReactMarkdown from 'react-markdown';

// interface PaperSectionProps {
//   content: string;
//   index: number;
// }

// export const PaperSection: React.FC<PaperSectionProps> = ({ content, index }) => {
//   // Handle image sections
//   if (content.startsWith('![')) {
//     const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
//     if (imgMatch) {
//       return (
//         <figure className="my-12">
//           <img
//             src={`/api/placeholder/800/400`}
//             alt={imgMatch[1]}
//             className="rounded-lg shadow-md mx-auto"
//           />
//           <figcaption className="text-center text-sm text-gray-600 mt-4">
//             {imgMatch[1]}
//           </figcaption>
//         </figure>
//       );
//     }
//   }

//   // Handle headings
//   if (content.startsWith('#')) {
//     const level = (content.match(/^#+/) || [''])[0].length;
//     const text = content.replace(/^#+\s/, '');
//     const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
//     return (
//       <div className="mt-12 mb-8">
//         <HeadingTag className={`font-serif font-bold text-${4-level}xl`}>
//           {text}
//         </HeadingTag>
//       </div>
//     );
//   }

//   // Handle regular text with markdown
//   return (
//     <div className="text-gray-700 leading-relaxed prose max-w-none mb-8">
//       <div className="text-justify">
//         <ReactMarkdown>{content}</ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default PaperSection;
















// import React from 'react';
// import ReactMarkdown from 'react-markdown';

// interface PaperSectionProps {
//   content: string;
//   index: number;
// }

// export const PaperSection: React.FC<PaperSectionProps> = ({ content, index }) => {
//   // Handle image sections
//   if (content.startsWith('![')) {
//     const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
//     if (imgMatch) {
//       return (
//         <figure className="my-12">
//           <img
//             src={`/api/placeholder/800/400`}
//             alt={imgMatch[1]}
//             className="rounded-lg shadow-md mx-auto"
//           />
//           <figcaption className="text-center text-sm text-gray-600 mt-4">
//             {imgMatch[1]}
//           </figcaption>
//         </figure>
//       );
//     }
//   }

//   // Handle headings
//   if (content.startsWith('#')) {
//     const level = (content.match(/^#+/) || [''])[0].length;
//     const text = content.replace(/^#+\s/, '');
//     const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
//     return (
//       <div className="mt-12 mb-8">
//         <HeadingTag className={`font-serif font-bold text-${4 - level}xl`}>
//           {text}
//         </HeadingTag>
//       </div>
//     );
//   }

//   // Handle regular text with markdown
//   return (
//     <div className="text-gray-700 leading-relaxed prose max-w-none mb-8">
//       <div className="text-justify">
//         <ReactMarkdown>{content}</ReactMarkdown>
//       </div>
//     </div>
//   );
// };

// export default PaperSection;














// import React from 'react';
// import ReactMarkdown from 'react-markdown';

// interface PaperSectionProps {
//   content: string;
// }

// export const PaperSection: React.FC<PaperSectionProps> = ({ content }) => {
//   // Function to remove asterisks from content
//   const removeAsterisks = (text: string): string => {
//     return text.replace(/\*/g, ''); // Remove all asterisks
//   };

//   // Handle image sections
//   if (content.startsWith('![')) {
//     const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
//     if (imgMatch) {
//       return (
//         <figure className="my-12">
//           <img
//             src={`/api/placeholder/800/400`}
//             alt={imgMatch[1]}
//             className="rounded-lg shadow-md mx-auto"
//           />
//           <figcaption className="text-center text-sm text-gray-600 mt-4">
//             {removeAsterisks(imgMatch[1])} {/* Remove asterisks from image caption */}
//           </figcaption>
//         </figure>
//       );
//     }
//   }

//   // Handle headings
//   if (content.startsWith('#')) {
//     const level = (content.match(/^#+/) || [''])[0].length;
//     const text = removeAsterisks(content.replace(/^#+\s/, '')); // Remove asterisks from heading text
//     const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
//     return (
//       <div className="mt-12 mb-8">
//         <HeadingTag className={`font-serif font-bold text-${4 - level}xl`}>
//           {text}
//         </HeadingTag>
//       </div>
//     );
//   }

//   // Handle regular text with markdown
//   return (
//     <div className="text-gray-700 leading-relaxed prose max-w-none mb-8">
//       <div className="text-justify">
//         <ReactMarkdown>{removeAsterisks(content)}</ReactMarkdown> {/* Remove asterisks from content */}
//       </div>
//     </div>
//   );
// };

// export default PaperSection;















import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface PaperSectionProps {
  content: string;
}

export const PaperSection: React.FC<PaperSectionProps> = ({ content }) => {
  // Function to remove asterisks from content
  const removeAsterisks = (text: string): string => {
    return text.replace(/\*/g, ''); // Remove all asterisks
  };

  // Handle image sections
  if (content.startsWith('![')) {
    const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
    if (imgMatch) {
      return (
        <figure className="my-12">
          <Image
            src={`/api/placeholder/800/400`} // Use dynamic or static image URL here
            alt={imgMatch[1]}
            width={800} // Set the width for the image
            height={400} // Set the height for the image
            className="rounded-lg shadow-md mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-4">
            {removeAsterisks(imgMatch[1])} {/* Remove asterisks from image caption */}
          </figcaption>
        </figure>
      );
    }
  }

  // Handle headings
  if (content.startsWith('#')) {
    const level = (content.match(/^#+/) || [''])[0].length;
    const text = removeAsterisks(content.replace(/^#+\s/, '')); // Remove asterisks from heading text
    const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
    return (
      <div className="mt-12 mb-8">
        <HeadingTag className={`font-serif font-bold text-${4 - level}xl`}>
          {text}
        </HeadingTag>
      </div>
    );
  }

  // Handle regular text with markdown
  return (
    <div className="text-gray-700 leading-relaxed prose max-w-none mb-8">
      <div className="text-justify">
        <ReactMarkdown>{removeAsterisks(content)}</ReactMarkdown> {/* Remove asterisks from content */}
      </div>
    </div>
  );
};

export default PaperSection;
