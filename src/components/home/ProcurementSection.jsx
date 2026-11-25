import { Link } from "react-router-dom";
import Glyph from "../common/Glyph";

const steps = [
  {
    icon: "file",
    title: "Share your scope",
    desc: "Tell us the instruments, ranges, quantities and locations that need calibration.",
  },
  {
    icon: "layers",
    title: "Get a tailored plan",
    desc: "We map the right accredited lab, schedule and documentation to your operation.",
  },
  {
    icon: "shield",
    title: "Accredited execution",
    desc: "Traceable calibration is performed using controlled procedures and standards.",
  },
  {
    icon: "award",
    title: "Certificate & support",
    desc: "Receive your calibration certificate, records and practical follow-up support.",
  },
];

export default function ProcurementSection() {
  return (
    <section className="procurement-section">
      <div className="procurement-glow" aria-hidden="true" />
      <div className="container procurement-inner">
        <div className="procurement-head reveal">
          <span className="procurement-kicker">Custom Calibration Procurement</span>
          <h2>
            One partner for your complete <span>calibration programme</span>
          </h2>
          <p>
            From a single instrument to a multi-site asset register, our team builds a practical,
            traceable calibration plan around your compliance requirements and operating calendar.
          </p>
        </div>

        <div className="procurement-steps reveal">
          {steps.map((step, index) => (
            <article className="procurement-step" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="step-icon">
                <Glyph name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="procurement-cta reveal">
          <div>
            <h3>Ready to build your calibration schedule?</h3>
            <p>Send your instrument list and our technical team will prepare a clear, no-obligation proposal.</p>
          </div>
          <div className="procurement-actions">
            <Link className="btn-primary" to="/contact">
              Start a Request <Glyph name="arrowRight" />
            </Link>
            <a className="btn-ghost" href="tel:+919585671997">
              <Glyph name="target" /> +91 9585671997
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
