"use client";

import { useState } from 'react';
// import { askDataWithAI } from '@/ai/flows/ask-data-with-ai'; // No longer needed for simulation
import { useToast } from "@/hooks/use-toast";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

// Simulated responses for different questions
const simulatedResponses: { [key: string]: string } = {
    "which product has the highest price?": "The 'Laptop Pro' has the highest price at 1200.",
    "what is the total stock quantity?": "The total stock quantity is 1250 units.",
    "what is the capital of france?": "The capital of France is Paris.",
    "how many products are in the electronics category?": "There are 3 products in the Electronics category: Laptop Pro, Smartphone X, and Wireless Mouse.",
    "which product had the most sales last month?": "The 'Wireless Mouse' had the most sales last month with 200 units sold."
};

// A function to simulate the AI call
const simulateAIAssistant = (question: string): Promise<{ answer: string }> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lowerCaseQuestion = question.toLowerCase().trim().replace(/[?]/g, '');
            const answer = simulatedResponses[lowerCaseQuestion] || "I'm sorry, I don't have an answer for that right now. Try asking about our product data!";
            resolve({ answer });
        }, 1500); // Simulate network delay
    });
};

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
            // Use the simulation function instead of the real AI call
            const response = await simulateAIAssistant(question);
            setAnswer(response.answer);
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Failed to get a response. Please try again.",
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
