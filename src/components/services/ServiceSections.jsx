import { serviceDetails } from "../../data/serviceDetails";
import ServiceBody from "./ServiceBody";

export default function ServiceSections() {
  return (
    <div className="service-sections" data-service-sections>
      {serviceDetails.map((service, index) => (
        <section className="service-section reveal" id={service.id} key={service.id}>
          <div className="container">
            <div className="service-section-header reveal reveal-left">
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.name}</h2>
            </div>
            <ServiceBody service={service} />
          </div>
        </section>
      ))}
    </div>
  );
}
