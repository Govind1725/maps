import { useState } from "react";
import { useLocation } from "react-router-dom";
import { serviceDetails } from "../../data/serviceDetails";
import { ChevronIcon } from "../common/Icons";
import ServiceBody from "./ServiceBody";

function instrumentCount(service) {
  return service.groups.reduce(
    (groupTotal, group) => groupTotal + group.columns.reduce((total, items) => total + items.length, 0),
    0
  );
}

export default function ServiceSections() {
  const location = useLocation();
  const target = decodeURIComponent(location.hash.replace(/^#/, ""));
  const [override, setOverride] = useState({ target: null, id: null });
  const linkedId = serviceDetails.some((service) => service.id === target) ? target : serviceDetails[0].id;
  const openId = override.target === target && override.id ? override.id : linkedId;

  return (
    <div className="service-sections">
      {serviceDetails.map((service, index) => {
        const isOpen = service.id === openId;
        const panelId = `lab-${service.id}`;
        return (
          <section className={`service-section${isOpen ? " is-open" : ""}`} id={service.id} key={service.id}>
            <div className="container">
              <h2 className="service-section-header">
                <button
                  className="service-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOverride({ target, id: isOpen ? null : service.id })}
                >
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="service-section-title">{service.name}</span>
                  <span className="service-section-meta">{instrumentCount(service)} instruments</span>
                  <span className="service-section-action">View Details <ChevronIcon /></span>
                </button>
              </h2>
              <div className="service-section-body" id={panelId} hidden={!isOpen}>
                <ServiceBody service={service} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
