import { Counter } from "@/components/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1 className="text-4xl font-bold">Testing example</h1>
      <Counter />
    </main>
  );
}
