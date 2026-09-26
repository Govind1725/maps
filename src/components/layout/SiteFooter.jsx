import { Link, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import SocialLinks from "../common/SocialLinks";
import { WhatsAppIcon } from "../common/Icons";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/certificate", label: "Our Certification" },
  { to: "/contact", label: "Contact" }
];

const whatsappHref =
  "https://wa.me/966568015741?text=Hi%20*Technolabs*!%20I%E2%80%99d%20like%20to%20know%20more%20about%20Technolabs.%20Please%20share%20the%20details%20and%20available%20options.%20Thank%20you!";

export default function SiteFooter() {
  const { pathname } = useLocation();

  return (
    <site-footer>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link to="/">
              <img className="footer-logo" src={asset("brand/logo.svg")} alt="Technolabs" width="1125" height="337" />
            </Link>
            <p>
              Your trusted partner for precision calibration and instrument repair.
              <br />
              Delivering accuracy and reliability across the Middle East.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link className={pathname === link.to ? "is-active" : ""} to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-links">
              <li><Link to="/services">Calibration Services</Link></li>
              <li><Link to="/services">Rental Services</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Contact Us</h2>
            <address className="footer-contact">
              <span>#1&amp;11, Ground Floor, 8303, Ayoub Ibn Wareth Street, Al Malaz, Riyadh-12841, KSA</span>
              <a href="mailto:info@technoprimeltd.com">info@technoprimeltd.com</a>
              <a href="tel:+966114644399">+966 11 464 4399</a>
            </address>
          </div>
        </div>
        <div className="footer-legal">
          <span>Copyright © 2026 Technoprime Ltd.</span>
          <span>All Rights Reserved</span>
          <span>
            Designed By :{" "}
            <a href="https://digitalsystems.com" target="_blank" rel="noreferrer">Digital Systems</a>
          </span>
        </div>
      </footer>
      <a className="whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
        <WhatsAppIcon />
      </a>
    </site-footer>
  );
}
