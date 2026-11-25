import SectionHeading from "../common/SectionHeading";
import CertificateVerify from "../common/CertificateVerify";

export default function CertificateVerificationSection() {
  return (
    <section className="section section--soft maps-add-verify">
      <div className="container maps-add-verify-wrap">
        <SectionHeading
          className="maps-add-verify-copy reveal"
          align="start"
          eyebrow="Certificate Support"
          title="Verify calibration"
          highlight="records"
        >
          <p>
            Check the details printed on a calibration certificate issued by our laboratory. If the
            online check is unavailable, our team can confirm the record for you.
          </p>
        </SectionHeading>
        <CertificateVerify />
      </div>
    </section>
  );
}
