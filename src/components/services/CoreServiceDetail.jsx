import { Link } from "react-router-dom";
import PageHero from "../common/PageHero";
import SectionHeading from "../common/SectionHeading";
import Glyph from "../common/Glyph";
import CtaBand from "../home/CtaBand";
import {
  ArrowRightIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon
} from "../common/Icons";
import { asset } from "../../data/assets";
import { coreServiceOrder } from "../../data/coreServiceDetails";

const whatsappHref = (message) =>
  `https://wa.me/919585671997?text=${encodeURIComponent(message)}`;

export default function CoreServiceDetail({ service }) {
  const otherServices = coreServiceOrder.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        image={service.heroImage}
        title={service.title}
        subtitle={service.heroSubtitle}
      />

      <div className="svc-breadcrumb-wrap">
        <nav className="container svc-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
          <Link to="/services">Services</Link>
          <span className="svc-breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">{service.title}</span>
          <Link className="svc-back-link" to="/services">
            <Glyph name="arrowRight" className="svc-back-icon" />
            Back to Services
          </Link>
        </nav>
      </div>

      <section className="section section--soft svc-intro-section">
        <div className="container svc-intro-grid">
          <div className="svc-intro-copy reveal reveal-left">
            <SectionHeading
              align="start"
              eyebrow="Service Overview"
              title={service.introTitle}
              highlight={service.introHighlight}
            />
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="svc-intro-actions">
              <Link className="button" to="/contact#enquiry">
                <span>Enquire Now</span>
                <Glyph name="arrowRight" />
              </Link>
              <Link className="svc-secondary-button" to="/services">
                Browse all services
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="svc-intro-visual reveal reveal-right">
            <img
              src={asset(service.introImage)}
              alt={`${service.title} at MAPS`}
              width="1200"
              height="800"
              loading="lazy"
            />
            <div className="svc-intro-badge">
              <span className="svc-intro-badge-icon"><Glyph name={service.icon} /></span>
              <span>
                <small>Technical expertise</small>
                <strong>Backed by MAPS</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="container svc-outline">
          {service.outcomes.slice(0, 3).map((item) => (
            <div className="svc-outline-item reveal" key={item}>
              <Glyph name="checkCircle" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section svc-overview-section">
        <div className="container svc-overview-grid">
          <div className="reveal reveal-left">
            <SectionHeading
              align="start"
              eyebrow="In Detail"
              title="What the service"
              highlight="covers"
            />
          </div>
          <div className="svc-overview-copy reveal reveal-right">
            {service.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="svc-outcome-list">
              {service.outcomes.map((item) => (
                <li key={item}>
                  <Glyph name="checkCircle" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Key Features & Benefits"
            title="Built for"
            highlight="measurable outcomes"
          />
          <div className="svc-feature-grid">
            {service.features.map((feature) => (
              <article className="svc-feature-card reveal" key={feature.title}>
                <span className="maps-add-icon"><Glyph name={feature.icon} /></span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Our Methodology"
            title="How we"
            highlight="work with you"
          />
          <div className="svc-process-grid">
            {service.process.map((step, index) => (
              <article className="svc-step reveal" key={step.title}>
                <span className="svc-step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Scope of Work"
            title={service.offeringsTitle}
            highlight={service.offeringsHighlight}
          />
          <div className="svc-offering-grid">
            {service.offerings.map((offering) => (
              <article className="svc-offering-card reveal" key={offering.title}>
                <div className="svc-offering-head">
                  <span className="maps-add-icon"><Glyph name={offering.icon} /></span>
                  <h3>{offering.title}</h3>
                </div>
                <ul>
                  {offering.items.map((item) => (
                    <li key={item}>
                      <Glyph name="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section svc-why-section">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Why MAPS"
            title="Why choose"
            highlight="MAPS"
          >
            <p>One technical partner for advice, training, equipment and ongoing calibration support.</p>
          </SectionHeading>
          <div className="svc-why-grid">
            {service.why.map((item) => (
              <article className="svc-why-card reveal" key={item.title}>
                <span className="svc-why-icon"><Glyph name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section svc-enquiry-section" id="enquire">
        <div className="container">
          <div className="svc-enquiry-panel reveal reveal-zoom">
            <div className="svc-enquiry-copy">
              <span className="contact-kicker">Enquiry / Contact Us</span>
              <h2>
                Talk to us about <span>{service.title}</span>
              </h2>
              <p>{service.enquiryText}</p>
              <div className="svc-enquiry-actions">
                <Link className="button button--light" to="/contact#enquiry">
                  <span>Enquire Now</span>
                  <ArrowRightIcon />
                </Link>
                <a
                  className="button button--ghost"
                  href={whatsappHref(service.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Chat on WhatsApp</span>
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
            <div className="svc-enquiry-contacts">
              <a className="svc-enquiry-contact" href="tel:+919585671997">
                <span className="svc-enquiry-icon"><PhoneIcon /></span>
                <span>
                  <small>Call us</small>
                  <strong>+91 9585671997</strong>
                </span>
              </a>
              <a className="svc-enquiry-contact" href="mailto:Maps.Instruments@gmail.com">
                <span className="svc-enquiry-icon"><MailIcon /></span>
                <span>
                  <small>Email us</small>
                  <strong>Maps.Instruments@gmail.com</strong>
                </span>
              </a>
              <a className="svc-enquiry-contact" href="mailto:info.mapsinstruments@gmail.com">
                <span className="svc-enquiry-icon"><MailIcon /></span>
                <span>
                  <small>Email us</small>
                  <strong>info.mapsinstruments@gmail.com</strong>
                </span>
              </a>
              <div className="svc-enquiry-contact">
                <span className="svc-enquiry-icon"><PinIcon /></span>
                <span>
                  <small>Visit us</small>
                  <strong>
                    2/944, Gandhinagar, Thenathopu Street,
                    <br />
                    108, Manimangalam Village, Padappai,
                    <br />
                    Kanchipuram - 601301
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section svc-other-section">
        <div className="container">
          <div className="svc-other-heading reveal">
            <span className="contact-kicker">Keep Exploring</span>
            <h2>Our other core services</h2>
          </div>
          <div className="svc-other-grid">
            {otherServices.map((item) => (
              <Link className="svc-other-card reveal" to={item.path} key={item.slug}>
                <span className="svc-other-icon"><Glyph name={item.icon} /></span>
                <span className="svc-other-title">{item.title}</span>
                <Glyph className="svc-other-arrow" name="arrowRight" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand staticBackground />
    </>
  );
}
