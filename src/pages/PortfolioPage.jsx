import { useState } from "react";
import CtaBand from "../components/home/CtaBand";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import PortfolioFilters from "../components/portfolio/PortfolioFilters";
import {
  portfolioCategories,
  portfolioProjects
} from "../data/portfolioData";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const visibleProjects = activeCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageHero
        image="pages/portfolio.jpeg"
        title="Our Portfolio"
        subtitle="Showcasing Our Expertise in Calibration & Industrial Solutions"
      />

      <section className="section pf-intro-section">
        <div className="container pf-intro-grid">
          <SectionHeading
            align="left"
            eyebrow="Our Projects"
            title="Selected Work"
            highlight="& Capabilities"
          >
            <p>
              Browse representative MAPS project categories. Approved case studies,
              client details and completed-work photographs will replace the clearly
              marked placeholders as they become available.
            </p>
          </SectionHeading>
          <div className="pf-intro-stats">
            <div><strong>{portfolioProjects.length}</strong><span>Categories Covered</span></div>
            <div><strong>{portfolioCategories.length}</strong><span>Service Areas</span></div>
            <div><strong>ISO</strong><span>17025:2017 Focus</span></div>
          </div>
        </div>
      </section>

      <section className="section pf-projects-section">
        <div className="container">
          <PortfolioFilters
            categories={portfolioCategories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="pf-card-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <PortfolioCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
