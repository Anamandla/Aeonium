'use server';

/**
 * @fileOverview An AI agent that allows users to ask questions about their data using natural language, or ask general knowledge questions.
 *
 * - askDataWithAI - A function that handles the process of answering user questions.
 * - AskDataWithAIInput - The input type for the askDataWithAI function.
 * - AskDataWithAIOutput - The return type for the askDataWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskDataWithAIInputSchema = z.object({
  question: z.string().describe('The question in natural language.'),
  dataContext: z.string().describe('Optional context of the data, such as a CSV table or business information.'),
});

export type AskDataWithAIInput = z.infer<typeof AskDataWithAIInputSchema>;

const AskDataWithAIOutputSchema = z.object({
  answer: z.string().describe('The answer to the question based on the provided data context or general knowledge.'),
});

export type AskDataWithAIOutput = z.infer<typeof AskDataWithAIOutputSchema>;

export async function askDataWithAI(input: AskDataWithAIInput): Promise<AskDataWithAIOutput> {
  return askDataWithAIFlow(input);
}

const askDataWithAIPrompt = ai.definePrompt({
  name: 'askDataWithAIPrompt',
  input: {schema: AskDataWithAIInputSchema},
  output: {schema: AskDataWithAIOutputSchema},
  prompt: `You are a helpful AI assistant. Your goal is to provide accurate and insightful answers.

If the user provides a data context, use it to answer questions about that data. If the question is not about the provided data, use your general knowledge to answer. Be concise and provide only relevant information.

Data Context:
{{{dataContext}}}

Question:
{{{question}}}

Answer:`,
});

const askDataWithAIFlow = ai.defineFlow(
  {
    name: 'askDataWithAIFlow',
    inputSchema: AskDataWithAIInputSchema,
    outputSchema: AskDataWithAIOutputSchema,
  },
  async input => {
    const {output} = await askDataWithAIPrompt(input);
    return output!;
  }
);
