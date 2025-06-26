import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
        question: "How does the AI data query work?",
        answer: "You can simply type your question in natural language (e.g., 'What were our total sales last month?'), and our AI assistant will analyze your connected data sources to provide an answer. No complex SQL queries needed."
    },
    {
        question: "What kind of data can I connect to Aeonium Insights?",
        answer: "You can upload data via CSV files. We are actively working on adding direct integrations with popular databases like PostgreSQL, MySQL, and platforms like Google Analytics and Salesforce."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We prioritize data security. All data is encrypted both in transit and at rest. We adhere to strict security protocols to ensure your information is always protected."
    },
    {
        question: "Can I customize the dashboards?",
        answer: "Yes! Aeonium Insights offers flexible and customizable dashboards. You can create reports and visualizations that are tailored to your specific business needs and KPIs."
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
