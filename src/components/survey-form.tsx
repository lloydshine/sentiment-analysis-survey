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

  async function onSubmit(data: z.infer<typeof SurveyFormSchema>) {
    const analysis = await analyze(question, data.sentiment);
    console.log(analysis.data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="sentiment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{question}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about this"
                  className="resize-none text-lg h-[200px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Your reponse must be polite.</FormDescription>
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
