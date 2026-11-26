import HeroCarousel from "../components/home/HeroCarousel";
import CapabilityStrip from "../components/home/CapabilityStrip";
import LogoWall from "../components/home/LogoWall";
import CalibrationBanner from "../components/home/CalibrationBanner";
import { AboutIntro } from "../components/home/AboutIntro";
import CoreServicesSection from "../components/home/CoreServicesSection";
import ServicesShowcase from "../components/home/ServicesShowcase";
import TechSolutionsShowcase from "../components/home/TechSolutionsShowcase";
import IndustryGrid from "../components/home/IndustryGrid";
import HomeContactSection from "../components/home/HomeContactSection";
import SectionHeading from "../components/common/SectionHeading";
import { asset } from "../data/assets";

export default function HomePage() {
  return (
    <>
      <h1 className="visually-hidden">MAPS calibration and instrument repair</h1>
      <HeroCarousel />
      <CapabilityStrip />

      <section className="section about-section">
        <AboutIntro />
      </section>

      <CalibrationBanner />
      <CoreServicesSection />
      <ServicesShowcase />

      <TechSolutionsShowcase />
      <IndustryGrid />

      <section className="section why-section">
        <div className="container why-grid">
          <SectionHeading
            className="why-copy reveal reveal-left"
            align="start"
            eyebrow="Welcome To"
            title={
              <>
                About <span className="title-highlight">MAPS</span>
              </>
            }
          >
            <p>
              Established in <strong>2019</strong>, MAPS Instruments &amp; Industrial Services is a
              professional provider of calibration and industrial instrument solutions, based in
              Padappai, Kanchipuram, Tamil Nadu.
            </p>
            <p>
              Operating in accordance with ISO/IEC 17025:2017, we specialize in calibration of
              measuring and testing instruments, supply of master and measuring instruments,
              instrument repair, maintenance, servicing, and rental solutions.
            </p>
            <p>
              With a commitment to accuracy, quality, and customer satisfaction, we help industries
              maintain reliable measurements and operational efficiency.
            </p>
            <p>
              <strong>Our Motto: Metrology Excellence in Measurement &amp; Calibration.</strong>
            </p>
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
            <strong>2019</strong>
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

      <LogoWall />
      <HomeContactSection />
    </>
  );
}
