import { asset } from "../data/assets";
import PageHero from "../components/common/PageHero";
import CertificateVerify from "../components/common/CertificateVerify";

export default function CertificatePage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Certificate" />
      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow center-eyebrow">Quality &amp; Standards</p>
            <h2>Accreditation &amp; Certifications</h2>
          </div>
          <div className="certificates-grid">
            <div className="certificate-card certificate-card--document reveal reveal-left">
              <img src={asset("pages/iso-certificate.webp")} alt="ISO IEC 17025 2017 certificate for Techno Prime Company Ltd" width="724" height="1024" loading="lazy" />
            </div>
            <div className="certificate-card reveal reveal-zoom">
              <div className="certificate-status"><h3>SAAC Accreditation</h3><p>in Process</p></div>
            </div>
            <div className="certificate-card reveal reveal-right">
              <div className="certificate-status"><h3>ILAC Accreditation</h3><p>in Process</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--soft verify-section" id="verify">
        <div className="container verify-wrap">
          <div className="verify-copy reveal reveal-left">
            <p className="eyebrow">Certificate Verification</p>
            <h2>Verify Your Calibration Certificate</h2>
            <p>Enter the calibration certificate number and the serial number printed on your certificate to check its status with Techno Labs.</p>
          </div>
          <CertificateVerify />
        </div>
      </section>
    </>
  );
}
