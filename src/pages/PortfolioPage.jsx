import { useEffect, useRef, useState } from "react";
import { asset } from "../data/assets";
import PageHero from "../components/common/PageHero";
import { useBodyLock } from "../hooks/useBodyLock";

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const portfolioImage = asset("pages/portfolio.jpeg");
  useBodyLock("lightbox-open", open);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Our Happy Clients" />
      <section className="container portfolio-gallery" aria-label="Portfolio">
        <button className="portfolio-item reveal reveal-zoom" type="button" ref={triggerRef} onClick={() => setOpen(true)} aria-label="Open portfolio image">
          <img src={portfolioImage} alt="Technolabs portfolio" width="757" height="1600" loading="lazy" />
        </button>
      </section>
      <div
        className={`lightbox${open ? " is-open" : ""}`}
        id="portfolio-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio image"
        aria-hidden={!open}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <button className="lightbox-close" type="button" aria-label="Close portfolio image" ref={closeRef} onClick={close}>×</button>
        {open ? <img src={portfolioImage} alt="Technolabs portfolio" /> : null}
      </div>
    </>
  );
}
