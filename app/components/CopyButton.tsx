import React, { useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CopyButtonProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const CopyButton: React.FC<CopyButtonProps> = ({ contentRef }) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      const content = contentRef.current;
      if (content) {
        const textToCopy = content.innerText; // Get plain text from the div
        await navigator.clipboard.writeText(textToCopy); // Copy to clipboard
        toast({
          title: "Success!",
          description: "Paper content copied to clipboard.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy content. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600"
    >
      Copy to Clipboard
    </button>
  );
};

export default CopyButton;
