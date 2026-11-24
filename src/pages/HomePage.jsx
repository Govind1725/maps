import HeroCarousel from "../components/home/HeroCarousel";
import CapabilityStrip from "../components/home/CapabilityStrip";
import LogoWall from "../components/home/LogoWall";
import CalibrationBanner from "../components/home/CalibrationBanner";
import { AboutIntro } from "../components/home/AboutIntro";
import ServicesShowcase from "../components/home/ServicesShowcase";
import ServicesTabs from "../components/services/ServicesTabs";
import TechSolutionsShowcase from "../components/home/TechSolutionsShowcase";
import AccreditationSection from "../components/home/AccreditationSection";
import IndustryGrid from "../components/home/IndustryGrid";
import ProcurementSection from "../components/home/ProcurementSection";
import CompetitiveEdgeSection from "../components/home/CompetitiveEdgeSection";
import HomeContactSection from "../components/home/HomeContactSection";
import CtaBand from "../components/home/CtaBand";
import SectionHeading from "../components/common/SectionHeading";
import { asset } from "../data/assets";

export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">MAPS calibration and instrument repair</h1>
      <HeroCarousel />
      <CapabilityStrip />
      <LogoWall />

      <section className="section about-section">
        <AboutIntro />
      </section>

      <CalibrationBanner />
      <ServicesShowcase />

      <section className="section service-tabs-section">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Instrument Coverage"
            title="Explore by"
            highlight="Laboratory"
          >
            <p>
              Review the full range of instruments we calibrate in each laboratory. Use the tabs to
              move between disciplines.
            </p>
          </SectionHeading>
          <ServicesTabs />
        </div>
      </section>

      <TechSolutionsShowcase />
      <AccreditationSection />
      <IndustryGrid />

      <section className="section why-section">
        <div className="container why-grid">
          <SectionHeading
            className="why-copy reveal reveal-left"
            align="start"
            eyebrow="Why Us"
            title="Why Partner with"
            highlight="MAPS"
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
        <div className="container why-stats reveal" aria-label="Key company figures">
          <div className="why-stat">
            <strong>2021</strong>
            <span>Established</span>
          </div>
          <div className="why-stat">
            <strong>13</strong>
            <span>Calibration Labs</span>
          </div>
          <div className="why-stat">
            <strong>500+</strong>
            <span>Enterprise Clients</span>
          </div>
          <div className="why-stat">
            <strong>99.9%</strong>
            <span>Accuracy &amp; Reliability</span>
          </div>
        </div>
      </section>

      <ProcurementSection />
      <CtaBand staticBackground />
      <CompetitiveEdgeSection />
      <HomeContactSection />
    </>
  );
}
