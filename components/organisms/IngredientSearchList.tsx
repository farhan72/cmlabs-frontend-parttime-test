"use client";

import { useSearchParams } from "next/navigation";
import type { Ingredient } from "@/interfaces";
import { IngredientGrid } from "./IngredientGrid";
import { SearchInput } from "@/components/molecules/SearchInput";
import { Typography } from "@/components/atoms/Typography";
import { Badge } from "@/components/atoms/Badge";
import { Pagination } from "@/components/molecules/Pagination";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";

interface IngredientSearchListProps {
  ingredients: Ingredient[];
}

const ITEMS_PER_PAGE = 12;

export function IngredientSearchList({ ingredients }: IngredientSearchListProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [isDesktop, setIsDesktop] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Check window size on mount and resize
  useEffect(() => {
    // We start assuming desktop, but verify on client-side
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const filteredIngredients = useMemo(() => {
    if (!query) return ingredients;
    const lowerQuery = query.toLowerCase();
    return ingredients.filter((ingredient) =>
      ingredient.strIngredient.toLowerCase().includes(lowerQuery)
    );
  }, [ingredients, query]);

  // Reset pagination/scroll when query changes or view mode changes
  useEffect(() => {
    setCurrentPage(1);
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [query, isDesktop]);

  // Derived state for the current view
  const currentItems = useMemo(() => {
    if (isDesktop) {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      return filteredIngredients.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    } else {
      return filteredIngredients.slice(0, displayedCount);
    }
  }, [filteredIngredients, isDesktop, currentPage, displayedCount]);

  const totalPages = Math.ceil(filteredIngredients.length / ITEMS_PER_PAGE);

  // Intersection observer for infinite scroll
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && !isDesktop) {
      setDisplayedCount((prev) => 
        prev < filteredIngredients.length ? prev + ITEMS_PER_PAGE : prev
      );
    }
  }, [isDesktop, filteredIngredients.length]);

  useEffect(() => {
    const element = observerTarget.current;
    if (!element || isDesktop) return;

    const option = { threshold: 0.1, rootMargin: "100px" };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [handleObserver, isDesktop]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-surface p-6 rounded-2xl shadow-sm border border-border-soft">
        <div className="flex flex-col gap-2">
          <Typography variant="h3" className="text-primary">
            {query ? "Search Results" : "All Ingredients"}
          </Typography>
          <div className="flex items-center gap-2">
            <Typography variant="p" className="text-secondary text-sm">
              {query ? `Found ${filteredIngredients.length} ingredients matching "${query}"` : "Browse our extensive list of ingredients"}
            </Typography>
            {!query && (
              <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border-none transition-colors">
                {ingredients.length} total
              </Badge>
            )}
          </div>
        </div>
        <SearchInput 
          placeholder="Search ingredients..." 
          className="w-full lg:max-w-md" 
        />
      </div>

      <IngredientGrid ingredients={currentItems} />

      {filteredIngredients.length === 0 && (
        <div className="py-20 text-center bg-background rounded-2xl border-2 border-dashed border-border-soft">
          <Typography variant="h3" className="text-muted mb-2">
            No ingredients found
          </Typography>
          <Typography variant="p" className="text-secondary">
            Try searching for something else or browse all ingredients.
          </Typography>
        </div>
      )}

      {filteredIngredients.length > 0 && (
        <div className="mt-8 flex justify-center pb-8">
          {isDesktop ? (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          ) : (
            <div ref={observerTarget} className="h-10 w-full flex items-center justify-center text-muted">
              {displayedCount < filteredIngredients.length ? (
                <span className="animate-pulse">Loading more...</span>
              ) : (
                <span className="text-sm opacity-50">No more ingredients</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
