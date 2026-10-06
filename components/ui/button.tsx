import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-[2px] font-medium tracking-[-0.005em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-[#25304a]",
        secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
        "primary-inverse": "bg-paper text-ink hover:bg-white",
        "secondary-inverse": "border border-on-navy/30 text-on-navy hover:border-on-navy hover:bg-white/[0.04]",
      },
      size: {
        md: "h-11 px-4 text-[0.9375rem]",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
