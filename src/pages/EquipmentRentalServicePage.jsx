import CoreServiceDetail from "../components/services/CoreServiceDetail";
import { coreServiceDetails } from "../data/coreServiceDetails";

export default function EquipmentRentalServicePage() {
  return <CoreServiceDetail service={coreServiceDetails["equipment-rental"]} />;
}
