import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import {
  getCategoryLabel,
  portfolioCategories,
  portfolioProjects
} from "../../data/portfolioData";
import Glyph from "../common/Glyph";
import { ArrowIcon, PinIcon } from "../common/Icons";
import PortfolioGallery from "./PortfolioGallery";

export default function ProjectDetail({ project }) {
  const category = portfolioCategories.find((item) => item.id === project.category);
  const related = portfolioProjects
    .filter((item) => item.id !== project.id && item.category === project.category)
    .concat(portfolioProjects.filter((item) => item.id !== project.id && item.category !== project.category))
    .slice(0, 3);

  return (
    <>
      <section className="pf-detail-hero">
        <div className="container">
          <nav className="pf-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/portfolio">Portfolio</Link>
            <span>/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <div className="pf-detail-hero-grid">
            <div>
              <span className="pf-detail-placeholder">Placeholder project</span>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="pf-detail-hero-meta">
                <span>
                  <Glyph name={category?.icon || "layers"} />
                  {getCategoryLabel(project.category)}
                </span>
                <span><PinIcon />{project.location}</span>
              </div>
            </div>
            <div className="pf-detail-hero-image">
              <img src={asset(project.image)} alt="" width="1000" height="750" />
            </div>
          </div>
        </div>
      </section>

      <section className="section pf-detail-section">
        <div className="container">
          <div className="pf-detail-layout">
            <div className="pf-detail-main">
              <div className="pf-detail-block">
                <h2>Project Overview</h2>
                <p>{project.description}</p>
                <p className="pf-detail-note">
                  This entry is a structured placeholder. Detailed scope and approved
                  project photography will be published once supplied and reviewed.
                </p>
              </div>

              <div className="pf-detail-block">
                <h2>Scope of Work</h2>
                <ul className="pf-check-list">
                  {project.scope.map((item) => (
                    <li key={item}><Glyph name="check" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="pf-detail-block">
                <h2>Project Gallery</h2>
                <p className="pf-gallery-note">
                  Representative MAPS images only. Select any image to view it larger.
                </p>
                <PortfolioGallery images={project.gallery} title={project.title} />
              </div>
            </div>

            <aside className="pf-detail-aside">
              <h2>Project Information</h2>
              <dl className="pf-info-list">
                <div><dt>Client</dt><dd>{project.client}</dd></div>
                <div><dt>Industry</dt><dd>{project.industry}</dd></div>
                <div><dt>Location</dt><dd>{project.location}</dd></div>
                <div><dt>Status</dt><dd>{project.status}</dd></div>
              </dl>

              <h3>Services Provided</h3>
              <ul className="pf-tag-list">
                {project.services.map((service) => <li key={service}>{service}</li>)}
              </ul>

              <h3>Equipment Used</h3>
              <ul className="pf-tag-list">
                {project.equipment.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <Link className="button pf-enquire-button" to="/contact#enquiry">
                <span>Enquire About This Project</span>
                <ArrowIcon />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section pf-related-section">
        <div className="container">
          <div className="pf-related-heading">
            <div>
              <p className="section-eyebrow">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">Explore More</span>
              </p>
              <h2>Related Projects</h2>
            </div>
            <Link className="text-link" to="/portfolio">
              View all projects <ArrowIcon />
            </Link>
          </div>
          <div className="pf-related-grid">
            {related.map((item) => (
              <Link className="pf-related-card" to={`/portfolio/${item.id}`} key={item.id}>
                <img src={asset(item.image)} alt="" width="600" height="450" loading="lazy" />
                <div>
                  <span>{getCategoryLabel(item.category)}</span>
                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
