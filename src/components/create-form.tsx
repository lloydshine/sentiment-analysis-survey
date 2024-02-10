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
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createSurvey } from "@/lib/actions/survey.actions";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

const CreateSurveySchema = z.object({
  title: z.string().max(50),
  description: z.string().max(80),
  question: z.string().max(50),
  createdBy: z.string().max(30),
});

export function CreateSurveyForm() {
  const form = useForm<z.infer<typeof CreateSurveySchema>>({
    resolver: zodResolver(CreateSurveySchema),
  });

  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(data: z.infer<typeof CreateSurveySchema>) {
    await createSurvey(data);
    toast({
      title: "Survey Successfully Created",
      description: "You can now view your new Survey",
    });
    router.push("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about this survey."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Question" />
              </FormControl>
              <FormDescription>
                The question you want to ask to your audience.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="createdBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>This survey is created by..</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormDescription>
                Your name will be visible in the survey.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Create
        </Button>
      </form>
    </Form>
  );
}
