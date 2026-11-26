import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import { getCategoryLabel, portfolioCategories } from "../../data/portfolioData";
import { PinIcon } from "../common/Icons";
import Glyph from "../common/Glyph";

export default function PortfolioCard({ project }) {
  const category = portfolioCategories.find((item) => item.id === project.category);
  const detailPath = `/portfolio/${project.id}`;

  return (
    <article className="pf-card reveal">
      <Link className="pf-card-image" to={detailPath} aria-label={`View details for ${project.title}`}>
        <img src={asset(project.image)} alt="" width="800" height="600" loading="lazy" />
        <span className="pf-card-number">{project.number}</span>
        <span className="pf-card-placeholder">Placeholder</span>
      </Link>

      <div className="pf-card-body">
        <span className="pf-card-category">
          <Glyph name={category?.icon || "layers"} />
          {getCategoryLabel(project.category)}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="pf-card-location">
          <PinIcon />
          {project.location}
        </span>
      </div>

      <div className="pf-card-footer">
        <Link className="button pf-card-button" to={detailPath}>
          <span>View Details</span>
          <Glyph name="arrowRight" />
        </Link>
      </div>
    </article>
  );
}
