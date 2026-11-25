import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import { insightArticles } from "../../data/additionsData";
import SectionHeading from "../common/SectionHeading";
import { ArrowIcon } from "../common/Icons";

export default function InsightsSection() {
  return (
    <section className="section maps-add-insights">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="Knowledge Base"
          title="Practical calibration"
          highlight="insights"
        >
          <p>Short, useful reading on standards, planning and instrument care.</p>
        </SectionHeading>
        <div className="maps-add-card-grid">
          {insightArticles.map((article) => (
            <Link
              className="maps-add-article-card reveal"
              to={`/insights#${article.id}`}
              key={article.id}
            >
              <img
                className="maps-add-article-image"
                src={asset(article.image)}
                alt=""
                width="800"
                height="520"
                loading="lazy"
              />
              <span className="maps-add-article-meta">
                <span>{article.category}</span>
                <span aria-hidden="true">•</span>
                <span>{article.readTime}</span>
              </span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="maps-add-read-link">
                Read Article <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
