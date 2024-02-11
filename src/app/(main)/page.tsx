import { SurveyList } from "@/components/survey-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="pb-10">
      <Suspense fallback={<>Loading Surveys...</>}>
        <SurveyList />
      </Suspense>
    </main>
  );
}
