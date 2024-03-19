import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">Check out some examples</PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
        <PageHeaderDescription>
          Dashboard, cards, authentication. Some examples built using the components. Use this as a
          guide to build your own.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/examples" className={cn(buttonVariants(), "rounded-[6px]")}>
            Examples
          </Link>
          <Link
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
          >
            Components
          </Link>
        </PageActions>
      </PageHeader>
    </main>
  );
}
