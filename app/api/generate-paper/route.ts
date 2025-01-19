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

const OPENAI_API_KEY = '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'
if (!OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined in environment variables.");
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

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

    const prompt = `
You are a professional academic researcher writing a completely original research paper. Create a comprehensive, plagiarism-free paper on "${topic}" following this exact structure. Each section must be unique and written in your own academic voice.

CRITICAL REQUIREMENTS:
- Generate 100% original content with unique insights and analysis
- Avoid common phrases and generic academic language
- Create novel connections between existing research
- Develop unique arguments supported by diverse sources
- Use your own voice while maintaining academic rigor

FORMAT SPECIFICATIONS:
- Citation Style: ${citationStyle.toUpperCase()}
- Minimum Words: ${customizations.minimumWords}
- Use clear hierarchical heading structure (# for main sections, ## for subsections)
- Include detailed transitions between all sections
${customizations.includeGraphs ? '- Incorporate original data visualization descriptions' : ''}

PAPER STRUCTURE:

# The Title
[Create a unique, specific academic title that precisely describes the research focus and contribution]

# Abstract
[Craft a 300-word structured abstract including:
• Novel research context and background
• Specific problem statement
• Methodological approach
• Key findings and insights
• Original conclusions and implications]

# 1. Introduction
[Write a compelling 200-word introduction that establishes the unique angle of this research]

## 1.1 Background and Context
[Develop original background analysis with at least 3 diverse citations, 250 words]

## 1.2 Problem Statement
[Articulate a precise research problem with supporting evidence, 200 words]

## 1.3 Research Objectives
[Define specific, measurable research goals and questions, 200 words]

# 2. Literature Review
[Present a unique synthesis of existing research, 200 words introduction]

## 2.1 Theoretical Background
[Analyze major theories with original insights, minimum 4 citations, 300 words]

## 2.2 Current Research Landscape
[Synthesize recent findings with original analysis, minimum 4 recent citations (2020-2024), 300 words]

## 2.3 Research Gaps
[Identify unique gaps with evidence-based reasoning, 200 words]

# 3. Methodology
[Describe your original research approach, 200 words introduction]

## 3.1 Research Design
[Detail your unique methodological framework, 250 words]

## 3.2 Data Collection
[Explain your specific data collection methods, 250 words]

## 3.3 Analysis Methods
[Describe your analytical techniques in detail, 250 words]

# 4. Results
[Present your findings clearly, 200 words introduction]

## 4.1 Key Findings
[Report detailed results with supporting data, 300 words]

${customizations.includeGraphs ? `## 4.2 Data Visualization
[Describe original visual representations of data, 250 words]
` : ''}

## 4.3 Analysis
[Provide in-depth interpretation of findings, 300 words]

# 5. Discussion
[Frame your original contributions, 200 words introduction]

## 5.1 Interpretation
[Offer novel interpretations of results, 300 words]

## 5.2 Implications
[Discuss unique theoretical and practical implications, 250 words]

## 5.3 Limitations and Future Research
[Address constraints and future directions, 250 words]

# 6. Conclusion
[Craft a comprehensive 400-word conclusion that:
• Synthesizes key findings
• Addresses research objectives
• Highlights original contributions
• Suggests practical applications]

# References
[Provide minimum 15 recent (2020-2024) academic references in ${citationStyle.toUpperCase()} format, including:
• DOI numbers where available
• Complete author names
• Full journal names
• Volume/issue numbers
• Page ranges
Each reference must be cited distinctly in the text]

ADDITIONAL REQUIREMENTS:
1. Write distinct introductory paragraphs for each major section
2. Create smooth transitions between all sections
3. Maintain formal academic tone while using original language
4. Support all assertions with properly formatted citations
5. Follow ${citationStyle.toUpperCase()} citation style precisely
6. Meet word count requirements for each section
7. Begin each paragraph with clear topic sentences
8. Include critical analysis throughout
9. Use original academic voice consistently
10. Present evidence-based arguments

ENSURE:
- Every sentence is original and unique
- Each section flows logically to the next
- All content is properly cited
- Headers are properly formatted
- Content is academically rigorous while being original
`.trim();

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",  // Using GPT-4 for higher quality and originality
      messages: [
        {
          role: "system",
          content: "You are a distinguished academic researcher creating completely original research papers. Generate unique, plagiarism-free content with proper academic rigor and novel insights. Follow the exact structure provided while maintaining originality throughout."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.8,  // Slightly higher for more originality
      max_tokens: 4000,
      presence_penalty: 0.6,  // Increased to encourage originality
      frequency_penalty: 0.8   // Increased to discourage repetitive phrases
    });

    const fullContent = completion.choices[0]?.message?.content;

    if (!fullContent) {
      throw new Error('Generated content is empty');
    }

    // Validate content structure
    if (!fullContent.includes("Abstract") || !fullContent.includes("Introduction")) {
      throw new Error('Generated content missing required sections');
    }

    // Create preview (first 500 words)
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