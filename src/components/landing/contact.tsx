import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-card/50 border border-border/50 overflow-hidden">
            <div className="absolute -z-10 aspect-square w-[80%] max-w-xl rounded-full bg-primary/10 blur-3xl top-0 left-0 -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
            <div className="mx-auto grid gap-8 max-w-3xl md:grid-cols-3 py-20 px-4">
                <div className="md:col-span-2">
                    <p className="colored-title">What are you waiting for?</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                        Get your effective website up in a snap.
                    </h2>
                </div>
                <div className="flex justify-start items-end md:justify-end">
                    <Button size="lg" asChild>
                        <Link href="#pricing">Get Started</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
