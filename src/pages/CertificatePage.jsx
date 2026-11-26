import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import ProcurementSection from "../components/home/ProcurementSection";
import CertificateVerificationSection from "../components/additions/CertificateVerificationSection";
import CtaBand from "../components/home/CtaBand";

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
            <div className="certificate-card reveal">
              <div className="certificate-status">
                <h3>Certification documents</h3>
                <p>Will be updated shortly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProcurementSection />
      <CertificateVerificationSection />
      <CtaBand />
    </>
  );
}
