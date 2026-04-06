import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small";

interface TypographyProps {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

export function Typography({ variant = "p", children, className }: TypographyProps) {
  const Component = variant;
  
  const baseClasses = {
    h1: "text-4xl font-extrabold tracking-tight lg:text-5xl text-primary",
    h2: "text-3xl font-semibold tracking-tight text-primary",
    h3: "text-2xl font-semibold tracking-tight text-primary",
    h4: "text-xl font-semibold tracking-tight text-primary",
    p: "leading-7 text-secondary",
    span: "",
    small: "text-sm font-medium leading-none text-muted",
  };

  return (
    <Component className={cn(baseClasses[variant], className)}>
      {children}
    </Component>
  );
}
