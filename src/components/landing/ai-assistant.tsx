"use client";

import { useState } from 'react';
import { askDataWithAI } from '@/ai/flows/ask-data-with-ai';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const sampleData = `product_id,product_name,category,price,stock_quantity,sales_last_month
101,Laptop Pro,Electronics,1200,50,25
102,Smartphone X,Electronics,800,150,80
103,Coffee Maker,Home Goods,50,200,120
104,Running Shoes,Apparel,90,300,90
105,Desk Chair,Furniture,150,100,40
106,Wireless Mouse,Electronics,25,500,200
107,T-Shirt,Apparel,20,800,400
108,Bookshelf,Furniture,75,80,15
109,Blender,Home Goods,40,250,150
110,Gaming PC,Electronics,2500,20,10
`;

export default function AIAssistant() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;

        setIsLoading(true);
        setAnswer('');
        
        try {
            const result = await askDataWithAI({
                question,
                dataContext: `Here is some sample sales data in CSV format:\n\n${sampleData}`
            });
            setAnswer(result.answer);
        } catch (err) {
            toast({
              variant: "destructive",
              title: "Error",
              description: "An error occurred while fetching the AI response. Please try again.",
            })
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Card className="bg-background">
                <CardHeader>
                    <CardTitle>Sample Data</CardTitle>
                    <CardDescription>This is the data context for your questions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <pre className="p-4 bg-muted rounded-md text-sm overflow-x-auto">
                        <code>{sampleData}</code>
                    </pre>
                </CardContent>
            </Card>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Textarea
                    placeholder="e.g., Which product has the highest price?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                    disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading || !question.trim()} className="w-full sm:w-auto">
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Ask AI
                </Button>
            </form>
            
            {answer && (
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Sparkles className="h-5 w-5 text-primary" /> AI Response
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground">{answer}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
