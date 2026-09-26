import HeroCarousel from "../components/home/HeroCarousel";
import CalibrationBanner from "../components/home/CalibrationBanner";
import { AboutIntro } from "../components/home/AboutIntro";
import ServicesTabs from "../components/services/ServicesTabs";
import IndustryGrid from "../components/home/IndustryGrid";
import ClientMarquee from "../components/home/ClientMarquee";
import SocialLinks from "../components/common/SocialLinks";
import SectionHeading from "../components/common/SectionHeading";
import { asset } from "../data/assets";

export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">Technolabs calibration and instrument repair</h1>
      <HeroCarousel />
      <CalibrationBanner />
      <section className="section about-section">
        <AboutIntro />
      </section>
      <section className="services-section">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="What We Offer"
            title="Our Services"
          />
          <ServicesTabs />
        </div>
      </section>
      <IndustryGrid />
      <section className="section why-section">
        <div className="container why-grid">
          <SectionHeading
            className="why-copy reveal reveal-left"
            align="start"
            eyebrow="Why Us"
            title="Why Partner with"
            highlight="Technolabs"
          >
            <p>Partner with <strong>Techno Prime Company Limited (Techno Labs)</strong> for reliable, accurate, and professional calibration and repair solutions tailored to the needs of modern industries. Established in 2021 with operations across <strong>KSA, UAE, and the wider Middle East</strong>, we bring technical expertise and industry-focused services to ensure your measuring and testing instruments remain accurate, reliable, and fit for purpose. Our ISO/IEC 17025:2005 accreditation by EJ-JAS reflects our commitment to quality, technical competence, and internationally recognized calibration practices.</p>
            <p>With experience across <strong>Engineering, Aerospace, Pharma &amp; Food, Oil &amp; Gas, Automotive, Electrical, Cement, Defense &amp; Government, and Testing Laboratories</strong>, we understand the diverse requirements of different industrial environments. By partnering with Techno Labs, you gain a dependable technical partner focused on <strong>accuracy, compliance, timely service, and long-term equipment reliability</strong>, helping your organization maintain operational efficiency and meet quality and regulatory requirements.</p>
          </SectionHeading>
          <img
            className="why-image reveal reveal-right"
            src={asset("home/why-partner.jpg")}
            alt="Calibration equipment"
            width="800"
            height="640"
            loading="lazy"
          />
        </div>
      </section>
      <section className="section--compact social-wrap">
        <div className="container">
          <SectionHeading
            className="social-panel reveal reveal-zoom"
            eyebrow="Stay Connected"
            title="Things That"
            highlight="Matter"
          >
            <p>Join us on Social Media to explore our Wide range of services and latest updates</p>
            <SocialLinks />
          </SectionHeading>
        </div>
      </section>
      <section className="section clients-section">
        <SectionHeading
          className="container reveal"
          eyebrow="Trusted By"
          title="Our Happy"
          highlight="Clients"
        />
        <ClientMarquee start={1} end={8} direction="left" />
        <ClientMarquee start={9} end={17} direction="right" />
      </section>
    </>
  );
}
