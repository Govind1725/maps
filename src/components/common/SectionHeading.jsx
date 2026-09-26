export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "center",
  className = "",
  children
}) {
  const classes = ["section-heading", `section-heading--${align}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow ? (
        <p className="section-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">{eyebrow}</span>
        </p>
      ) : null}
      <h2 className="section-title">
        {title}
        {highlight ? (
          <>
            <br className="section-title-br" />
            <span className="title-highlight">{highlight}</span>
          </>
        ) : null}
      </h2>
      {children}
    </div>
  );
}
