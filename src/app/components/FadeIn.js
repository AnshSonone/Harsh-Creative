"use client"

import { useEffect, useRef, useState } from "react";

function useInView({ threshold = 0.3, once = true, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for very old browsers: just show the final state
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect(); // run only the first time
        } else if (!once) {
          setInView(false); // allow replay when scrolling back
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return [ref, inView];
}

export default function FadeIn({ children }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: "all 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}