import { useRef, useState } from "react";
import { serviceDetails } from "../../data/serviceDetails";
import ServiceBody from "./ServiceBody";

export default function ServicesTabs() {
  const [active, setActive] = useState(serviceDetails[0].id);
  const tabsRef = useRef(null);

  const focusTab = (index) => {
    const service = serviceDetails[(index + serviceDetails.length) % serviceDetails.length];
    setActive(service.id);
    tabsRef.current?.querySelector(`#tab-${service.id}`)?.focus();
  };

  const onKeyDown = (event) => {
    const index = serviceDetails.findIndex((service) => service.id === active);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(serviceDetails.length - 1);
    }
  };

  return (
    <div data-service-tabs>
      <div className="service-tabs" role="tablist" aria-label="Calibration services" ref={tabsRef} onKeyDown={onKeyDown}>
        {serviceDetails.map((service) => {
          const selected = service.id === active;
          return (
            <button
              className="service-tab"
              id={`tab-${service.id}`}
              type="button"
              role="tab"
              aria-controls={`panel-${service.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              data-tab={service.id}
              key={service.id}
              onClick={() => setActive(service.id)}
            >
              {service.name}
            </button>
          );
        })}
      </div>
      {serviceDetails.map((service) => {
        const selected = service.id === active;
        return (
          <div
            className={`service-panel${selected ? " is-active" : ""}`}
            id={`panel-${service.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${service.id}`}
            data-panel={service.id}
            hidden={!selected}
            key={service.id}
          >
            <h3>{service.name}</h3>
            <ServiceBody service={service} />
          </div>
        );
      })}
    </div>
  );
}
