import { asset } from "../data/assets";
import HeroCarousel from "../components/home/HeroCarousel";
import { AboutIntro, BrandStrip } from "../components/home/AboutIntro";
import ServicesTabs from "../components/services/ServicesTabs";
import IndustryGrid from "../components/home/IndustryGrid";
import ClientMarquee from "../components/home/ClientMarquee";
import SocialLinks from "../components/common/SocialLinks";
import CtaBand from "../components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <BrandStrip />
      <section className="section about-section">
        <div className="container"><AboutIntro /></div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow center-eyebrow">Calibration Services</p>
            <h2>Our Services</h2>
          </div>
          <ServicesTabs />
        </div>
      </section>
      <section className="section industry-section" id="industries">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow industry-eyebrow">Our Expertise</p>
            <h2>Industries We Serve</h2>
            <p>Calibration, repair, and metrology support for engineering, process, and regulated industries across the Middle East.</p>
          </div>
          <IndustryGrid />
        </div>
      </section>
      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-copy reveal reveal-left">
            <h2>Why Partner with Technolabs:</h2>
            <p>Partner with <strong>Techno Prime Company Limited (Techno Labs)</strong> for reliable, accurate, and professional calibration and repair solutions tailored to the needs of modern industries. Established in 2021 with operations across <strong>KSA, UAE, and the wider Middle East</strong>, we bring technical expertise and industry-focused services to ensure your measuring and testing instruments remain accurate, reliable, and fit for purpose. Our ISO/IEC 17025:2005 accreditation by EJ-JAS reflects our commitment to quality, technical competence, and internationally recognized calibration practices.</p>
            <p>With experience across <strong>Engineering, Aerospace, Pharma &amp; Food, Oil &amp; Gas, Automotive, Electrical, Cement, Defense &amp; Government, and Testing Laboratories</strong>, we understand the diverse requirements of different industrial environments. By partnering with Techno Labs, you gain a dependable technical partner focused on <strong>accuracy, compliance, timely service, and long-term equipment reliability</strong>, helping your organization maintain operational efficiency and meet quality and regulatory requirements.</p>
          </div>
          <img className="why-image reveal reveal-right" src={asset("home/why-partner.jpg")} alt="Calibration equipment" width="800" height="640" loading="lazy" />
        </div>
      </section>
      <CtaBand />
      <section className="section--compact social-wrap">
        <div className="container social-panel reveal reveal-zoom">
          <h2>Things That Matter</h2>
          <p>Join us on Social Media to explore our Wide range of services and latest updates</p>
          <SocialLinks />
        </div>
      </section>
      <section className="section clients-section">
        <div className="container section-heading reveal"><h2>Our Happy Clients</h2></div>
        <ClientMarquee start={1} end={8} direction="left" />
        <ClientMarquee start={9} end={17} direction="right" />
      </section>
    </>
  );
}
