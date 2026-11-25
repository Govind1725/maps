import { Link } from "react-router-dom";
import { aboutSupportPillars } from "../../data/additionsData";
import SectionHeading from "../common/SectionHeading";
import Glyph from "../common/Glyph";
import { ArrowIcon } from "../common/Icons";

export default function AboutTrustSection() {
  return (
    <section className="section section--soft maps-add-trust">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="Our Commitment"
          title="Impartiality &"
          highlight="technical support"
        />
        <div className="maps-add-trust-grid">
          <article className="maps-add-panel reveal reveal-left">
            <span className="maps-add-icon"><Glyph name="shield" /></span>
            <h3>Commitment to Impartiality</h3>
            <p>
              MAPS safeguards impartiality in every calibration activity. Our procedures are designed
              to keep results independent, fully documented and free from outside influence.
            </p>
            <ul>
              <li>Independent and unbiased calibration results</li>
              <li>Transparent processes and documentation</li>
              <li>Conflict-of-interest management</li>
              <li>Ethical conduct across all operations</li>
            </ul>
            <blockquote>“Integrity and impartiality are the foundation of every measurement we deliver.”</blockquote>
          </article>
          <div className="maps-add-support-grid reveal reveal-right">
            {aboutSupportPillars.map((pillar) => (
              <article className="maps-add-support-card" key={pillar.title}>
                <span className="maps-add-icon"><Glyph name={pillar.icon} /></span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="maps-add-inline-cta reveal">
          <span>Interested in joining a team built around measurement excellence?</span>
          <Link className="button" to="/careers">
            <span>Explore Careers</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
