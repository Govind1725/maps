import { Link } from "react-router-dom";
import { asset } from "../../data/assets";
import Glyph from "../common/Glyph";
import SectionHeading from "../common/SectionHeading";

const credentials = [
  {
    title: "ISO/IEC 17025:2017",
    label: "Accredited Laboratory",
    desc: "Internationally recognised competence for testing and calibration laboratories.",
    icon: "shield",
  },
  {
    title: "ILAC MRA",
    label: "Global Recognition",
    desc: "Mutual recognition arrangement supporting internationally accepted results.",
    icon: "award",
  },
  {
    title: "EJ-JAS",
    label: "Accreditation Body",
    desc: "Accreditation framework that underpins our quality and technical procedures.",
    icon: "checkCircle",
  },
  {
    title: "SAC / SAAC",
    label: "Approval in Process",
    desc: "Additional national accreditation milestones currently being progressed.",
    icon: "target",
  },
];

export default function AccreditationSection() {
  return (
    <section className="section accreditation-section">
      <div className="container">
        <SectionHeading
          className="reveal"
          eyebrow="Quality & Standards"
          title="Accreditation You"
          highlight="Can Trace"
        >
          <p>
            Our laboratory systems are built around internationally recognised standards, documented
            procedures and measurable technical competence.
          </p>
        </SectionHeading>

        <div className="accreditation-grid reveal">
          {credentials.map((item) => (
            <article className="accreditation-card" key={item.title}>
              <div className="accreditation-icon">
                <Glyph name={item.icon} />
              </div>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="accreditation-document reveal">
          <div className="accreditation-document-image">
            <img
              src={asset("pages/iso-certificate.webp")}
              alt="ISO IEC 17025 2017 certificate for Techno Prime Company Ltd"
              loading="lazy"
            />
          </div>
          <div className="accreditation-document-copy">
            <span className="document-kicker">
              <Glyph name="file" /> Certificate Verification
            </span>
            <h3>Check the validity of a calibration certificate</h3>
            <p>
              Review our accreditation details, status updates and certificate information on the
              dedicated certification page.
            </p>
            <Link className="btn-primary" to="/certificate">
              View Certification <Glyph name="arrowRight" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
