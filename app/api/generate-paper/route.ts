// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Type for the user input data
// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// // Ensure GEMINI_API_KEY is a string and exists
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(req: Request) {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     // Initialize the Google Generative AI client with your API key
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' }); // Update model name if necessary

//     // Create the prompt for Gemini based on the user input
//     const prompt = createPrompt(topic, citationStyle, customizations);

//     // Generate content from Gemini
//     const result = await model.generateContent(prompt);

//     // Check if the content was successfully generated
//     if (!result || !result.response || !result.response.text) {
//       throw new Error('Failed to generate content');
//     }

//     // Extract the full content and preview
//     const fullContent = result.response.text();
//     const preview = fullContent.split('\n\n')[0];  // Get the first section or abstract

//     // Return the generated content as a response
//     return NextResponse.json({ preview, fullContent });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error occurred:', error.message);
//       return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
//     } else {
//       console.error('Unknown error occurred:', error);
//       return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
//     }
//   }
// }

// // Helper function to create the prompt dynamically based on user input
// function createPrompt(topic: string, citationStyle: string, customizations: Customizations): string {
//   return `
//     Topic: ${topic}
//     Citation Style: ${citationStyle}
//     Sections: ${customizations.sections}
//     Include Graphs: ${customizations.includeGraphs ? 'Yes' : 'No'}
//     Minimum Words: ${customizations.minimumWords}

//     Please generate a research paper based on these specifications, including appropriate sections and references.
//   `;
// }

























// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Type for the user input data
// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// // Ensure GEMINI_API_KEY is a string and exists
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(req: Request) {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     // Initialize the Google Generative AI client with your API key
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

//     // Create the prompt for Gemini based on the user input
//     const prompt = createPrompt(topic, citationStyle, customizations);

//     // Generate content from Gemini
//     const result = await model.generateContent(prompt);

//     if (!result || !result.response || !result.response.text) {
//       throw new Error('Failed to generate content');
//     }

//     // Extract the full content and preview
//     const fullContent = result.response.text();
//     const preview = fullContent.split('\n\n')[0];  // Get the first section or abstract

//     // If graphs are included, simulate a graph URL (you could replace this with a real URL from the model response)
//     const graphUrl = customizations.includeGraphs ? "https://via.placeholder.com/500x300.png?text=Graph+Placeholder" : null;

//     // Include a placeholder in the content for where the graph should appear
//     const contentWithGraphPlaceholder = customizations.includeGraphs ? fullContent.replace(/(graph|chart|visualization)/gi, "You have to place the image here") : fullContent;

//     return NextResponse.json({
//       preview: contentWithGraphPlaceholder,
//       fullContent: contentWithGraphPlaceholder,
//       graphUrl,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error occurred:', error.message);
//       return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
//     } else {
//       console.error('Unknown error occurred:', error);
//       return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
//     }
//   }
// }

// // Helper function to create the prompt dynamically based on user input
// function createPrompt(topic: string, citationStyle: string, customizations: Customizations): string {
//   return `
//     Topic: ${topic}
//     Citation Style: ${citationStyle}
//     Sections: ${customizations.sections}
//     Include Graphs: ${customizations.includeGraphs ? 'Yes' : 'No'}
//     Minimum Words: ${customizations.minimumWords}

//     Please generate a research paper based on these specifications, including appropriate sections and references. 
//     If graphs are included, make sure to add visual elements or descriptions of graphs.
//   `;
// }





















// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // Type for the user input data
// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// // Ensure GEMINI_API_KEY is a string and exists
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(req: Request) {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     // Initialize the Google Generative AI client with your API key
//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

//     // Create the prompt for Gemini based on the user input
//     const prompt = createPrompt(topic, citationStyle, customizations);

//     // Generate content from Gemini
//     const result = await model.generateContent(prompt);

//     if (!result || !result.response || !result.response.text) {
//       throw new Error('Failed to generate content');
//     }

//     // Extract the full content and preview
//     const fullContent = result.response.text();
//     const preview = fullContent.split('\n\n')[0];  // Get the first section or abstract

//     // If graphs are included, simulate a graph URL (you could replace this with a real URL from the model response)
//     const graphUrl = customizations.includeGraphs ? "https://via.placeholder.com/500x300.png?text=Graph+Placeholder" : null;

//     // Replace graph/chart/visualization mentions with a placeholder text
//     const contentWithGraphPlaceholder = customizations.includeGraphs 
//       ? fullContent.replace(/(graph|chart|visualization)/gi, "You have to place the image here") 
//       : fullContent;

//     return NextResponse.json({
//       preview: contentWithGraphPlaceholder,
//       fullContent: contentWithGraphPlaceholder,
//       graphUrl,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error occurred:', error.message);
//       return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
//     } else {
//       console.error('Unknown error occurred:', error);
//       return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
//     }
//   }
// }

// // Helper function to create the prompt dynamically based on user input
// function createPrompt(topic: string, citationStyle: string, customizations: Customizations): string {
//   return `
//     Topic: ${topic}
//     Citation Style: ${citationStyle}
//     Sections: ${customizations.sections}
//     Include Graphs: ${customizations.includeGraphs ? 'Yes' : 'No'}
//     Minimum Words: ${customizations.minimumWords}

//     Please generate a research paper based on these specifications, including appropriate sections and references. 
//     If graphs are included, make sure to add visual elements or descriptions of graphs.
//   `;
// }




















// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(req: Request) {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

//     const prompt = createPrompt(topic, citationStyle, customizations);

//     const result = await model.generateContent(prompt);

//     if (!result || !result.response || !result.response.text) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
//     const preview = fullContent.split('\n\n')[0];

//     const contentWithGraphPlaceholder = customizations.includeGraphs
//       ? fullContent.replace(/(graph|chart|visualization)/gi, "[Link to graph]")
//       : fullContent;

//     return NextResponse.json({
//       preview: contentWithGraphPlaceholder,
//       fullContent: contentWithGraphPlaceholder,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error('Error occurred:', error.message);
//       return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
//     } else {
//       console.error('Unknown error occurred:', error);
//       return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
//     }
//   }
// }

// function createPrompt(topic: string, citationStyle: string, customizations: Customizations): string {
//   return `
//     Topic: ${topic}
//     Citation Style: ${citationStyle}
//     Sections: ${customizations.sections}
//     Include Graphs: ${customizations.includeGraphs ? 'Yes' : 'No'}
//     Minimum Words: ${customizations.minimumWords}

//     Please generate a research paper based on these specifications, including appropriate sections and references.
//     If graphs are included, make sure to add visual elements or descriptions of graphs.
//   `;
// }





















// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(req: Request) {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//     const prompt = `
//       Create a detailed research paper on "${topic}" following these specifications:
      
//       Format:
//       - Citation style: ${citationStyle.toUpperCase()}
//       - Number of sections: ${customizations.sections}
//       - Minimum word count: ${customizations.minimumWords}
//       ${customizations.includeGraphs ? '- Include descriptions of relevant graphs and visualizations' : ''}

//       Structure:
//       1. Title (clear and specific)
//       2. Abstract (comprehensive summary)
//       3. Introduction
//       4. Body sections (${customizations.sections} major sections)
//       5. Methodology (if applicable)
//       6. Results and Discussion
//       7. Conclusion
//       8. References (minimum 5 academic sources)

//       Additional requirements:
//       - Use academic language and tone
//       - Include in-text citations
//       - Provide specific examples and evidence
//       - Make clear arguments and conclusions
//       - Use proper headings and subheadings
//       ${customizations.includeGraphs ? '- Include detailed descriptions of graphs where relevant' : ''}

//       Please format the paper using markdown for headings and sections.
//     `;

//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const fullContent = response.text();
    
//     // Create a preview (first 500 words)
//     const preview = fullContent.split(' ').slice(0, 500).join(' ') + '...';

//     return NextResponse.json({
//       preview,
//       fullContent,
//     });
//   } catch (error: unknown) {
//     console.error('Error generating paper:', error);
    
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { error: error.message || 'Failed to generate paper' },
//         { status: 500 }
//       );
//     }
    
//     return NextResponse.json(
//       { error: 'An unknown error occurred' },
//       { status: 500 }
//     );
//   }
// }












import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Customizations {
  sections: number;
  includeGraphs: boolean;
  minimumWords: number;
}

interface PaperRequestBody {
  topic: string;
  citationStyle: string;
  customizations: Customizations;
}

interface PaperResponse {
  preview: string;
  fullContent: string;
}

interface ErrorResponse {
  error: string;
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables.");
}

export async function POST(
  req: Request
): Promise<NextResponse<PaperResponse | ErrorResponse>> {
  try {
    const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

    if (!topic || !citationStyle || !customizations) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

    const prompt = `
      Create a detailed research paper on "${topic}" following these specifications:
      
      Format:
      - Citation style: ${citationStyle.toUpperCase()}
      - Number of sections: ${customizations.sections}
      - Minimum word count: ${customizations.minimumWords}
      ${customizations.includeGraphs ? '- Include descriptions of relevant graphs and visualizations' : ''}

      Structure:
      1. Title (clear and specific)
      2. Abstract (comprehensive summary)
      3. Introduction
      4. Body sections (${customizations.sections} major sections)
      5. Methodology (if applicable)
      6. Results and Discussion
      7. Conclusion
      8. References (minimum 5 academic sources)

      Additional requirements:
      - Use academic language and tone
      - Include in-text citations
      - Provide specific examples and evidence
      - Make clear arguments and conclusions
      - Use proper headings and subheadings
      ${customizations.includeGraphs ? '- Include detailed descriptions of graphs where relevant' : ''}

      Please format the paper using markdown for headings and sections.
    `.trim();

    const result = await model.generateContent(prompt);
    
    if (!result || !result.response) {
      throw new Error('Failed to generate content');
    }

    const fullContent = result.response.text();
    
    if (!fullContent) {
      throw new Error('Generated content is empty');
    }

    // Create a preview (first 500 words)
    const preview = fullContent.split(' ').slice(0, 500).join(' ') + '...';

    return NextResponse.json({
      preview,
      fullContent,
    });
  } catch (error: unknown) {
    console.error('Error generating paper:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to generate paper' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

























// import { NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// interface Customizations {
//   sections: number;
//   includeGraphs: boolean;
//   minimumWords: number;
// }

// interface PaperRequestBody {
//   topic: string;
//   authorName: string;
//   citationStyle: string;
//   customizations: Customizations;
// }

// interface PaperResponse {
//   fullContent: string;
// }

// interface ErrorResponse {
//   error: string;
// }

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

// if (!GEMINI_API_KEY) {
//   throw new Error("GEMINI_API_KEY is not defined in environment variables.");
// }

// export async function POST(
//   req: Request
// ): Promise<NextResponse<PaperResponse | ErrorResponse>> {
//   try {
//     const { topic, authorName, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations || !authorName) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//     const prompt = `
//       Create a detailed research paper on "${topic}" following these specifications:
      
//       Format:
//       - Author: ${authorName}
//       - Citation style: ${citationStyle.toUpperCase()}
//       - Number of sections: ${customizations.sections}
//       - Minimum word count: ${customizations.minimumWords}
//       ${customizations.includeGraphs ? '- Include markdown placeholders for relevant graphs and visualizations' : ''}

//       Structure:
//       1. # Title (clear and specific)
//       2. Abstract (comprehensive summary)
//       3. # Introduction
//       4. Body sections (${customizations.sections} major sections with ## headings)
//       5. # Methodology (if applicable)
//       6. # Results and Discussion
//       7. # Conclusion
//       8. # References (minimum 5 academic sources)

//       Additional requirements:
//       - Use academic language and tone
//       - Include in-text citations
//       - Provide specific examples and evidence
//       - Make clear arguments and conclusions
//       - Use proper markdown headings (# for main sections, ## for subsections)
//       ${customizations.includeGraphs ? '- Include image placeholders in markdown format: ![Description](image-url)' : ''}

//       Format the content with exactly one blank line between sections and paragraphs.
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

//     return NextResponse.json({ fullContent });
//   } catch (error: unknown) {
//     console.error('Error generating paper:', error);
    
//     if (error instanceof Error) {
//       return NextResponse.json(
//         { error: error.message || 'Failed to generate paper' },
//         { status: 500 }
//       );
//     }
    
//     return NextResponse.json(
//       { error: 'An unknown error occurred' },
//       { status: 500 }
//     );
//   }
// }