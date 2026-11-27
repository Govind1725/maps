import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import Glyph from "../common/Glyph";

const whatsappHref =
  "https://wa.me/966568015741?text=Hi%20*MAPS*!%20I%E2%80%99d%20like%20to%20enquire%20about%20your%20calibration%20services.%20Please%20share%20the%20details.%20Thank%20you!";

export default function LabSection({ lab, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className={`lab-section ${isEven ? "lab-section--light" : "lab-section--soft"}`} id={lab.id}>
      <div className="container">

        {/* ── Header ── */}
        <div className="lab-header reveal">
          <div className="lab-header-left">
            <span className="lab-number">{lab.number}</span>
            <div className="lab-title-group">
              <span className="lab-eyebrow">{lab.tagline}</span>
              <h2 className="lab-title">{lab.name}</h2>
            </div>
          </div>
          <a className="lab-enquire-btn" href={whatsappHref} target="_blank" rel="noreferrer">
            Enquire Now
            <Glyph name="arrowRight" />
          </a>
        </div>

        {/* ── Hero image + intro ── */}
        <div className="lab-hero reveal">
          <div className="lab-hero-image">
            <img
              src={asset(lab.image)}
              alt={lab.name}
              loading="lazy"
            />
            <div className="lab-hero-badge">
              <Glyph name="shield" />
              <span>ISO/IEC 17025:2017</span>
            </div>
          </div>
          <div className="lab-hero-copy">
            <p className="lab-intro">{lab.intro}</p>
            <div className="lab-meta">
              <div className="lab-meta-item">
                <Glyph name="checkCircle" />
                <span>Accredited Laboratory</span>
              </div>
              <div className="lab-meta-item">
                <Glyph name="award" />
                <span>Traceable Results</span>
              </div>
              <div className="lab-meta-item">
                <Glyph name="clock" />
                <span>Fast Turnaround</span>
              </div>
            </div>
            <div className="lab-category-count">
              <span>{lab.categories.length}</span>
              instrument {lab.categories.length === 1 ? "category" : "categories"} &mdash;&nbsp;
              <span>{lab.categories.reduce((t, c) => t + c.instruments.length, 0)}</span>
              &nbsp;instruments
            </div>
          </div>
        </div>

        {/* ── Category grid ── */}
        <div className="lab-categories">
          {lab.categories.map((cat) => (
            <div className="lab-cat-card" key={cat.heading}>
              <div className="lab-cat-header">
                <div className="lab-cat-icon">
                  <Glyph name={cat.icon} />
                </div>
                <h3 className="lab-cat-title">{cat.heading}</h3>
              </div>
              <ul className="lab-instrument-list">
                {cat.instruments.map((item) => (
                  <li key={item}>
                    <Glyph name="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA bar ── */}
        <div className="lab-cta-bar reveal">
          <div className="lab-cta-copy">
            <Glyph name="zap" />
            <span>Need calibration for <strong>{lab.name}</strong>? Contact our technical team for a tailored quotation.</span>
          </div>
          <div className="lab-cta-actions">
            <a className="btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Us <Glyph name="arrowRight" />
            </a>
            <Link className="btn-ghost lab-cta-ghost" to="/contact">
              Send Enquiry
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
