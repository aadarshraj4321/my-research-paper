import './globals.css'; 
import type { Metadata } from "next";
import { ThemeProvider } from './components/common/themeContext';

export const metadata: Metadata = {
  title: "MyResearchPaper - AI-Powered Research Paper Generator",
  description: "Generate professional research papers with AI assistance. MyResearchPaper helps you create high-quality papers quickly and efficiently.",
  keywords: [
    "research paper generator",
    "AI research paper",
    "academic writing",
    "research paper writing",
    "AI writing tool",
    "MyResearchPaper",
  ],
  authors: [
    {
      name: "MyResearchPaper Team",
      url: "https://myresearchpaper.in",
    },
  ],
  openGraph: {
    title: "MyResearchPaper - AI-Powered Research Paper Generator",
    description: "Generate professional research papers with AI assistance. MyResearchPaper helps you create high-quality papers quickly and efficiently.",
    url: "https://myresearchpaper.in",
    siteName: "MyResearchPaper",
    images: [
      {
        url: "https://myresearchpaper.in/og-image.png", 
        width: 1200,
        height: 630,
        alt: "MyResearchPaper - AI-Powered Research Paper Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyResearchPaper - AI-Powered Research Paper Generator",
    description: "Generate professional research papers with AI assistance. MyResearchPaper helps you create high-quality papers quickly and efficiently.",
    images: ["https://myresearchpaper.in/og-image.png"], 
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon-16x16.png", 
    apple: "/apple-touch-icon.png", 
  },
  manifest: "/site.webmanifest", 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
