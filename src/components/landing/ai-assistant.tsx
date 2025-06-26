"use client";

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';

export default function AIAssistant() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!question.trim()) return;

        setIsLoading(true);
        setAnswer('');
        
        // Simulate API call for static export compatibility
        setTimeout(() => {
            const normalizedQuestion = question.toLowerCase().trim().replace(/\?$/, '');
            const sampleResponses: Record<string, string> = {
                'which product has the highest price': 'The "Laptop Pro" has the highest price at 1200.',
                'what is the total stock quantity': 'The total stock quantity is 1150 units.',
                'how many electronics products were sold last month': 'A total of 105 electronics products were sold last month (25 for Laptop Pro, and 80 for Smartphone X).',
            };
            
            const response = sampleResponses[normalizedQuestion] || "This is a demo! I can only answer a few specific questions. Try asking: 'Which product has the highest price?'";

            setAnswer(response);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="text-left">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                    placeholder="e.g., Which product has the highest price?"
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
