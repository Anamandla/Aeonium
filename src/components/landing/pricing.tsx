import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Free",
        price: "R0",
        period: "/month",
        description: "For individuals and small teams starting out.",
        features: ["Basic dashboard", "1 AI query/day", "CSV upload", "Community support"],
        cta: "Start for Free",
        href: "#contact",
        isPopular: false,
    },
    {
        name: "Pro",
        price: "R399",
        period: "/month",
        description: "For growing businesses that need more power.",
        features: ["Everything in Free", "Unlimited queries & reports", "Automation builder", "Standard integrations", "Email & chat support"],
        cta: "Get Started with Pro",
        href: "#contact",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        period: "",
        description: "For large organizations with custom needs.",
        features: ["Everything in Pro", "Custom ML models", "White-labeling", "Team permissions", "Dedicated support"],
        cta: "Contact Sales",
        href: "#contact",
        isPopular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Flexible Pricing for Every Stage of Growth
                    </h2>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
                            <CardHeader className="flex-1">
                                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                                <div className="flex items-baseline pt-4">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-sm font-semibold leading-6 text-muted-foreground">{plan.period}</span>}
                                </div>
                                <CardDescription className="pt-2">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul role="list" className="space-y-3 text-sm leading-6 text-muted-foreground">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>
                                    <Link href={plan.href}>{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 flex justify-center gap-4">
                     <Button size="lg" variant="outline">Compare Plans</Button>
                     <Button size="lg">Request a Quote</Button>
                </div>
            </div>
        </section>
    );
}
