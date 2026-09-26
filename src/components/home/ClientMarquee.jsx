import { asset } from "../../data/assets";

const clientImages = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return asset(`clients/client-${number}.jpg`);
});

function ClientGroup({ start, end, hidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {clientImages.slice(start - 1, end).map((src, index) => (
        <img src={src} alt={hidden ? "" : `Technolabs client ${start + index}`} width="245" height="145" loading="lazy" key={src} />
      ))}
    </div>
  );
}

export default function ClientMarquee({ start = 1, end = 17, direction = "left", className = "" }) {
  return (
    <div className={`clients-marquee ${className}`.trim()} data-direction={direction} aria-label="Client gallery">
      <div className="marquee-track">
        <ClientGroup start={start} end={end} />
        <ClientGroup start={start} end={end} hidden />
      </div>
    </div>
  );
}
