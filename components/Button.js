import Link from "next/link";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "border border-lime  text-blue-600 shadow-glow hover:scale-[1.03] hover:border-paper",
    secondary: "border border-line bg-paper/5 text-blue-600 hover:border-lime  hover:text-ink",
    dark: "border border-ink bg-ink text-blue-600 hover:scale-[1.03] hover:border-paper hover:bg-paper hover:text-ink"
  };
  const styles = variants[variant] || variants.primary;
  const classes = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
