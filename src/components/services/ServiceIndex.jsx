import { Link } from "react-router-dom";
import { serviceDetails } from "../../data/serviceDetails";

export default function ServiceIndex() {
  return (
    <nav className="service-index" aria-label="Calibration labs">
      <h2 className="visually-hidden">Calibration labs index</h2>
      <ul className="service-index-list">
        {serviceDetails.map((service, index) => (
          <li key={service.id}>
            <Link className="service-index-link" to={`/services#${service.id}`}>
              <span className="service-index-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="service-index-name">{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
