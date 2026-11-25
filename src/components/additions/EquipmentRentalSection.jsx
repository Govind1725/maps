import { Link } from "react-router-dom";
import { equipmentCategories } from "../../data/additionsData";
import SectionHeading from "../common/SectionHeading";
import Glyph from "../common/Glyph";
import { ArrowIcon } from "../common/Icons";

export default function EquipmentRentalSection() {
  return (
    <section className="section section--soft maps-add-equipment">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="Equipment"
          title="Instrument rental &"
          highlight="supply"
        >
          <p>Reference instruments and measuring tools for laboratories, field teams and project work.</p>
        </SectionHeading>
        <div className="maps-add-card-grid">
          {equipmentCategories.map((category) => (
            <article className="maps-add-equipment-card reveal" key={category.title}>
              <span className="maps-add-icon"><Glyph name={category.icon} /></span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="maps-add-card-link" to="/contact">
                Request Availability <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
