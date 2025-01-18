// export interface CitationStyle {
//   value: string;
//   label: string;
// }

// export interface PaperDisplayProps {
//   content: string;
//   citationStyle: string;
//   authorName: string;
//   isGenerating: boolean;
// }




// export interface FormState {
//   topic: string;
//   authorName: string;
//   citationStyle: string;
//   sections: number;
//   includeGraphs: string;
//   minimumWords: number;
// }

// export const citationStyles: CitationStyle[] = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];









// // types/paper.ts
// export interface CitationStyle {
//   value: string;
//   label: string;
// }

// export interface FormState {
//   topic: string;
//   authorName: string;
//   citationStyle: string;
//   sections: number;
//   includeGraphs: string;
//   minimumWords: number;
// }

// export interface PaperDisplayProps {
//   content: string;
//   isGenerating: boolean;
//   paperData: FormState;
// }

// export const citationStyles: CitationStyle[] = [
//   { value: 'ieee', label: 'IEEE' },
//   { value: 'apa', label: 'APA' },
//   { value: 'mla', label: 'MLA' },
//   { value: 'chicago', label: 'Chicago' },
// ];












// types/paper.ts
export interface CitationStyle {
  value: string;
  label: string;
}

// export interface FormState {
//   topic: string;
//   authorName: string;
//   citationStyle: string;
//   sections: number;
//   includeGraphs: string;
//   minimumWords: number;
// }

export interface FormState {
  topic: string;
  authorName: string;
  citationStyle: string;
  sections: number;
  includeGraphs: string;
  minimumWords: number;
}

export interface PaperDisplayProps {
  content: string;
  isGenerating: boolean;
  paperData: FormState;
}

export interface GeneratedPaperData {
  fullContent: string;
  formState: FormState;
}

export const citationStyles: CitationStyle[] = [
  { value: 'ieee', label: 'IEEE' },
  { value: 'apa', label: 'APA' },
  { value: 'mla', label: 'MLA' },
  { value: 'chicago', label: 'Chicago' },
];