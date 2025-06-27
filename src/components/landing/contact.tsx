import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="relative rounded-2xl bg-gradient-to-br from-primary to-accent/30 p-1">
        <div className="relative rounded-xl bg-background p-8 md:p-12">
            <div className="mx-auto grid gap-8 max-w-3xl md:grid-cols-3">
              <div className="md:col-span-2">
                  <p className="colored-title">Start Your Journey</p>
                  <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                      Unlock the Power of Your Data Today.
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
