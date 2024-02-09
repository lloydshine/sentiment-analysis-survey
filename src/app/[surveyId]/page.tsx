import { SurveyForm } from "@/components/survey-form";
import { Separator } from "@/components/ui/separator";
import { fetchSurveyByID } from "@/lib/actions/survey.actions";

export default async function SurveyPage({
  params,
}: {
  params: { surveyId: string };
}) {
  const survey = await fetchSurveyByID(params.surveyId);
  if (!survey || !survey.available) return null;
  return (
    <main className="md:px-28 px-10 py-10">
      <p className="text-primary font-black">Survey</p>
      <h1 className="text-3xl mb-8">{survey.title}</h1>
      <p className="text-foreground/80">{survey.description}</p>
      <Separator className="mb-10 mt-5" />
      <SurveyForm question={survey.question} surveyId={survey.id} />
    </main>
  );
}
