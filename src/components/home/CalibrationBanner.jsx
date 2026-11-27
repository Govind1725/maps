import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import LabShowcaseStage, { useLabShowcase } from "./LabShowcaseStage";

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="12 6 18 12 12 18" />
    </svg>
  );
}

export default function CalibrationBanner() {
  const { activeIndex, setActiveIndex, visibleSlots } = useLabShowcase();

  return (
    <section className="calibration-banner-section reveal">
      {/* Futuristic tech background arc lines */}
      <div className="banner-tech-bg" aria-hidden="true">
        <svg
          viewBox="0 0 1200 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="850"
            cy="225"
            r="180"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle cx="850" cy="225" r="260" stroke="rgba(0, 162, 255, 0.12)" strokeWidth="1.5" />
          <circle cx="850" cy="225" r="340" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <line
            x1="850"
            y1="0"
            x2="850"
            y2="450"
            stroke="rgba(0, 162, 255, 0.08)"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      <div className="banner-content-grid">
        {/* Left Copy */}
        <SectionHeading
          className="banner-copy"
          align="start"
          eyebrow="MAPS"
          title="One stop solution for all"
          highlight="Calibration needs"
        >
          <p className="banner-pills">
            Precision <span>|</span> Compliance <span>|</span> Reliability
          </p>
          <p className="banner-description">
            Providing accurate calibration, repair and testing services for a wide range of
            industrial instruments.
          </p>
          <Link to="/services" className="banner-cta-btn">
            <span>Explore Our Services</span>
            <ArrowRightIcon className="btn-arrow" />
          </Link>
        </SectionHeading>

        {/* Right Visual: shared calibration laboratory slideshow */}
        <LabShowcaseStage
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          visibleSlots={visibleSlots}
          dotsVariant="banner"
          showBadge={false}
        />
      </div>
    </section>
  );
}
