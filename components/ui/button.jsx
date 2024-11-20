import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent hover:bg-accent-hover text-white hover:text-white",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90",
        outline:
          "border border-white p-2 rounded-full hover:text-accent-hover hover:border-accent-hover transition-all uppercase",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-accent-100/80",
        ghost:
          "hover:text-accent dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "underline-offset-4 hover:underline decoration-accent-hover decoration-2",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "text-xl p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
