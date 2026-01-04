import "./button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  ...props
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    disabled || loading ? "btn--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  console.log(classes);

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      <span className="btn__content">
        {startIcon && <span className="btn__icon">{startIcon}</span>}
        {loading ? "Loading..." : children}
        {endIcon && <span className="btn__icon">{endIcon}</span>}
      </span>
    </button>
  );
}
