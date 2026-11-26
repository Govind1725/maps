import CoreServiceDetail from "../components/services/CoreServiceDetail";
import { coreServiceDetails } from "../data/coreServiceDetails";

export default function TrainingServicePage() {
  return <CoreServiceDetail service={coreServiceDetails.training} />;
}
