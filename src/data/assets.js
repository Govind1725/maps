const imageModules = import.meta.glob([
  "../../assets/images/**/*.{jpg,jpeg,png,webp,svg}",
  "!../../assets/images/pages/anemometers.png",
  "!../../assets/images/industries/**"
], {
  eager: true,
  import: "default",
  query: "?url"
});

export function asset(path) {
  const url = imageModules[`../../assets/images/${path}`];
  if (!url) throw new Error(`Unknown image asset: ${path}`);
  return url;
}
