import { useEffect, useState } from "react";
import { asset } from "../../data/assets";
import { ArrowLeftIcon, ArrowRightIcon } from "../common/Icons";

const slides = ["home/hero-1.jpg", "home/hero-2.jpg", "home/hero-3.jpg"];
const interval = 5000;

const staggerStep = 0.022;

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

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return undefined;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, []);

  const move = (step) => {
    setActive((index) => (index + step + slides.length) % slides.length);
  };

  const lineOne = "ISO/IEC 17025:2017";
  const lineTwo = "For Accredited Laboratory";
  const lineTwoDelay = lineOne.length * staggerStep + 0.14;

  return (
    <section className="accreditation-hero" aria-label="Accreditation highlights">
      <div className="hero-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {slides.map((slide, index) => (
          <div
            className={`hero-slide${index === active ? " is-active" : ""}`}
            style={{ backgroundImage: `url('${asset(slide)}')` }}
            aria-hidden={index === active ? "false" : "true"}
            key={slide}
          >
            <div className="hero-slide-content">
              <p className="hero-slide-title">
                <StaggerText text={lineOne} />
              </p>
              <p className="hero-slide-copy">
                <StaggerText text={lineTwo} startDelay={lineTwoDelay} />
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="hero-arrow hero-arrow--prev" type="button" aria-label="Previous slide" onClick={() => move(-1)}>
        <ArrowLeftIcon />
      </button>
      <button className="hero-arrow hero-arrow--next" type="button" aria-label="Next slide" onClick={() => move(1)}>
        <ArrowRightIcon />
      </button>
    </section>
  );
}
