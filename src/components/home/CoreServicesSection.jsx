import { Link } from "react-router-dom";
import Glyph from "../common/Glyph";
import SectionHeading from "../common/SectionHeading";

const services = [
  {
    id: "consulting",
    icon: "briefcase",
    accent: "blue",
    eyebrow: "Advisory",
    title: "Consulting Services",
    desc: "Expert industrial and metrological consulting to help your organisation define measurement strategies, achieve regulatory compliance, and optimise instrument management programmes.",
    bullets: [
      "Metrology & calibration programme design",
      "Regulatory compliance advisory",
      "Instrument lifecycle management",
    ],
    cta: "Learn More",
    to: "/services",
  },
  {
    id: "training",
    icon: "graduationCap",
    accent: "cyan",
    eyebrow: "Education",
    title: "Training & Teaching Services",
    desc: "Structured technical training for engineers and technicians covering calibration fundamentals, measurement uncertainty, lab management and ISO/IEC 17025 requirements.",
    bullets: [
      "ISO/IEC 17025 awareness courses",
      "Measurement uncertainty workshops",
      "On-site & remote delivery",
    ],
    cta: "Learn More",
    to: "/services",
  },
  {
    id: "rental",
    icon: "package",
    accent: "indigo",
    eyebrow: "Equipment",
    title: "Industrial Equipment Rental",
    desc: "Short- and long-term rental of lab-grade calibrated instruments for projects, plant shutdowns, and temporary testing facilities across the region.",
    bullets: [
      "Calibrated & ready-to-use instruments",
      "Flexible rental durations",
      "Delivery & on-site support",
    ],
    cta: "Learn More",
    to: "/services",
  },
  {
    id: "sales",
    icon: "shoppingBag",
    accent: "emerald",
    eyebrow: "Procurement",
    title: "Industrial Equipment Sales",
    desc: "Supply of precision measurement instruments, test equipment and industrial tools sourced from trusted global manufacturers — with full technical support and after-sales service.",
    bullets: [
      "Genuine OEM equipment supply",
      "Full technical specifications",
      "After-sales & warranty support",
    ],
    cta: "Learn More",
    to: "/contact",
  },
];

const accentMap = {
  blue:    { pill: "core-pill--blue",    card: "core-card--blue"    },
  cyan:    { pill: "core-pill--cyan",    card: "core-card--cyan"    },
  indigo:  { pill: "core-pill--indigo",  card: "core-card--indigo"  },
  emerald: { pill: "core-pill--emerald", card: "core-card--emerald" },
};

export default function CoreServicesSection() {
  return (
    <section className="section core-services-section" id="core-services">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="What We Do"
          title="Our Core"
          highlight="Services"
        >
          <p>
            From strategic consulting and professional training to flexible equipment
            rental and direct sales — MAPS delivers the full spectrum of industrial
            services your operations depend on.
          </p>
        </SectionHeading>

        <div className="core-services-grid reveal">
          {services.map((svc) => {
            const accent = accentMap[svc.accent];
            return (
              <article className={`core-card ${accent.card}`} key={svc.id}>
                {/* Top bar accent line */}
                <div className="core-card-bar" aria-hidden="true" />

                {/* Icon + eyebrow */}
                <div className="core-card-top">
                  <div className="core-icon">
                    <Glyph name={svc.icon} />
                  </div>
                  <span className={`core-pill ${accent.pill}`}>{svc.eyebrow}</span>
                </div>

                {/* Body */}
                <div className="core-card-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>

                  <ul className="core-bullets">
                    {svc.bullets.map((b) => (
                      <li key={b}>
                        <Glyph name="checkCircle" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="core-card-footer">
                  <Link className="core-cta" to={svc.to}>
                    {svc.cta}
                    <span className="core-cta-arrow">
                      <Glyph name="arrowRight" />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
