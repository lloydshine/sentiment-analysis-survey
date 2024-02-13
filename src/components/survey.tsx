import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { SurveyBadge } from "./badge";

export function SurveyCard({ survey }: { survey: any }) {
  return (
    <Card className="lg:w-[600px] w-full">
      <CardHeader>
        <div className="flex justify-between mb-2">
          <p className="text-sm text-foreground/50">By: {survey.createdBy}</p>
          <SurveyBadge available={survey.available} />
        </div>
        <h1 className="text-2xl font-semibold">{survey.title}</h1>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90">{survey.description}</p>
      </CardContent>
      <CardFooter className="items-center justify-between">
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/view/${survey.id}`}>View</Link>
          </Button>
          <Button disabled={!survey.available} variant="link">
            <Link href={`/${survey.id}`}>Answer</Link>
          </Button>
        </div>
        <p className="text-sm text-foreground/50">
          Responses: {survey._count.responses}
        </p>
      </CardFooter>
    </Card>
  );
}
