import Glyph from "../common/Glyph";

export default function PortfolioFilters({ categories, activeCategory, onChange }) {
  return (
    <div className="pf-filters" role="group" aria-label="Filter projects by category">
      <button
        className={`pf-filter${activeCategory === "all" ? " is-active" : ""}`}
        type="button"
        aria-pressed={activeCategory === "all"}
        onClick={() => onChange("all")}
      >
        All Projects
      </button>
      {categories.map((category) => (
        <button
          className={`pf-filter${activeCategory === category.id ? " is-active" : ""}`}
          key={category.id}
          type="button"
          aria-pressed={activeCategory === category.id}
          onClick={() => onChange(category.id)}
        >
          <Glyph name={category.icon} />
          {category.label}
        </button>
      ))}
    </div>
  );
}
