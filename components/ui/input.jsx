import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md hover:border-2 border-accent focus:border-0 bg-stone-400/60 px-3 py-2 text-sm ring-offset-accent focus:ring-offset-accent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
