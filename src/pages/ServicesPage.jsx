import PageHero from "../components/common/PageHero";
import ServiceSections from "../components/services/ServiceSections";
import ServiceDrawer from "../components/services/ServiceDrawer";

export default function ServicesPage() {
  return (
    <>
      <PageHero image="pages/techno-lab.jpg" title="Services" />
      <ServiceSections />
      <ServiceDrawer />
    </>
  );
}
