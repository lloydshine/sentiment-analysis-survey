import { fetchSurvey } from "@/lib/actions/survey.actions";
import { SurveyCard } from "./survey";

export async function SurveyList() {
  const surveys = await fetchSurvey();

  if (!surveys || surveys.length === 0) {
    return <div>No Surveys</div>;
  }

  return (
    <section className="flex flex-wrap gap-4">
      {surveys.map((survey) => (
        <SurveyCard survey={survey} key={survey.id} />
      ))}
    </section>
  );
}
