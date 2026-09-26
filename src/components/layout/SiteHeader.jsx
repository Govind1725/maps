import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import { rentalServices } from "../../data/siteData";
import { serviceNavigation } from "../../data/serviceNavigation";
import { useBodyLock } from "../../hooks/useBodyLock";
import { ChevronIcon } from "../common/Icons";

const aboutPaths = ["/about", "/clients", "/portfolio"];

function Caret() {
  return <ChevronIcon />;
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);

  useBodyLock("nav-open", menuOpen);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isActive = (path) => pathname === path;
  const isAboutActive = aboutPaths.includes(pathname);

  return (
    <site-header>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Technolabs home">
            <img className="brand-logo" src={asset("brand/logo.svg")} alt="Technolabs" width="1125" height="337" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
          <nav
            className="site-nav"
            id="site-navigation"
            aria-label="Main navigation"
            onClick={(event) => {
              if (event.target.closest("a")) {
                setMenuOpen(false);
                setOpenPanel(null);
              }
            }}
          >
            <ul className="nav-list">
              <li className="nav-item">
                <Link className={`nav-link${isActive("/") ? " is-active" : ""}`} to="/">Home</Link>
              </li>
              <li className={`nav-item nav-item--about${openPanel === "about" ? " is-open" : ""}`}>
                <Link className={`nav-link${isAboutActive ? " is-active" : ""}`} to="/about">
                  About <Caret />
                </Link>
                <button
                  className="submenu-toggle"
                  type="button"
                  aria-label="Toggle About submenu"
                  aria-expanded={openPanel === "about"}
                  onClick={() => setOpenPanel((panel) => (panel === "about" ? null : "about"))}
                >
                  <Caret />
                </button>
                <div className="submenu">
                  <Link to="/clients">Our Clients</Link>
                  <Link to="/portfolio">Portfolio</Link>
                </div>
              </li>
              <li className={`nav-item nav-item--services${openPanel === "services" ? " is-open" : ""}`}>
                <Link className={`nav-link${isActive("/services") ? " is-active" : ""}`} to="/services">
                  Services <Caret />
                </Link>
                <button
                  className="submenu-toggle"
                  type="button"
                  aria-label="Toggle Services submenu"
                  aria-expanded={openPanel === "services"}
                  onClick={() => setOpenPanel((panel) => (panel === "services" ? null : "services"))}
                >
                  <Caret />
                </button>
                <div className="mega-menu">
                  <div className="mega-column">
                    <h2 className="mega-title">Calibration</h2>
                    <span className="mega-label">Services</span>
                    <ul>
                      {serviceNavigation.map((service) => (
                        <li key={service.id}>
                          <Link to={`/services#${service.id}`}>{service.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega-column mega-column--rental">
                    <h2 className="mega-title">Rental Equipment</h2>
                    <span className="mega-label">Services</span>
                    <ul>
                      {rentalServices.map((service) => (
                        <li key={service}>
                          <span className="mega-static">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive("/certificate") ? " is-active" : ""}`} to="/certificate">Our Certification</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive("/contact") ? " is-active" : ""}`} to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="nav-overlay" aria-hidden="true" onClick={() => setMenuOpen(false)} />
    </site-header>
  );
}
