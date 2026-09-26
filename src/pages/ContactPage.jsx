import { useState } from "react";
import PageHero from "../components/common/PageHero";
import { MailIcon, PhoneIcon, PinIcon, SendIcon } from "../components/common/Icons";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Thank you. Your message has been received.");
    form.reset();
  };

  return (
    <form className="contact-form reveal reveal-right" onSubmit={handleSubmit}>
      <div className="form-head">
        <p className="eyebrow">Send us a message</p>
        <h2>Have a question or feedback?</h2>
        <p>Tell us about the instrument, service, or technical requirement. Our team will respond with the information you need.</p>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" required />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
      </div>
      <label className="form-consent"><input type="checkbox" name="consent" required /><span>I accept Terms &amp; Conditions</span></label>
      <button className="button" type="submit">
        <span>Send Message</span>
        <SendIcon />
      </button>
      <p className={`form-status${status ? " is-visible" : ""}`} role="status" aria-live="polite">{status}</p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Contact" subtitle="Contact us for any kind of help and support" />
      <section className="section">
        <div className="container contact-form-wrap">
          <div>
            <div className="contact-form-copy reveal reveal-left">
              <p className="eyebrow">Have Questions?</p>
              <h2>Our Experts are Ready</h2>
              <p>Have a calibration, repair, or technical service requirement? Our team at Techno Labs is here to help. Whether you need support for measuring and testing instruments, require calibration services, or would like to discuss your specific industrial requirements, feel free to reach out to us. With our expertise across diverse industries and operations throughout the Middle East, we are committed to providing reliable, responsive, and professional solutions tailored to your needs.</p>
            </div>
            <ul className="contact-list reveal reveal-left">
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true"><PinIcon /></span>
                <div className="contact-item-body">
                  <h3>Head Office</h3>
                  <p>#1&amp;11, Ground Floor, 8303, Ayoub Ibn Wareth Street, Al Malaz, Riyadh-12841, KSA</p>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true"><MailIcon /></span>
                <div className="contact-item-body">
                  <h3>Email Support</h3>
                  <a href="mailto:info@technoprimeltd.com">info@technoprimeltd.com</a>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-icon" aria-hidden="true"><PhoneIcon /></span>
                <div className="contact-item-body">
                  <h3>Let's Talk</h3>
                  <a href="tel:+966114644399">+966 11 464 4399</a>
                </div>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
