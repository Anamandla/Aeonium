import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Let’s Talk Solutions
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Ready to unlock the power of your data? Get in touch to schedule a free demo or a call with our experts. We're excited to show you what Aeonium Insights can do for your business.
                </p>
            </div>

            <form className="space-y-6 bg-card p-8 rounded-lg shadow-sm">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help?" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">Book a Free Demo</Button>
                    <Button type="button" variant="outline" size="lg" className="w-full sm:w-auto">Schedule a Call</Button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}
