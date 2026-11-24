import Glyph from "../common/Glyph";

const pillars = [
  { icon: "zap", label: "Electrical Calibration", desc: "Lab & on-site testing" },
  { icon: "target", label: "Temperature & Humidity", desc: "Traceable measurement" },
  { icon: "layers", label: "Pressure & Force", desc: "Precision instruments" },
  { icon: "cpu", label: "Dimension & Mass", desc: "Accredited standards" },
  { icon: "award", label: "Flow & Air Velocity", desc: "Industrial applications" },
  { icon: "building", label: "Testing & Common Lab", desc: "Complete support" },
];

export default function CapabilityStrip() {
  return (
    <section className="capability-strip">
      <div className="container">
        <div className="capability-grid reveal">
          {pillars.map((item) => (
            <div className="capability-pillar" key={item.label}>
              <div className="capability-icon">
                <Glyph name={item.icon} />
              </div>
              <div className="capability-copy">
                <span>{item.label}</span>
                <small>{item.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
