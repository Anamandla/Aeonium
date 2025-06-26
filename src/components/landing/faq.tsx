import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
        question: "Who is Aeonium for?",
        answer: "Our themes are for developers who want pre-created templates for their projects, whether for personal use, a new SaaS business, or client websites. They offer speed, customization, built-in SEO, and image optimization, saving you weeks of time and effort."
    },
    {
        question: "What components are included?",
        answer: "We provide over 60 components, including multiple hero, feature, service, and testimonial sections, FAQ accordions, contact forms, legal pages, blog layouts, and a cookie banner."
    },
    {
        question: "What do you mean by 'free updates'?",
        answer: "When you purchase any of our products, you get lifetime updates for free. We regularly update our tools to ensure compatibility with the latest technologies and to add new features or bug fixes."
    },
    {
        question: "Can I use a theme for multiple projects?",
        answer: "Yes, you can use our products for as many projects as you like. You can even sell websites you create with them to your clients. As long as you don't resell the theme itself, you're good to go."
    }
]

export default function Faq() {
    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="colored-title">FAQ</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                        Answers to all your questions
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl mt-10">
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border rounded-md bg-card/50 border-border/50">
                                <AccordionTrigger className="px-5 text-left hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-5 text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
