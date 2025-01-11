import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { FileText } from 'lucide-react';
import { FormState } from '../types/paper';

const citationStyles = [
  { value: 'ieee', label: 'IEEE' },
  { value: 'apa', label: 'APA' },
  { value: 'mla', label: 'MLA' },
  { value: 'chicago', label: 'Chicago' },
];

interface PaperFormProps {
  onSubmit: (data: FormState) => void;
  isGenerating: boolean;
  initialData: FormState;
}

export default function PaperForm({ onSubmit, isGenerating, initialData }: PaperFormProps) {
  const [formData, setFormData] = React.useState<FormState>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof FormState, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Research Topic</label>
            <Input
              value={formData.topic}
              onChange={e => handleChange('topic', e.target.value)}
              placeholder="Enter your research topic"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Author Name</label>
            <Input
              value={formData.authorName}
              onChange={e => handleChange('authorName', e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>

          {/* <div className="space-y-2">
            <label className="text-sm font-medium">Institution</label>
            <Input
              value={formData.institution}
              onChange={e => handleChange('institution', e.target.value)}
              placeholder="Enter institution name"
              required
            />
          </div> */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Citation Style</label>
            <Select
              value={formData.citationStyle}
              onValueChange={value => handleChange('citationStyle', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {citationStyles.map(style => (
                  <SelectItem key={style.value} value={style.value}>
                    {style.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Sections</label>
            <Select
              value={formData.sections.toString()}
              onValueChange={value => handleChange('sections', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Include Graphs</label>
            <Select
              value={formData.includeGraphs}
              onValueChange={value => handleChange('includeGraphs', value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Minimum Words</label>
            <Input
              type="number"
              value={formData.minimumWords}
              onChange={e => handleChange('minimumWords', parseInt(e.target.value))}
              min={1000}
              step={100}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <span className="animate-spin">⚙️</span>
                <span>Generating...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Generate Paper</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}