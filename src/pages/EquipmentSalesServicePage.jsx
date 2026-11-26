import CoreServiceDetail from "../components/services/CoreServiceDetail";
import { coreServiceDetails } from "../data/coreServiceDetails";

export default function EquipmentSalesServicePage() {
  return <CoreServiceDetail service={coreServiceDetails["equipment-sales"]} />;
}
