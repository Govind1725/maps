import { Link } from "react-router-dom";
import Glyph from "../common/Glyph";

export default function TechSolutionsShowcase() {
  return (
    <section className="tech-solutions tech-solutions--banner-only" id="tech-labs">
      <div className="tech-glow tech-glow--top" aria-hidden="true" />
      <div className="tech-glow tech-glow--bottom" aria-hidden="true" />
      <div className="tech-grid-overlay" aria-hidden="true" />
      <div className="container tech-inner">
        <div className="tech-banner reveal">
          <div className="tech-icon-box">
            <Glyph name="clock" />
          </div>
          <div className="tech-banner-copy">
            <h3>Need a custom calibration programme?</h3>
            <p>
              Speak with our technical team about multi-site instrument coverage, tailored SLAs and
              volume corporate pricing.
            </p>
          </div>
          <div className="tech-banner-actions">
            <Link className="btn-primary" to="/contact">
              Consult an Expert <Glyph name="arrowRight" />
            </Link>
            <a className="btn-ghost" href="tel:+919585671997">
              Direct Hotline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
