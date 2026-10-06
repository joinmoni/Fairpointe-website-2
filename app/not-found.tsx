import type { Metadata } from "next";
import { Container } from "@/components/marketing/layout";
import { ArrowLink, CtaButton } from "@/components/marketing/links";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Fairpointe" },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="pt-20 pb-32 md:pt-32 md:pb-40">
      <Container>
        <h1 className="type-h1 max-w-[16ch]">This page could not be found.</h1>
        <p className="type-lede mt-8 max-w-[34rem] text-ink-soft">
          The address may have changed. Start from the homepage or speak to Fairpointe directly.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <CtaButton href="/">Return to the homepage</CtaButton>
          <ArrowLink href="/contact">Speak to Fairpointe</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
