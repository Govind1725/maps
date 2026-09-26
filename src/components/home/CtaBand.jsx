import { Link } from "react-router-dom";
import { ArrowIcon } from "../common/Icons";

export default function CtaBand() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-panel reveal reveal-zoom">
          <p className="eyebrow cta-eyebrow">Accredited Calibration</p>
          <h2>Accredited, Traceable Calibration for Every Instrument</h2>
          <p className="cta-text">
            Techno Labs is accredited for ISO/IEC 17025:2005 by EJ-JAS, with SAC approval in process. Send us your instrument
            requirements for calibration or repair, or verify a calibration certificate issued by our laboratory.
          </p>
          <div className="cta-actions">
            <Link className="button button--light" to="/contact">
              <span>Request Calibration</span>
              <ArrowIcon />
            </Link>
            <Link className="button button--ghost" to="/certificate#verify">
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
