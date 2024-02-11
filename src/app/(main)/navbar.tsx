import { ModeToggle } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4 border-b-2 bg-background/30 backdrop-blur-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <PaperPlaneIcon className="text-primary w-[20px] h-[20px]" />
        <Link href="/" className="font-bold">
          Surveyors
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary" asChild>
          <Link href="/create">New Survey</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
