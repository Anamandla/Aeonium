import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-background -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div 
            className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Empowering Businesses with AI-Powered Insights
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          Build smarter, grow faster, and automate your way to success with Aeonium Insights. The future of data analytics and automation—made simple, powerful, and accessible.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#pricing">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
             <Link href="#product">Watch Demo</Link>
          </Button>
           <Button size="lg" variant="ghost" asChild>
             <Link href="#contact">Book a Call</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
