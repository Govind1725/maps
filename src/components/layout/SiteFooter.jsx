import { Link, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import SocialLinks from "../common/SocialLinks";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../common/Icons";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/certificate", label: "Our Certification" },
  { to: "/contact", label: "Contact" },
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" }
];

const whatsappHref =
  "https://wa.me/919585671997?text=Hi%20*MAPS*!%20I%E2%80%99d%20like%20to%20know%20more%20about%20MAPS.%20Please%20share%20the%20details%20and%20available%20options.%20Thank%20you!";

export default function SiteFooter() {
  const { pathname } = useLocation();

  return (
    <site-footer>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link to="/">
              <img className="footer-logo" src={asset("brand/logo-white.svg")} alt="MAPS" width="1000" height="480" />
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
              <li><Link to="/products">Equipment &amp; Rental</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Contact Us</h2>
            <address className="footer-contact">
              <span className="footer-contact-item">
                <PinIcon className="footer-contact-icon" />
                <span>
                  2/944, Gandhinagar, Thenathopu Street,
                  <br />
                  108, Manimangalam Village, Padappai,
                  <br />
                  Kanchipuram - 601301
                </span>
              </span>
              <a className="footer-contact-item" href="mailto:Maps.Instruments@gmail.com">
                <MailIcon className="footer-contact-icon" />
                <span>Maps.Instruments@gmail.com</span>
              </a>
              <a className="footer-contact-item" href="tel:+919585671997">
                <PhoneIcon className="footer-contact-icon" />
                <span>+91 9585671997</span>
              </a>
            </address>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container footer-legal-inner">
            <span>Copyright © 2026 Technoprime Ltd.</span>
            <span>All Rights Reserved</span>
            <span>
              Designed By :{" "}
              <a href="https://digitalsystems.com" target="_blank" rel="noreferrer">Jcode Digital Systems</a>
            </span>
          </div>
        </div>
      </footer>
      <a className="whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
        <WhatsAppIcon />
      </a>
    </site-footer>
  );
}
