import { Link, useNavigate, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { studio } from "../data/content";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goHash = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-muted">
              A 50-minute, high-intensity, low-impact workout on our custom machines. Sculpt, tone, and strengthen every muscle.
            </p>
            <p className="mt-9 font-serif text-xl italic text-cream/70">The strongest version of yourself.</p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">Studio</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>{studio.address}</li>
              <li>{studio.city}</li>
              <li className="text-muted">{studio.neighborhood}</li>
              <li className="pt-2">
                <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="transition-colors duration-300 hover:text-cream">
                  {studio.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${studio.email}`} className="transition-colors duration-300 hover:text-cream">
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">Navigate</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>
                <button onClick={() => goHash("about")} className="transition-colors duration-300 hover:text-cream">
                  About
                </button>
              </li>
              <li>
                <Link to="/schedule" className="transition-colors duration-300 hover:text-cream">
                  Schedule
                </Link>
              </li>
              <li>
                <button onClick={() => goHash("packages")} className="transition-colors duration-300 hover:text-cream">
                  Packages
                </button>
              </li>
              <li>
                <Link to="/signin" className="transition-colors duration-300 hover:text-cream">
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-gold">Follow</p>
            <a
              href={studio.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-cream/75 transition-colors duration-300 hover:text-cream"
            >
              {studio.instagram}
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.2em] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Corehaus. All rights reserved.</span>
          <span>Barcelona · High Intensity · Low Impact</span>
        </div>
      </div>
    </footer>
  );
}
