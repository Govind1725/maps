import PageHero from "../components/common/PageHero";
import LabSections from "../components/services/LabSections";
import ServiceDrawer from "../components/services/ServiceDrawer";
import CtaBand from "../components/home/CtaBand";

export default function ServicesPage() {
  return (
    <>
      <PageHero image="pages/techno-lab.jpg" title="Our Calibration Laboratories" />
      <LabSections />
      <ServiceDrawer />
      <CtaBand />
    </>
  );
}
