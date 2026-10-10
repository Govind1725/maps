import { useEffect } from "react";

export function useReveal(routeKey) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      const showAll = () => {
        document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
      };
      showAll();
      const showObserver = new MutationObserver(showAll);
      showObserver.observe(document.body, { childList: true, subtree: true });
      return () => showObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -45px" }
    );

    const observed = new WeakSet();
    const scan = () => {
      const elements = [...document.querySelectorAll(".reveal:not(.is-visible)")];
      elements.forEach((element, index) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
        observer.observe(element);
      });
    };

    scan();
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [routeKey]);
}
