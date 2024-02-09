import { Separator } from "@/components/ui/separator";
import { fetchSurveyByID } from "@/lib/actions/survey.actions";

export default async function ViewSurveyPage({
  params,
}: {
  params: { surveyId: string };
}) {
  const survey = await fetchSurveyByID(params.surveyId);
  if (!survey) return null;
  return (
    <main>
      <h1 className="text-3xl mb-2">{survey.title} Survey</h1>
      <p className="text-foreground/80">{survey.description}</p>
      <Separator className="mb-10 mt-5" />
      <p>Question: {survey.question}</p>
    </main>
  );
}
