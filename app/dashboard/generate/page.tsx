// // app/(dashboard)/generate/page.tsx
// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from "@/hooks/use-toast"


// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [paperData, setPaperData] = useState({
//     topic: '',
//     citationStyle: 'ieee',
//     customizations: {
//       sections: 5,
//       includeGraphs: false,
//       minimumWords: 2000,
//     },
//   });
//   const [preview, setPreview] = useState('');

//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(paperData),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and download your paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleDownload = async (format: 'pdf' | 'docx') => {
//     try {
//       const response = await fetch('/api/payment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           paperId: paperData.topic,
//           format,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Payment initiation failed');
//       }

//       const { paymentUrl } = await response.json();
//       window.location.href = paymentUrl;
//     } catch (error) {
//       toast({
//         title: 'Payment Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Card>
//         <CardHeader>
//           <CardTitle>Generate Research Paper</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleGenerate} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Research Topic
//               </label>
//               <Input
//                 value={paperData.topic}
//                 onChange={(e) => setPaperData(prev => ({
//                   ...prev,
//                   topic: e.target.value
//                 }))}
//                 placeholder="Enter your research topic"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Citation Style
//               </label>
//               <Select
//                 value={paperData.citationStyle}
//                 onValueChange={(value) => setPaperData(prev => ({
//                   ...prev,
//                   citationStyle: value
//                 }))}
//               >
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {citationStyles.map((style) => (
//                     <SelectItem key={style.value} value={style.value}>
//                       {style.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Number of Sections
//               </label>
//               <Slider
//                 value={[paperData.customizations.sections]}
//                 onValueChange={(value) => setPaperData(prev => ({
//                   ...prev,
//                   customizations: {
//                     ...prev.customizations,
//                     sections: value[0]
//                   }
//                 }))}
//                 min={3}
//                 max={10}
//                 step={1}
//               />
//               <span className="text-sm text-gray-500 mt-1">
//                 {paperData.customizations.sections} sections
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="text-sm font-medium">
//                 Include Graphs & Visualizations
//               </label>
//               <Switch
//                 checked={paperData.customizations.includeGraphs}
//                 onCheckedChange={(checked) => setPaperData(prev => ({
//                   ...prev,
//                   customizations: {
//                     ...prev.customizations,
//                     includeGraphs: checked
//                   }
//                 }))}
//               />
//             </div>

//             <Button
//               type="submit"
//               disabled={isGenerating}
//               className="w-full"
//             >
//               {isGenerating ? 'Generating...' : 'Generate Paper'}
//             </Button>
//           </form>

//           {preview && (
//             <div className="mt-8">
//               <h3 className="text-lg font-medium mb-4">Preview</h3>
//               <div className="prose max-w-none">
//                 {preview}
//               </div>
//               <div className="mt-6 flex gap-4">
//                 <Button
//                   onClick={() => handleDownload('pdf')}
//                   className="flex-1"
//                 >
//                   Download PDF (₹299)
//                 </Button>
//                 <Button
//                   onClick={() => handleDownload('docx')}
//                   className="flex-1"
//                 >
//                   Download DOCX (₹499)
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
















// // app/(dashboard)/generate/page.tsx
// 'use client';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/hooks/use-toast';
// import { useRouter } from 'next/navigation';

// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
  
//   const [topic, setTopic] = useState('');
//   const [citationStyle, setCitationStyle] = useState('ieee');
//   const [sections, setSections] = useState(5);
//   const [includeGraphs, setIncludeGraphs] = useState(false);
//   const [minimumWords, setMinimumWords] = useState(2000);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [preview, setPreview] = useState('');
//   const [fullContent, setFullContent] = useState('');

//   // Form submission handler
//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           topic,
//           citationStyle,
//           customizations: { sections, includeGraphs, minimumWords },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       setFullContent(data.fullContent);
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and view the full paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Generate Research Paper</h1>
//         <form onSubmit={handleGenerate} className="space-y-6">
//           {/* Topic Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Research Topic</label>
//             <Input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter your research topic"
//               required
//             />
//           </div>

//           {/* Citation Style */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Citation Style</label>
//             <Select value={citationStyle} onValueChange={setCitationStyle}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {citationStyles.map((style) => (
//                   <SelectItem key={style.value} value={style.value}>
//                     {style.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Sections Slider */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Sections</label>
//             <Slider
//               value={[sections]}
//               onValueChange={(value) => setSections(value[0])}
//               min={3}
//               max={10}
//               step={1}
//             />
//             <p className="text-sm text-gray-500">{sections} sections</p>
//           </div>

//           {/* Include Graphs Toggle */}
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-medium">Include Graphs & Visualizations</label>
//             <Switch
//               checked={includeGraphs}
//               onCheckedChange={(checked) => setIncludeGraphs(checked)}
//             />
//           </div>

//           {/* Minimum Words Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Minimum Words</label>
//             <Input
//               type="number"
//               value={minimumWords}
//               onChange={(e) => setMinimumWords(Number(e.target.value))}
//               min={1000}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isGenerating} className="w-full">
//             {isGenerating ? 'Generating...' : 'Generate Paper'}
//           </Button>
//         </form>

//         {/* Preview and Full Paper */}
//         {preview && (
//           <div className="mt-8">
//             <h2 className="text-xl font-medium mb-4">Preview</h2>
//             <div className="prose max-w-none">{preview}</div>

//             <h3 className="text-lg font-medium mt-6">Full Paper</h3>
//             <div className="prose max-w-none">{fullContent}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





























// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/hooks/use-toast';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';  // Import Next.js Image component

// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
  
//   const [topic, setTopic] = useState('');
//   const [citationStyle, setCitationStyle] = useState('ieee');
//   const [sections, setSections] = useState(5);
//   const [includeGraphs, setIncludeGraphs] = useState('no');
//   const [minimumWords, setMinimumWords] = useState(2000);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [preview, setPreview] = useState('');
//   const [fullContent, setFullContent] = useState('');
//   const [graphUrl, setGraphUrl] = useState<string | undefined>(undefined);  // State for graph URL

//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           topic,
//           citationStyle,
//           customizations: { sections, includeGraphs, minimumWords },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       setFullContent(data.fullContent);
//       setGraphUrl(data.graphUrl);  // Set the graph URL if it exists
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and view the full paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Generate Research Paper</h1>
//         <form onSubmit={handleGenerate} className="space-y-6">
//           {/* Topic Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Research Topic</label>
//             <Input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter your research topic"
//               required
//             />
//           </div>

//           {/* Citation Style */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Citation Style</label>
//             <Select value={citationStyle} onValueChange={setCitationStyle}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {citationStyles.map((style) => (
//                   <SelectItem key={style.value} value={style.value}>
//                     {style.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Sections Slider */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Sections</label>
//             <Slider
//               value={[sections]}
//               onValueChange={(value) => setSections(value[0])}
//               min={3}
//               max={10}
//               step={1}
//             />
//             <p className="text-sm text-gray-500">{sections} sections</p>
//           </div>

//           {/* Include Graphs Toggle */}
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-medium">Include Graphs & Visualizations</label>
//             <Select value={includeGraphs} onValueChange={setIncludeGraphs}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="yes">Yes</SelectItem>
//                 <SelectItem value="no">No</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Minimum Words Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Minimum Words</label>
//             <Input
//               type="number"
//               value={minimumWords}
//               onChange={(e) => setMinimumWords(Number(e.target.value))}
//               min={1000}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isGenerating} className="w-full">
//             {isGenerating ? 'Generating...' : 'Generate Paper'}
//           </Button>
//         </form>

//         {/* Preview and Full Paper */}
//         {preview && (
//           <div className="mt-8">
//             <h2 className="text-xl font-medium mb-4">Preview</h2>
//             <div className="prose max-w-none">{preview}</div>

//             <h3 className="text-lg font-medium mt-6">Full Paper</h3>
//             <div className="prose max-w-none">{fullContent}</div>

//             {/* Display Graph if Available */}
//             {graphUrl && (
//               <div className="mt-8">
//                 <h3 className="text-lg font-medium mb-4">Graph/Visualization</h3>
//                 <Image src={graphUrl} alt="Generated Graph" width={500} height={300} />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }































// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/hooks/use-toast';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';  // Import Next.js Image component

// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
  
//   const [topic, setTopic] = useState('');
//   const [citationStyle, setCitationStyle] = useState('ieee');
//   const [sections, setSections] = useState(5);
//   const [includeGraphs, setIncludeGraphs] = useState('no');
//   const [minimumWords, setMinimumWords] = useState(2000);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [preview, setPreview] = useState('');
//   const [fullContent, setFullContent] = useState('');
//   const [graphUrl, setGraphUrl] = useState<string | undefined>(undefined);  // State for graph URL

//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           topic,
//           citationStyle,
//           customizations: { sections, includeGraphs, minimumWords },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       setFullContent(data.fullContent);
//       setGraphUrl(data.graphUrl);  // Set the graph URL if it exists
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and view the full paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Generate Research Paper</h1>
//         <form onSubmit={handleGenerate} className="space-y-6">
//           {/* Topic Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Research Topic</label>
//             <Input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter your research topic"
//               required
//             />
//           </div>

//           {/* Citation Style */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Citation Style</label>
//             <Select value={citationStyle} onValueChange={setCitationStyle}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {citationStyles.map((style) => (
//                   <SelectItem key={style.value} value={style.value}>
//                     {style.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Sections Slider */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Sections</label>
//             <Slider
//               value={[sections]}
//               onValueChange={(value) => setSections(value[0])}
//               min={3}
//               max={10}
//               step={1}
//             />
//             <p className="text-sm text-gray-500">{sections} sections</p>
//           </div>

//           {/* Include Graphs Toggle */}
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-medium">Include Graphs & Visualizations</label>
//             <Select value={includeGraphs} onValueChange={setIncludeGraphs}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="yes">Yes</SelectItem>
//                 <SelectItem value="no">No</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Minimum Words Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Minimum Words</label>
//             <Input
//               type="number"
//               value={minimumWords}
//               onChange={(e) => setMinimumWords(Number(e.target.value))}
//               min={1000}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isGenerating} className="w-full">
//             {isGenerating ? 'Generating...' : 'Generate Paper'}
//           </Button>
//         </form>

//         {/* Preview and Full Paper */}
//         {preview && (
//           <div className="mt-8">
//             <h2 className="text-xl font-medium mb-4">Preview</h2>
//             <div className="prose max-w-none">{preview}</div>

//             <h3 className="text-lg font-medium mt-6">Full Paper</h3>
//             <div className="prose max-w-none">{fullContent}</div>

//             {/* Display Graph if Available */}
//             {graphUrl && (
//               <div className="mt-8">
//                 <h3 className="text-lg font-medium mb-4">Graph/Visualization</h3>
//                 <Image src={graphUrl} alt="Generated Graph" width={500} height={300} />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


























// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/hooks/use-toast';
// import { useRouter } from 'next/navigation';
// import ReactMarkdown from 'react-markdown';  // Use ReactMarkdown to render markdown content

// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
  
//   const [topic, setTopic] = useState('');
//   const [citationStyle, setCitationStyle] = useState('ieee');
//   const [sections, setSections] = useState(5);
//   const [includeGraphs, setIncludeGraphs] = useState('no');
//   const [minimumWords, setMinimumWords] = useState(2000);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [preview, setPreview] = useState('');
//   const [fullContent, setFullContent] = useState('');
//   const [graphUrl, setGraphUrl] = useState<string | undefined>(undefined);  // State for graph URL

//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           topic,
//           citationStyle,
//           customizations: { sections, includeGraphs, minimumWords },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       setFullContent(data.fullContent);
//       setGraphUrl(data.graphUrl);  // Set the graph URL if it exists
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and view the full paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto">
//         <h1 className="text-2xl font-bold mb-4">Generate Research Paper</h1>
//         <form onSubmit={handleGenerate} className="space-y-6">
//           {/* Topic Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Research Topic</label>
//             <Input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter your research topic"
//               required
//             />
//           </div>

//           {/* Citation Style */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Citation Style</label>
//             <Select value={citationStyle} onValueChange={setCitationStyle}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {citationStyles.map((style) => (
//                   <SelectItem key={style.value} value={style.value}>
//                     {style.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Sections Slider */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Sections</label>
//             <Slider
//               value={[sections]}
//               onValueChange={(value) => setSections(value[0])}
//               min={3}
//               max={10}
//               step={1}
//             />
//             <p className="text-sm text-gray-500">{sections} sections</p>
//           </div>

//           {/* Include Graphs Toggle */}
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-medium">Include Graphs & Visualizations</label>
//             <Select value={includeGraphs} onValueChange={setIncludeGraphs}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="yes">Yes</SelectItem>
//                 <SelectItem value="no">No</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Minimum Words Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Minimum Words</label>
//             <Input
//               type="number"
//               value={minimumWords}
//               onChange={(e) => setMinimumWords(Number(e.target.value))}
//               min={1000}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isGenerating} className="w-full">
//             {isGenerating ? 'Generating...' : 'Generate Paper'}
//           </Button>
//         </form>

//         {/* Preview and Full Paper */}
//         {preview && (
//           <div className="mt-8">
//             <h2 className="text-xl font-medium mb-4">Preview</h2>
//             <div className="prose max-w-none">
//               <ReactMarkdown>{preview}</ReactMarkdown>
//             </div>

//             <h3 className="text-lg font-medium mt-6">Full Paper</h3>
//             <div className="prose max-w-none">
//               <ReactMarkdown>{fullContent}</ReactMarkdown>
//             </div>

//             {/* Display Graph if Available */}
//             {graphUrl && (
//               <div className="mt-8">
//                 <h3 className="text-lg font-medium mb-4">Graph/Visualization</h3>
//                 <img src={graphUrl} alt="Generated Graph" width={500} height={300} />
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }















// "use client"
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Slider } from '@/components/ui/slider';
// import { Switch } from '@/components/ui/switch';
// import { useToast } from '@/hooks/use-toast';
// import { useRouter } from 'next/navigation';

// const citationStyles = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// export default function GeneratePage() {
//   const router = useRouter();
//   const { toast } = useToast();
  
//   const [topic, setTopic] = useState('');
//   const [citationStyle, setCitationStyle] = useState('ieee');
//   const [sections, setSections] = useState(5);
//   const [includeGraphs, setIncludeGraphs] = useState('no');
//   const [minimumWords, setMinimumWords] = useState(2000);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [preview, setPreview] = useState('');
//   const [fullContent, setFullContent] = useState('');

//   const handleGenerate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           topic,
//           citationStyle,
//           customizations: { sections, includeGraphs, minimumWords },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setPreview(data.preview);
//       setFullContent(data.fullContent);
//       toast({
//         title: 'Paper Generated Successfully',
//         description: 'You can now preview and view the full paper.',
//       });
//     } catch (error) {
//       toast({
//         title: 'Generation Failed',
//         description: 'Please try again later.',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-8">
//       <div className="max-w-xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">Generate Research Paper</h1>
//         <form onSubmit={handleGenerate} className="space-y-6">
//           {/* Topic Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Research Topic</label>
//             <Input
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               placeholder="Enter your research topic"
//               required
//             />
//           </div>

//           {/* Citation Style */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Citation Style</label>
//             <Select value={citationStyle} onValueChange={setCitationStyle}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {citationStyles.map((style) => (
//                   <SelectItem key={style.value} value={style.value}>
//                     {style.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Sections Dropdown */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Number of Sections</label>
//             <Select value={sections.toString()} onValueChange={(value) => setSections(Number(value))}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 {[...Array(10).keys()].map(i => (
//                   <SelectItem key={i} value={(i + 1).toString()}>
//                     {i + 1}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Include Graphs Toggle */}
//           <div className="flex items-center justify-between">
//             <label className="text-sm font-medium">Include Graphs & Visualizations</label>
//             <Select value={includeGraphs} onValueChange={setIncludeGraphs}>
//               <SelectTrigger>
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="yes">Yes</SelectItem>
//                 <SelectItem value="no">No</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Minimum Words Input */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Minimum Words</label>
//             <Input
//               type="number"
//               value={minimumWords}
//               onChange={(e) => setMinimumWords(Number(e.target.value))}
//               min={1000}
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" disabled={isGenerating} className="w-full">
//             {isGenerating ? 'Generating...' : 'Generate Paper'}
//           </Button>
//         </form>

//         {/* Preview and Full Paper */}
//         {preview && (
//           <div className="mt-8">
//             <h2 className="text-2xl font-semibold mb-4">Preview</h2>
//             <div className="prose max-w-none">{preview}</div>

//             <h3 className="text-lg font-semibold mt-6">Full Paper</h3>
//             <div className="prose max-w-none">{fullContent}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















































// "use client"
// import React, { useState, FormEvent, ChangeEvent } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { useToast } from "@/hooks/use-toast"
// import { Card, CardContent } from '@/components/ui/card';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { FileText } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';

// // Types
// interface CitationStyle {
//   value: string;
//   label: string;
// }

// interface PaperDisplayProps {
//   content: string;
//   citationStyle: string;
//   authorName: string;
//   isGenerating: boolean;
// }

// interface MainContentProps {
//   paragraph: string;
//   pIndex: number;
// }

// const citationStyles: CitationStyle[] = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];

// const ResearchPaperDisplay: React.FC<PaperDisplayProps> = ({ content, citationStyle, authorName, isGenerating }) => {
//   if (!content && !isGenerating) return null;

//   const formatDate = (): string => {
//     return new Date().toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const renderContent = () => {
//     if (isGenerating) {
//       return (
//         <div className="animate-pulse space-y-4">
//           <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
//           <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
//           <div className="space-y-3 mt-8">
//             {[...Array(10)].map((_, i) => (
//               <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
//             ))}
//           </div>
//         </div>
//       );
//     }

//     const sections = content.split('\n\n').filter(Boolean);
//     const title = sections[0].replace(/^# /, '');
//     const abstract = sections[1];
//     const mainContent = sections.slice(2);

//     return (
//       <>
//         {/* Paper Header */}
//         <div className="text-center mb-12 space-y-6">
//           <h1 className="text-4xl font-serif font-bold leading-tight tracking-tight">
//             {title}
//           </h1>
//           <p className="text-lg font-medium">{authorName}</p>
//           <div className="flex items-center justify-center space-x-4">
//             <Badge variant="secondary">{citationStyle.toUpperCase()}</Badge>
//             <Separator orientation="vertical" className="h-4" />
//             <span className="text-sm text-muted-foreground">
//               {formatDate()}
//             </span>
//           </div>
//         </div>

//         {/* Abstract */}
//         <div className="mb-12">
//           <h2 className="text-2xl font-serif font-bold mb-4">Abstract</h2>
//           <div className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg">
//             {abstract}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="space-y-8">
//           {mainContent.map((section: string, index: number) => {
//             if (section.startsWith('![')) {
//               // Handle images
//               const imgMatch = section.match(/!\[(.*?)\]\((.*?)\)/);
//               if (imgMatch) {
//                 return (
//                   <figure key={`img-${index}`} className="my-8">
//                     <img
//                       src={`/api/placeholder/800/400`}
//                       alt={imgMatch[1]}
//                       className="rounded-lg shadow-md mx-auto"
//                     />
//                     <figcaption className="text-center text-sm text-gray-600 mt-2">
//                       {imgMatch[1]}
//                     </figcaption>
//                   </figure>
//                 );
//               }
//             }

//             if (section.startsWith('#')) {
//               const level = (section.match(/^#+/) || [''])[0].length;
//               const text = section.replace(/^#+\s/, '');
//               const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
//               return (
//                 <div key={`section-${index}`} className="mt-12 mb-6">
//                   <HeadingTag className={`font-serif font-bold text-${4-level}xl`}>
//                     {text}
//                   </HeadingTag>
//                 </div>
//               );
//             }

//             return (
//               <p key={`p-${index}`} className="text-gray-700 leading-relaxed">
//                 {section}
//               </p>
//             );
//           })}
//         </div>

//         {/* References */}
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

// interface FormState {
//   topic: string;
//   authorName: string;
//   citationStyle: string;
//   sections: number;
//   includeGraphs: string;
//   minimumWords: number;
// }

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();
  
//   const [formState, setFormState] = useState<FormState>({
//     topic: '',
//     authorName: '',
//     citationStyle: 'ieee',
//     sections: 5,
//     includeGraphs: 'no',
//     minimumWords: 2000
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>('');

//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === 'yes',
//             minimumWords: formState.minimumWords
//           },
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Generation failed');
//       }

//       const data = await response.json();
//       setFullContent(data.fullContent);
      
//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Research Paper Generator</h1>
//             <p className="text-gray-600">Generate professional research papers with AI</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Form Section */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">
//                 <Card>
//                   <CardContent className="pt-6">
//                     <form onSubmit={handleGenerate} className="space-y-6">
//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Research Topic</label>
//                         <Input
//                           value={formState.topic}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) => 
//                             handleInputChange('topic', e.target.value)
//                           }
//                           placeholder="Enter your research topic"
//                           className="w-full"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Author Name</label>
//                         <Input
//                           value={formState.authorName}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) => 
//                             handleInputChange('authorName', e.target.value)
//                           }
//                           placeholder="Enter author name"
//                           className="w-full"
//                           required
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Citation Style</label>
//                         <Select
//                           value={formState.citationStyle}
//                           onValueChange={(value: string) => 
//                             handleInputChange('citationStyle', value)
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {citationStyles.map((style) => (
//                               <SelectItem key={style.value} value={style.value}>
//                                 {style.label}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Number of Sections</label>
//                         <Select
//                           value={formState.sections.toString()}
//                           onValueChange={(value: string) => 
//                             handleInputChange('sections', parseInt(value))
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             {[...Array(10)].map((_, i) => (
//                               <SelectItem key={i + 1} value={(i + 1).toString()}>
//                                 {i + 1}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Include Graphs</label>
//                         <Select
//                           value={formState.includeGraphs}
//                           onValueChange={(value: string) => 
//                             handleInputChange('includeGraphs', value)
//                           }
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="yes">Yes</SelectItem>
//                             <SelectItem value="no">No</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>

//                       <div className="space-y-2">
//                         <label className="text-sm font-medium">Minimum Words</label>
//                         <Input
//                           type="number"
//                           value={formState.minimumWords}
//                           onChange={(e: ChangeEvent<HTMLInputElement>) => 
//                             handleInputChange('minimumWords', parseInt(e.target.value))
//                           }
//                           min={1000}
//                           step={100}
//                           required
//                         />
//                       </div>

//                       <Button
//                         type="submit"
//                         disabled={isGenerating}
//                         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
//                       >
//                         {isGenerating ? (
//                           <div className="flex items-center space-x-2">
//                             <span className="animate-spin">⚙️</span>
//                             <span>Generating...</span>
//                           </div>
//                         ) : (
//                           <div className="flex items-center space-x-2">
//                             <FileText className="w-4 h-4" />
//                             <span>Generate Paper</span>
//                           </div>
//                         )}
//                       </Button>


//                     </form>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>

//             {/* Paper Display Section */}
//             <div className="lg:col-span-8">
//               <Card>
//                 <ResearchPaperDisplay 
//                   content={fullContent} 
//                   citationStyle={formState.citationStyle}
//                   authorName={formState.authorName}
//                   isGenerating={isGenerating}
//                 />
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

























// "use client"
// import React, { useState, FormEvent } from 'react';
// import { useToast } from "@/hooks/use-toast";
// import { Card } from '@/components/ui/card';
// import { FormState } from '@/app/types/paper';
// import ResearchForm from '@/app/components/ResearchForm';
// import PaperDisplay from '@/app/components/PaperDisplay';


// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();
  
//   const [formState, setFormState] = useState<FormState>({
//     topic: '',
//     authorName: '',
//     citationStyle: 'ieee',
//     sections: 5,
//     includeGraphs: 'no',
//     minimumWords: 2000
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>('');

//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch('/api/generate-paper', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === 'yes',
//             minimumWords: formState.minimumWords
//           },
//         }),
//       });

//       if (!response.ok) throw new Error('Generation failed');

//       const data = await response.json();
//       setFullContent(data.fullContent);
      
//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Research Paper Generator</h1>
//             <p className="text-gray-600">Generate professional research papers with AI</p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">
//                 <ResearchForm
//                   formState={formState}
//                   isGenerating={isGenerating}
//                   onSubmit={handleGenerate}
//                   onInputChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               {/* <Card>
//                 <PaperDisplay 
//                   content={fullContent} 
//                   citationStyle={formState.citationStyle}
//                   authorName={formState.authorName}
//                   isGenerating={isGenerating}
//                 />
//               </Card> */}

//                 <Card>
//                   <PaperDisplay 
//                     content={fullContent} 
//                     citationStyle={formState.citationStyle}
//                     authorName={formState.authorName}
//                     isGenerating={isGenerating}
//                   />
//                   {/* {fullContent && <div className="p-4">
//                     <DownloadButtons content={fullContent} />
//                   </div>} */}
//                 </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

















// "use client";
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();

//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");

//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch("/api/generate-paper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });

//       if (!response.ok) throw new Error("Generation failed");

//       const data = await response.json();
//       setFullContent(data.fullContent);

//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Page Header */}
//           <div className="flex flex-col items-center mb-12">
//       {/* Animated Gradient Text */}
//       <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient mb-4">
//         My Research Paper
//       </h1>

//       {/* Interactive Subtitle */}
//       <p className="text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300">
//         Precision Research Paper Writing with AI Assistance
//       </p>

//       {/* Decorative Animated Line */}
//       <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse" />
//     </div>
//           {/* Grid Layout for Form and Paper Display */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Left Column: Research Form */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">
//                 <ResearchForm
//                   formState={formState}
//                   isGenerating={isGenerating}
//                   onSubmit={handleGenerate}
//                   onInputChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             {/* Right Column: Generated Paper Display */}
//             <div className="lg:col-span-8">
//               <Card>
//                 <PaperDisplay
//                   content={fullContent}
//                   citationStyle={formState.citationStyle}
//                   authorName={formState.authorName}
//                   isGenerating={isGenerating}
//                 />
//                 {/* Optional: Download Buttons */}
//                 {/* {fullContent && (
//                   <div className="p-4">
//                     <DownloadButtons content={fullContent} />
//                   </div>
//                 )} */}
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }














// "use client";
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// // Header Component
// const Header = () => {
//   return (
//     <header className="bg-slate-800 border-b shadow-sm">
//       <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//         {/* Logo and Brand Name */}
//         <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//           <Image
//             src="/logo.png" // Path to your logo in the public folder
//             alt="ResearchAI Logo"
//             width={40} // Adjust the width as needed
//             height={40} // Adjust the height as needed
//             className="rounded-lg"
//           />
//           <span className="text-2xl font-semibold text-white">
//             MyResearchPaper
//           </span>
//         </Link>

//         {/* Home Button */}
//         <Link href="/">
//           <Button
//             variant="ghost"
//             className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
//           >
//             Home
//           </Button>
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();

//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");

//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch("/api/generate-paper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });

//       if (!response.ok) throw new Error("Generation failed");

//       const data = await response.json();
//       setFullContent(data.fullContent);

//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
//     } catch (error) {
//       console.log(error);
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Page Header */}
//           <div className="flex flex-col items-center mb-12">
//             {/* Animated Gradient Text */}
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient mb-4">
//               My Research Paper
//             </h1>

//             {/* Interactive Subtitle */}
//             <p className="text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300">
//               Precision Research Paper Writing with AI Assistance
//             </p>

//             {/* Decorative Animated Line */}
//             <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse" />
//           </div>

//           {/* Grid Layout for Form and Paper Display */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             {/* Left Column: Research Form */}
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">
//                 <ResearchForm
//                   formState={formState}
//                   isGenerating={isGenerating}
//                   onSubmit={handleGenerate}
//                   onInputChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             {/* Right Column: Generated Paper Display */}
//             <div className="lg:col-span-8">
//               <Card className="bg-white rounded-xl shadow-lg border border-gray-100">
//                 <PaperDisplay
//                   content={fullContent}
//                   citationStyle={formState.citationStyle}
//                   authorName={formState.authorName}
//                   isGenerating={isGenerating}
//                 />
//                 {/* Optional: Download Buttons */}
//                 {/* {fullContent && (
//                   <div className="p-4">
//                     <DownloadButtons content={fullContent} />
//                   </div>
//                 )} */}
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// "use client";
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// // Header Component
// const Header = () => {
//   return (
//     <header className="bg-slate-800 border-b shadow-sm">
//       <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//         <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">

//           <span className="text-2xl font-semibold text-white">
//             MyResearchPaper
//           </span>
//         </Link>

//         <Link href="/">
//           <Button
//             variant="ghost"
//             className="text-white hover:bg-slate-700/50 hover:text-white transition-all"
//           >
//             Home
//           </Button>
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();

//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");

//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);

//     try {
//       const response = await fetch("/api/generate-paper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });

//       if (!response.ok) throw new Error("Generation failed");

//       const data = await response.json();
//       setFullContent(data.fullContent);

//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
//     } catch (error) {
//       console.log(error);
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient mb-4">
//               My Research Paper
//             </h1>
//             <p className="text-xl text-gray-700 hover:text-gray-900 transition-colors duration-300">
//               Precision Research Paper Writing with AI Assistance
//             </p>
//             <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <div className="sticky top-8">
//                 <ResearchForm
//                   formState={formState}
//                   isGenerating={isGenerating}
//                   onSubmit={handleGenerate}
//                   onInputChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <Card className="bg-white rounded-xl shadow-lg border border-gray-100">
//                 <PaperDisplay
//                   content={fullContent}
//                   isGenerating={isGenerating}
//                   paperData={formState}
//                 />
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












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













// "use client"
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { BookOpen, Home, FileText, Settings, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";
// import Link from 'next/link';
// // import { useRouter } from 'next/navigation';

// const Header = () => (
//   <header className="bg-white/80 border-b shadow-sm backdrop-blur-md sticky top-0 z-50">
//     <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//       <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//         <BookOpen className="w-8 h-8 text-blue-600" />
//         <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           MyResearchPaper
//         </span>
//       </Link>

//       <Link href="/">
//         <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
//           <Home className="w-5 h-5 mr-2" />
//           Home
//         </Button>
//       </Link>
//     </nav>
//   </header>
// );

// const EmptyPaperState = () => (
//   <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-8 text-center">
//     <div className="relative mb-8">
//       <FileText className="w-16 h-16 text-gray-300 mb-4" />
//       <Sparkles className="w-6 h-6 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
//     </div>
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">
//       Ready to Generate Your Paper
//     </h3>
//     <p className="text-base text-gray-600 max-w-md mb-8">
//       Fill out the form with your research details, and watch as AI assists in creating your paper with precise formatting and structure.
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//         <Settings className="w-6 h-6 text-blue-500 mb-2" />
//         <span className="text-gray-700 text-sm">Customizable Sections</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
//         <FileText className="w-6 h-6 text-purple-500 mb-2" />
//         <span className="text-gray-700 text-sm">Multiple Citation Styles</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
//         <Sparkles className="w-6 h-6 text-emerald-500 mb-2" />
//         <span className="text-gray-700 text-sm">AI-Powered Content</span>
//       </div>
//     </div>
//   </div>
// );

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();
//   // const router = useRouter();
//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");


//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);
  
//     try {
//       const response = await fetch("/api/generate-paper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });
  
//       if (!response.ok) throw new Error("Generation failed");
  
//       const data = await response.json();
//       setFullContent(data.fullContent);
  
//       // Store paper data in localStorage
//       const paperData = {
//         fullContent: data.fullContent,
//         formState: formState
//       };
//       localStorage.setItem('generatedPaper', JSON.stringify(paperData));
  
//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
  
//       // Redirect to PayU payment page
//       const successUrl = `${window.location.origin}/api/payment/success`;
//       window.location.href = `https://pmny.in/Cr7qji0hECrG?surl=${encodeURIComponent(successUrl)}`;
  
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
//               My Research Paper 
//             </h1>
//             <p className="text-xl text-gray-600 text-center max-w-2xl">
//               Create professional research papers with AI assistance
//             </p>
//             <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <div className="sticky top-24">
//                 <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
//                   <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b">
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       Paper Configuration
//                     </h2>
//                   </div>
//                   <ResearchForm
//                     formState={formState}
//                     isGenerating={isGenerating}
//                     onSubmit={handleGenerate}
//                     onInputChange={handleInputChange}
//                   />
//                 </Card>
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <Card className="bg-white rounded-xl shadow-lg border border-gray-100 min-h-[600px]">
//                 {isGenerating ? (
//                   <div className="flex items-center justify-center h-full">
//                     <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//                   </div>
//                 ) : fullContent ? (
//                   <PaperDisplay
//                     content={fullContent}
//                     isGenerating={isGenerating}
//                     paperData={formState}
//                   />
//                 ) : (
//                   <EmptyPaperState />
//                 )}
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client"
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { BookOpen, Home, FileText, Settings, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";
// import Link from 'next/link';
// // import { useRouter } from 'next/navigation';

// const Header = () => (
//   <header className="bg-white/80 border-b shadow-sm backdrop-blur-md sticky top-0 z-50">
//     <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//       <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//         <BookOpen className="w-8 h-8 text-blue-600" />
//         <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           MyResearchPaper
//         </span>
//       </Link>

//       <Link href="/">
//         <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
//           <Home className="w-5 h-5 mr-2" />
//           Home
//         </Button>
//       </Link>
//     </nav>
//   </header>
// );

// const EmptyPaperState = () => (
//   <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-8 text-center">
//     <div className="relative mb-8">
//       <FileText className="w-16 h-16 text-gray-300 mb-4" />
//       <Sparkles className="w-6 h-6 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
//     </div>
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">
//       Ready to Generate Your Paper
//     </h3>
//     <p className="text-base text-gray-600 max-w-md mb-8">
//       Fill out the form with your research details, and watch as AI assists in creating your paper with precise formatting and structure.
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//         <Settings className="w-6 h-6 text-blue-500 mb-2" />
//         <span className="text-gray-700 text-sm">Customizable Sections</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
//         <FileText className="w-6 h-6 text-purple-500 mb-2" />
//         <span className="text-gray-700 text-sm">Multiple Citation Styles</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
//         <Sparkles className="w-6 h-6 text-emerald-500 mb-2" />
//         <span className="text-gray-700 text-sm">AI-Powered Content</span>
//       </div>
//     </div>
//   </div>
// );

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();
//   // const router = useRouter();
//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");


//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);
  
//     try {
//       const response = await fetch("/api/generate-paper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });
  
//       if (!response.ok) throw new Error("Generation failed");
  
//       const data = await response.json();
//       setFullContent(data.fullContent);
  
//       // Store paper data in localStorage
//       const paperData = {
//         fullContent: data.fullContent,
//         formState: formState
//       };
//       localStorage.setItem('generatedPaper', JSON.stringify(paperData));
  
//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
  
//       // Redirect to PayU payment page
//       const successUrl = `${window.location.origin}/api/payment/success`;
//       window.location.href = `https://pmny.in/Cr7qji0hECrG?surl=${encodeURIComponent(successUrl)}`;
  
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
//               My Research Paper 
//             </h1>
//             <p className="text-xl text-gray-600 text-center max-w-2xl">
//               Create professional research papers with AI assistance
//             </p>
//             <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <div className="sticky top-24">
//                 <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
//                   <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b">
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       Paper Configuration
//                     </h2>
//                   </div>
//                   <ResearchForm
//                     formState={formState}
//                     isGenerating={isGenerating}
//                     onSubmit={handleGenerate}
//                     onInputChange={handleInputChange}
//                   />
//                 </Card>
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <Card className="bg-white rounded-xl shadow-lg border border-gray-100 min-h-[600px]">
//                 {isGenerating ? (
//                   <div className="flex items-center justify-center h-full">
//                     <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//                   </div>
//                 ) : fullContent ? (
//                   <PaperDisplay
//                     content={fullContent}
//                     isGenerating={isGenerating}
//                     paperData={formState}
//                   />
//                 ) : (
//                   <EmptyPaperState />
//                 )}
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


























// "use client"
// import React, { useState, FormEvent } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { Card } from "@/components/ui/card";
// import { BookOpen, Home, FileText, Settings, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { FormState } from "@/app/types/paper";
// import ResearchForm from "@/app/components/ResearchForm";
// import PaperDisplay from "@/app/components/PaperDisplay";
// import Link from 'next/link';
// // import { useRouter } from 'next/navigation';

// const Header = () => (
//   <header className="bg-white/80 border-b shadow-sm backdrop-blur-md sticky top-0 z-50">
//     <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
//       <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
//         <BookOpen className="w-8 h-8 text-blue-600" />
//         <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           MyResearchPaper
//         </span>
//       </Link>

//       <Link href="/">
//         <Button variant="ghost" className="text-gray-700 hover:bg-gray-100">
//           <Home className="w-5 h-5 mr-2" />
//           Home
//         </Button>
//       </Link>
//     </nav>
//   </header>
// );

// const EmptyPaperState = () => (
//   <div className="flex flex-col items-center justify-center h-full min-h-[600px] p-8 text-center">
//     <div className="relative mb-8">
//       <FileText className="w-16 h-16 text-gray-300 mb-4" />
//       <Sparkles className="w-6 h-6 text-blue-500 absolute -top-2 -right-2 animate-pulse" />
//     </div>
//     <h3 className="text-xl font-semibold text-gray-800 mb-4">
//       Ready to Generate Your Paper
//     </h3>
//     <p className="text-base text-gray-600 max-w-md mb-8">
//       Fill out the form with your research details, and watch as AI assists in creating your paper with precise formatting and structure.
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//         <Settings className="w-6 h-6 text-blue-500 mb-2" />
//         <span className="text-gray-700 text-sm">Customizable Sections</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
//         <FileText className="w-6 h-6 text-purple-500 mb-2" />
//         <span className="text-gray-700 text-sm">Multiple Citation Styles</span>
//       </div>
//       <div className="flex flex-col items-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
//         <Sparkles className="w-6 h-6 text-emerald-500 mb-2" />
//         <span className="text-gray-700 text-sm">AI-Powered Content</span>
//       </div>
//     </div>
//   </div>
// );

// export default function GeneratePage(): React.ReactElement {
//   const { toast } = useToast();
//   // const router = useRouter();
//   const [formState, setFormState] = useState<FormState>({
//     topic: "",
//     authorName: "",
//     citationStyle: "ieee",
//     sections: 5,
//     includeGraphs: "no",
//     minimumWords: 2000,
//   });
//   const [isGenerating, setIsGenerating] = useState<boolean>(false);
//   const [fullContent, setFullContent] = useState<string>("");


//   const handleGenerate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setIsGenerating(true);
  
//     try {
//       // Replace with your Cloud Function URL
//       const CLOUD_FUNCTION_URL = "https://us-central1-helpstudent-250e9.cloudfunctions.net/generate-paper";
      
//       const response = await fetch(CLOUD_FUNCTION_URL, {
//         method: "POST",
//         headers: { 
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           ...formState,
//           customizations: {
//             sections: formState.sections,
//             includeGraphs: formState.includeGraphs === "yes",
//             minimumWords: formState.minimumWords,
//           },
//         }),
//       });
  
//       if (!response.ok) throw new Error("Generation failed");
  
//       const data = await response.json();
//       setFullContent(data.fullContent);
  
//       // Store paper data
//       const paperData = {
//         fullContent: data.fullContent,
//         formState: formState
//       };
//       localStorage.setItem('generatedPaper', JSON.stringify(paperData));
  
//       toast({
//         title: "Success!",
//         description: "Your research paper has been generated.",
//       });
  
//       // PayU redirect
//       // const successUrl = `${window.location.origin}/api/payment/success`;
//       // window.location.href = `https://pmny.in/Cr7qji0hECrG?surl=${encodeURIComponent(successUrl)}`;
  
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Error",
//         description: "Failed to generate paper. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleInputChange = (field: keyof FormState, value: string | number): void => {
//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col items-center mb-12">
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
//               My Research Paper 
//             </h1>
//             <p className="text-xl text-gray-600 text-center max-w-2xl">
//               Create professional research papers with AI assistance
//             </p>
//             <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <div className="sticky top-24">
//                 <Card className="bg-white border border-gray-100 shadow-lg overflow-hidden">
//                   <div className="bg-gradient-to-r from-gray-50 to-white p-4 border-b">
//                     <h2 className="text-lg font-semibold text-gray-800">
//                       Paper Configuration
//                     </h2>
//                   </div>
//                   <ResearchForm
//                     formState={formState}
//                     isGenerating={isGenerating}
//                     onSubmit={handleGenerate}
//                     onInputChange={handleInputChange}
//                   />
//                 </Card>
//               </div>
//             </div>

//             <div className="lg:col-span-8">
//               <Card className="bg-white rounded-xl shadow-lg border border-gray-100 min-h-[600px]">
//                 {isGenerating ? (
//                   <div className="flex items-center justify-center h-full">
//                     <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600" />
//                   </div>
//                 ) : fullContent ? (
//                   <PaperDisplay
//                     content={fullContent}
//                     isGenerating={isGenerating}
//                     paperData={formState}
//                   />
//                 ) : (
//                   <EmptyPaperState />
//                 )}
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }