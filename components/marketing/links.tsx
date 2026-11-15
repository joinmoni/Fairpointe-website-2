import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "primary-inverse" | "secondary-inverse";
  className?: string;
  /** Open in a new tab. Use for external pages such as the booking link. */
  newTab?: boolean;
};

/** Internal routes use `next/link`; `mailto:` and external URLs use a plain anchor. */
function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function CtaButton({ href, children, variant = "primary", className, newTab = false }: CtaProps) {
  const isPrimary = variant === "primary" || variant === "primary-inverse";
  const content = (
    <>
      {children}
      {isPrimary ? (
        <ArrowRight
          aria-hidden
          strokeWidth={1.75}
          className="transition-transform duration-200 group-hover/button:translate-x-0.5"
        />
      ) : null}
      {newTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );
  return (
    <Button asChild variant={variant} className={className}>
      {isExternal(href) ? (
        <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </Button>
  );
}

/** Descriptive inline link with an underline that strengthens on hover. */
export function ArrowLink({
  href,
  children,
  className,
  inverse = false,
  newTab = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
  newTab?: boolean;
}) {
  const classes = cn(
    "group/link inline-flex items-center gap-2 text-base font-medium underline decoration-1 underline-offset-[6px] transition-colors",
    inverse
      ? "text-on-navy decoration-on-navy/35 hover:decoration-on-navy"
      : "text-ink decoration-ink/30 hover:decoration-ink",
    className,
  );
  const content = (
    <>
      {children}
      <ArrowRight
        aria-hidden
        strokeWidth={1.75}
        className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
      />
      {newTab ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );
  return isExternal(href) ? (
    <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
