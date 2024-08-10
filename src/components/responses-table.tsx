import { Response } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function ResponsesTable({
  responses,
}: {
  responses: Response[];
}) {
  return (
    <Table>
      <TableCaption>A list of your recent responses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Response</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead className="w-[400px]">Feedbacks</TableHead>
          <TableHead>Date Responded</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {responses.map((res) => (
          <TableRow key={res.id}>
            <TableCell>{res.response}</TableCell>
            <TableCell className="font-bold">{res.rating}</TableCell>
            <TableCell>
              <pre className="max-w-[500px] overflow-auto">{res.feedbacks}</pre>
            </TableCell>
            <TableCell>
              {new Date(res.dateResponded).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <div className="flex justify-end">
                <Button size="icon" variant="destructive">
                  <TrashIcon />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
