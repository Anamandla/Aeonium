import { Button } from '@/components/ui/button';
import { Wand } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-28 md:pt-40 md:pb-36 overflow-hidden">
        <div className="absolute aspect-square rounded-full blur-[100px] w-[65%] max-w-5xl -z-10 bg-primary/20 bottom-1/2 inset-0 -translate-y-2/3 mx-auto" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center w-full mb-4">
          <Link href="#features" className="flex items-center bg-card border border-primary/20 hover:border-primary/40 px-4 py-1 ring-2 ring-primary/20 rounded-full text-sm transition-all">
            <span className="flex items-center gap-2">
              <Wand className="h-4 w-4 text-primary" />
              <span className='text-muted-foreground'>New updates! Our AI is now even smarter.</span>
            </span>
          </Link>
        </div>
        <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl pb-4">
          <span className="main-text-gradient">
            Empowering Businesses with AI-Powered Insights
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          Build smarter, grow faster, and automate your way to success with Aeonium Insights. The future of data analytics and automation—made simple, powerful, and accessible.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#pricing">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
             <Link href="#product">Watch Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
