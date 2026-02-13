// components/OptimizedImage.tsx
'use client';

import Image from 'next/image';
import { useImageReveal } from '@/hooks/useImageReveal';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  reveal?: boolean;
  grayscale?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className = '',
  priority = false,
  sizes = '100vw',
  reveal = true,
  grayscale = false,
}: OptimizedImageProps) {
  const { imageClassName, onLoad } = useImageReveal({
    initialTranslate: reveal,
    initialGrayscale: grayscale,
  });

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={`${className} ${reveal ? imageClassName : ''}`}
      priority={priority}
      sizes={sizes}
      onLoadingComplete={reveal ? onLoad : undefined}
      unoptimized
    />
  );
}