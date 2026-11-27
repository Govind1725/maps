import { Link } from "react-router-dom";
import Glyph from "../common/Glyph";
import SectionHeading from "../common/SectionHeading";

const services = [
  {
    id: "consulting",
    icon: "briefcase",
    eyebrow: "Advisory",
    title: "Consulting Services",
    desc: "Practical metrology advice for measurement strategy, compliance and instrument lifecycle management.",
    to: "/services/consulting",
  },
  {
    id: "training",
    icon: "graduationCap",
    eyebrow: "Education",
    title: "Training & Teaching Services",
    desc: "Hands-on technical training that builds confident, competent and audit-ready teams.",
    to: "/services/training",
  },
  {
    id: "rental",
    icon: "package",
    eyebrow: "Equipment",
    title: "Industrial Equipment Rental",
    desc: "Calibrated instruments ready for projects, shutdowns and temporary test facilities.",
    to: "/services/equipment-rental",
  },
  {
    id: "sales",
    icon: "shoppingBag",
    eyebrow: "Procurement",
    title: "Industrial Equipment Sales",
    desc: "Precision instruments and industrial tools sourced, documented and supported by MAPS.",
    to: "/services/equipment-sales",
  },
];

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

        <div className="rental-strip calibration-feature reveal">
          <div className="rental-copy">
            <span className="rental-badge">
              <Glyph name="shield" /> Calibration Services
            </span>
            <h3>Precision calibration for every instrument you rely on</h3>
            <p>
              Accredited calibration of measuring and testing instruments, backed by traceable
              documentation, master equipment and dependable turnaround across your site.
            </p>
          </div>
          <div className="calibration-feature-actions">
            <Link className="button" to="/services">
              Explore Calibration <Glyph name="arrowRight" />
            </Link>
            <Link className="btn-ghost" to="/contact#enquiry">
              Enquire Now <Glyph name="arrowUpRight" />
            </Link>
          </div>
        </div>

        <div className="core-services-grid reveal">
          {services.map((svc) => (
            <article className="core-card" key={svc.id}>
              <div className="core-card-bar" aria-hidden="true" />

              <div className="core-card-top">
                <div className="core-icon">
                  <Glyph name={svc.icon} />
                </div>
                <span className="core-pill">{svc.eyebrow}</span>
              </div>

              <div className="core-card-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>

              <div className="core-card-footer">
                <Link className="button core-action" to={svc.to}>
                  <span>Explore More</span>
                  <Glyph name="arrowRight" />
                </Link>
                <Link className="core-enquiry" to="/contact#enquiry">
                  Enquire Now
                  <Glyph name="arrowUpRight" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
