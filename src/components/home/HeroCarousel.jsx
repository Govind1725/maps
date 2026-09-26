import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import {
  ArrowIcon,
  CalendarIcon,
  ClockIcon,
  GlobeIcon,
  ShieldCheckIcon
} from "../common/Icons";

const slides = ["home/hero-1.jpg", "home/hero-2.jpg", "home/hero-3.jpg"];

const credentials = [
  { icon: ShieldCheckIcon, title: "ISO/IEC 17025:2005", note: "Accredited by EJ-JAS" },
  { icon: ClockIcon, title: "SAC Approval", note: "In Process" },
  { icon: GlobeIcon, title: "KSA & UAE", note: "Middle East Region" },
  { icon: CalendarIcon, title: "Established 2021", note: "Techno Prime Company Limited" }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(() => document.hidden);

  useEffect(() => {
    const onVisibilityChange = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || hidden || reduceMotion) return undefined;
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [hidden, paused]);

  const move = (direction) => {
    setCurrent((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <section className="hero" aria-label="Calibration and metrology services">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Accredited Calibration</p>
          <h1>
            <em>Calibration</em>, Repair &amp; Rental Solutions for Measuring and Testing Instruments
          </h1>
          <p className="hero-lead">
            Techno Labs provides calibration and repair services for measuring and testing instruments,
            with operations in KSA &amp; UAE covering the Middle East region.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/contact">
              <span>Request Calibration</span>
              <ArrowIcon />
            </Link>
            <Link className="button button--secondary" to="/services">
              <span>Our Services</span>
              <ArrowIcon />
            </Link>
          </div>
          <ul className="hero-trust">
            {credentials.map(({ icon: Icon, title, note }) => (
              <li className="hero-trust-item" key={title}>
                <span className="hero-trust-icon" aria-hidden="true"><Icon /></span>
                <span className="hero-trust-text">
                  {title}
                  <span>{note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-media">
          <div className="hero-frame">
            <div
              className="accreditation-hero"
              aria-label="Accreditation highlights"
              aria-roledescription="carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
              }}
            >
              {slides.map((slide, index) => (
                <div
                  className={`hero-slide${index === current ? " is-active" : ""}`}
                  style={{ backgroundImage: `url("${asset(slide)}")` }}
                  aria-hidden={index !== current}
                  key={slide}
                >
                  <div className="hero-slide-content">
                    <p className="hero-slide-title">ISO/IEC 17025:2017</p>
                    <p className="hero-slide-copy">For Accredited Laboratory</p>
                  </div>
                </div>
              ))}
              <div className="hero-dots">
                {slides.map((slide, index) => (
                  <button
                    className={`hero-dot${index === current ? " is-active" : ""}`}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    key={slide}
                  />
                ))}
              </div>
              <button className="hero-arrow hero-arrow--prev" type="button" aria-label="Previous slide" onClick={() => move(-1)}>
                <ArrowIcon direction="left" />
              </button>
              <button className="hero-arrow hero-arrow--next" type="button" aria-label="Next slide" onClick={() => move(1)}>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
