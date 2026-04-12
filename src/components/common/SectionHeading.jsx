function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
}) {
  const alignmentClass =
    align === "center" ? "section-heading section-heading--center" : "section-heading";

  return (
    <div className={alignmentClass}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}

      <h2 className="section-title">
        {title}{" "}
        {highlight ? <span className="gradient-text">{highlight}</span> : null}
      </h2>

      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;