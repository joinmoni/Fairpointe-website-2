import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("size-4", className)}>
      <rect x="0.75" y="0.75" width="14.5" height="14.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="7" height="7" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-[1.1875rem] font-semibold tracking-[-0.03em]",
        inverse ? "text-on-navy" : "text-ink",
        className,
      )}
    >
      <LogoMark />
      <span>Fairpointe</span>
      <span className="sr-only">, home</span>
    </Link>
  );
}
