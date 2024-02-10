import { DeleteButton } from "@/components/delete-btn";
import ResponsesTable from "@/components/responses-table";
import { Separator } from "@/components/ui/separator";
import { fetchResponse, fetchSurveyByID } from "@/lib/actions/survey.actions";

export default async function ViewSurveyPage({
  params,
}: {
  params: { surveyId: string };
}) {
  const survey = await fetchSurveyByID(params.surveyId);
  if (!survey) return <>Not Found</>;
  const responses = (await fetchResponse(survey.id)) || [];
  return (
    <main>
      <h1 className="text-3xl mb-2">{survey.title} Survey</h1>
      <p className="text-foreground/80">{survey.description}</p>
      <Separator className="mb-10 mt-5" />
      <p className="font-bold my-4">Question: {survey.question}</p>
      <ResponsesTable responses={responses} />
      <DeleteButton surveyId={survey.id} />
    </main>
  );
}
