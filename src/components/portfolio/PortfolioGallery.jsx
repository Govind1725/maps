import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "../../data/assets";
import { useBodyLock } from "../../hooks/useBodyLock";
import { ArrowLeftIcon, ArrowRightIcon } from "../common/Icons";

export default function PortfolioGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  useBodyLock("lightbox-open", open);

  const step = useCallback((direction) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  }, [images.length]);

  const openAt = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const close = () => setOpen(false);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || images.length < 2) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, images.length, step]);

  const activeImage = images[activeIndex];

  return (
    <div className="pf-gallery">
      <div className="pf-gallery-grid">
        {images.map((image, index) => (
          <button
            className="pf-gallery-thumb"
            type="button"
            key={`${image.image}-${index}`}
            onClick={() => openAt(index)}
            aria-label={`Open image ${index + 1} of ${images.length} for ${title}`}
          >
            <img src={asset(image.image)} alt={image.caption} width="900" height="675" loading="lazy" />
            <span>{image.caption}</span>
          </button>
        ))}
      </div>

      <div
        className={`lightbox pf-lightbox${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={`${title} image gallery`}
        aria-hidden={!open}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <button className="lightbox-close" type="button" aria-label="Close image gallery" ref={closeRef} onClick={close}>
          ×
        </button>

        {images.length > 1 ? (
          <button
            className="pf-lightbox-nav pf-lightbox-nav--prev"
            type="button"
            aria-label="Previous image"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => step(-1)}
          >
            <ArrowLeftIcon />
          </button>
        ) : null}

        {open ? <img src={asset(activeImage.image)} alt={activeImage.caption} /> : null}

        {images.length > 1 ? (
          <button
            className="pf-lightbox-nav pf-lightbox-nav--next"
            type="button"
            aria-label="Next image"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => step(1)}
          >
            <ArrowRightIcon />
          </button>
        ) : null}

        {open ? (
          <div className="pf-lightbox-caption" onMouseDown={(event) => event.stopPropagation()}>
            <span>{activeIndex + 1} / {images.length}</span>
            <p>{activeImage.caption}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
