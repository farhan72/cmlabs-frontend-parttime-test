"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

interface ImageProps extends NextImageProps {
  wrapperClassName?: string;
}

export function Image({ wrapperClassName, className, alt, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {isLoading && <Skeleton className="absolute inset-0 z-0 h-full w-full rounded-none" />}
      <NextImage
        className={cn(
          "transition-all duration-500 z-10",
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        alt={alt}
        {...props}
      />
    </div>
  );
}
