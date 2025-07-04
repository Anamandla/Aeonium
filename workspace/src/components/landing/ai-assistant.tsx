"use client";

import { useState } from 'react';
import { askDataWithAI } from '@/ai/flows/ask-data-with-ai';
import { useToast } from "@/hooks/use-toast";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

// The sample data context provided to the AI.
const dataContext = `product_id,product_name,category,price,stock_quantity,sales_last_month
101,Laptop Pro,Electronics,1200,50,25
102,Smartphone X,Electronics,800,150,80
103,Coffee Maker,Home Goods,50,200,120
104,Running Shoes,Apparel,90,300,90
105,Desk Chair,Furniture,150,100,40
106,Wireless Mouse,Electronics,25,500,200`;

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
            const response = await askDataWithAI({
                question: question,
                dataContext: dataContext,
            });
            setAnswer(response.answer);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Failed to get a response from the AI. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                    placeholder="e.g., Which product has the highest price? or What is the capital of France?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                    disabled={isLoading}
                    className="bg-muted/50"
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
            
            {(isLoading || answer) && (
                <Card className="mt-6 bg-transparent border-0 shadow-none">
                    <CardHeader className='p-0'>
                        <CardTitle className="flex items-center gap-2 text-base font-semibold">
                           <Sparkles className="h-5 w-5 text-primary" /> AI Response
                        </CardTitle>
                    </CardHeader>
                    <CardContent className='p-0 pt-4'>
                        {isLoading && !answer && <p className="text-muted-foreground">Thinking...</p>}
                        {answer && <p className="text-foreground">{answer}</p>}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
