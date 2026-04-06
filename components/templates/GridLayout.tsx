import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridLayoutProps {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  breadcrumb?: ReactNode;
}

export function GridLayout({ children, className, title, description, breadcrumb }: GridLayoutProps) {
  return (
    <section className={cn("mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-16", className)}>
      {breadcrumb && <div>{breadcrumb}</div>}
      {(title || description) && (
        <div className="mb-10 flex flex-col gap-3">
          {title && <div>{title}</div>}
          {description && <div>{description}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
