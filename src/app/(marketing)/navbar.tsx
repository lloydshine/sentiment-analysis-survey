import { ModeToggle } from "@/components/theme-provider";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4 border-b-2 bg-background/30 backdrop-blur-md flex justify-between items-center">
      <div className="flex items-center gap-4">
        <PaperPlaneIcon />
        <Link href="/">Surveys</Link>
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </nav>
  );
}
