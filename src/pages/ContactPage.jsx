import { useState } from "react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { MailIcon, PhoneIcon, PinIcon, SendIcon } from "../components/common/Icons";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Thank you. Our team will get back to you shortly.");
    form.reset();
  };

  return (
    <>
      <PageHero
        image="pages/lab-wide.webp"
        title="Contact"
        subtitle="Contact us for any kind of help and support"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            className="contact-form-copy reveal"
            eyebrow="Have Questions?"
            title="Our Experts"
            highlight="are Ready"
          >
            <p>Have a calibration, repair, or technical service requirement? Our team at Techno Labs is here to help. Whether you need support for measuring and testing instruments, require calibration services, or would like to discuss your specific industrial requirements, feel free to reach out to us. With our expertise across diverse industries and operations throughout the Middle East, we are committed to providing reliable, responsive, and professional solutions tailored to your needs.</p>
          </SectionHeading>
          <div className="contact-cards">
            <article className="contact-card reveal reveal-left">
              <div className="contact-icon"><PinIcon /></div>
              <h2>Head Office</h2>
              <p>#1&amp;11, Ground Floor, 8303, Ayoub Ibn Wareth Street, Al Malaz, Riyadh-12841, KSA</p>
            </article>
            <article className="contact-card reveal reveal-zoom">
              <div className="contact-icon"><MailIcon /></div>
              <h2>Email Support</h2>
              <a href="mailto:info@technoprimeltd.com">info@technoprimeltd.com</a>
            </article>
            <article className="contact-card reveal reveal-right">
              <div className="contact-icon"><PhoneIcon /></div>
              <h2>Let&apos;s Talk</h2>
              <a href="tel:+966114644399">+966 11 464 4399</a>
            </article>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container contact-form-wrap">
          <SectionHeading
            className="contact-form-copy reveal reveal-left"
            align="start"
            eyebrow="Send Us a Message"
            title="Have a question"
            highlight="or feedback?"
          >
            <p>Tell us about the instrument, service, or technical requirement. Our team will respond with the information you need.</p>
          </SectionHeading>
          <form className="contact-form reveal reveal-right" data-contact-form onSubmit={handleSubmit}>
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
            <label className="form-consent">
              <input type="checkbox" required />
              <span>I accept Terms &amp; Conditions</span>
            </label>
            <button className="button" type="submit">
              <span>Send</span>
              <SendIcon />
            </button>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </section>
    </>
  );
}
