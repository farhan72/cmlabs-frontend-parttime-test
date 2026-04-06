import Link from "next/link";
import { Utensils } from "lucide-react";
import { Typography } from "@/components/atoms/Typography";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-surface/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl flex h-16 items-center px-4 md:px-8">
        <Link href="/ingredients" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-sm">
            <Utensils className="h-5 w-5" />
          </div>
          <Typography variant="h3" className="hidden sm:inline-block">MealApp</Typography>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/ingredients" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Ingredients
          </Link>
        </nav>
      </div>
    </header>
  );
}
