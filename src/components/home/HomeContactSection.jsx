import { Link } from "react-router-dom";
import { MailIcon, PhoneIcon, PinIcon } from "../common/Icons";
import Glyph from "../common/Glyph";

const whatsappHref =
  "https://wa.me/966568015741?text=Hi%20*MAPS*!%20I%E2%80%99d%20like%20to%20know%20more%20about%20MAPS.%20Please%20share%20the%20details%20and%20available%20options.%20Thank%20you!";

export default function HomeContactSection() {
  return (
    <section className="section home-contact-section">
      <div className="container home-contact-grid">
        <div className="home-contact-copy reveal reveal-left">
          <span className="contact-kicker">Talk to Our Experts</span>
          <h2>
            Tell us what you need <span>calibrated</span>
          </h2>
          <p>
            Our technical team is ready to help with instrument lists, accreditation questions, repair
            requirements and tailored calibration programmes.
          </p>
          <Link className="btn-primary" to="/contact">
            Send an Enquiry <Glyph name="arrowRight" />
          </Link>
        </div>

        <div className="home-contact-cards reveal reveal-right">
          <a className="home-contact-card" href="tel:+966114644399">
            <span className="home-contact-icon"><PhoneIcon /></span>
            <span>
              <small>Call us</small>
              <strong>+966 11 464 4399</strong>
            </span>
          </a>
          <a className="home-contact-card" href="mailto:info@technoprimeltd.com">
            <span className="home-contact-icon"><MailIcon /></span>
            <span>
              <small>Email us</small>
              <strong>info@technoprimeltd.com</strong>
            </span>
          </a>
          <div className="home-contact-card">
            <span className="home-contact-icon"><PinIcon /></span>
            <span>
              <small>Visit us</small>
              <strong>#1&amp;11, Ground Floor, 8303, Ayoub Ibn Wareth Street, Al Malaz, Riyadh-12841, KSA</strong>
            </span>
          </div>
          <a className="home-contact-card" href={whatsappHref} target="_blank" rel="noreferrer">
            <span className="home-contact-icon"><Glyph name="sparkles" /></span>
            <span>
              <small>WhatsApp</small>
              <strong>Chat with our team</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
