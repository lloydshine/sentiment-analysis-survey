"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { analyze } from "@/lib/ai";
import { createResponse } from "@/lib/actions/survey.actions";
import { useRouter } from "next/navigation";

const SurveyFormSchema = z.object({
  sentiment: z.string().min(100, {
    message: "Sentiment must be at least 100 characters.",
  }),
});

export function SurveyForm({
  question,
  surveyId,
}: {
  question: string;
  surveyId: string;
}) {
  const form = useForm<z.infer<typeof SurveyFormSchema>>({
    resolver: zodResolver(SurveyFormSchema),
  });

  const router = useRouter();

  async function onSubmit(data: z.infer<typeof SurveyFormSchema>) {
    const analysis = await analyze(question, data.sentiment);
    const { rating, feedbacks } = analysis.data;
    const DATA = {
      response: data.sentiment,
      feedbacks: JSON.stringify(feedbacks, null, 2),
      rating: rating,
    };
    await createResponse(surveyId, DATA);
    router.push(`${surveyId}/done`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="sentiment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">{question}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your thoughts about this"
                  className="resize-none text-lg h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This survey uses AI Sentiment Analysis to analyze your response.
                You must respond in English.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
}
