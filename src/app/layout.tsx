import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Aeonium Insights',
  description: 'Empowering Businesses with AI-Powered Insights',
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
      <body className="font-body antialiased bg-background">
        <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,#673ab722,transparent)]"></div>
          <div 
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg_xmlns=%27http://www.w3.org/2000/svg%27_viewBox=%270_0_32_32%27_width=%2732%27_height=%2732%27_fill=%27none%27_stroke=%27hsl(var(--foreground)_/_0.05)%27%3e%3cpath_d=%27M0_.5H31.5V32%27/%3e%3c/svg%3e')]"
          ></div>
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
