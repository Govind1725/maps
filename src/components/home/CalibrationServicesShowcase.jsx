import { useEffect, useState } from "react";
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

export default function CalibrationServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = labData.length;

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const visibleSlots = [];
  for (let offset = -2; offset <= 2; offset += 1) {
    const idx = (activeIndex + offset + total) % total;
    visibleSlots.push({
      lab: labData[idx],
      index: idx,
      offset,
    });
  }

  return (
    <section
      className="section cal-showcase-section"
      id="calibration-services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container cal-showcase-layout">
        {/* Left Column: Heading, Description, Controls & Pill Indicators */}
        <div className="cal-showcase-left reveal">
          <span className="cal-showcase-eyebrow">
            13 Accredited Laboratories · {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <h2 className="cal-showcase-title">Calibration Services</h2>
          <p className="cal-showcase-subtitle">
            Comprehensive calibration solutions for measuring and testing instruments, ensuring
            measurement accuracy, reliability and quality.
          </p>

          <div className="cal-showcase-controls">
            <button
              type="button"
              className="cal-showcase-arrow"
              onClick={handlePrev}
              aria-label="Previous calibration laboratory"
            >
              <Glyph name="chevronLeft" />
            </button>
            <button
              type="button"
              className="cal-showcase-arrow"
              onClick={handleNext}
              aria-label="Next calibration laboratory"
            >
              <Glyph name="chevronRight" />
            </button>
            <span className="cal-showcase-active-name">{labData[activeIndex].name}</span>
          </div>

          <div
            className="cal-showcase-dots cal-showcase-dots--desktop"
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

        {/* Right Column: Stacked Showcase Stage */}
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
                  style={{
                    zIndex: 20 - Math.abs(offset) * 5,
                  }}
                  onClick={() => {
                    if (!isCenter) setActiveIndex(index);
                  }}
                  aria-hidden={!isCenter}
                >
                  <div className="cal-showcase-media">
                    <img
                      src={asset(imgPath)}
                      alt={lab.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="cal-showcase-badge">{lab.number}</span>
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

                        <Link
                          className="cal-showcase-explore"
                          to={`/services#${lab.id}`}
                        >
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
            className="cal-showcase-dots cal-showcase-dots--mobile"
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
                onClick={() => setActiveIndex(idx)}
                className={`cal-showcase-dot ${idx === activeIndex ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
