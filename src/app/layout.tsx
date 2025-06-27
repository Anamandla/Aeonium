import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import GalaxyBackground from '@/components/galaxy-background';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Aeonium Insights',
  description: 'Empowering Businesses with AI-Powered Insights',
  icons: {
    icon: [
        { url: `${basePath}/favicon.png`, type: 'image/png' },
        { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
        { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <GalaxyBackground />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
