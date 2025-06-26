import { Blocks, AppWindow, Cloud, Heart, LayoutGrid, Wand } from "lucide-react";

const featuresList = [
  { icon: Heart, title: "Connect all our contacts", description: "Sync with your calendar apps and contacts. Google, Outlook, and more." },
  { icon: LayoutGrid, title: "Dashboards for all businesses", description: "Customizable dashboards to fit the unique needs of your business." },
  { icon: Cloud, title: "Synced to the cloud", description: "Your data is accessible from everywhere, syncing across all your devices." },
  { icon: AppWindow, title: "Your business intelligence, simplified", description: "We provide the tools to make your data work for you, not the other way around." },
  { icon: Wand, title: "Real-time insights", description: "Data syncs across your team instantly. Real-time access, with 99.9% uptime." },
  { icon: Blocks, title: "Connect to popular apps", description: "Integrate with the tools you already use and love." },
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
