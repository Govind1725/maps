import { asset } from "../../data/assets";

export default function PageHero({ image, title, subtitle }) {
  return (
    <section className={`page-hero${subtitle ? " page-hero--contact" : ""}`} style={{ backgroundImage: `url("${asset(image)}")` }}>
      {subtitle ? (
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      ) : (
        <h1>{title}</h1>
      )}
    </section>
  );
}
