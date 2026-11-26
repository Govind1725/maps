import { labData } from "../../data/labData";
import LabSection from "./LabSection";

export default function LabSections() {
  return (
    <div className="lab-sections-wrapper" data-service-sections>
      {labData.map((lab, index) => (
        <LabSection lab={lab} index={index} key={lab.id} />
      ))}
    </div>
  );
}
