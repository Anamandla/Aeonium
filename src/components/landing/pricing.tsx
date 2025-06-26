"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const plans = [
    {
        name: "Free",
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: "For individuals and small teams starting out.",
        features: ["Basic dashboard", "1 AI query/day", "CSV upload", "Community support"],
        cta: "Start for Free",
        href: "#contact",
    },
    {
        name: "Pro",
        monthlyPrice: 399,
        yearlyPrice: 339,
        description: "For growing businesses that need more power.",
        features: ["Everything in Free", "Unlimited queries & reports", "Automation builder", "Standard integrations", "Email & chat support"],
        cta: "Get Started with Pro",
        href: "#contact",
        isPopular: true,
    },
    {
        name: "Enterprise",
        monthlyPrice: null,
        yearlyPrice: null,
        description: "For large organizations with custom needs.",
        features: ["Everything in Pro", "Custom ML models", "White-labeling", "Team permissions", "Dedicated support"],
        cta: "Contact Sales",
        href: "#contact",
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="colored-title">Pricing</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                        Flexible Pricing for Every Stage of Growth
                    </h2>
                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <Label htmlFor="plan-toggle">Monthly</Label>
                    <Switch id="plan-toggle" checked={isYearly} onCheckedChange={setIsYearly} aria-label="Toggle between monthly and yearly pricing" />
                    <Label htmlFor="plan-toggle">Yearly</Label>
                </div>


                <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={cn(
                            "flex flex-col bg-card/50 border-border/50",
                            plan.isPopular ? 'border-2 border-primary' : ''
                        )}>
                            <CardHeader className="flex-1">
                                <CardTitle className="font-headline text-2xl flex justify-between items-center">
                                    <span>{plan.name}</span>
                                    {plan.isPopular && <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Popular</span>}
                                </CardTitle>
                                <CardDescription className="pt-2">{plan.description}</CardDescription>
                                <div className="flex items-baseline pt-4">
                                    {plan.monthlyPrice !== null ? (
                                        <>
                                            <span className="text-4xl font-bold tracking-tight">
                                                R{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                                        </>
                                    ) : (
                                        <span className="text-3xl font-bold tracking-tight">Contact Us</span>
                                    )}
                                </div>
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
            </div>
        </section>
    );
}
