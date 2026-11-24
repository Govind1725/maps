import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import { ArrowIcon } from "../common/Icons";

const slides = ["home/hero-1.jpg", "home/hero-2.jpg", "home/hero-3.jpg"];

const staggerStep = 0.022;

const rotatingPhrases = [
  "Accredited Calibration",
  "Instrument Repair",
  "Industrial Testing",
  "Traceable Compliance",
];

function StaggerText({ text, startDelay = 0 }) {
  return (
    <span aria-hidden="true">
      {Array.from(text).map((char, i) => (
        <span
          className="stagger-char"
          style={{ "--stagger": `${startDelay + i * staggerStep}s` }}
          key={`${char}-${i}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(rotatingPhrases[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const current = rotatingPhrases[index];
    const complete = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = complete ? 1800 : deleting ? 32 : 62;

    const timer = window.setTimeout(() => {
      if (complete) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((value) => (value + 1) % rotatingPhrases.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="hero-typewriter" aria-hidden="true">
      {text}
      <i />
    </span>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  const lineOne = "ISO/IEC 17025:2017";
  const lineTwo = "For Accredited Laboratory";
  const lineTwoDelay = lineOne.length * staggerStep + 0.14;

  return (
    <section className="accreditation-hero" aria-label="Accreditation highlights">
      <div className="hero-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {slides.map((slide) => (
          <div
            className="hero-slide"
            style={{ backgroundImage: `url('${asset(slide)}')` }}
            aria-hidden="true"
            key={slide}
          />
        ))}
      </div>
      <div className="hero-overlay">
        <div className="hero-content" key={active}>
          <span className="hero-badge"><i /> ISO/IEC 17025:2017 Accredited Laboratory</span>
          <h2 className="hero-slide-title">
            <StaggerText text={lineOne} />
          </h2>
          <p className="hero-slide-copy">
            <StaggerText text={lineTwo} startDelay={lineTwoDelay} />
          </p>
          <div className="hero-rotator">
            <span>Built for</span>
            <Typewriter />
          </div>
        </div>
        <div className="hero-actions">
          <Link className="button hero-btn" to="/services">
            Explore Our Services <ArrowIcon />
          </Link>
          <Link className="button hero-btn hero-btn--ghost" to="/contact">
            Get a Quote
          </Link>
        </div>
        <div className="hero-dots" role="group" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              className={`hero-dot${index === active ? " is-active" : ""}`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              onClick={() => setActive(index)}
              key={slide}
            />
          ))}
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        Scroll
        <span />
      </div>
    </section>
  );
}
