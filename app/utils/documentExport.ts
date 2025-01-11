// utils/documentExport.ts
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from 'docx';
import { saveAs } from 'file-saver';

interface ExportOptions {
  title: string;
  authorName: string;
  content: string;
  date: string;
}

export const exportToPDF = async (options: ExportOptions) => {
  const { title, authorName, content, date } = options;
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  // Set fonts
  pdf.setFont("times", "normal");
  
  // Title
  pdf.setFontSize(24);
  pdf.text(title, pdf.internal.pageSize.width / 2, 80, { align: 'center' });
  
  // Author and Date
  pdf.setFontSize(12);
  pdf.text(authorName, pdf.internal.pageSize.width / 2, 120, { align: 'center' });
  pdf.text(date, pdf.internal.pageSize.width / 2, 140, { align: 'center' });

  // Content
  pdf.setFontSize(11);
  const splitContent = content.split('\n\n');
  let yPos = 180;
  const margin = 72;
  const pageWidth = pdf.internal.pageSize.width - (margin * 2);

  for (const section of splitContent) {
    if (section.startsWith('#')) {
      // Handle headings
      const level = (section.match(/^#+/) || [''])[0].length;
      const text = section.replace(/^#+\s/, '');
      pdf.setFontSize(16 - level);
      pdf.setFont("times", "bold");
      const lines = pdf.splitTextToSize(text, pageWidth);
      
      if (yPos + 30 > pdf.internal.pageSize.height - margin) {
        pdf.addPage();
        yPos = margin;
      }
      
      pdf.text(lines, margin, yPos);
      yPos += (lines.length * 20) + 10;
      pdf.setFont("times", "normal");
      pdf.setFontSize(11);
    } else {
      // Handle paragraphs
      const lines = pdf.splitTextToSize(section, pageWidth);
      
      if (yPos + (lines.length * 15) > pdf.internal.pageSize.height - margin) {
        pdf.addPage();
        yPos = margin;
      }
      
      pdf.text(lines, margin, yPos);
      yPos += (lines.length * 15) + 10;
    }
  }

  pdf.save(`${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};

export const exportToWord = async (options: ExportOptions) => {
  const { title, authorName, content, date } = options;
  
  const sections = content.split('\n\n');
  const docChildren = [];

  // Title
  docChildren.push(
    new Paragraph({
      text: title,
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 340, after: 340 },
      alignment: 'center',
    })
  );

  // Author & Date
  docChildren.push(
    new Paragraph({
      children: [new TextRun(authorName)],
      alignment: 'center',
      spacing: { before: 240, after: 240 },
    }),
    new Paragraph({
      children: [new TextRun(date)],
      alignment: 'center',
      spacing: { after: 480 },
    })
  );

  // Helper function to convert markdown heading level to DocX heading level
  const getHeadingLevel = (level: number) => {
    switch (level) {
      case 1: return HeadingLevel.HEADING_1;
      case 2: return HeadingLevel.HEADING_2;
      case 3: return HeadingLevel.HEADING_3;
      case 4: return HeadingLevel.HEADING_4;
      case 5: return HeadingLevel.HEADING_5;
      default: return HeadingLevel.HEADING_1;
    }
  };

  // Content
  for (const section of sections) {
    if (section.startsWith('#')) {
      const level = (section.match(/^#+/) || [''])[0].length;
      const text = section.replace(/^#+\s/, '');
      docChildren.push(
        new Paragraph({
          text: text,
          heading: getHeadingLevel(level),
          spacing: { before: 340, after: 240 },
        })
      );
    } else {
      docChildren.push(
        new Paragraph({
          text: section,
          spacing: { before: 240, after: 240 },
        })
      );
    }
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children: docChildren,
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${title.toLowerCase().replace(/\s+/g, '-')}.docx`);
};