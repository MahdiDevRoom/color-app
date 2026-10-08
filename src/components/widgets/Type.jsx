import css from "./Type.module.css";

export default function Type({
  as: Tag = "div",
  variant = "body-medium",
  children,
  className = "",
  ...props
}) {
  return (
    <Tag
      className={`${css.type} ${css[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}