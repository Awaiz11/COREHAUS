import { Link, useNavigate } from "react-router-dom";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../components/FadeIn";
import { Button, ButtonLink } from "../components/Button";
import { introOffers, packages, memberships, pillars, weeklyFocus, studio } from "../data/content";
const hero = "/images/hero.jpg";
const studioImg = "/images/studio.jpg";
const strength = "/images/strength.jpg";
const tension = "/images/tension.jpg";
const experience = "/images/experience.jpg";

const marquee = [
  "STRENGTH",
  "SCULPT",
  "TONE",
  "SWEAT",
  "SHAKE",
  "50 MINUTES",
  "LOW IMPACT",
  "HIGH INTENSITY",
  "YES I CAN",
];

const pillarImages = [strength, tension, experience];

export default function Home() {
  const navigate = useNavigate();
  const today = new Date().getDay();
  const todayIdx = today === 0 ? 6 : today - 1;

  const claim = () => window.open("https://momence.com/sign-in?hostId=47062", "_blank", "noopener,noreferrer");

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="High-intensity workout at Corehaus" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-36 md:px-10 md:pb-28">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.42em] text-gold">
            Barcelona · Custom Machines · 50 Minutes
          </p>
          <h1
            className="animate-fade-up mt-6 max-w-5xl font-display text-[3.35rem] leading-[0.86] tracking-[0.02em] text-cream sm:text-7xl md:text-8xl lg:text-[7.2rem]"
            style={{ animationDelay: "80ms" }}
          >
            CREATE THE
            <br />
            <span className="outline-text">STRONGEST</span>
            <br />
            VERSION OF
            <br />
            YOURSELF
          </h1>
          <p
            className="animate-fade-up mt-9 max-w-xl text-base leading-relaxed text-cream-soft sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            A 50-minute, high-intensity, low-impact workout that will{" "}
            <span className="text-cream">sculpt, tone, and strengthen</span> every muscle of your body. Get ready to sweat,
            shake, and keep coming back for more.
          </p>
          <div className="animate-fade-up mt-11 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <ButtonLink to="/schedule" variant="solid">
              Book a class
            </ButtonLink>
            <button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center border border-cream/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 ease-in-out hover:border-cream/60 hover:bg-cream/5"
            >
              Buy a class / package
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              ["50", "Minutes"],
              ["08", "Machines"],
              ["Low", "Impact"],
              ["Max", "Tension"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-4xl tracking-wide text-cream">{n}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex">
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream/45">Scroll</span>
          <span className="h-12 w-px bg-cream/25" />
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-white/10 bg-ink-2 py-4">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center px-6 font-display text-2xl tracking-[0.18em] text-cream/35">
              {w}
              <span className="ml-12 h-1.5 w-1.5 rotate-45 bg-gold/60" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT / METHOD ───────────────────────────────────────── */}
      <section id="about" className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">The method</p>
              <h2 className="mt-5 font-display text-5xl tracking-[0.04em] text-cream md:text-7xl">
                Strengthen,
                <br />
                Tone &amp; Sculpt
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted md:mb-2">
              Corehaus is a 50-minute high-intensity, low-impact resistance workout on our custom machines.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-20 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeInStaggerItem key={p.num}>
              <article className="group relative overflow-hidden border border-white/10 bg-ink-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillarImages[i]}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 to-transparent" />
                  <span className="absolute left-6 top-6 font-display text-3xl tracking-widest text-cream/60">{p.num}</span>
                </div>
                <div className="px-7 pb-10 pt-3">
                  <h3 className="font-display text-3xl tracking-[0.06em] text-cream">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </article>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      {/* ─── STUDIO QUOTE ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={studioImg} alt="Corehaus studio interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-5 py-28 md:px-10">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Inside the room</p>
            <blockquote className="mt-7 max-w-3xl font-display text-4xl leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">
              Slow enough to feel every fibre. Intense enough to change them.
            </blockquote>
            <p className="mt-9 max-w-lg font-serif text-xl italic text-cream-soft">
              Eight machines. Fifty minutes. Instructors who will not let you quit on yourself.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── CALENDAR ─────────────────────────────────────────────── */}
      <section id="calendar" className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Rhythm</p>
              <h2 className="mt-5 font-display text-5xl tracking-[0.04em] md:text-7xl">
                Monthly
                <br />
                Calendar
              </h2>
            </div>
            <p className="md:col-span-5 text-sm leading-relaxed text-muted md:text-base">
              Each day of the week we alternate between different muscle groups for the lower and upper body to allow your
              body to recover between days while sufficiently bringing specific muscle groups to failure every time you come.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-16 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4 lg:grid-cols-7">
          {weeklyFocus.map((d, i) => {
            const active = i === todayIdx;
            return (
              <FadeInStaggerItem key={d.day}>
                <div className={`h-full bg-ink px-4 py-7 transition-colors duration-300 ${active ? "bg-ink-3" : "hover:bg-ink-2"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{d.day}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-cream/60" />}
                  </div>
                  <p className="mt-9 font-display text-2xl tracking-[0.06em] text-cream">{d.title}</p>
                  <ul className="mt-4 space-y-2">
                    {d.muscles.map((m) => (
                      <li key={m} className="text-[11px] uppercase tracking-[0.16em] text-muted">
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-[10px] leading-snug uppercase tracking-[0.12em] text-cream/30">
                    {d.className}
                  </p>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

        <div className="mt-10 flex justify-end">
          <ButtonLink to="/schedule" variant="outline">
            View full schedule
          </ButtonLink>
        </div>
      </section>

      {/* ─── PACKAGES & MEMBERSHIPS (list layout — no boxes) ─────── */}
      <section id="packages" className="border-t border-white/10 bg-ink-2">
        <div className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">

          {/* Header */}
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Commit</p>
            <h2 className="mt-5 font-display text-5xl tracking-[0.04em] md:text-7xl">
              Packages
              <br />
              &amp; Memberships
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              Choose between class packages or monthly memberships. Our memberships come with exclusive perks designed to
              elevate your Corehaus experience.
            </p>
          </FadeIn>

          {/* ── INTRO OFFERS ── */}
          <FadeIn delay={80}>
            <div className="mt-20">
              <p className="mb-10 text-[11px] uppercase tracking-[0.38em] text-gold">Intro Offers</p>

              <FadeInStagger>
                {introOffers.map((o, idx) => (
                  <FadeInStaggerItem key={o.name}>
                    <div
                      className={`group flex flex-col gap-6 border-b border-white/10 py-9 transition-all duration-300 ease-in-out hover:pl-2 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${
                        idx === 0 ? "border-t border-white/10" : ""
                      }`}
                    >
                      {/* left: name + detail */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4">
                          <h3 className="font-display text-3xl tracking-[0.08em] text-cream">{o.name}</h3>
                          {o.featured && (
                            <span className="border border-cream/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-cream/60">
                              Most started
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap items-baseline gap-3">
                          <span className="font-serif text-base italic text-cream-soft">{o.detail}</span>
                          <span className="text-[11px] uppercase tracking-[0.16em] text-muted">{o.note}</span>
                        </div>
                      </div>

                      {/* right: price + cta */}
                      <div className="flex shrink-0 flex-wrap items-center gap-8">
                        <p className="font-display text-5xl tracking-wide text-cream">
                          {o.price}<span className="text-2xl text-muted">€</span>
                        </p>
                        <button
                          onClick={claim}
                          className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 ease-in-out hover:border-cream/60 hover:bg-cream/5 whitespace-nowrap"
                        >
                          {o.cta}
                        </button>
                      </div>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeIn>

          {/* ── PACKAGES ── */}
          <FadeIn delay={120}>
            <div className="mt-24">
              <p className="mb-10 text-[11px] uppercase tracking-[0.38em] text-gold">Class Packages</p>

              <FadeInStagger>
                {packages.map((p, idx) => (
                  <FadeInStaggerItem key={p.name}>
                    <div
                      className={`group flex flex-col gap-6 border-b border-white/10 py-9 transition-all duration-300 ease-in-out hover:pl-2 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${
                        idx === 0 ? "border-t border-white/10" : ""
                      }`}
                    >
                      {/* left */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4">
                          <h3 className="font-display text-3xl tracking-[0.08em] text-cream">{p.name}</h3>
                          {p.promo && (
                            <span className="border border-dashed border-cream/20 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-cream/50">
                              15% off · STRONGSEPTEMBER
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap items-baseline gap-3">
                          {p.per && (
                            <span className="font-serif text-base italic text-cream-soft">{p.per}</span>
                          )}
                          <span className="text-[11px] uppercase tracking-[0.16em] text-muted">{p.note}</span>
                        </div>
                      </div>

                      {/* right */}
                      <div className="flex shrink-0 flex-wrap items-center gap-8">
                        <p className="font-display text-5xl tracking-wide text-cream">
                          {p.price}<span className="text-2xl text-muted">€</span>
                        </p>
                        <button
                          onClick={claim}
                          className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 ease-in-out hover:border-cream/60 hover:bg-cream/5 whitespace-nowrap"
                        >
                          {p.cta}
                        </button>
                      </div>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeIn>

          {/* ── MEMBERSHIPS ── */}
          <FadeIn delay={160}>
            <div className="mt-24">
              <p className="mb-10 text-[11px] uppercase tracking-[0.38em] text-gold">Memberships</p>

              <FadeInStagger>
                {memberships.map((m, idx) => (
                  <FadeInStaggerItem key={m.name}>
                    <div
                      className={`group flex flex-col gap-6 border-b border-white/10 py-9 transition-all duration-300 ease-in-out hover:pl-2 sm:flex-row sm:items-center sm:justify-between sm:gap-10 ${
                        idx === 0 ? "border-t border-white/10" : ""
                      } ${m.unlimited ? "relative" : ""}`}
                    >
                      {/* left */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-4">
                          <h3 className={`font-display text-3xl tracking-[0.08em] ${m.unlimited ? "text-cream" : "text-cream"}`}>
                            {m.name}
                          </h3>
                          {m.unlimited && (
                            <span className="border border-cream/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] text-cream/70">
                              Unlimited
                            </span>
                          )}
                          {m.promo && (
                            <span className="border border-dashed border-cream/20 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-cream/50">
                              10% off · STRONGSEPTEMBER10
                            </span>
                          )}
                        </div>
                        <div className="mt-2 flex flex-wrap items-baseline gap-3">
                          <span className="font-serif text-base italic text-cream-soft">{m.per}</span>
                          <span className="text-[11px] uppercase tracking-[0.16em] text-muted">{m.note}</span>
                        </div>
                      </div>

                      {/* right */}
                      <div className="flex shrink-0 flex-wrap items-center gap-8">
                        <p className="font-display text-5xl tracking-wide text-cream">
                          {m.price}<span className="text-2xl text-muted">€</span>
                        </p>
                        <button
                          onClick={claim}
                          className={`inline-flex items-center justify-center px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-300 ease-in-out whitespace-nowrap ${
                            m.unlimited
                              ? "bg-cream text-ink border border-cream hover:bg-white"
                              : "border border-cream/30 text-cream hover:border-cream/60 hover:bg-cream/5"
                          }`}
                        >
                          I want this
                        </button>
                      </div>
                    </div>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ─── STUDIO INFO ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-36">
        <FadeIn>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Visit</p>
              <h2 className="mt-5 font-display text-5xl tracking-[0.04em] md:text-6xl">
                Sarrià-
                <br />
                Sant Gervasi
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-muted">
                A dark, focused room on Carrer d'Alfons XII. Arrive early, leave everything else at the door, and take your
                machine.
              </p>
              <div className="mt-9 space-y-2 text-sm text-cream-soft">
                <p>{studio.address}</p>
                <p>{studio.city}</p>
                <p className="pt-2">{studio.phone}</p>
              </div>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/schedule">Book a class</ButtonLink>
                <a
                  href="https://maps.google.com/?q=Carrer+d%27Alfons+XII+10+Barcelona"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-cream/30 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 ease-in-out hover:border-cream/60 hover:bg-cream/5"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={experience} alt="Class in session" className="h-[480px] w-full object-cover" />
              <div className="absolute -bottom-6 -left-4 border border-white/10 bg-ink-2 px-6 py-4 sm:left-6">
                <p className="font-serif text-lg italic text-cream">Limited to 8 bodies.</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Every class, every hour</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────── */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-24 md:flex-row md:items-center md:px-10">
          <h2 className="font-display text-4xl tracking-[0.04em] md:text-6xl">Ready to shake?</h2>
          <Link
            to="/schedule"
            className="bg-cream px-10 py-4 text-[12px] uppercase tracking-[0.24em] text-ink transition-all duration-300 ease-in-out hover:bg-white"
          >
            Book your first class
          </Link>
        </div>
      </section>
    </div>
  );
}
