import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import SectionHeading from "../common/SectionHeading";

export function ArrowRightIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="18" y2="12" />
      <polyline points="12 6 18 12 12 18" />
    </svg>
  );
}

const industryCards = [
  {
    id: "it",
    title: "Information Technology",
    image: "industries/card-information-technology.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="8" rx="2" />
        <rect x="2" y="13" width="20" height="8" rx="2" />
        <line x1="6" y1="7" x2="6" y2="7.01" />
        <line x1="6" y1="17" x2="6" y2="17.01" />
      </svg>
    ),
    positionClass: "card-pos-top"
  },
  {
    id: "healthcare",
    title: "Healthcare Industry",
    image: "industries/card-healthcare.svg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 7v6" />
        <path d="M9 10h6" />
      </svg>
    ),
    positionClass: "card-pos-top-right"
  },
  {
    id: "automobile",
    title: "Automobile Industry",
    image: "industries/card-automobile.svg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H7c-.7 0-1.3.3-1.8.7C4.3 8.6 3 10 3 10s-2.7.6-4.5 1.1C-2.3 11.3-3 12.1-3 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
    positionClass: "card-pos-bottom-right"
  },
  {
    id: "manufacturing",
    title: "Manufacturing Industry",
    image: "industries/card-manufacturing.svg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    positionClass: "card-pos-bottom"
  },
  {
    id: "aviation",
    title: "Aviation Industry",
    image: "industries/card-aviation.svg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.1-2 .8l-.5.9 5.5 3.5-3.5 3.5-2.2-.6c-.5-.1-1 .1-1.3.5l-.3.4 3 2.5 2.5 3 .4-.3c.4-.3.6-.8.5-1.3l-.6-2.2 3.5-3.5 3.5 5.5.9-.5c.7-.4 1-1.2.8-2z" />
      </svg>
    ),
    positionClass: "card-pos-bottom-left"
  },
  {
    id: "gas_oil",
    title: "Gas & Oil Industry",
    image: "industries/card-gas-oil.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M15 11h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9l-3-3" />
        <rect x="6" y="6" width="6" height="5" rx="1" />
        <line x1="3" y1="22" x2="15" y2="22" />
      </svg>
    ),
    positionClass: "card-pos-top-left"
  }
];

export default function IndustryGrid() {
  return (
    <section className="expertise-section reveal">
      <div className="container expertise-container">
        {/* World map background watermark pattern */}
        <div className="world-map-bg" aria-hidden="true">
          <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1" stroke="#0d52ce" strokeWidth="2" strokeDasharray="4 8">
              <path d="M150 120 C 180 110, 220 140, 250 160 C 270 170, 310 160, 330 140 C 350 120, 390 130, 420 150 C 450 170, 480 160, 510 140 C 550 120, 600 130, 640 160 C 670 180, 720 170, 760 140 C 800 120, 850 140, 890 170 C 920 190, 950 180, 980 160" />
              <path d="M120 220 C 160 200, 210 230, 240 250 C 270 270, 320 260, 350 230 C 380 200, 430 220, 470 250 C 510 280, 560 260, 600 230 C 640 200, 690 220, 730 250 C 770 280, 820 260, 860 230 C 900 200, 940 230, 970 250" />
              <path d="M180 320 C 220 300, 260 330, 300 350 C 330 360, 380 350, 410 330 C 450 300, 500 320, 540 350 C 580 380, 630 360, 670 330 C 710 300, 760 320, 800 350" />
            </g>
          </svg>
        </div>

        <div className="expertise-grid">
          {/* Left Column: Title, Copy, Stats, CTA */}
          <SectionHeading
            className="expertise-left reveal-left"
            align="start"
            eyebrow="OUR EXPERTISE"
            title="Industries"
            highlight="We Serve"
          >
            <p className="expertise-desc">
              Delivering accurate calibration, repair and testing services across diverse industrial sectors with precision and reliability.
            </p>

            <div className="expertise-stats">
              <div className="stat-item">
                <span className="stat-num">6+</span>
                <span className="stat-lbl">Industries<br />Covered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-lbl">Clients<br />Worldwide</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">99.9%</span>
                <span className="stat-lbl">Accuracy<br />&amp; Reliability</span>
              </div>
            </div>

            <Link to="/services" className="expertise-cta">
              <span>Explore Our Industries</span>
              <ArrowRightIcon className="cta-arrow" />
            </Link>
          </SectionHeading>

          {/* Right Column: Orbital Industry Showcase */}
          <div className="expertise-right reveal-right">
            <div className="orbit-stage">
              {/* Concentric orbital rings with matching node dots */}
              <div className="orbit-rings" aria-hidden="true">
                <svg viewBox="0 0 500 500" className="rings-svg">
                  <circle cx="250" cy="250" r="140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                  <circle cx="250" cy="250" r="215" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" fill="none" opacity="0.65" />
                  {/* Orbit Connection Nodes */}
                  <circle cx="250" cy="35" r="4.5" fill="#0d52ce" />
                  <circle cx="436" cy="142" r="4.5" fill="#0d52ce" />
                  <circle cx="436" cy="358" r="4.5" fill="#0d52ce" />
                  <circle cx="250" cy="465" r="4.5" fill="#0d52ce" />
                  <circle cx="64" cy="358" r="4.5" fill="#0d52ce" />
                  <circle cx="64" cy="142" r="4.5" fill="#0d52ce" />
                </svg>
              </div>

              {/* Center TL Logo Badge */}
              <div className="orbit-center">
                <div className="center-badge">
                  <img src={asset("brand/logo.svg")} alt="Technolabs" className="center-logo-img" width="85" height="85" />
                </div>
              </div>

              {/* 6 Industry Cards */}
              <div className="orbit-cards-container">
                {industryCards.map((card) => {
                  const imgUrl = asset(card.image);

                  return (
                    <div className={`orbit-card-wrap ${card.positionClass}`} key={card.id}>
                      <div className="industry-card">
                        <div className="card-image-box">
                          <img src={imgUrl} alt={card.title} className="card-img" width="180" height="85" loading="lazy" />
                          <div className="card-icon-badge">
                            {card.icon}
                          </div>
                        </div>
                        <div className="card-footer">
                          <span className="card-title">{card.title}</span>
                          <ArrowRightIcon className="card-arrow" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
