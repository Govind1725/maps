import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import { labData } from "../../data/labData";
import Glyph from "../common/Glyph";

// Relevant existing MAPS website assets mapped per laboratory
const labImages = {
  ecl: "pages/calibration-devices.jpg",
  thcl: "pages/techno-lab.jpg",
  pcl: "pages/lab-wide.webp",
  dcl: "home/calibration-banner.png",
  fcl: "home/why-partner.jpg",
  mcl: "home/about-1.jpg",
  tocl: "home/about-2.jpg",
  vcl: "home/hero-1.jpg",
  afvcl: "home/hero-2.jpg",
  aslcl: "home/hero-3.jpg",
  fmc: "pages/calibration-devices.jpg",
  olcl: "pages/techno-lab.jpg",
  ccl: "pages/lab-wide.webp",
};

function getAllInstruments(lab) {
  return lab.categories.flatMap((cat) => cat.instruments);
}

export function useLabShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = labData.length;

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const visibleSlots = useMemo(() => {
    const slots = [];
    for (let offset = -2; offset <= 2; offset += 1) {
      const idx = (activeIndex + offset + total) % total;
      slots.push({ lab: labData[idx], index: idx, offset });
    }
    return slots;
  }, [activeIndex, total]);

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: () => setIsPaused(false),
  };

  return { activeIndex, setActiveIndex, visibleSlots, total, pauseHandlers };
}

export default function LabShowcaseStage({
  activeIndex,
  setActiveIndex,
  visibleSlots,
  dotsVariant = "mobile",
  showBadge = true,
}) {
  const dotsClass =
    dotsVariant === "banner" ? "cal-showcase-dots--banner" : "cal-showcase-dots--mobile";

  return (
    <div className="cal-showcase-right">
      <div className="cal-showcase-stage">
        {visibleSlots.map(({ lab, index, offset }) => {
          const isCenter = offset === 0;
          const instruments = getAllInstruments(lab);
          const previewInstruments = instruments.slice(0, 5);
          const remainingCount = Math.max(0, instruments.length - previewInstruments.length);
          const imgPath = labImages[lab.id] || lab.image;

          return (
            <article
              key={lab.id}
              className={`cal-showcase-card ${
                isCenter ? "is-center" : "is-side"
              } cal-showcase-pos-${offset < 0 ? `m${Math.abs(offset)}` : offset}`}
              style={{ zIndex: 20 - Math.abs(offset) * 5 }}
              onClick={() => {
                if (!isCenter) setActiveIndex(index);
              }}
              aria-hidden={!isCenter}
            >
              <div className="cal-showcase-media">
                <img src={asset(imgPath)} alt={lab.name} loading="lazy" decoding="async" />
                {showBadge ? <span className="cal-showcase-badge">{lab.number}</span> : null}
              </div>

              <div className="cal-showcase-body">
                <div className="cal-showcase-head">
                  <h3>{lab.name}</h3>
                  <p className="cal-showcase-desc">{lab.intro}</p>
                </div>

                {isCenter && (
                  <>
                    <div
                      className="cal-showcase-instruments"
                      aria-label={`Instruments calibrated in ${lab.name}`}
                    >
                      {previewInstruments.map((inst) => (
                        <span key={inst} className="cal-showcase-pill">
                          {inst}
                        </span>
                      ))}
                      {remainingCount > 0 && (
                        <span className="cal-showcase-pill cal-showcase-pill--more">
                          +{remainingCount} more
                        </span>
                      )}
                    </div>

                    <Link className="cal-showcase-explore" to={`/services#${lab.id}`}>
                      <span>Explore More</span>
                      <Glyph name="arrowRight" />
                    </Link>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div
        className={`cal-showcase-dots ${dotsClass}`}
        role="tablist"
        aria-label="Calibration laboratory categories"
      >
        {labData.map((lab, idx) => (
          <button
            key={lab.id}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`${lab.number}. ${lab.name}`}
            title={`${lab.number}. ${lab.name}`}
            onClick={() => setActiveIndex(idx)}
            className={`cal-showcase-dot ${idx === activeIndex ? "is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
