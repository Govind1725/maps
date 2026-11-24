import { asset } from "../../data/assets";

const clients = Array.from({ length: 17 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return { src: asset(`clients/client-${number}.jpg`), label: `MAPS client ${index + 1}` };
});

function ClientRow({ hidden = false }) {
  return (
    <div className="logo-wall-group" aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <img src={client.src} alt={hidden ? "" : client.label} key={client.src} loading="lazy" />
      ))}
    </div>
  );
}

export default function LogoWall() {
  return (
    <section className="logo-wall">
      <p className="logo-wall-label reveal">Trusted by enterprises across the Middle East</p>
      <div className="logo-wall-track reveal">
        <ClientRow />
        <ClientRow hidden />
      </div>
    </section>
  );
}
