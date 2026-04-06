"use client";

import { useEffect } from "react";
import { MainLayout } from "@/components/templates/MainLayout";
import { GridLayout } from "@/components/templates/GridLayout";
import { Typography } from "@/components/atoms/Typography";
import { Button } from "@/components/atoms/Button";
import { AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <GridLayout className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6 drop-shadow-sm">
          <AlertCircle className="h-10 w-10" />
        </div>
        <Typography variant="h2" className="mb-4 text-gray-900">Something went wrong!</Typography>
        <Typography variant="p" className="mb-8 max-w-md text-gray-500">
          We encountered an unexpected error while trying to fetch data. Please try again.
        </Typography>
        <Button onClick={() => reset()} size="lg">
          Try again
        </Button>
      </GridLayout>
    </MainLayout>
  );
}
