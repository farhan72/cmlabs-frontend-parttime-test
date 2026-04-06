import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-surface transition-all duration-300 hover:shadow-[var(--shadow-soft)] border border-border-soft shadow-sm",
        onClick ? "cursor-pointer hover:-translate-y-1" : "",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("flex flex-col p-5", className)}>{children}</div>;
}
