import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { serviceNavigation } from "../../data/serviceNavigation";
import { asset } from "../../data/assets";
import { useBodyLock } from "../../hooks/useBodyLock";

export default function ServiceDrawer() {
  const [open, setOpen] = useState(false);
  const tabRef = useRef(null);
  const closeRef = useRef(null);
  useBodyLock("drawer-open", open);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      requestAnimationFrame(() => tabRef.current?.focus());
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => tabRef.current?.focus());
  };

  return (
    <>
      <button
        className="service-drawer-tab"
        type="button"
        ref={tabRef}
        aria-label="Open services menu"
        aria-expanded={open}
        aria-controls="service-drawer"
        onClick={() => setOpen(true)}
      >
        <img src={asset("pages/navigation-button.webp")} alt="" />
        <span>Our Services</span>
      </button>
      <div className={`drawer-backdrop${open ? " is-open" : ""}`} aria-hidden="true" onClick={close} />
      <aside className={`service-drawer${open ? " is-open" : ""}`} id="service-drawer" aria-label="Our Services" aria-hidden={!open} inert={!open}>
        <div className="drawer-header">
          <h2>Our Services</h2>
          <button className="drawer-close" type="button" aria-label="Close services" ref={closeRef} onClick={close}>×</button>
        </div>
        <ul className="drawer-list">
          {serviceNavigation.map((service) => (
            <li key={service.id}>
              <Link to={`/services#${service.id}`} onClick={close}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
