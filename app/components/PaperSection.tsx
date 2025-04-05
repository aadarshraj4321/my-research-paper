import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface PaperSectionProps {
  content: string;
}

export const PaperSection: React.FC<PaperSectionProps> = ({ content }) => {
  const removeAsterisks = (text: string): string => {
    return text.replace(/\*/g, ''); 
  };

  if (content.startsWith('![')) {
    const imgMatch = content.match(/!\[(.*?)\]\((.*?)\)/);
    if (imgMatch) {
      return (
        <figure className="my-12">
          <Image
            src={`/api/placeholder/800/400`} 
            alt={imgMatch[1]}
            width={800} 
            height={400} 
            className="rounded-lg shadow-md mx-auto"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-4">
            {removeAsterisks(imgMatch[1])} 
          </figcaption>
        </figure>
      );
    }
  }

  if (content.startsWith('#')) {
    const level = (content.match(/^#+/) || [''])[0].length;
    const text = removeAsterisks(content.replace(/^#+\s/, '')); 
    const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
    return (
      <div className="mt-12 mb-8">
        <HeadingTag className={`font-serif font-bold text-${4 - level}xl`}>
          {text}
        </HeadingTag>
      </div>
    );
  }

  return (
    <div className="text-gray-700 leading-relaxed prose max-w-none mb-8">
      <div className="text-justify">
        <ReactMarkdown>{removeAsterisks(content)}</ReactMarkdown> 
      </div>
    </div>
  );
};

export default PaperSection;
