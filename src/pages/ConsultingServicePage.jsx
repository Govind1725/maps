import CoreServiceDetail from "../components/services/CoreServiceDetail";
import { coreServiceDetails } from "../data/coreServiceDetails";

export default function ConsultingServicePage() {
  return <CoreServiceDetail service={coreServiceDetails.consulting} />;
}
