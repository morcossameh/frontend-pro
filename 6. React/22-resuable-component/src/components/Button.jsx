import "./button.css"

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
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
      {loading ? "Loading..." : children}
    </button>
  );
}
