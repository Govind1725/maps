import PageHero from "../components/common/PageHero";
import ClientMarquee from "../components/home/ClientMarquee";

export default function ClientsPage() {
  return (
    <>
      <PageHero image="pages/lab-wide.webp" title="Our Happy Clients" />
      <section className="clients-gallery" aria-label="Our clients">
        <ClientMarquee className="reveal" start={1} end={8} direction="left" />
        <ClientMarquee className="reveal" start={9} end={17} direction="right" />
      </section>
    </>
  );
}
