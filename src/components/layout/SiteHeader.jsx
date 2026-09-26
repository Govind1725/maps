import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import { getRouteKey, routeMeta, rentalServices } from "../../data/siteData";
import { serviceNavigation } from "../../data/serviceNavigation";
import { useBodyLock } from "../../hooks/useBodyLock";
import { ChevronIcon } from "../common/Icons";

export default function SiteHeader() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const currentPage = routeMeta[getRouteKey(location.pathname)].page;
  const aboutActive = ["about", "clients", "portfolio"].includes(currentPage);
  const industriesActive = location.pathname === "/" && location.hash === "#industries";
  const homeActive = location.pathname === "/" && !industriesActive;
  useBodyLock("nav-open", mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      setOpenSubmenu(null);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 1180) {
        setMobileOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  const closeNavigation = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu((current) => current === name ? null : name);
  };

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Technolabs home" onClick={closeNavigation}>
            <img className="brand-logo" src={asset("brand/logo.svg")} alt="Technolabs" width="1125" height="337" />
          </Link>
          <button
            className={`menu-toggle${mobileOpen ? " is-active" : ""}`}
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="site-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
          </button>
          <nav className="site-nav" id="site-navigation" aria-label="Main navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className={`nav-link${homeActive ? " is-active" : ""}`} to="/" onClick={closeNavigation}>Home</Link>
              </li>
              <li className={`nav-item nav-item--about${aboutActive ? " is-active" : ""}${openSubmenu === "about" ? " is-open" : ""}`}>
                <NavLink className={aboutActive ? "nav-link is-active" : "nav-link"} to="/about" onClick={closeNavigation}>About <ChevronIcon /></NavLink>
                <button
                  className="submenu-toggle"
                  type="button"
                  aria-label="Toggle About submenu"
                  aria-expanded={openSubmenu === "about"}
                  aria-controls="about-submenu"
                  onClick={() => toggleSubmenu("about")}
                >
                  <ChevronIcon />
                </button>
                <div className="submenu" id="about-submenu">
                  <NavLink to="/clients" onClick={closeNavigation}>Our Clients</NavLink>
                  <NavLink to="/portfolio" onClick={closeNavigation}>Portfolio</NavLink>
                </div>
              </li>
              <li className={`nav-item nav-item--services${currentPage === "services" ? " is-active" : ""}${openSubmenu === "services" ? " is-open" : ""}`}>
                <NavLink className={currentPage === "services" ? "nav-link is-active" : "nav-link"} to="/services" onClick={closeNavigation}>Services <ChevronIcon /></NavLink>
                <button
                  className="submenu-toggle"
                  type="button"
                  aria-label="Toggle Services submenu"
                  aria-expanded={openSubmenu === "services"}
                  aria-controls="services-mega-menu"
                  onClick={() => toggleSubmenu("services")}
                >
                  <ChevronIcon />
                </button>
                <div className="mega-menu" id="services-mega-menu">
                  <div className="mega-column">
                    <h2 className="mega-title">Calibration</h2>
                    <span className="mega-label">Services</span>
                    <ul>
                      {serviceNavigation.map((service) => (
                        <li key={service.id}><Link to={`/services#${service.id}`} onClick={closeNavigation}>{service.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega-column mega-column--rental">
                    <h2 className="mega-title">Rental Equipment</h2>
                    <span className="mega-label">Services</span>
                    <ul>
                      {rentalServices.map((service) => <li key={service}><span className="mega-static">{service}</span></li>)}
                    </ul>
                  </div>
                  <div className="mega-column mega-column--actions">
                    <h2 className="mega-title">Quick Actions</h2>
                    <span className="mega-label">Support</span>
                    <ul>
                      <li><Link to="/certificate#verify" onClick={closeNavigation}>Verify Certificate</Link></li>
                      <li><Link to="/contact" onClick={closeNavigation}>Request Calibration</Link></li>
                      <li><Link to="/#industries" onClick={closeNavigation}>Industries We Serve</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${industriesActive ? " is-active" : ""}`} to="/#industries" onClick={closeNavigation}>Industries</Link>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`} to="/certificate" onClick={closeNavigation}>Our Certification</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`} to="/contact" onClick={closeNavigation}>Contact</NavLink>
              </li>
            </ul>
            <Link className="header-cta" to="/contact" onClick={closeNavigation}>Request Calibration</Link>
          </nav>
        </div>
      </header>
      <div className="nav-overlay" aria-hidden="true" onClick={closeNavigation} />
    </>
  );
}
