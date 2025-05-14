"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { generateHeroHeadline } from '@/ai/flows/generate-hero-headline';
import { Sparkles, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  keywords: z.string().min(3, { message: "Keywords must be at least 3 characters." }).max(100, { message: "Keywords cannot exceed 100 characters." }),
});

type FormData = z.infer<typeof formSchema>;

interface AiHeadlineGeneratorProps {
  onHeadlineGenerated: (headline: string) => void;
  currentHeadline?: string;
}

export default function AiHeadlineGenerator({ onHeadlineGenerated, currentHeadline }: AiHeadlineGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);
    try {
      const result = await generateHeroHeadline({ keywords: data.keywords });
      if (result.headline) {
        onHeadlineGenerated(result.headline);
        setSuccessMessage("New headline generated successfully!");
        form.reset(); // Reset form after successful generation
      } else {
        setError("AI could not generate a headline. Please try different keywords.");
      }
    } catch (err) {
      console.error("Error generating headline:", err);
      setError("Failed to generate headline. Please check your connection or try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Sparkles className="mr-2 h-6 w-6 text-primary" />
          AI Headline Generator
        </CardTitle>
        <CardDescription>
          Enter a few keywords related to your website or product, and let AI craft a compelling headline for your hero section.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {currentHeadline && (
              <div className="p-4 border rounded-md bg-secondary/50">
                <p className="text-sm text-muted-foreground">Current Headline:</p>
                <p className="font-semibold text-lg">{currentHeadline}</p>
              </div>
            )}
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="keywords" className="text-base">Keywords</FormLabel>
                  <FormControl>
                    <Textarea
                      id="keywords"
                      placeholder="e.g., innovative tech solutions, eco-friendly products, startup growth"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide comma-separated keywords or a short phrase.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {successMessage && (
              <Alert variant="default" className="bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-700">
                 <Sparkles className="h-4 w-4 text-green-700 dark:text-green-400" />
                <AlertTitle className="text-green-800 dark:text-green-300">Success!</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-400">{successMessage}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Headline
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
