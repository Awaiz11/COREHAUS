import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "copper";

type Shared = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  solid:
    "bg-cream text-ink hover:bg-white border border-cream",
  outline:
    "bg-transparent text-cream border border-cream/35 hover:border-cream hover:bg-cream/5",
  ghost:
    "bg-transparent text-cream border border-transparent hover:text-copper",
  copper:
    "bg-copper text-cream border border-copper hover:bg-copper-light",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  children,
  className = "",
  variant = "solid",
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  variant = "solid",
  to,
}: Shared & { to: string }) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ButtonExternalLink({
  children,
  className = "",
  variant = "solid",
  href,
}: Shared & { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
}
