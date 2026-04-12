function SectionWrapper({
  id,
  children,
  className = "",
  spacing = "default",
}) {
  const spacingClass =
    spacing === "tight"
      ? "section-shell section-shell--tight"
      : spacing === "hero"
        ? "section-shell section-shell--hero"
        : "section-shell";

  return (
    <section id={id} className={`${spacingClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

export default SectionWrapper;