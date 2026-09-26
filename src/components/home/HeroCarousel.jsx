import { useEffect, useState } from "react";
import { asset } from "../../data/assets";
import { ArrowLeftIcon, ArrowRightIcon } from "../common/Icons";

const slides = ["home/hero-1.jpg", "home/hero-2.jpg", "home/hero-3.jpg"];
const interval = 6000;

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, []);

  const move = (step) => {
    setActive((index) => (index + step + slides.length) % slides.length);
  };

  return (
    <section className="accreditation-hero" aria-label="Accreditation highlights">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide${index === active ? " is-active" : ""}`}
          style={{ backgroundImage: `url('${asset(slide)}')` }}
          aria-hidden={index === active ? "false" : "true"}
          key={slide}
        >
          <div className="hero-slide-content">
            <p className="hero-slide-title">ISO/IEC 17025:2017</p>
            <p className="hero-slide-copy">For Accredited Laboratory</p>
          </div>
        </div>
      ))}
      <button className="hero-arrow hero-arrow--prev" type="button" aria-label="Previous slide" onClick={() => move(-1)}>
        <ArrowLeftIcon />
      </button>
      <button className="hero-arrow hero-arrow--next" type="button" aria-label="Next slide" onClick={() => move(1)}>
        <ArrowRightIcon />
      </button>
    </section>
  );
}
