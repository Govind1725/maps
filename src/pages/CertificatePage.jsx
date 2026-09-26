import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { asset } from "../data/assets";

export default function CertificatePage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Certificate" />
      <section className="section">
        <div className="container">
          <SectionHeading
            className="reveal"
            eyebrow="Quality &amp; Standards"
            title="Accreditation &"
            highlight="Certifications"
          />
          <div className="certificates-grid">
            <div className="certificate-card certificate-card--document reveal reveal-left">
              <img
                src={asset("pages/iso-certificate.webp")}
                alt="ISO IEC 17025 2017 certificate for Techno Prime Company Ltd"
                width="724"
                height="1024"
                loading="lazy"
              />
            </div>
            <div className="certificate-card reveal reveal-zoom">
              <div className="certificate-status">
                <h3>SAAC Accreditation</h3>
                <p>in Process</p>
              </div>
            </div>
            <div className="certificate-card reveal reveal-right">
              <div className="certificate-status">
                <h3>ILAC Accreditation</h3>
                <p>in Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
