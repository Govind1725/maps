import { Link } from "react-router-dom";
import { aboutText } from "../../data/siteData";
import { asset } from "../../data/assets";
import { ArrowIcon } from "../common/Icons";

export function BrandStrip() {
  return (
    <section className="brand-strip reveal">
      <div className="container brand-strip-inner">
        <div className="brand-strip-copy">
          <p className="eyebrow">Technolabs</p>
          <h2>One stop solution for all Calibration needs</h2>
        </div>
        <Link className="button" to="/contact">
          <span>Contact Us</span>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

export function AboutIntro() {
  return (
    <div className="about-grid">
      <div className="about-copy reveal reveal-left">
        <p className="eyebrow">Welcome To</p>
        <h2>Technolabs</h2>
        <p>{aboutText}</p>
        <dl className="about-facts">
          <div className="about-fact">
            <dt>Established</dt>
            <dd>2021</dd>
          </div>
          <div className="about-fact">
            <dt>Accreditation</dt>
            <dd>ISO/IEC 17025:2005</dd>
          </div>
          <div className="about-fact">
            <dt>Accredited By</dt>
            <dd>EJ-JAS</dd>
          </div>
          <div className="about-fact">
            <dt>Operations</dt>
            <dd>KSA &amp; UAE</dd>
          </div>
        </dl>
      </div>
      <div className="about-visuals reveal reveal-right">
        <img className="about-image-main" src={asset("home/about-1.jpg")} alt="Technolabs calibration laboratory" width="500" height="500" loading="lazy" />
        <img className="about-image-secondary" src={asset("home/about-2.jpg")} alt="Precision calibration equipment" width="500" height="500" loading="lazy" />
        <div className="about-badge">
          <img src={asset("brand/ilac-mra.svg")} alt="ILAC MRA" width="432" height="439" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
