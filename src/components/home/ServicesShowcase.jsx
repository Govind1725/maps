import { Link } from "react-router-dom";
import { serviceDetails } from "../../data/serviceDetails";
import { rentalServices } from "../../data/siteData";
import Glyph from "../common/Glyph";
import SectionHeading from "../common/SectionHeading";

const serviceIcons = {
  ecl: "zap",
  thcl: "target",
  pcl: "layers",
  dcl: "cpu",
  fcl: "layers",
  mcl: "award",
  tocl: "cpu",
  vcl: "cloud",
  afvcl: "zap",
  aslcl: "layers",
  fmc: "cloud",
  olcl: "sparkles",
  ccl: "shield",
};

function instrumentCount(service) {
  return service.groups.reduce((total, group) => {
    return total + (group.columns || []).reduce((sum, column) => sum + column.length, 0);
  }, 0);
}

export default function ServicesShowcase() {
  return (
    <section className="section offer-section" id="offer">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="What We Offer"
          title="Complete Calibration"
          highlight="Capabilities"
        >
          <p>
            Thirteen accredited laboratories and a flexible rental fleet — covering the instruments
            your teams rely on for accurate, compliant and repeatable measurement.
          </p>
        </SectionHeading>

        <div className="offer-grid reveal">
          {serviceDetails.map((service, index) => (
            <Link className="offer-card" to={`/services#${service.id}`} key={service.id}>
              <div className="offer-card-top">
                <span className="offer-icon">
                  <Glyph name={serviceIcons[service.id] || "shield"} />
                </span>
                <span className="offer-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{instrumentCount(service)} instruments calibrated and tested</p>
              <span className="offer-link">
                View Lab <Glyph name="arrowUpRight" />
              </span>
            </Link>
          ))}
        </div>

        <div className="rental-strip reveal">
          <div className="rental-copy">
            <span className="rental-badge">
              <Glyph name="layers" /> Rental Equipment
            </span>
            <h3>Lab-grade instruments, ready when you are</h3>
            <p>
              Short- and long-term rental support for projects, shutdowns and temporary testing facilities.
            </p>
          </div>
          <div className="rental-tags">
            {rentalServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
