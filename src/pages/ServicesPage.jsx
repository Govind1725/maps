import PageHero from "../components/common/PageHero";
import ServiceIndex from "../components/services/ServiceIndex";
import ServiceSections from "../components/services/ServiceSections";
import ServiceDrawer from "../components/services/ServiceDrawer";

export default function ServicesPage() {
  return (
    <>
      <PageHero image="pages/techno-lab.jpg" title="Services" />
      <section className="section section--compact service-index-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow service-index-eyebrow">Calibration Labs</p>
            <h2>Find Your Calibration Lab</h2>
            <p>Select a laboratory to jump directly to the instruments we calibrate and repair.</p>
          </div>
          <ServiceIndex />
        </div>
      </section>
      <ServiceSections />
      <ServiceDrawer />
    </>
  );
}
