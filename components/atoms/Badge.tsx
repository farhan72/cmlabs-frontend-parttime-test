import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-accent text-white hover:bg-accent-hover shadow-sm",
    secondary: "border-transparent bg-accent/10 text-accent hover:bg-accent/20",
    outline: "border-border-soft text-primary",
  };

  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      {children}
    </div>
  );
}
