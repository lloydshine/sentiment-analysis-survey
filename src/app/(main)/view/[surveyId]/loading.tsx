import { CircleBackslashIcon } from "@radix-ui/react-icons";

export default function Loading() {
  return (
    <main className="flex justify-center items-center h-80">
      <CircleBackslashIcon className="w-[40px] h-[40px] animate-spin" />
    </main>
  );
}
