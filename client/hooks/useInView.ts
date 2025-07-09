import { useEffect, useState, useRef, RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  threshold?: number;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {},
): boolean {
  const { once = false, margin = "0px", threshold = 0.1 } = options;
  const [isInView, setIsInView] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;

        if (once) {
          if (inView && !hasTriggered.current) {
            setIsInView(true);
            hasTriggered.current = true;
          }
        } else {
          setIsInView(inView);
        }
      },
      {
        threshold,
        rootMargin: margin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [once, margin, threshold]);

  return isInView;
}
