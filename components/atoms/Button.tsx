import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none ring-offset-background active:scale-95";
    
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow",
      secondary: "bg-indigo-100 text-indigo-900 hover:bg-indigo-200",
      outline: "border border-gray-300 hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow",
      ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-600",
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
