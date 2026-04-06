import { ReactNode } from "react";
import { Navbar } from "@/components/organisms/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="mt-auto border-t border-border-soft bg-surface py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} MealApp. Powered by{" "}
            <a
              href="https://www.themealdb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              TheMealDB
            </a>
          </p>
          <p className="text-xs text-muted">
            Created by{" "}
            <span className="font-medium text-secondary">Farhan Alfiy Ibnu Nabil</span>
            {" · "}Built with Next.js · Atomic Design
          </p>
        </div>
      </footer>
    </div>
  );
}
