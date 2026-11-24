import { Link } from "react-router-dom";
import { ArrowIcon } from "../common/Icons";
import SectionHeading from "../common/SectionHeading";

export default function CtaBand({ staticBackground = false }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-panel reveal reveal-zoom">
          {staticBackground ? null : (
            <video className="cta-video" autoPlay muted loop playsInline preload="none" aria-hidden="true">
              <source src="/videos/cta-bg.webm" type="video/webm" />
            </video>
          )}
          <div className="cta-video-overlay" aria-hidden="true" />
          <SectionHeading
            className="cta-heading"
            eyebrow="Accredited Calibration"
            title="Accredited, Traceable"
            highlight="Calibration for Every Instrument"
          />
          <p className="cta-text">
            Techno Labs is accredited for ISO/IEC 17025:2005 by EJ-JAS, with SAC approval in process. Send us your instrument
            requirements for calibration or repair, or verify a calibration certificate issued by our laboratory.
          </p>
          <div className="cta-actions">
            <Link className="button button--light" to="/contact">
              <span>Request Calibration</span>
              <ArrowIcon />
            </Link>
            <Link className="button button--ghost" to="/certificate">
              <span>Verify Certificate</span>
              <ArrowIcon />
            </Link>
          </div>
          <p className="cta-note">
            Looking for accreditation details? <Link to="/certificate">View our certification page</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
