"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brush, Code, Database } from "lucide-react";
import AIAssistant from "./ai-assistant";

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
    <pre className="p-4 bg-muted/50 rounded-md text-sm overflow-x-auto text-left">
        <code>{children}</code>
    </pre>
)

export default function CodeFeature() {
  return (
    <section id="code-feature" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mr-auto max-w-4xl">
            <div className="mr-auto max-w-xl">
                <p className="colored-title">AI for everyone</p>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-4">
                    Check out our powerful AI Assistant
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Showcase how you can use natural language to query your data in all sorts of different ways.
                </p>
            </div>
        </div>
        
        <div className="relative rounded-2xl p-1 mt-8">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary to-accent rounded-2xl opacity-25 blur"></div>
            <Card className="relative z-10 bg-background overflow-hidden">
                <Tabs defaultValue="ai" className="w-full">
                <div className="p-4 border-b border-border/50">
                    <TabsList className="grid w-full grid-cols-1 sm:w-auto sm:grid-cols-3">
                        <TabsTrigger value="ai"><Brush className="mr-2 h-4 w-4" />AI Assistant</TabsTrigger>
                        <TabsTrigger value="data"><Database className="mr-2 h-4 w-4" />Sample Data</TabsTrigger>
                        <TabsTrigger value="code"><Code className="mr-2 h-4 w-4" />Code</TabsTrigger>
                    </TabsList>
                </div>
                <CardContent className="p-4 sm:p-6 min-h-[400px]">
                    <TabsContent value="ai">
                        <AIAssistant />
                    </TabsContent>
                    <TabsContent value="data">
                        <p className="text-muted-foreground mb-4">
                            This is the data context provided to the AI assistant. You can ask questions about this data.
                        </p>
                        <CodeBlock>
{`product_id,product_name,category,price,stock_quantity,sales_last_month
101,Laptop Pro,Electronics,1200,50,25
102,Smartphone X,Electronics,800,150,80
103,Coffee Maker,Home Goods,50,200,120
104,Running Shoes,Apparel,90,300,90
105,Desk Chair,Furniture,150,100,40
106,Wireless Mouse,Electronics,25,500,200`}
                        </CodeBlock>
                    </TabsContent>
                     <TabsContent value="code">
                        <p className="text-muted-foreground mb-4">
                            Here is an example of how to call our AI flow in your own code.
                        </p>
                        <CodeBlock>
{`import { askDataWithAI } from '@/ai/flows/ask-data-with-ai';

const response = await askDataWithAI({
  question: "Which product has the highest price?",
  dataContext: "your_csv_data_here"
});

console.log(response.answer);`}
                        </CodeBlock>
                    </TabsContent>
                </CardContent>
                </Tabs>
            </Card>
        </div>
      </div>
    </section>
  );
}
