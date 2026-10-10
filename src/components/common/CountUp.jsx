import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CountUp({ value, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? value : 0));

  useEffect(() => {
    const element = ref.current;
    if (!element || startedRef.current || prefersReducedMotion()) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          startedRef.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  const isDecimal = !Number.isInteger(value);
  return (
    <span ref={ref}>{display.toFixed(isDecimal ? 1 : 0)}{suffix}</span>
  );
}