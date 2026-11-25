import PageHero from "../components/common/PageHero";
import EquipmentRentalSection from "../components/additions/EquipmentRentalSection";
import CtaBand from "../components/home/CtaBand";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image="pages/calibration-devices.jpg"
        title="Equipment & Rental"
        subtitle="Reference instruments and measuring tools for every calibration programme"
      />
      <EquipmentRentalSection />
      <CtaBand staticBackground />
    </>
  );
}
