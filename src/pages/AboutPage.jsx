import { asset } from "../data/assets";
import PageHero from "../components/common/PageHero";
import { AboutIntro, BrandStrip } from "../components/home/AboutIntro";

export default function AboutPage() {
  return (
    <>
      <PageHero image="pages/techno-lab.jpg" title="About" />
      <section className="section about-section">
        <div className="container"><AboutIntro /></div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow center-eyebrow">Direction</p>
            <h2>Vision &amp; Mission</h2>
          </div>
          <div className="vision-grid">
            <div className="vision-card reveal reveal-left">
              <h3>Our Vision</h3>
              <p>To be the region’s leading calibration laboratory, recognized for excellence in quality, innovation, and customer satisfaction, empowering clients with accurate and reliable calibration services.</p>
            </div>
            <div className="vision-card reveal reveal-right">
              <h3>Our Mission</h3>
              <p>To provide precise and reliable calibration services for a wide range of instruments across all industries. We are committed to maintaining high standards of accuracy, trust, and quality while ensuring complete customer satisfaction through timely and dependable service.</p>
            </div>
          </div>
          <img className="vision-image reveal reveal-zoom" src={asset("pages/lab-wide.webp")} alt="Technolabs laboratory" width="1600" height="900" loading="lazy" />
        </div>
      </section>
      <section className="section">
        <div className="container values-grid">
          <img className="values-image reveal reveal-left" src={asset("pages/calibration-devices.jpg")} alt="Calibration devices and equipment" width="800" height="640" loading="lazy" />
          <div className="values-copy reveal reveal-right">
            <p className="eyebrow">What we stand for</p>
            <h2>Our Core Values &amp; Goals</h2>
            <p><strong>Our Core Values :</strong><br />At our organization, quality, precision, and customer satisfaction are at the heart of everything we do. We are committed to achieving and maintaining ISO/IEC 17025 accreditation, ensuring that our calibration services consistently meet the highest international standards. Our goal is to provide accurate, reliable, and timely calibration solutions that our clients can depend on with confidence. We strive to build long-term relationships with our customers by understanding their needs and delivering exceptional service. As part of our growth strategy, we continuously work to expand our market presence while strengthening partnerships with existing and new customers. We believe that our people are our greatest asset, and therefore invest in the continuous development of employee skills and competencies. Through a strong focus on quality, safety, innovation, and continuous improvement, we foster a culture that drives operational excellence and sustainable success.</p>
            <p><strong>Our Goals:</strong></p>
            <ul className="goal-list">
              <li>Achieve and maintain ISO/IEC 17025 accreditation.</li>
              <li>Deliver accurate, reliable, and timely calibration services.</li>
              <li>Maintain customer satisfaction.</li>
              <li>Expand market presence and strengthen client relationships.</li>
              <li>Continuously develop employee skills and competencies.</li>
              <li>Promote a culture of quality, safety, and continuous improvement.</li>
            </ul>
          </div>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
