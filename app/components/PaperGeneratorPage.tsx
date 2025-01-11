"use client"
import React, { useState } from 'react';
import { FormState } from '../types/paper';
import { useToast } from '@/hooks/use-toast';
import PaperForm from './PaperForm';
import PaperDisplay from './PaperDisplay';

export default function PaperGeneratorPage() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [paperContent, setPaperContent] = useState('');
  const [formData, setFormData] = useState<FormState>({
    topic: '',
    authorName: '',
    citationStyle: 'ieee',
    sections: 5,
    includeGraphs: 'no',
    minimumWords: 2000
  });

  const handleGenerate = async (data: FormState) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          customizations: {
            sections: data.sections,
            includeGraphs: data.includeGraphs === 'yes',
            minimumWords: data.minimumWords
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate paper');
      }

      const result = await response.json();
      setPaperContent(result.fullContent);
      setFormData(data);
      
      toast({
        title: "Success!",
        description: "Your research paper has been generated.",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to generate paper. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Research Paper Generator
            </h1>
            <p className="text-gray-600">
              Generate professional research papers with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <PaperForm 
                onSubmit={handleGenerate}
                isGenerating={isGenerating}
                initialData={formData}
              />
            </div>
            <div className="lg:col-span-8">
              <PaperDisplay 
                content={paperContent}
                isGenerating={isGenerating}
                paperData={formData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
