"use client"

import { useRef, useState, useEffect } from "react";

export default function CountUp({ endValue, duration = 2000, decimals, className }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // 1. Wait until this element is visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Once visible, animate from 0 to endValue
  useEffect(() => {
    if (!started) return;

    const target = Number(endValue) || 0;
    let startTime = null;
    let frameId;

    const tick = (now) => {
      if (startTime === null) startTime = now;
      const ratio = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3); // ease-out
      setCount(ratio === 1 ? target : target * eased);
      if (ratio < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, endValue, duration]);

  const places = decimals ?? (Number.isInteger(endValue) ? 0 : 1);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(places)}
    </span>
  );
}