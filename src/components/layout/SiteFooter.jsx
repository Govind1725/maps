import { Link, NavLink, useLocation } from "react-router-dom";
import { asset } from "../../data/assets";
import { getRouteKey, industries, routeMeta } from "../../data/siteData";
import SocialLinks from "../common/SocialLinks";

export default function SiteFooter() {
  const location = useLocation();
  const routeKey = getRouteKey(location.pathname);
  const pageLabel = routeMeta[routeKey].label;
  const message = encodeURIComponent(`Hi *Technolabs*! I’d like to know more about ${pageLabel}. Please share the details and available options. Thank you!`);
  const whatsappUrl = `https://wa.me/966568015741?text=${message}`;
  const linkClass = ({ isActive }) => isActive ? "is-active" : "";

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link to="/"><img className="footer-logo" src={asset("brand/logo.svg")} alt="Technolabs" width="1125" height="337" /></Link>
            <p>Your trusted partner for precision calibration and instrument repair.<br />Delivering accuracy and reliability across the Middle East.</p>
            <SocialLinks />
          </div>
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">
              <li><NavLink className={linkClass} to="/" end>Home</NavLink></li>
              <li><NavLink className={linkClass} to="/about">About</NavLink></li>
              <li><NavLink className={linkClass} to="/portfolio">Portfolio</NavLink></li>
              <li><Link to="/#industries">Industries We Serve</Link></li>
              <li><NavLink className={linkClass} to="/certificate">Our Certification</NavLink></li>
              <li><Link to="/certificate#verify">Verify Certificate</Link></li>
              <li><NavLink className={linkClass} to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-links">
              <li><Link to="/services">Calibration Services</Link></li>
              <li><Link to="/services#ecl">Electrical Calibration Lab</Link></li>
              <li><Link to="/services#pcl">Pressure Calibration Lab</Link></li>
              <li><Link to="/services">Rental Services</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Industries</h2>
            <ul className="footer-links">
              {industries.map((industry) => (
                <li key={industry.icon}><Link to="/#industries">{industry.label}</Link></li>
              ))}
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
          <span>Designed By : <a href="https://zaclab.com" target="_blank" rel="noreferrer">Zaclab Technologies Pvt. Ltd.</a></span>
        </div>
      </footer>
      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Open WhatsApp chat">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.2l-.8 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.6l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 2 .8 2.8.9 3.8.8.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.2Z" /></svg>
      </a>
    </>
  );
}
