import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  
  const variants = {
    default: "border-transparent bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
    secondary: "border-transparent bg-indigo-100 text-indigo-800 hover:bg-indigo-200",
    outline: "border-gray-200 text-gray-800",
  };

  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      {children}
    </div>
  );
}
