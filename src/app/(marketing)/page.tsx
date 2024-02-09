import { SurveyList } from "@/components/survey-list";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<>Loading Surveys...</>}>
        <SurveyList />
      </Suspense>
    </main>
  );
}
