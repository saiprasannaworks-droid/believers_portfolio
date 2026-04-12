function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  target,
  rel,
  onClick,
  className = "",
}) {
  const classes = `premium-button ${
    variant === "secondary"
      ? "premium-button--secondary"
      : "premium-button--primary"
  } ${className}`.trim();

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;