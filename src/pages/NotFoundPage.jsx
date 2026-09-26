import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import { ArrowIcon } from "../components/common/Icons";

export default function NotFoundPage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Page Not Found" />
      <section className="section">
        <SectionHeading
          className="container"
          eyebrow="Error 404"
          title="We could not find"
          highlight="that page"
        >
          <p>The requested page does not exist or may have moved.</p>
          <Link className="button" to="/"><span>Back to Home</span><ArrowIcon /></Link>
        </SectionHeading>
      </section>
    </>
  );
}
