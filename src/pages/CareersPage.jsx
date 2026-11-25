import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CtaBand from "../components/home/CtaBand";
import Glyph from "../components/common/Glyph";
import { ArrowIcon } from "../components/common/Icons";
import { careerBenefits, careerRoles } from "../data/additionsData";

export default function CareersPage() {
  return (
    <>
      <PageHero image="pages/techno-lab.jpg" title="Careers" subtitle="Build your career in measurement excellence" />
      <section className="section maps-add-legal">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Why Join Us"
            title="A team built around"
            highlight="precision"
          />
          <div className="maps-add-card-grid">
            {careerBenefits.map((benefit) => (
              <article className="maps-add-benefit-card reveal" key={benefit.title}>
                <span className="maps-add-icon"><Glyph name={benefit.icon} /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft maps-add-legal">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Areas We Hire"
            title="Where your"
            highlight="skills fit"
          />
          <div className="maps-add-role-list">
            {careerRoles.map((role) => (
              <article className="maps-add-role reveal" key={role.title}>
                <span className="maps-add-role-area">{role.area}</span>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            ))}
          </div>
          <div className="maps-add-inline-cta reveal">
            <span>Don’t see your role? Send us a note about your experience.</span>
            <Link className="button" to="/contact">
              <span>Send Your Resume</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
      <CtaBand staticBackground />
    </>
  );
}
