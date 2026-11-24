import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import { aboutText } from "../../data/siteData";
import { ArrowIcon } from "../common/Icons";
import SectionHeading from "../common/SectionHeading";

export function AboutIntro() {
  return (
    <div className="container about-grid">
      <SectionHeading
        className="about-copy reveal reveal-left"
        align="start"
        eyebrow="Welcome To"
        title="About"
        highlight="MAPS"
      >
        <p>{aboutText}</p>
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
        <div className="about-badge">
          <img src={asset("brand/ilac-mra.svg")} alt="ILAC MRA" width="432" height="439" loading="lazy" />
        </div>
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
