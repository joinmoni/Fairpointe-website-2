import * as React from "react";
import { cn } from "@/lib/utils";
import { Container, Grid, Section } from "./layout";
import { CtaButton } from "./links";
import type { Faq } from "@/lib/seo";

/** Page-level hero. Typography carries the composition; `aside` is optional. */
export function PageHero({
  title,
  children,
  actions,
  aside,
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-32">
      <Container>
        <Grid className="gap-y-14">
          <div className={cn("col-span-4 md:col-span-12", aside ? "lg:col-span-7" : "lg:col-span-10")}>
            <h1 className="type-h1 motion-safe:animate-rise">{title}</h1>
            {children ? (
              <div
                className="type-lede prose-flow mt-8 max-w-[38rem] text-ink-soft motion-safe:animate-rise md:mt-10"
                style={{ animationDelay: "80ms" }}
              >
                {children}
              </div>
            ) : null}
            {actions ? (
              <div
                className="mt-10 flex flex-wrap gap-3 motion-safe:animate-rise md:mt-12"
                style={{ animationDelay: "160ms" }}
              >
                {actions}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div className="col-span-4 md:col-span-12 lg:col-span-4 lg:col-start-9 lg:self-end">{aside}</div>
          ) : null}
        </Grid>
      </Container>
    </section>
  );
}

/** Heading on the left, body on the right. The default editorial section. */
export function SplitSection({
  id,
  title,
  children,
  tone,
  rule,
  headingId,
}: {
  id?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  tone?: "paper" | "deep" | "navy";
  rule?: boolean;
  headingId?: string;
}) {
  const hId = headingId ?? (id ? `${id}-heading` : undefined);
  return (
    <Section id={id} tone={tone} rule={rule} aria-labelledby={hId}>
      <Grid className="gap-y-8">
        <h2 id={hId} className="type-h2 col-span-4 md:col-span-10 lg:col-span-5">
          {title}
        </h2>
        <div
          className={cn(
            "type-body prose-flow col-span-4 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-7 lg:pt-2",
            tone === "navy" ? "text-on-navy-soft" : "text-ink-soft",
          )}
        >
          {children}
        </div>
      </Grid>
    </Section>
  );
}

/** Visible FAQ list. Pair with `faqSchema` using the same data. */
export function FaqSection({
  id,
  title,
  faqs,
  rule,
}: {
  id: string;
  title: string;
  faqs: readonly Faq[];
  rule?: boolean;
}) {
  return (
    <Section id={id} rule={rule} aria-labelledby={`${id}-heading`}>
      <Grid className="gap-y-10">
        <h2 id={`${id}-heading`} className="type-h2 col-span-4 md:col-span-10 lg:col-span-4">
          {title}
        </h2>
        <div className="col-span-4 border-t border-rule md:col-span-12 lg:col-span-7 lg:col-start-6">
          {faqs.map((faq) => (
            <article key={faq.question} className="grid gap-3 border-b border-rule py-8 md:grid-cols-7 md:gap-8">
              <h3 className="type-h4 md:col-span-3">{faq.question}</h3>
              <p className="type-body text-ink-soft md:col-span-4">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Grid>
    </Section>
  );
}

type Action = { label: string; href: string };

/** Closing call to action. One primary action, optionally one secondary. */
export function CtaBand({
  id = "next-step",
  title,
  children,
  primary,
  secondary,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <Section id={id} tone="navy" aria-labelledby={`${id}-heading`} className="py-24 md:py-32 lg:py-40">
      <Grid className="gap-y-10">
        <h2 id={`${id}-heading`} className="type-h2 col-span-4 md:col-span-10 lg:col-span-7">
          {title}
        </h2>
        <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:pt-2">
          <p className="type-body text-on-navy-soft">{children}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <CtaButton href={primary.href} variant="primary-inverse">
              {primary.label}
            </CtaButton>
            {secondary ? (
              <CtaButton href={secondary.href} variant="secondary-inverse">
                {secondary.label}
              </CtaButton>
            ) : null}
          </div>
        </div>
      </Grid>
    </Section>
  );
}

/** A numbered, ruled list. Used for capabilities instead of card grids. */
export function RuledList({
  items,
  numbered = false,
  tone = "paper",
  className,
  columns = 1,
}: {
  items: readonly string[];
  numbered?: boolean;
  tone?: "paper" | "navy";
  className?: string;
  columns?: 1 | 2;
}) {
  const Tag = numbered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "border-t",
        tone === "navy" ? "border-rule-navy" : "border-rule",
        columns === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-8",
        className,
      )}
    >
      {items.map((item, i) => (
        <li
          key={item}
          className={cn(
            "flex items-baseline gap-5 border-b py-4 text-[1.0625rem] font-medium tracking-[-0.01em]",
            tone === "navy" ? "border-rule-navy text-on-navy" : "border-rule text-ink",
          )}
        >
          {numbered ? (
            <span
              aria-hidden
              className={cn("numeral w-6 text-[0.875rem]", tone === "navy" ? "text-on-navy-muted" : "text-ink-muted")}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </Tag>
  );
}
