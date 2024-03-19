import { ExamplesNav } from "@/components/examples-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <section className="flex flex-col gap-10 justify-center items-center p-24 min-h-screen">
        <ExamplesNav />
        <div className="w-full mx-auto max-w-[90rem] relative">
          <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
