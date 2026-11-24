import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceDetails } from "../../data/serviceDetails";
import { asset } from "../../data/assets";
import Glyph from "../common/Glyph";

const imageMap = {
  ecl: "it_infra",
  thcl: "cloud_solutions",
  pcl: "managed_it",
  dcl: "device_deployment",
  fcl: "it_disposal",
  mcl: "hr_solutions",
  tocl: "networking_sol",
  vcl: "it_consulting",
  afvcl: "av_solutions",
  aslcl: "av_solutions",
  fmc: "cloud_solutions",
  olcl: "it_infra",
  ccl: "managed_it",
};

const categories = [
  { id: "all", label: "All Labs", icon: "layers", ids: null },
  {
    id: "electrical",
    label: "Electrical & Optical",
    icon: "zap",
    ids: ["ecl", "afvcl", "aslcl", "olcl", "fmc"],
  },
  {
    id: "mechanical",
    label: "Mechanical & Dimensional",
    icon: "cpu",
    ids: ["pcl", "dcl", "fcl", "mcl", "tocl", "vcl"],
  },
  { id: "common", label: "Environmental & Common", icon: "target", ids: ["thcl", "ccl"] },
];

function instrumentHighlights(service) {
  return service.groups
    .flatMap((group) => group.columns || [])
    .flat()
    .slice(0, 3);
}

export default function TechSolutionsShowcase() {
  const [active, setActive] = useState("all");
  const category = categories.find((item) => item.id === active) || categories[0];
  const visible =
    category.ids === null
      ? serviceDetails
      : serviceDetails.filter((service) => category.ids.includes(service.id));

  return (
    <section className="tech-solutions" id="tech-labs">
      <div className="tech-glow tech-glow--top" aria-hidden="true" />
      <div className="tech-glow tech-glow--bottom" aria-hidden="true" />
      <div className="tech-grid-overlay" aria-hidden="true" />
      <div className="container tech-inner">
        <div className="tech-header reveal">
          <span className="tech-badge">
            <Glyph name="sparkles" />
            OUR CALIBRATION LABS
          </span>
          <h2>
            Empowering Industries with <span>Precision Calibration</span>
          </h2>
          <p>
            From accredited electrical and dimensional laboratories to specialized flow, optical and
            force testing — we deliver traceable calibration built for accuracy, compliance and uptime.
          </p>
        </div>

        <div className="tech-stats reveal">
          <div>
            <strong>13</strong>
            <span>Accredited Labs</span>
          </div>
          <div>
            <strong>500+</strong>
            <span>Enterprise Clients</span>
          </div>
          <div>
            <strong>99.9%</strong>
            <span>Measurement Accuracy</span>
          </div>
          <div>
            <strong>KSA, UAE</strong>
            <span>Regional Coverage</span>
          </div>
        </div>

        <div className="tech-filters reveal" role="group" aria-label="Filter calibration labs">
          {categories.map((item) => {
            const count = item.ids === null ? serviceDetails.length : item.ids.length;
            return (
              <button
                type="button"
                className={`tech-filter${active === item.id ? " is-active" : ""}`}
                key={item.id}
                onClick={() => setActive(item.id)}
                aria-pressed={active === item.id}
              >
                <Glyph name={item.icon} />
                <span>{item.label}</span>
                <em>{count}</em>
              </button>
            );
          })}
        </div>

        <div className="tech-cards reveal">
          {visible.map((service) => (
            <article className="tech-card" key={service.id}>
              <div className="tech-card-image">
                <img
                  src={asset(`reference/solutions/${imageMap[service.id]}.png`)}
                  alt={service.name}
                  loading="lazy"
                />
                <span className="tech-card-pill">
                  <i /> ISO/IEC 17025
                </span>
                <span className="tech-card-icon">
                  <Glyph name="checkCircle" />
                </span>
              </div>
              <div className="tech-card-body">
                <span className="tech-card-category">Accredited Laboratory</span>
                <h3>{service.name}</h3>
                <p>
                  Traceable calibration and testing for industrial instruments, backed by documented
                  procedures and experienced technical specialists.
                </p>
                <ul>
                  {instrumentHighlights(service).map((instrument) => (
                    <li key={instrument}>
                      <Glyph name="checkCircle" />
                      {instrument}
                    </li>
                  ))}
                </ul>
                <div className="tech-card-actions">
                  <Link className="tech-details" to={`/services#${service.id}`}>
                    Specifications <Glyph name="arrowUpRight" />
                  </Link>
                  <Link className="tech-quote" to="/contact">
                    Get Quote <Glyph name="arrowRight" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

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
            <a className="btn-ghost" href="tel:+966114644399">
              Direct Hotline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
