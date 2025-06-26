import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Bot } from "lucide-react";

const productFeatures = [
  {
    icon: CheckCircle,
    title: "Collaboration & Productivity Suite",
    description: "Stay connected, organized, and in control.",
    features: [
      "Real-time dashboards",
      "Shared workspaces",
      "AI-powered task tracking",
      "Report generation & scheduling",
    ],
  },
  {
    icon: Zap,
    title: "Automation Builder",
    description: "Automate tasks. Save time. Scale faster.",
    features: [
      "No-code automation workflows",
      "Pre-built industry templates",
      "Custom triggers & actions",
      "Slack, Email, and Zapier integrations",
    ],
  },
  {
    icon: Bot,
    title: "AI & ML Toolkit",
    description: "Let your data speak. Predict. Prescribe. Prosper.",
    features: [
      "Natural-language data queries",
      "Automated insights & anomaly detection",
      "Forecasting & trend modeling",
      "Churn prediction, sales prediction & more",
    ],
  },
];

export default function Product() {
  return (
    <section id="product" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Platform. Limitless Possibilities.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {productFeatures.map((item) => (
            <Card key={item.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                    <item.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </div>
                <p className="pt-2 text-muted-foreground">{item.description}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
