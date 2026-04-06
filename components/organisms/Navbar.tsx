import Link from "next/link";
import { Utensils } from "lucide-react";
import { Typography } from "@/components/atoms/Typography";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl flex h-16 items-center px-4 md:px-8">
        <Link href="/ingredients" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <Utensils className="h-5 w-5" />
          </div>
          <Typography variant="h3" className="hidden sm:inline-block">MealApp</Typography>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/ingredients" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
            Ingredients
          </Link>
        </nav>
      </div>
    </header>
  );
}
