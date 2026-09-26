import { Link } from "react-router-dom";

type Props = {
  className?: string;
  to?: string;
};

export function Logo({ className = "", to = "/" }: Props) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Corehaus home">
      <span className="relative grid h-7 w-7 place-items-center">
        <span className="absolute inset-0 rotate-45 border border-cream/60 transition-all duration-300 group-hover:border-cream" />
        <span className="h-1.5 w-1.5 bg-cream/70 transition-all duration-300 group-hover:bg-cream" />
      </span>
      <span className="font-display text-[1.65rem] leading-none tracking-[0.22em] text-cream">
        COREHAUS
      </span>
    </Link>
  );
}
