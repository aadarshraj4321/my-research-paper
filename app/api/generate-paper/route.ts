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
















// import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

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

// interface PaperResponse {
//   preview: string;
//   fullContent: string;
// }

// interface ErrorResponse {
//   error: string;
// }

// const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY as string;

// if (!DEEPSEEK_API_KEY) {
//   throw new Error("DEEPSEEK_API_KEY is not defined in environment variables.");
// }

// // Initialize DeepSeek API client
// const openai = new OpenAI({
//   baseURL: 'https://api.deepseek.com',
//   apiKey: DEEPSEEK_API_KEY,
// });

// export async function POST(
//   req: Request
// ): Promise<NextResponse<PaperResponse | ErrorResponse>> {
//   try {
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

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
//     `.trim();

//     // Send the prompt to DeepSeek API for content generation
//     const completion = await openai.chat.completions.create({
//       model: 'deepseek-chat', // Use the appropriate model name for DeepSeek
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         { role: 'user', content: prompt }
//       ],
//     });

//     if (!completion || !completion.choices || !completion.choices[0].message) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = completion.choices[0].message.content;
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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

// interface PaperResponse {
//   preview: string;
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
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

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
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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

// interface PaperResponse {
//   preview: string;
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
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

//     const prompt = `
//       Write a professional academic research paper on "${topic}" (${customizations.minimumWords} words minimum). Use this exact structure:

//       # Title
//       [Write a clear, specific academic title]

//       # Abstract
//       [Write a 250-word structured abstract covering background, methodology, results, and conclusions]

//       # 1.0 Introduction
//       ## 1.1 Background and Context
//       [Introduce the research field and current state]
      
//       ## 1.2 Problem Statement
//       [Define the specific research problem]
      
//       ## 1.3 Research Objectives
//       [List specific research goals]

//       # 2.0 Literature Review
//       ## 2.1 Theoretical Background
//       [Discuss key theories and concepts]
      
//       ## 2.2 Current Research
//       [Review recent studies and findings]
      
//       ## 2.3 Research Gaps
//       [Identify gaps in current knowledge]

//       # 3.0 Methodology
//       ## 3.1 Research Design
//       [Describe research approach]
      
//       ## 3.2 Data Collection
//       [Explain data sources and methods]
      
//       ## 3.3 Analysis Methods
//       [Detail analytical techniques]

//       # 4.0 Results
//       ## 4.1 Key Findings
//       [Present main research results]
//       ${customizations.includeGraphs ? `
//       ## 4.2 Data Visualization
//       [Describe graphs and trends]
//       ` : ''}
//       ## 4.3 Analysis
//       [Analyze findings in detail]

//       # 5.0 Discussion
//       ## 5.1 Interpretation
//       [Explain significance of results]
      
//       ## 5.2 Implications
//       [Discuss theoretical and practical implications]
      
//       ## 5.3 Limitations and Future Research
//       [Address limitations and future directions]

//       # 6.0 Conclusion
//       [Summarize key findings and contributions]

//       # References
//       [List at least 10 academic sources in ${citationStyle.toUpperCase()} format]

//       Requirements:
//       1. Use formal academic language throughout
//       2. Include in-text citations for all claims
//       3. Back up arguments with evidence
//       4. Make clear connections between sections
//       5. Use consistent terminology
//       6. Follow ${citationStyle.toUpperCase()} citation style
//       7. Focus on clear, logical flow

//       Important: Keep sections balanced and well-developed. Use professional academic tone.
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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

// interface PaperResponse {
//   preview: string;
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
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

//     const prompt = `
//       Create a detailed research paper on "${topic}" following these specifications:
      
//       Format:
//       - Citation style: ${citationStyle.toUpperCase()}
//       - Number of sections: ${customizations.sections}
//       - Minimum word count: ${customizations.minimumWords}
//       ${customizations.includeGraphs ? '- Include descriptions of relevant graphs and visualizations' : ''}

//       Structure:
//       1. Title (clear and specific)
//       2. Abstract (comprehensive summary)  [Write a 250-word structured abstract covering background, methodology, results, and conclusions]
//       3. Introduction [Write a 250-word structured Introduction]
//         3.1 Background and Context [Write a 150-word structured Introduce the research field and current state]
//         3.2 Problem Statement [Write a 100-word structured Define the specific research problem]
//         3.3 Research Objectives  [Write a 150-word structured List specific research goals]
//       4. Literature Review (${customizations.sections} major sections) [Write a 150-word structured Literature]
//         4.1 Theoretical Background [Write a 150-word structured Discuss key theories and concepts]
//         4.2 Current Research [Write a 150-word structured Review recent studies and findings]
//         4.3 Research Gaps [Write a 100-word structured Identify gaps in current knowledge]
//       5. Methodology (if applicable) [Write a 250-word structured Methodology]
//         5.1 Research Design [Write a 150-word structured Describe research approach]
//         5.2 Data Collection [Write a 200-word structured Explain data sources and methods]
//         5.3 Analysis Methods [Write a 130-word structured Detail analytical techniques]
//       6. Results and Discussion [Write a 200-word structured Results and Discussion]
//         6.1 Key Findings [Write a 100-word structured Present main research results]
//         6.2 Data Visualization [Write a 200-word structured Describe graphs and trends]
//         6.3 Analysis [Write a 200-word structured Analyze findings in detail]
//         6.4 Implications [Write a 100-word structured Discuss theoretical and practical implications]
//         6.5 Limitations and Future Research [Write a 100-word structured Address limitations and future directions]
//       7. Conclusion [Write a 250-word structured Summarize key findings and contributions]
//       8. References [Write a List of at least 10 academic sources in ${citationStyle.toUpperCase()} format]

//       Additional requirements:
//       - Use academic language and tone
//       - Include in-text citations
//       - Provide specific examples and evidence
//       - Make clear arguments and conclusions
//       - Use proper headings and subheadings
//       ${customizations.includeGraphs ? '- Include detailed descriptions of graphs where relevant' : ''}

//       Please format the paper using markdown for headings and sections.
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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

// interface PaperResponse {
//   preview: string;
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
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

//     const prompt = `
//       Generate a comprehensive research paper on "${topic}" with the following structure. For each section and subsection, provide detailed content. Do not skip any sections or leave any placeholders.

//       Format Requirements:
//       - Citation Style: ${citationStyle.toUpperCase()}
//       - Minimum Words: ${customizations.minimumWords}
//       - Each section must have a clear heading followed by introductory text before any subsections
//       - Use recent research papers (2020-2024) for citations
//       ${customizations.includeGraphs ? '- Include detailed data visualization descriptions' : ''}

//       Paper Structure:

//       # Title
//       [Generate a specific, academic title for the paper]

//       # Abstract
//       [Write a 300-word structured abstract that includes:
//       - Research background and context
//       - Clear problem statement
//       - Methodology overview
//       - Key findings
//       - Main conclusions]

//       # 1. Introduction [Start with 200 words introducing the overall topic before subsections]
//       [Write detailed introductory text explaining the importance and context of the research]
      
//       ## 1.1 Background and Context [250 words]
//       [Provide comprehensive background information with at least 3 citations]
      
//       ## 1.2 Problem Statement [200 words]
//       [Clearly define the research problem with supporting evidence]
      
//       ## 1.3 Research Objectives [200 words]
//       [List and explain specific research goals and questions]

//       # 2. Literature Review [Start with 200 words introducing the literature review approach]
//       [Write overview text explaining how the literature review was conducted]
      
//       ## 2.1 Theoretical Background [300 words]
//       [Discuss major theories and frameworks with at least 4 citations]
      
//       ## 2.2 Current Research [300 words]
//       [Review latest findings with at least 4 citations from 2020-2024]
      
//       ## 2.3 Research Gaps [200 words]
//       [Identify specific gaps with supporting evidence]

//       # 3. Methodology [Start with 200 words introducing the overall methodology]
//       [Write methodology overview explaining the research approach]
      
//       ## 3.1 Research Design [250 words]
//       [Detail the research design with justification]
      
//       ## 3.2 Data Collection [250 words]
//       [Explain data collection methods thoroughly]
      
//       ## 3.3 Analysis Methods [250 words]
//       [Describe analytical techniques in detail]

//       # 4. Results [Start with 200 words introducing the results section]
//       [Write overview text introducing the main findings]
      
//       ## 4.1 Key Findings [300 words]
//       [Present main results with data]
      
//       ${customizations.includeGraphs ? `## 4.2 Data Visualization [250 words]
//       [Describe graphs and trends in detail]
//       ` : ''}
      
//       ## 4.3 Analysis [300 words]
//       [Provide in-depth analysis of findings]

//       # 5. Discussion [Start with 200 words introducing the discussion section]
//       [Write overview text framing the discussion]
      
//       ## 5.1 Interpretation [300 words]
//       [Interpret results in context of literature]
      
//       ## 5.2 Implications [250 words]
//       [Discuss theoretical and practical implications]
      
//       ## 5.3 Limitations and Future Research [250 words]
//       [Address limitations and future directions]

//       # 6. Conclusion [400 words]
//       [Provide a comprehensive conclusion that:
//       - Summarizes key findings
//       - Addresses research objectives
//       - Highlights main contributions
//       - Suggests practical applications]

//       # References
//       Important: Provide at least 15 real, recent (2020-2024) academic references in ${citationStyle.toUpperCase()} format. Include:
//       - DOI numbers when available
//       - Full author names
//       - Journal names
//       - Volume/issue numbers
//       - Page numbers
//       Each reference must be cited at least once in the text.

//       Additional Requirements:
//       1. Every section must begin with its own introductory text before any subsections
//       2. Include transition sentences between sections and subsections
//       3. Use formal academic language throughout
//       4. Support all claims with citations
//       5. Include in-text citations in proper ${citationStyle.toUpperCase()} format
//       6. Ensure every subsection is fully developed with required word count
//       7. Use clear topic sentences for each paragraph
//       8. Include critical analysis throughout
//       9. Maintain consistent academic tone
//       10. Provide evidence-based arguments

//       Important Notes:
//       - Do not use placeholder text
//       - Write complete, detailed content for each section
//       - Include real, verifiable references
//       - Ensure logical flow between sections
//       - Maintain consistent formatting
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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



// IMport Code Working Bet Class for gemini google model

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

// interface PaperResponse {
//   preview: string;
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
//     const { topic, citationStyle, customizations }: PaperRequestBody = await req.json();

//     if (!topic || !citationStyle || !customizations) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-8b' });

//     const prompt = `
//       Generate a comprehensive research paper on "${topic}" with the following structure. For each section and subsection, provide detailed content. Do not skip any sections or leave any placeholders.

//       Format Requirements:
//       - Citation Style: ${citationStyle.toUpperCase()}
//       - Minimum Words: ${customizations.minimumWords}
//       - Each section must have a clear heading followed by introductory text before any subsections
//       - Use recent research papers (2020-2024) for citations
//       ${customizations.includeGraphs ? '- Include detailed data visualization descriptions' : ''}

//       Paper Structure:

//       # Title
//       [Generate a specific, academic title for the paper]

//       # Abstract
//       [Write a 300-word structured abstract that includes:
//       - Research background and context
//       - Clear problem statement
//       - Methodology overview
//       - Key findings
//       - Main conclusions]

//       # 1. Introduction [Start with 200 words introducing the overall topic before subsections]
//       [Write detailed introductory text explaining the importance and context of the research]
      
//       ## 1.1 Background and Context [250 words]
//       [Provide comprehensive background information with at least 3 citations]
      
//       ## 1.2 Problem Statement [200 words]
//       [Clearly define the research problem with supporting evidence]
      
//       ## 1.3 Research Objectives [200 words]
//       [List and explain specific research goals and questions]

//       # 2. Literature Review [Start with 200 words introducing the literature review approach]
//       [Write overview text explaining how the literature review was conducted]
      
//       ## 2.1 Theoretical Background [300 words]
//       [Discuss major theories and frameworks with at least 4 citations]
      
//       ## 2.2 Current Research [300 words]
//       [Review latest findings with at least 4 citations from 2020-2024]
      
//       ## 2.3 Research Gaps [200 words]
//       [Identify specific gaps with supporting evidence]

//       # 3. Methodology [Start with 200 words introducing the overall methodology]
//       [Write methodology overview explaining the research approach]
      
//       ## 3.1 Research Design [250 words]
//       [Detail the research design with justification]
      
//       ## 3.2 Data Collection [250 words]
//       [Explain data collection methods thoroughly]
      
//       ## 3.3 Analysis Methods [250 words]
//       [Describe analytical techniques in detail]

//       # 4. Results [Start with 200 words introducing the results section]
//       [Write overview text introducing the main findings]
      
//       ## 4.1 Key Findings [300 words]
//       [Present main results with data]
      
//       ${customizations.includeGraphs ? `## 4.2 Data Visualization [250 words]
//       [Describe graphs and trends in detail]
//       ` : ''}
      
//       ## 4.3 Analysis [300 words]
//       [Provide in-depth analysis of findings]

//       # 5. Discussion [Start with 200 words introducing the discussion section]
//       [Write overview text framing the discussion]
      
//       ## 5.1 Interpretation [300 words]
//       [Interpret results in context of literature]
      
//       ## 5.2 Implications [250 words]
//       [Discuss theoretical and practical implications]
      
//       ## 5.3 Limitations and Future Research [250 words]
//       [Address limitations and future directions]

//       # 6. Conclusion [400 words]
//       [Provide a comprehensive conclusion that:
//       - Summarizes key findings
//       - Addresses research objectives
//       - Highlights main contributions
//       - Suggests practical applications]

//       # References
//       Important: Provide at least 15 real, recent (2020-2024) academic references in ${citationStyle.toUpperCase()} format. Include:
//       - DOI numbers when available
//       - Full author names
//       - Journal names
//       - Volume/issue numbers
//       - Page numbers
//       Each reference must be cited at least once in the text.

//       Additional Requirements:
//       1. Every section must begin with its own introductory text before any subsections
//       2. Include transition sentences between sections and subsections
//       3. Use formal academic language throughout
//       4. Support all claims with citations
//       5. Include in-text citations in proper ${citationStyle.toUpperCase()} format
//       6. Ensure every subsection is fully developed with required word count
//       7. Use clear topic sentences for each paragraph
//       8. Include critical analysis throughout
//       9. Maintain consistent academic tone
//       10. Provide evidence-based arguments

//       Important Notes:
//       - Do not use placeholder text
//       - Write complete, detailed content for each section
//       - Include real, verifiable references
//       - Ensure logical flow between sections
//       - Maintain consistent formatting
//     `.trim();

//     const result = await model.generateContent(prompt);
    
//     if (!result || !result.response) {
//       throw new Error('Failed to generate content');
//     }

//     const fullContent = result.response.text();
    
//     if (!fullContent) {
//       throw new Error('Generated content is empty');
//     }

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
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

// Match frontend types
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

// interface PaperResponse {
//   preview: string;
//   fullContent: string;
//   status: 'success' | 'error';
//   message?: string;
// }

const openai = new OpenAI({
  apiKey: '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',  // Ensure you have this in .env
});

export async function POST(
  req: Request
): Promise<NextResponse> {
  try {
    // Input validation
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { 
          status: 'error',
          error: 'OpenAI API key is not configured' 
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { topic, citationStyle, customizations } = body as PaperRequestBody;

    if (!topic || !citationStyle || !customizations) {
      return NextResponse.json(
        { 
          status: 'error',
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    // Validate word count
    if (customizations.minimumWords > 10000) {
      return NextResponse.json(
        {
          status: 'error',
          error: 'Word count exceeds maximum limit of 10,000'
        },
        { status: 400 }
      );
    }

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: "You are a professional academic researcher creating original research papers."
      },
      {
        role: "user",
        content: `Create a research paper on "${topic}" with:
          - Citation style: ${citationStyle}
          - Minimum words: ${customizations.minimumWords}
          - Sections: ${customizations.sections}
          ${customizations.includeGraphs ? '- Include data visualization descriptions' : ''}
          
          Follow academic structure with Abstract, Introduction, Literature Review, Methodology, Results, Discussion, and Conclusion.`
      }
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages,
        temperature: 0.7,
        max_tokens: 4000,
        presence_penalty: 0.6,
        frequency_penalty: 0.8
      });

      const fullContent = completion.choices[0]?.message?.content;

      if (!fullContent) {
        throw new Error('No content generated');
      }

      // Create preview
      const preview = fullContent.split(' ').slice(0, 500).join(' ') + '...';

      return NextResponse.json({
        status: 'success',
        preview,
        fullContent,
      });

    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      if (openaiError instanceof Error) {
        // Handle specific OpenAI errors
        if (openaiError.message.includes('Rate limit')) {
          return NextResponse.json(
            { 
              status: 'error',
              error: 'Rate limit exceeded. Please try again in a moment.' 
            },
            { status: 429 }
          );
        }
        
        if (openaiError.message.includes('Invalid API key')) {
          return NextResponse.json(
            { 
              status: 'error',
              error: 'Service configuration error. Please contact support.' 
            },
            { status: 500 }
          );
        }
      }

      return NextResponse.json(
        { 
          status: 'error',
          error: 'Failed to generate paper content. Please try again.' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { 
        status: 'error',
        error: 'An unexpected error occurred. Please try again.' 
      },
      { status: 500 }
    );
  }
}