import { useState, useEffect, useRef } from "react";

export function useInViewport({ rootMargin = "200px 0px" } = {}) {
  const ref = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sync check to avoid flash on initial render
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 400 && rect.bottom > -200) {
      setIsInViewport(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isInViewport];
}
