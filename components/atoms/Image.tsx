"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends NextImageProps {
  wrapperClassName?: string;
  fallbackSrc?: string;
}

export function Image({ 
  wrapperClassName, 
  className, 
  alt, 
  src, 
  fallbackSrc = "https://t3.ftcdn.net/jpg/05/04/28/96/360_F_504289605_zehJiK0tCuZLP2MdfFBpcJdOVxKLnXg1.jpg", 
  onLoad, 
  onError, 
  ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);

  if (src !== currentSrc) {
    setCurrentSrc(src);
    setImgSrc(src);
    setIsLoading(true);
  }

  return (
    <div className={cn("relative overflow-hidden", isLoading && "animate-pulse bg-border-soft", wrapperClassName)}>
      <NextImage
        src={imgSrc || fallbackSrc}
        className={cn(
          "transition-all duration-500 ease-in-out",
          isLoading ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0",
          className
        )}
        alt={alt}
        onLoad={(e) => {
          setIsLoading(false);
          if (onLoad) onLoad(e);
        }}
        onError={(e) => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
          if (onError) onError(e);
        }}
        {...props}
      />
    </div>
  );
}
