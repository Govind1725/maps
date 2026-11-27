import { useEffect } from "react";

export function useReveal(routeKey) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      const showAll = () => {
        document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
          element.classList.add("is-visible");
        });
      };
      showAll();
      let rafId = 0;
      const showObserver = new MutationObserver(() => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          showAll();
        });
      });
      showObserver.observe(document.body, { childList: true, subtree: true });
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        showObserver.disconnect();
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px" }
    );

    const observed = new WeakSet();
    const scan = () => {
      const elements = document.querySelectorAll(".reveal:not(.is-visible)");
      for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];
        if (observed.has(element)) continue;
        observed.add(element);
        element.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
        observer.observe(element);
      }
    };

    scan();
    let rafId = 0;
    const mutationObserver = new MutationObserver(() => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        scan();
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [routeKey]);
}
