import { Link } from "react-router-dom";
import Glyph from "../common/Glyph";
import SocialLinks from "../common/SocialLinks";

const advantages = [
  "Accredited, traceable calibration procedures",
  "Experienced specialists across 13 laboratory disciplines",
  "Clear documentation and reliable turnaround times",
  "Regional coverage across KSA, UAE and the Middle East",
];

export default function CompetitiveEdgeSection() {
  return (
    <section className="edge-section">
      <div className="container edge-inner">
        <div className="edge-card reveal">
          <div className="edge-overlay" />
          <div className="edge-content">
            <span className="edge-kicker">
              <Glyph name="zap" /> The MAPS Advantage
            </span>
            <h2>
              Precision that protects <span>your compliance</span>
            </h2>
            <p>
              We combine accredited laboratory capability, practical industry experience and responsive
              service so your instruments stay reliable — and your audits stay straightforward.
            </p>
            <ul className="edge-list">
              {advantages.map((item) => (
                <li key={item}>
                  <Glyph name="checkCircle" /> {item}
                </li>
              ))}
            </ul>
            <Link className="btn-primary" to="/about">
              Why Partner With Us <Glyph name="arrowRight" />
            </Link>
          </div>
        </div>

        <div className="social-panel reveal">
          <span className="social-kicker">Things That Matter</span>
          <h3>Follow MAPS for updates, insights and service news</h3>
          <p>Join us on social media to explore our wide range of services and latest updates.</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
