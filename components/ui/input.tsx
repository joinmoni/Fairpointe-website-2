import * as React from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-[2px] border border-rule-strong bg-white/60 px-3.5 text-base text-ink placeholder:text-ink-muted/80 transition-colors hover:border-ink/50 focus-visible:border-ink focus-visible:bg-white focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ink aria-invalid:border-danger aria-invalid:focus-visible:outline-danger disabled:opacity-60";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={cn(fieldBase, "h-12", className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea className={cn(fieldBase, "min-h-40 resize-y py-3 leading-relaxed", className)} {...props} />
  );
}

export { Input, Textarea };
