import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import { useBodyLock } from "../../hooks/useBodyLock";
import { ChevronIcon } from "../common/Icons";
import ThemeToggle from "../common/ThemeToggle";

const isPortfolioPath = (pathname) => pathname.startsWith("/portfolio");

function Caret() {
  return <ChevronIcon />;
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useBodyLock("nav-open", menuOpen);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => pathname === path;
  const isAboutActive = pathname === "/about" || pathname === "/clients";
  const isPortfolioActive = isPortfolioPath(pathname);
  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <site-header>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="MAPS home">
            <img className="brand-logo" src={asset("brand/maps-logo.png")} alt="MAPS" width="1125" height="337" />
          </Link>
          <div className="header-right">
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
                <li className={`nav-item nav-item--portfolio${isPortfolioActive ? " is-active" : ""}`}>
                  <Link className={`nav-link${isPortfolioActive ? " is-active" : ""}`} to="/portfolio">Portfolio</Link>
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
                  <Link className={`nav-link${isServicesActive ? " is-active" : ""}`} to="/services">
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
                    <div className="mega-column mega-column--links">
                      <ul>
                        <li><Link to="/services">Calibration Services</Link></li>
                        <li><Link to="/services/consulting">Consulting Services</Link></li>
                        <li><Link to="/services/training">Training &amp; Teaching Services</Link></li>
                        <li><Link to="/services/equipment-rental">Industrial Equipment Rental</Link></li>
                        <li><Link to="/services/equipment-sales">Industrial Equipment Sales</Link></li>
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
            <ThemeToggle />
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
          </div>
        </div>
      </header>
      <div className="nav-overlay" aria-hidden="true" onClick={() => setMenuOpen(false)} />
    </site-header>
  );
}
