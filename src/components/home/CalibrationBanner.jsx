import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import SectionHeading from "../common/SectionHeading";

export function IsoBadgeIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
}

export function TargetIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function WrenchIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function TestingIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="8" rx="1" />
      <rect x="10" y="7" width="4" height="13" rx="1" />
      <rect x="17" y="4" width="4" height="16" rx="1" />
      <path d="M3 10l5-4 5 3 7-5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="12 6 18 12 12 18" />
    </svg>
  );
}

export default function CalibrationBanner() {
  return (
    <section className="calibration-banner-section reveal">
      {/* Futuristic tech background arc lines */}
      <div className="banner-tech-bg" aria-hidden="true">
        <svg viewBox="0 0 1200 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <circle cx="850" cy="225" r="180" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="850" cy="225" r="260" stroke="rgba(0, 162, 255, 0.12)" strokeWidth="1.5" />
          <circle cx="850" cy="225" r="340" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
          <line x1="850" y1="0" x2="850" y2="450" stroke="rgba(0, 162, 255, 0.08)" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="banner-content-grid">
        {/* Left Copy */}
        <SectionHeading
          className="banner-copy"
          align="start"
          eyebrow="TECHNOLABS"
          title="One stop solution for all"
          highlight="Calibration needs"
        >
          <p className="banner-pills">
            Precision <span>|</span> Compliance <span>|</span> Reliability
          </p>
          <p className="banner-description">
            Providing accurate calibration, repair and testing services for a wide range of industrial instruments.
          </p>
          <Link to="/services" className="banner-cta-btn">
            <span>Explore Our Services</span>
            <ArrowRightIcon className="btn-arrow" />
          </Link>
        </SectionHeading>

        {/* Right Visual Graphic with Annotations */}
        <div className="banner-visual">
          <div className="visual-wrapper">
            <img
              src={asset("home/calibration-banner.png")}
              alt="Technolabs calibration equipment"
              className="banner-instruments-img"
              width="1024"
              height="1024"
              loading="lazy"
            />

            {/* Floating Interactive Badges */}
            <div className="badge-item badge-iso">
              <div className="badge-glass">
                <IsoBadgeIcon className="badge-icon" />
                <span>ISO/IEC 17025</span>
              </div>
            </div>

            <div className="badge-item badge-calibration">
              <div className="badge-glass">
                <TargetIcon className="badge-icon" />
                <span>Calibration</span>
              </div>
            </div>

            <div className="badge-item badge-repair">
              <div className="badge-glass">
                <WrenchIcon className="badge-icon" />
                <span>Repair</span>
              </div>
            </div>

            <div className="badge-item badge-testing">
              <div className="badge-glass">
                <TestingIcon className="badge-icon" />
                <span>Testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
