import { useState } from "react";
import { serviceDetails } from "../../data/serviceDetails";
import { ChevronIcon } from "../common/Icons";
import ServiceBody from "./ServiceBody";

function instrumentCount(service) {
  return service.groups.reduce(
    (groupTotal, group) => groupTotal + group.columns.reduce((total, items) => total + items.length, 0),
    0
  );
}

export default function ServicesTabs() {
  const [openId, setOpenId] = useState(serviceDetails[0].id);

  return (
    <div className="catalogue">
      {serviceDetails.map((service, index) => {
        const isOpen = service.id === openId;
        const panelId = `panel-${service.id}`;
        return (
          <div className={`catalogue-item${isOpen ? " is-open" : ""}`} key={service.id}>
            <h3 className="catalogue-item-heading">
              <button
                className="catalogue-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : service.id)}
              >
                <span className="catalogue-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="catalogue-name">{service.name}</span>
                <span className="catalogue-meta">{instrumentCount(service)} instruments</span>
                <span className="catalogue-action">View Details <ChevronIcon /></span>
              </button>
            </h3>
            <div className="catalogue-panel" id={panelId} hidden={!isOpen}>
              <ServiceBody service={service} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
