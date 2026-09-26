import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { ArrowIcon } from "../components/common/Icons";

export default function NotFoundPage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Page Not Found" />
      <section className="section">
        <div className="container section-heading">
          <h2>We could not find that page</h2>
          <p>The requested page does not exist or may have moved.</p>
          <Link className="button" to="/"><span>Back to Home</span><ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
