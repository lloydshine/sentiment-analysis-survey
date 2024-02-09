import { Badge } from "./ui/badge";

export function SurveyBadge({ available }: { available: boolean }) {
  if (available) return <Badge variant="secondary">Ongoing</Badge>;
  return <Badge variant="destructive">Concluded</Badge>;
}
