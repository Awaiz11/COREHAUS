import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const promo = "/images/promo.jpg";
import { Button } from "./Button";

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const seen = sessionStorage.getItem("corehaus-promo");
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), 500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem("corehaus-promo", "1");
    setOpen(false);
  };

  const goPackages = () => {
    close();
    if (location.pathname === "/") {
      window.setTimeout(() => {
        document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      navigate("/");
      window.setTimeout(() => {
        document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <button
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={close}
        aria-label="Dismiss promotion"
      />

      <div className="animate-scale-in relative grid max-h-[92vh] w-full max-w-[920px] overflow-hidden border border-line bg-ink-2 shadow-[0_40px_80px_rgba(0,0,0,0.55)] md:grid-cols-2">
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center border border-cream/20 text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          aria-label="Close"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>

        <div className="relative hidden min-h-[420px] md:block">
          <img src={promo} alt="Athlete mid-workout at Corehaus" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <p className="absolute bottom-6 left-6 font-serif text-lg italic text-cream/90">Sweat. Shake. Come back.</p>
        </div>

        <div className="relative flex flex-col justify-center px-7 py-10 sm:px-10 sm:py-14">
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(17,13,13,0.55), rgba(17,13,13,0.92)), url(${promo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.42em] text-copper">Limited offer</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.08em] text-cream sm:text-6xl">SUMMER PROMO</h2>
            <div className="mt-3 h-px w-16 bg-copper" />

            <div className="mt-8 space-y-6 text-cream">
              <div>
                <p className="text-[15px] font-medium leading-snug">15% OFF 5 &amp; 8 Class Packs (Code: STRONGSEPTEMBER)</p>
              </div>
              <div>
                <p className="text-[15px] font-medium leading-snug">
                  10% OFF 4 &amp; 8 classes/month Membership (Code: STRONGSEPTEMBER10)
                </p>
              </div>
            </div>

            <p className="mt-7 font-serif text-[17px] italic leading-relaxed text-cream-soft">
              Get yours now. Start to give yourself the work and love you deserve with us in September! 🌶️
            </p>

            <Button variant="copper" className="mt-9 w-full" onClick={goPackages}>
              Get your package here
            </Button>
            <button
              onClick={close}
              className="mt-4 w-full text-center text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-cream"
            >
              Continue to studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
