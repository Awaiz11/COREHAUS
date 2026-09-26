import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

const links = [
  { label: "About", to: "/", hash: "about" },
  { label: "Schedule", to: "/schedule" },
  { label: "Packages", to: "/", hash: "packages" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (to: string, hash?: string) => {
    setOpen(false);
    if (hash) {
      if (location.pathname === to) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(to);
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open ? "bg-ink/92 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.to, l.hash)}
                className="text-[12px] uppercase tracking-[0.22em] text-cream/65 transition-colors duration-300 hover:text-cream"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://momence.com/sign-in?hostId=47062"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[12px] uppercase tracking-[0.22em] text-cream/70 transition-colors duration-300 hover:text-cream"
            >
              Log In
            </a>
            <Link
              to="/schedule"
              className="border border-cream/35 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-cream transition-all duration-300 ease-in-out hover:border-cream/70 hover:bg-cream hover:text-ink"
            >
              Book your class
            </Link>
          </div>

          <button
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`h-px w-6 bg-cream transition-all duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-cream transition-all duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-8 pt-24">
          <nav className="flex flex-col">
            {["About", "Schedule", "Packages"].map((label, i) => {
              const map: Record<string, () => void> = {
                About: () => go("/", "about"),
                Schedule: () => go("/schedule"),
                Packages: () => go("/", "packages"),
              };
              return (
                <button
                  key={label}
                  onClick={map[label]}
                  className="border-b border-white/10 py-4 text-left font-display text-3xl tracking-[0.06em] text-cream uppercase transition-colors duration-300 hover:text-cream/70"
                  style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                >
                  {label}
                </button>
              );
            })}
            <a
              href="https://momence.com/sign-in?hostId=47062"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-left font-display text-3xl tracking-[0.06em] text-cream uppercase block transition-colors duration-300 hover:text-cream/70"
              style={{ transitionDelay: open ? `180ms` : "0ms" }}
            >
              Log In
            </a>
          </nav>
          <div>
            <Link
              to="/schedule"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center bg-cream py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-white"
            >
              Book your class
            </Link>
            <p className="mt-6 text-center font-serif text-sm italic leading-relaxed text-muted">
              Sarrià-Sant Gervasi, Barcelona
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
