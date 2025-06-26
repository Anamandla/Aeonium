import { BarChart, Blocks, CloudCog, LayoutGrid, Users, Wand2 } from "lucide-react";

const featuresList = [
  { icon: Wand2, title: "AI-Powered Queries", description: "Ask questions in natural language and get instant insights from your data. No SQL required." },
  { icon: LayoutGrid, title: "Customizable Dashboards", description: "Create and share beautiful, interactive dashboards to visualize your key metrics." },
  { icon: Blocks, title: "Seamless Integrations", description: "Connect to your favorite data sources, from databases to analytics platforms, with ease." },
  { icon: Users, title: "Collaboration Tools", description: "Work with your team, share insights, and make data-driven decisions together." },
  { icon: CloudCog, title: "Secure & Cloud-Hosted", description: "Your data is safe, secure, and accessible from anywhere, on any device." },
  { icon: BarChart, title: "Real-Time Insights", description: "Get up-to-the-minute data and reports to stay ahead of the curve." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresList.map((feature, i) => (
            <div key={i} className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                    <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
