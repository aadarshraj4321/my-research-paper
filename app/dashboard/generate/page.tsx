"use client"
import React, { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { BookOpen, Home, FileText, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormState } from "@/app/types/paper";
import ResearchForm from "@/app/components/ResearchForm";
import PaperDisplay from "@/app/components/PaperDisplay";
import Link from 'next/link';

const Header = () => (
  <header className="bg-white/80 border-b shadow-sm backdrop-blur-md sticky top-0 z-50">
    <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
        <BookOpen className="w-8 h-8 text-blue-600" />
        <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MyResearchPaper
        </span>
      </Link>

      <Link href="/">
        <Button
          variant="ghost"
          className="text-gray-700 hover:bg-gray-100"
        >
          <Home className="w-5 h-5 mr-2" />
          Home
        </Button>
      </Link>
    </nav>
  </header>
);

const LoadingPaper = ({ jokes }: { jokes: { joke: string }[] }) => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const showNextJoke = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * jokes.length);
    } while (randomIndex === currentJokeIndex);
    setCurrentJokeIndex(randomIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-purple-50 animate-pulse">
        <div className="space-y-4 p-6">
          <div className="h-8 bg-white/50 rounded-lg w-3/4 mx-auto"></div>
          <div className="h-4 bg-white/50 rounded-lg w-1/2 mx-auto"></div>
          <div className="space-y-3 mt-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-4 bg-white/50 rounded-lg w-full"></div>
            ))}
          </div>
        </div>
      </div>

      {jokes.length > 0 && (
        <div className="relative z-10 bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center transform transition-transform hover:scale-105 border border-gray-100">
          <p className="text-base text-gray-700 mb-6">
            {jokes[currentJokeIndex].joke}
          </p>
          <Button
            onClick={showNextJoke}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
          >
            Next Joke
          </Button>
        </div>
      )}

      <div className="relative z-10 mt-8 flex flex-col items-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-lg text-gray-600 font-medium">
          Writing Your Research Paper...
        </p>
      </div>
    </div>
  );
};

const EmptyPaperState = () => (
  <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-8 text-center">
    <div className="relative mb-8">
      <FileText className="w-16 h-16 text-gray-300 mb-4" />
      <Sparkles className="w-6 h-6 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      Ready to Generate Your Paper
    </h3>
    <p className="text-base text-gray-600 max-w-md mb-8">
      Fill out the form with your research details, and watch as AI assists in creating your paper with precise formatting and structure.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
      <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
        <Settings className="w-6 h-6 text-blue-500 mb-2" />
        <span className="text-gray-700 text-sm">Customizable Sections</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
        <FileText className="w-6 h-6 text-purple-500 mb-2" />
        <span className="text-gray-700 text-sm">Multiple Citation Styles</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
        <Sparkles className="w-6 h-6 text-emerald-500 mb-2" />
        <span className="text-gray-700 text-sm">AI-Powered Content</span>
      </div>
    </div>
  </div>
);

export default function GeneratePage(): React.ReactElement {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>({
    topic: "",
    authorName: "",
    citationStyle: "ieee",
    sections: 5,
    includeGraphs: "no",
    minimumWords: 2000,
  });
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [fullContent, setFullContent] = useState<string>("");
  const [jokes, setJokes] = useState<{ joke: string }[]>([]);

  React.useEffect(() => {
    fetch('/jokes.json')
      .then((response) => response.json())
      .then((data) => setJokes(data))
      .catch((error) => console.error('Error fetching jokes:', error));
  }, []);

  const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-paper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          customizations: {
            sections: formState.sections,
            includeGraphs: formState.includeGraphs === "yes",
            minimumWords: formState.minimumWords,
          },
        }),
      });

      if (!response.ok) throw new Error("Generation failed");

      const data = await response.json();
      setFullContent(data.fullContent);

      toast({
        title: "Success!",
        description: "Your research paper has been generated.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to generate paper. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (field: keyof FormState, value: string | number): void => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
              My Research Paper 
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Create professional research papers with AI assistance
            </p>
            <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Paper Configuration
                    </h2>
                  </div>
                  <ResearchForm
                    formState={formState}
                    isGenerating={isGenerating}
                    onSubmit={handleGenerate}
                    onInputChange={handleInputChange}
                  />
                </Card>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Card className="bg-white rounded-xl shadow-lg border border-gray-100 min-h-[600px]">
                {isGenerating ? (
                  <LoadingPaper jokes={jokes} />
                ) : fullContent ? (
                  <PaperDisplay
                    content={fullContent}
                    isGenerating={isGenerating}
                    paperData={formState}
                  />
                ) : (
                  <EmptyPaperState />
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//         </div>
//       </div>
//     </div>
//   );
// }
