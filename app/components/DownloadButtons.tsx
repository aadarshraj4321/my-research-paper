// // components/DownloadButtons.tsx
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Download } from 'lucide-react';
// import jsPDF from 'jspdf';
// import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
// import { saveAs } from 'file-saver';

// interface DownloadButtonsProps {
//   content: string;
// }

// const DownloadButtons: React.FC<DownloadButtonsProps> = ({ content }) => {
//   const formatContent = (content: string) => {
//     const sections = content.split('\n\n').filter(Boolean);
//     const title = sections[0].replace(/^# /, '');
//     const abstract = sections[1];
//     const mainContent = sections.slice(2);
    
//     return {
//       title,
//       abstract,
//       mainContent
//     };
//   };

//   const handleWordDownload = async () => {
//     const { title, abstract, mainContent } = formatContent(content);

//     const doc = new Document({
//       sections: [{
//         properties: {},
//         children: [
//           new Paragraph({
//             text: title,
//             heading: HeadingLevel.TITLE,
//             alignment: AlignmentType.CENTER,
//             spacing: {
//               after: 400,
//               before: 400,
//             },
//           }),
//           new Paragraph({
//             text: "Abstract",
//             heading: HeadingLevel.HEADING_1,
//             spacing: {
//               after: 200,
//             },
//           }),
//           new Paragraph({
//             text: abstract,
//             spacing: {
//               after: 400,
//             },
//           }),
//           ...mainContent.map(section => {
//             if (section.startsWith('#')) {
//               // Handle headings
//               return new Paragraph({
//                 text: section.replace(/^#+\s/, ''),
//                 heading: HeadingLevel.HEADING_2,
//                 spacing: {
//                   before: 400,
//                   after: 200,
//                 },
//               });
//             }
//             // Handle regular paragraphs
//             return new Paragraph({
//               text: section,
//               spacing: {
//                 after: 200,
//               },
//             });
//           }),
//         ],
//       }],
//     });

//     const buffer = await Packer.toBuffer(doc);
//     const blob = new Blob([buffer], {
//       type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
//     });
//     saveAs(blob, 'research-paper.docx');
//   };

//   const handlePdfDownload = () => {
//     const { title, abstract, mainContent } = formatContent(content);
//     const doc = new jsPDF();
    
//     // Set fonts
//     doc.setFont("helvetica", "bold");
    
//     // Title
//     doc.setFontSize(24);
//     const titleLines = doc.splitTextToSize(title, 180);
//     doc.text(titleLines, 105, 20, { align: 'center' });
    
//     // Abstract
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(16);
//     doc.text("Abstract", 20, 50);
    
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(12);
//     const abstractLines = doc.splitTextToSize(abstract, 170);
//     doc.text(abstractLines, 20, 60);
    
//     let currentY = 80;
    
//     // Main content
//     mainContent.forEach(section => {
//       if (section.startsWith('#')) {
//         // Handle headings
//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(16);
//         const heading = section.replace(/^#+\s/, '');
//         doc.text(heading, 20, currentY);
//         currentY += 10;
//       } else {
//         // Handle paragraphs
//         doc.setFont("helvetica", "normal");
//         doc.setFontSize(12);
//         const lines = doc.splitTextToSize(section, 170);
        
//         // Check if we need a new page
//         if (currentY + (lines.length * 7) > 280) {
//           doc.addPage();
//           currentY = 20;
//         }
        
//         doc.text(lines, 20, currentY);
//         currentY += (lines.length * 7) + 10;
//       }
//     });
    
//     doc.save('research-paper.pdf');
//   };

//   return (
//     <div className="flex gap-4">
//       <Button 
//         onClick={handleWordDownload}
//         className="flex items-center gap-2"
//       >
//         <Download className="h-4 w-4" />
//         Download DOCX
//       </Button>
      
//       <Button 
//         onClick={handlePdfDownload}
//         className="flex items-center gap-2"
//       >
//         <Download className="h-4 w-4" />
//         Download PDF
//       </Button>
//     </div>
//   );
// };

// export default DownloadButtons;























// // components/DownloadButtons.tsx
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Download } from 'lucide-react';
// import { useToast } from "@/hooks/use-toast";
// import { TDocumentDefinitions } from 'pdfmake/interfaces';

// interface DownloadButtonsProps {
//   content: string;
//   title: string;
//   authorName: string;
// }

// const DownloadButtons: React.FC<DownloadButtonsProps> = ({ content, title, authorName }) => {
//   const { toast } = useToast();

//   const handlePdfDownload = async () => {
//     try {
//       // Dynamically import pdfmake
//       const pdfMake = (await import('pdfmake/build/pdfmake')).default;
//       const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default;
//       pdfMake.vfs = pdfFonts.pdfMake.vfs;

//       // Split content into sections
//       const sections = content.split('\n\n').filter(Boolean);
//       const abstract = sections[1];
//       const mainContent = sections.slice(2);

//       // Convert markdown headers to sections
//       const contentSections: any[] = [];
//       mainContent.forEach(section => {
//         if (section.startsWith('# ')) {
//           contentSections.push({
//             text: section.replace('# ', ''),
//             style: 'heading1',
//             pageBreak: 'before'
//           });
//         } else if (section.startsWith('## ')) {
//           contentSections.push({
//             text: section.replace('## ', ''),
//             style: 'heading2'
//           });
//         } else {
//           contentSections.push({
//             text: section,
//             style: 'paragraph'
//           });
//         }
//       });

//       // Define document
//       const docDefinition: TDocumentDefinitions = {
//         content: [
//           { text: title, style: 'title' },
//           { text: authorName, style: 'author' },
//           { text: new Date().toLocaleDateString(), style: 'date' },
//           { text: 'Abstract', style: 'heading1', margin: [0, 20, 0, 10] },
//           { text: abstract, style: 'abstract' },
//           ...contentSections
//         ],
//         styles: {
//           title: {
//             fontSize: 16,
//             bold: true,
//             alignment: 'center',
//             margin: [0, 0, 0, 20]
//           },
//           author: {
//             fontSize: 12,
//             alignment: 'center',
//             margin: [0, 0, 0, 10]
//           },
//           date: {
//             fontSize: 12,
//             alignment: 'center',
//             margin: [0, 0, 0, 30]
//           },
//           heading1: {
//             fontSize: 14,
//             bold: true,
//             margin: [0, 20, 0, 10]
//           },
//           heading2: {
//             fontSize: 12,
//             bold: true,
//             margin: [0, 15, 0, 10]
//           },
//           paragraph: {
//             fontSize: 12,
//             lineHeight: 2,
//             margin: [0, 0, 0, 10],
//             alignment: 'justify'
//           },
//           abstract: {
//             fontSize: 12,
//             lineHeight: 2,
//             margin: [0, 0, 0, 20],
//             alignment: 'justify'
//           }
//         },
//         defaultStyle: {
//           font: 'Times'
//         },
//         pageSize: 'LETTER',
//         pageMargins: [72, 72, 72, 72], // 1 inch margins (72 points)
//         footer: function(currentPage, pageCount) {
//           return {
//             text: currentPage.toString(),
//             alignment: 'center',
//             margin: [0, 20, 0, 0]
//           };
//         }
//       };

//       // Generate PDF
//       pdfMake.createPdf(docDefinition).download('research-paper.pdf');

//       toast({
//         title: "Success",
//         description: "PDF downloaded successfully",
//       });
//     } catch (error) {
//       console.error('PDF generation failed:', error);
//       toast({
//         title: "Error",
//         description: "Failed to generate PDF. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleWordDownload = async () => {
//     try {
//       // Import docx library
//       const { Document, Packer, Paragraph, TextRun, HeadingLevel } = await import('docx');
      
//       // Split content into sections
//       const sections = content.split('\n\n').filter(Boolean);
//       const abstract = sections[1];
//       const mainContent = sections.slice(2);

//       // Create document
//       const doc = new Document({
//         sections: [{
//           properties: {},
//           children: [
//             new Paragraph({
//               text: title,
//               heading: HeadingLevel.HEADING_1,
//               alignment: 'center'
//             }),
//             new Paragraph({
//               text: authorName,
//               alignment: 'center'
//             }),
//             new Paragraph({
//               text: 'Abstract',
//               heading: HeadingLevel.HEADING_1
//             }),
//             new Paragraph({
//               children: [new TextRun(abstract)]
//             }),
//             ...mainContent.map(section => {
//               if (section.startsWith('# ')) {
//                 return new Paragraph({
//                   text: section.replace('# ', ''),
//                   heading: HeadingLevel.HEADING_1
//                 });
//               } else if (section.startsWith('## ')) {
//                 return new Paragraph({
//                   text: section.replace('## ', ''),
//                   heading: HeadingLevel.HEADING_2
//                 });
//               }
//               return new Paragraph({
//                 children: [new TextRun(section)]
//               });
//             })
//           ]
//         }]
//       });

//       // Generate and save document
//       const buffer = await Packer.toBuffer(doc);
//       const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'research-paper.docx';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);

//       toast({
//         title: "Success",
//         description: "Word document downloaded successfully",
//       });
//     } catch (error) {
//       console.error('Word document generation failed:', error);
//       toast({
//         title: "Error",
//         description: "Failed to generate Word document. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <div className="flex gap-4 justify-end mt-6">
//       <Button
//         variant="outline"
//         onClick={handlePdfDownload}
//         className="flex items-center gap-2"
//       >
//         <Download className="h-4 w-4" />
//         Download PDF
//       </Button>
//       <Button
//         variant="outline"
//         onClick={handleWordDownload}
//         className="flex items-center gap-2"
//       >
//         <Download className="h-4 w-4" />
//         Download Word
//       </Button>
//     </div>
//   );
// };

// export default DownloadButtons;







