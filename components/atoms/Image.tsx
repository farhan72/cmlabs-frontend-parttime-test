"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends NextImageProps {
  wrapperClassName?: string;
  fallbackSrc?: string;
}

export function Image({ wrapperClassName, className, alt, src, fallbackSrc = "/file.svg", ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <NextImage
        src={imgSrc || fallbackSrc}
        className={cn("transition-opacity duration-300", className)}
        alt={alt}
        onError={() => setImgSrc(fallbackSrc)}
        {...props}
      />
    </div>
  );
}
