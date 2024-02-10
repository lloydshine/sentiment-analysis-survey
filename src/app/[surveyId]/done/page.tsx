import { CheckCircledIcon } from "@radix-ui/react-icons";

export default function DonePage() {
  return (
    <main className="h-screen flex justify-center items-center flex-col">
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <CheckCircledIcon className="text-primary w-[40px] h-[40px] md:w-[80px] md:h-[80px]" />
        <h1 className="md:text-3xl font-bold">Thank you for submitting!</h1>
      </div>
    </main>
  );
}
