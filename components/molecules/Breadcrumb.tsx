import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Typography } from "@/components/atoms/Typography";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-sm text-gray-500 whitespace-nowrap overflow-x-auto pb-2 scrollbar-none">
      <Link href="/ingredients" className="flex flex-row items-center hover:text-indigo-600 transition-colors shrink-0">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center space-x-2 shrink-0">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-indigo-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <Typography variant="span" className="font-medium text-gray-900 pointer-events-none">
              {item.label}
            </Typography>
          )}
        </div>
      ))}
    </nav>
  );
}
