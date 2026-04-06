import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Simple logic to show a window of pages
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, -1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, -1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages);
      }
    }
    return pages;
  };

  return (
    <nav className={cn("flex items-center justify-center space-x-1", className)} aria-label="Pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors enabled:hover:bg-border-soft disabled:cursor-not-allowed disabled:opacity-50 text-primary cursor-pointer"
        aria-label="First page"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors enabled:hover:bg-border-soft disabled:cursor-not-allowed disabled:opacity-50 text-primary cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {getPageNumbers().map((page, i) =>
        page === -1 ? (
          <span key={`ellipsis-${i}`} className="inline-flex h-10 w-10 items-center justify-center text-muted">
            <MoreHorizontal className="h-4 w-4" />
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center cursor-pointer rounded-md text-sm font-medium transition-colors",
              currentPage === page
                ? "bg-accent text-white hover:bg-accent-hover"
                : "text-primary hover:bg-border-soft"
            )}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors enabled:hover:bg-border-soft disabled:cursor-not-allowed disabled:opacity-50 text-primary cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors enabled:hover:bg-border-soft disabled:cursor-not-allowed disabled:opacity-50 text-primary cursor-pointer"
        aria-label="Last page"
      >
        Last
      </button>
    </nav>
  );
}
