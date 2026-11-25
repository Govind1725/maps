import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CtaBand from "../components/home/CtaBand";
import { ArrowIcon } from "../components/common/Icons";
import { asset } from "../data/assets";
import { insightArticles } from "../data/additionsData";

export default function InsightsPage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Insights" subtitle="Calibration knowledge for confident decisions" />
      <section className="section maps-add-legal">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Knowledge Base"
            title="Calibration"
            highlight="Insights"
          />
          <div className="maps-add-article-list">
            {insightArticles.map((article) => (
              <article className="maps-add-article-detail reveal" id={article.id} key={article.id}>
                <img
                  src={asset(article.image)}
                  alt=""
                  width="800"
                  height="520"
                  loading="lazy"
                />
                <div>
                  <span className="maps-add-article-meta">
                    <span>{article.category}</span>
                    <span aria-hidden="true">•</span>
                    <span>{article.readTime}</span>
                  </span>
                  <h2>{article.title}</h2>
                  <p className="maps-add-article-excerpt">{article.excerpt}</p>
                  {article.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="maps-add-inline-cta reveal">
            <span>Need a closer look at your calibration programme?</span>
            <Link className="button" to="/contact">
              <span>Talk to Our Experts</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand staticBackground />
    </>
  );
}
