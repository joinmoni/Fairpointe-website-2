import * as React from "react";
import { cn } from "@/lib/utils";

/** 1280px content width with responsive gutters. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1344px] px-5 sm:px-8", className)} {...props} />;
}

/** The 12 column grid used for every section on desktop. */
export function Grid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-6 lg:gap-x-8", className)}
      {...props}
    />
  );
}

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "paper" | "deep" | "navy";
  rule?: boolean;
  spacing?: "default" | "compact" | "none";
};

export function Section({
  tone = "paper",
  rule = true,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        tone === "paper" && "bg-paper text-ink",
        tone === "deep" && "bg-paper-deep text-ink",
        tone === "navy" && "on-navy bg-navy text-on-navy",
        spacing === "default" && "py-20 md:py-28 lg:py-32",
        spacing === "compact" && "py-14 md:py-20",
        className,
      )}
      {...props}
    >
      <Container>
        {rule && tone === "paper" ? <div aria-hidden className="mb-14 h-px bg-rule md:mb-20" /> : null}
        {children}
      </Container>
    </section>
  );
}
