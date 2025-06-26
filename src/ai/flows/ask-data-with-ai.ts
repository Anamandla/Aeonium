// src/ai/flows/ask-data-with-ai.ts

/**
 * @fileOverview An AI agent that allows users to ask questions about their data using natural language.
 *
 * - askDataWithAI - A function that handles the process of answering user questions about data.
 * - AskDataWithAIInput - The input type for the askDataWithAI function.
 * - AskDataWithAIOutput - The return type for the askDataWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskDataWithAIInputSchema = z.object({
  question: z.string().describe('The question about the data in natural language.'),
  dataContext: z.string().describe('The context of the data, such as a description of the dataset or relevant business information.'),
});

export type AskDataWithAIInput = z.infer<typeof AskDataWithAIInputSchema>;

const AskDataWithAIOutputSchema = z.object({
  answer: z.string().describe('The answer to the question based on the provided data context.'),
});

export type AskDataWithAIOutput = z.infer<typeof AskDataWithAIOutputSchema>;

export async function askDataWithAI(input: AskDataWithAIInput): Promise<AskDataWithAIOutput> {
  return askDataWithAIFlow(input);
}

const askDataWithAIPrompt = ai.definePrompt({
  name: 'askDataWithAIPrompt',
  input: {schema: AskDataWithAIInputSchema},
  output: {schema: AskDataWithAIOutputSchema},
  prompt: `You are an AI assistant that helps users answer questions about their data.

  Your goal is to provide accurate and insightful answers based on the given data context and the user's question.
  Be concise and provide only relevant information.

  Data Context: {{{dataContext}}}
  Question: {{{question}}}

  Answer: `,
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
