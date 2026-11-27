import { labData } from "../../data/labData";
import Glyph from "../common/Glyph";
import LabShowcaseStage, { useLabShowcase } from "./LabShowcaseStage";

export default function CalibrationServicesShowcase() {
  const { activeIndex, setActiveIndex, visibleSlots, total, pauseHandlers } = useLabShowcase();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      className="section cal-showcase-section"
      id="calibration-services"
      {...pauseHandlers}
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
        <LabShowcaseStage
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          visibleSlots={visibleSlots}
        />
      </div>
    </section>
  );
}
