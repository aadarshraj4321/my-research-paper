// import React, { FormEvent, ChangeEvent } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Card, CardContent } from '@/components/ui/card';
// import { FileText } from 'lucide-react';
// import { FormState, citationStyles } from '../types/paper';

// interface ResearchFormProps {
//   formState: FormState;
//   isGenerating: boolean;
//   onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
//   onInputChange: (field: keyof FormState, value: string | number) => void;
// }

// export const ResearchForm: React.FC<ResearchFormProps> = ({
//   formState,
//   isGenerating,
//   onSubmit,
//   onInputChange
// }) => (
//   <Card>
//     <CardContent className="pt-6">
//       <form onSubmit={onSubmit} className="space-y-6">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Research Topic</label>
//           <Input
//             value={formState.topic}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => 
//               onInputChange('topic', e.target.value)
//             }
//             placeholder="Enter your research topic"
//             className="w-full"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Author Name</label>
//           <Input
//             value={formState.authorName}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => 
//               onInputChange('authorName', e.target.value)
//             }
//             placeholder="Enter author name"
//             className="w-full"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Citation Style</label>
//           <Select
//             value={formState.citationStyle}
//             onValueChange={(value: string) => 
//               onInputChange('citationStyle', value)
//             }
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               {citationStyles.map((style) => (
//                 <SelectItem key={style.value} value={style.value}>
//                   {style.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Number of Sections</label>
//           <Select
//             value={formState.sections.toString()}
//             onValueChange={(value: string) => 
//               onInputChange('sections', parseInt(value))
//             }
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               {[...Array(10)].map((_, i) => (
//                 <SelectItem key={i + 1} value={(i + 1).toString()}>
//                   {i + 1}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Include Graphs</label>
//           <Select
//             value={formState.includeGraphs}
//             onValueChange={(value: string) => 
//               onInputChange('includeGraphs', value)
//             }
//           >
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="yes">Yes</SelectItem>
//               <SelectItem value="no">No</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <label className="text-sm font-medium">Minimum Words</label>
//           <Input
//             type="number"
//             value={formState.minimumWords}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => 
//               onInputChange('minimumWords', parseInt(e.target.value))
//             }
//             min={1000}
//             step={100}
//             required
//           />
//         </div>

//         <Button
//           type="submit"
//           disabled={isGenerating}
//           className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
//         >
//           {isGenerating ? (
//             <div className="flex items-center space-x-2">
//               <span className="animate-spin">⚙️</span>
//               <span>Generating...</span>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <FileText className="w-4 h-4" />
//               <span>Generate Paper</span>
//             </div>
//           )}
//         </Button>
//       </form>
//     </CardContent>
//   </Card>
// );

// export default ResearchForm;
















import React, { FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { FormState, citationStyles } from '../types/paper';

interface ResearchFormProps {
  formState: FormState;
  isGenerating: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  onInputChange: (field: keyof FormState, value: string | number) => void;
}

export const ResearchForm: React.FC<ResearchFormProps> = ({
  formState,
  isGenerating,
  onSubmit,
  onInputChange
}) => (
  <Card className="border-none shadow-xl rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
    <CardContent className="pt-10 pb-8">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* Research Topic */}
        <div className="space-y-4">
          <label className="text-xl font-bold text-gray-800">Research Topic</label>
          <Input
            value={formState.topic}
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              onInputChange('topic', e.target.value)
            }
            placeholder="Enter your research topic"
            className="w-full text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all"
            required
          />
        </div>

{/* Author Name */}
<div className="space-y-4">
  <label className="text-xl font-bold text-gray-800">Author Name</label>
  <Input
    value={formState.authorName}
    onChange={(e: ChangeEvent<HTMLInputElement>) => 
      onInputChange('authorName', e.target.value)
    }
    placeholder="Enter author names separated by commas"
    className="w-full text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all placeholder-opacity-80"
    required
  />
</div>

        {/* Citation Style */}
        <div className="space-y-4">
          <label className="text-xl font-bold text-gray-800">Citation Style</label>
          <Select
            value={formState.citationStyle}
            onValueChange={(value: string) => 
              onInputChange('citationStyle', value)
            }
          >
            <SelectTrigger className="text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all">
              <SelectValue placeholder="Select citation style" />
            </SelectTrigger>
            <SelectContent className="text-xl border-2 border-gray-300 rounded-xl shadow-lg bg-white">
              {citationStyles.map((style) => (
                <SelectItem key={style.value} value={style.value} className="text-xl">
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Number of Sections */}
        <div className="space-y-4">
          <label className="text-xl font-bold text-gray-800">Number of Sections</label>
          <Select
            value={formState.sections.toString()}
            onValueChange={(value: string) => 
              onInputChange('sections', parseInt(value))
            }
          >
            <SelectTrigger className="text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all">
              <SelectValue placeholder="Select number of sections" />
            </SelectTrigger>
            <SelectContent className="text-xl border-2 border-gray-300 rounded-xl shadow-lg bg-white">
              {[...Array(10)].map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()} className="text-xl">
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Include Graphs */}
        <div className="space-y-4">
          <label className="text-xl font-bold text-gray-800">Include Graphs</label>
          <Select
            value={formState.includeGraphs}
            onValueChange={(value: string) => 
              onInputChange('includeGraphs', value)
            }
          >
            <SelectTrigger className="text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all">
              <SelectValue placeholder="Include graphs?" />
            </SelectTrigger>
            <SelectContent className="text-xl border-2 border-gray-300 rounded-xl shadow-lg bg-white">
              <SelectItem value="yes" className="text-xl">Yes</SelectItem>
              <SelectItem value="no" className="text-xl">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Minimum Words */}
        <div className="space-y-4">
          <label className="text-xl font-bold text-gray-800">Minimum Words</label>
          <Input
            type="number"
            value={formState.minimumWords}
            onChange={(e: ChangeEvent<HTMLInputElement>) => 
              onInputChange('minimumWords', parseInt(e.target.value))
            }
            min={1000}
            step={100}
            className="w-full text-xl border-2 border-gray-300 rounded-xl p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 hover:border-blue-400 transition-all"
            required
          />
        </div>

        {/* Generate Button */}
        <Button
          type="submit"
          disabled={isGenerating}
          className="w-full text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl p-5 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isGenerating ? (
            <div className="flex items-center space-x-3">
              <span className="animate-spin">⚙️</span>
              <span>Generating...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6" />
              <span>Generate Paper</span>
            </div>
          )}
        </Button>
      </form>
    </CardContent>
  </Card>
);

export default ResearchForm;