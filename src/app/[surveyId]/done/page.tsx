"use client";

import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";

export default function DonePage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  return (
    <main className="h-screen flex justify-center items-center flex-col">
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {status === "success" ? (
          <div className="flex items-center gap-4">
            <CheckCircledIcon className="text-primary w-[40px] h-[40px] md:w-[70px] md:h-[70px]" />
            <h1 className="md:text-3xl font-bold">Thank you for submitting!</h1>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <CrossCircledIcon className="text-destructive w-[40px] h-[40px] md:w-[70px] md:h-[70px]" />
            <h1 className="md:text-3xl font-bold">Error, Try again.</h1>
          </div>
        )}
      </div>
    </main>
  );
}
