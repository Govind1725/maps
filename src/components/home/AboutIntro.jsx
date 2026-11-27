import { Link } from "react-router-dom";
import { aboutMotto, aboutText } from "../../data/siteData";
import { ArrowIcon } from "../common/Icons";
import SectionHeading from "../common/SectionHeading";

export function AboutIntro() {
  return (
    <div className="container about-grid">
      <SectionHeading
        className="about-copy reveal reveal-left"
        align="start"
        eyebrow="About"
        title="MAPS Instruments"
        highlight="& Industrial Services"
      >
        {aboutText.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="about-motto">
          <strong>Our Motto:</strong> <em>{aboutMotto}</em>
        </p>
      </SectionHeading>
      <div className="about-visuals reveal reveal-right">
        <video
          className="about-image-main"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="MAPS logo animation"
        >
          <source src="/videos/mpas-logo-animation.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export function BrandStrip() {
  return (
    <section className="brand-strip reveal">
      <div className="container brand-strip-inner">
        <SectionHeading
          className="brand-strip-copy section-heading--start"
          align="start"
          eyebrow="MAPS"
          title="One stop solution for all"
          highlight="Calibration needs"
        />
        <Link className="button" to="/contact">
          <span>Contact Us</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
