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
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });


    
    const prompt = `
      Generate a comprehensive research paper on "${topic}" with the following structure. For each section and subsection, provide detailed content. Do not skip any sections or leave any placeholders.

      Format Requirements:
      - Citation Style: ${citationStyle.toUpperCase()}
      - Minimum Words: ${customizations.minimumWords}
      - Each section must have a clear heading followed by introductory text before any subsections
      - Use recent research papers (2020-2024) for citations
      ${customizations.includeGraphs ? '- Include detailed data visualization descriptions' : ''}

      Paper Structure:

      # Title
      [Generate a specific, academic title for the paper]

      # Abstract
      [Write a 300-word structured abstract that includes:
      - Research background and context
      - Clear problem statement
      - Methodology overview
      - Key findings
      - Main conclusions]

      # 1. Introduction [Start with 200 words introducing the overall topic before subsections]
      [Write detailed introductory text explaining the importance and context of the research]
      
      ## 1.1 Background and Context [250 words]
      [Provide comprehensive background information with at least 3 citations]
      
      ## 1.2 Problem Statement [200 words]
      [Clearly define the research problem with supporting evidence]
      
      ## 1.3 Research Objectives [200 words]
      [List and explain specific research goals and questions]

      # 2. Literature Review [Start with 200 words introducing the literature review approach]
      [Write overview text explaining how the literature review was conducted]
      
      ## 2.1 Theoretical Background [300 words]
      [Discuss major theories and frameworks with at least 4 citations]
      
      ## 2.2 Current Research [300 words]
      [Review latest findings with at least 4 citations from 2020-2024]
      
      ## 2.3 Research Gaps [200 words]
      [Identify specific gaps with supporting evidence]

      # 3. Methodology [Start with 200 words introducing the overall methodology]
      [Write methodology overview explaining the research approach]
      
      ## 3.1 Research Design [250 words]
      [Detail the research design with justification]
      
      ## 3.2 Data Collection [250 words]
      [Explain data collection methods thoroughly]
      
      ## 3.3 Analysis Methods [250 words]
      [Describe analytical techniques in detail]

      # 4. Results [Start with 200 words introducing the results section]
      [Write overview text introducing the main findings]
      
      ## 4.1 Key Findings [300 words]
      [Present main results with data]
      
      ${customizations.includeGraphs ? `## 4.2 Data Visualization [250 words]
      [Describe graphs and trends in detail]
      ` : ''}
      
      ## 4.3 Analysis [300 words]
      [Provide in-depth analysis of findings]

      # 5. Discussion [Start with 200 words introducing the discussion section]
      [Write overview text framing the discussion]
      
      ## 5.1 Interpretation [300 words]
      [Interpret results in context of literature]
      
      ## 5.2 Implications [250 words]
      [Discuss theoretical and practical implications]
      
      ## 5.3 Limitations and Future Research [250 words]
      [Address limitations and future directions]

      # 6. Conclusion [400 words]
      [Provide a comprehensive conclusion that:
      - Summarizes key findings
      - Addresses research objectives
      - Highlights main contributions
      - Suggests practical applications]

      # References
      Important: Provide at least 15 real, recent (2020-2024) academic references in ${citationStyle.toUpperCase()} format. Include:
      - DOI numbers when available
      - Full author names
      - Journal names
      - Volume/issue numbers
      - Page numbers
      Each reference must be cited at least once in the text.

      Additional Requirements:
      1. Every section must begin with its own introductory text before any subsections
      2. Include transition sentences between sections and subsections
      3. Use formal academic language throughout
      4. Support all claims with citations
      5. Include in-text citations in proper ${citationStyle.toUpperCase()} format
      6. Ensure every subsection is fully developed with required word count
      7. Use clear topic sentences for each paragraph
      8. Include critical analysis throughout
      9. Maintain consistent academic tone
      10. Provide evidence-based arguments

      Important Notes:
      - Do not use placeholder text
      - Write complete, detailed content for each section
      - Include real, verifiable references
      - Ensure logical flow between sections
      - Maintain consistent formatting
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
