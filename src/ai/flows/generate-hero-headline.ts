// 'use server'
'use server';

/**
 * @fileOverview Generates a compelling headline for a hero section based on keywords.
 *
 * - generateHeroHeadline - A function that generates the hero headline.
 * - GenerateHeroHeadlineInput - The input type for the generateHeroHeadline function.
 * - GenerateHeroHeadlineOutput - The return type for the generateHeroHeadline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroHeadlineInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the website content to generate a relevant headline.'),
});
export type GenerateHeroHeadlineInput = z.infer<typeof GenerateHeroHeadlineInputSchema>;

const GenerateHeroHeadlineOutputSchema = z.object({
  headline: z
    .string()
    .describe('A compelling headline generated based on the provided keywords.'),
});
export type GenerateHeroHeadlineOutput = z.infer<typeof GenerateHeroHeadlineOutputSchema>;

export async function generateHeroHeadline(input: GenerateHeroHeadlineInput): Promise<GenerateHeroHeadlineOutput> {
  return generateHeroHeadlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHeroHeadlinePrompt',
  input: {schema: GenerateHeroHeadlineInputSchema},
  output: {schema: GenerateHeroHeadlineOutputSchema},
  prompt: `Generate a compelling and engaging headline for a website hero section based on the following keywords: {{{keywords}}}. The headline should be concise and capture the essence of the website's purpose. Focus on grabbing the user's attention immediately. Do not include any introductory or concluding remarks. Just provide the headline. Length must be under 10 words.`,
});

const generateHeroHeadlineFlow = ai.defineFlow(
  {
    name: 'generateHeroHeadlineFlow',
    inputSchema: GenerateHeroHeadlineInputSchema,
    outputSchema: GenerateHeroHeadlineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
