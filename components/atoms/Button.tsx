import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-95";
    
    const variants = {
      primary: "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-lg",
      secondary: "bg-accent/10 text-accent hover:bg-accent/20",
      outline: "border border-border-soft hover:bg-background text-primary shadow-sm hover:shadow-lg",
      ghost: "hover:bg-background hover:text-accent-hover text-secondary",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 py-2 px-4 text-sm",
      lg: "h-12 px-8 text-base",
      icon: "size-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
