import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Cloud, Blocks, FileText, Share2, Users } from "lucide-react";
import AIAssistant from './ai-assistant';

const featuresList = [
  { icon: Share2, title: "Plug-and-Play Data Integrations", description: "Connect to your favorite data sources in minutes with our one-click integrations." },
  { icon: Blocks, title: "Build & Deploy ML Models with No Code", description: "Create, train, and deploy machine learning models without writing a single line of code." },
  { icon: Users, title: "Granular Access Controls for Teams", description: "Manage team permissions and ensure data security with role-based access controls." },
  { icon: FileText, title: "Exportable Reports & Smart Alerts", description: "Generate beautiful reports and set up intelligent alerts to stay on top of your metrics." },
  { icon: Cloud, title: "Secure, Scalable, and Cloud-Based", description: "Our platform is built on enterprise-grade infrastructure, ensuring reliability and security." },
  { icon: BrainCircuit, title: "Ask Your Data with AI Assistant", description: "Use natural language to query your data and get instant insights from our AI." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features for Modern Teams
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to turn data into a competitive advantage.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuresList.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-7 text-foreground">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
            <h3 className="text-center font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Try our AI Assistant
            </h3>
            <p className="text-center mt-2 text-muted-foreground">Ask a question about the sample data below and see the magic.</p>
            <Card className="mt-8 max-w-4xl mx-auto border-0 shadow-none bg-transparent">
                <CardContent className="p-0 sm:p-6">
                    <AIAssistant />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
