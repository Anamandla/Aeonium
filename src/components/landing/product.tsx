import { Button } from "../ui/button";
import Image from 'next/image';
import { PlayCircle } from "lucide-react";

export default function Product() {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
            <p className="colored-title">Data driven insights</p>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                Watch how our data solutions solve your problems
            </h2>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <button className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                    <Image 
                        src="https://placehold.co/1500x938.png" 
                        alt="Dashboard preview"
                        width={1500}
                        height={938}
                        className="w-full h-auto"
                        data-ai-hint="dashboard analytics"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="relative flex items-center justify-center w-20 h-20">
                            <div className="absolute w-full h-full rounded-full bg-primary/70 blur-sm group-hover:animate-ping motion-safe:animate-ping z-10"></div>
                            <div className="relative z-20 bg-background/80 backdrop-blur-sm border-2 border-primary rounded-full p-2 group-hover:border-primary/70 transition">
                                <PlayCircle className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}
