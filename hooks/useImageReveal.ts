// hooks/useImageReveal.ts
'use client';

import { useState, useEffect } from 'react';

interface UseImageRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  initialTranslate?: boolean;
  initialGrayscale?: boolean;
}

export function useImageReveal(options: UseImageRevealOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    initialTranslate = true,
    initialGrayscale = false,
  } = options;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  // Handle image load completion
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Intersection Observer for below‑the‑fold
  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, triggerOnce]);

  // Determine if reveal should activate
  const shouldReveal = isVisible && isLoaded;

  // Build className string
  const imageClassName = [
    'reveal-image',
    shouldReveal ? 'revealed' : '',
    initialTranslate ? 'translate-init' : '',
    initialGrayscale ? 'grayscale-init' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return {
    imageRef: setRef,
    containerRef: setRef,
    isLoaded,
    isVisible,
    shouldReveal,
    imageClassName,
    onLoad: handleLoad,
  };
}