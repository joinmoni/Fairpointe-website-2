import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "primary-inverse" | "secondary-inverse";
  className?: string;
};

export function CtaButton({ href, children, variant = "primary", className }: CtaProps) {
  const isPrimary = variant === "primary" || variant === "primary-inverse";
  return (
    <Button asChild variant={variant} className={className}>
      <Link href={href}>
        {children}
        {isPrimary ? (
          <ArrowRight
            aria-hidden
            strokeWidth={1.75}
            className="transition-transform duration-200 group-hover/button:translate-x-0.5"
          />
        ) : null}
      </Link>
    </Button>
  );
}

/** Descriptive inline link with an underline that strengthens on hover. */
export function ArrowLink({
  href,
  children,
  className,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2 text-base font-medium underline decoration-1 underline-offset-[6px] transition-colors",
        inverse
          ? "text-on-navy decoration-on-navy/35 hover:decoration-on-navy"
          : "text-ink decoration-ink/30 hover:decoration-ink",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        strokeWidth={1.75}
        className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
      />
    </Link>
  );
}
