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
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="High-intensity workout at Corehaus" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-20">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.42em] text-gold">
            Barcelona · Custom Machines · 50 Minutes
          </p>
          <h1
            className="animate-fade-up mt-5 max-w-5xl font-display text-[3.35rem] leading-[0.86] tracking-[0.02em] text-cream sm:text-7xl md:text-8xl lg:text-[7.2rem]"
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
            className="animate-fade-up mt-8 max-w-xl text-base leading-relaxed text-cream-soft sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            A 50-minute, high-intensity, low-impact workout that will{" "}
            <span className="text-cream">sculpt, tone, and strengthen</span> every muscle of your body. Get ready to sweat,
            shake, and keep coming back for more.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <ButtonLink to="/schedule" variant="solid">
              Book a class
            </ButtonLink>
            <button
              onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center border border-cream/35 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-cream hover:bg-cream/5"
            >
              Buy a class / package
            </button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
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
          <span className="text-[10px] uppercase tracking-[0.4em] text-cream/50">Scroll</span>
          <span className="h-12 w-px bg-cream/30" />
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-ink-2 py-4">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="flex items-center px-6 font-display text-2xl tracking-[0.18em] text-cream/40">
              {w}
              <span className="ml-12 h-1.5 w-1.5 rotate-45 bg-copper" />
            </span>
          ))}
        </div>
      </div>

      <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-copper">The method</p>
              <h2 className="mt-4 font-display text-5xl tracking-[0.04em] text-cream md:text-7xl">
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

        <FadeInStagger className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeInStaggerItem key={p.num}>
              <article className="group relative overflow-hidden border border-line bg-ink-2">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillarImages[i]}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-2 to-transparent" />
                  <span className="absolute left-6 top-6 font-display text-3xl tracking-widest text-cream/70">{p.num}</span>
                </div>
                <div className="px-6 pb-8 pt-2">
                  <h3 className="font-display text-3xl tracking-[0.06em] text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                </div>
              </article>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={studioImg} alt="Corehaus studio interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-5 py-24 md:px-10">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Inside the room</p>
            <blockquote className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-[0.03em] text-cream md:text-6xl">
              Slow enough to feel every fibre. Intense enough to change them.
            </blockquote>
            <p className="mt-8 max-w-lg font-serif text-xl italic text-cream-soft">
              Eight machines. Fifty minutes. Instructors who will not let you quit on yourself.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="calendar" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.4em] text-copper">Rhythm</p>
              <h2 className="mt-4 font-display text-5xl tracking-[0.04em] md:text-7xl">
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

        <FadeInStagger className="mt-14 grid grid-cols-2 gap-px bg-line sm:grid-cols-4 lg:grid-cols-7">
          {weeklyFocus.map((d, i) => {
            const active = i === todayIdx;
            return (
              <FadeInStaggerItem key={d.day}>
                <div className={`h-full bg-ink px-4 py-6 ${active ? "bg-ink-3" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{d.day}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-copper" />}
                  </div>
                  <p className="mt-8 font-display text-2xl tracking-[0.06em] text-cream">{d.title}</p>
                  <ul className="mt-4 space-y-1.5">
                    {d.muscles.map((m) => (
                      <li key={m} className="text-[11px] uppercase tracking-[0.16em] text-muted">
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[10px] leading-snug uppercase tracking-[0.12em] text-cream/35">
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

      <section id="packages" className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-copper">Commit</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.04em] md:text-7xl">
              Packages
              <br />
              &amp; Memberships
            </h2>
            <p className="mt-6 max-w-xl text-muted">
              Choose between class packages or monthly memberships. Our memberships come with exclusive perks designed to
              elevate your Corehaus experience.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-16">
            <FadeInStaggerItem>
              <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-gold">Intro Offers</p>
            </FadeInStaggerItem>
            <div className="grid gap-4 md:grid-cols-2">
              {introOffers.map((o) => (
                <FadeInStaggerItem key={o.name}>
                  <article
                    className={`h-full flex flex-col justify-between border p-8 transition-colors duration-300 hover:border-cream/30 ${
                      o.featured ? "border-copper/50 bg-ink" : "border-line bg-ink"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-3xl tracking-[0.08em]">{o.name}</h3>
                        {o.featured && (
                          <span className="border border-copper/60 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-copper">
                            Most started
                          </span>
                        )}
                      </div>
                      <p className="mt-6 font-display text-6xl tracking-wide">
                        {o.price}
                        <span className="text-3xl">{o.unit}</span>
                      </p>
                      <p className="mt-3 text-sm text-cream-soft">{o.detail}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{o.note}</p>
                    </div>
                    <Button variant={o.featured ? "copper" : "outline"} className="mt-10 w-full" onClick={claim}>
                      {o.cta}
                    </Button>
                  </article>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          <FadeInStagger className="mt-20">
            <FadeInStaggerItem>
              <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-gold">Packages</p>
            </FadeInStaggerItem>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {packages.map((p) => (
                <FadeInStaggerItem key={p.name}>
                  <article
                    className="h-full group flex flex-col justify-between border border-line bg-ink p-7 transition-colors duration-300 hover:border-cream/30"
                  >
                    {p.promo && (
                      <span className="mb-4 w-fit border border-dashed border-copper/70 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-copper">
                        15% off · STRONGSEPTEMBER
                      </span>
                    )}
                    {!p.promo && <span className="mb-4 h-[26px]" />}
                    <h3 className="font-display text-2xl tracking-[0.1em]">{p.name}</h3>
                    <p className="mt-5 font-display text-5xl tracking-wide">
                      {p.price}
                      <span className="text-2xl">€</span>
                    </p>
                    <p className="mt-2 text-sm text-cream-soft">{p.per ?? "Drop in"}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{p.note}</p>
                    <Button variant="outline" className="mt-8 w-full" onClick={claim}>
                      {p.cta}
                    </Button>
                  </article>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>

          <FadeInStagger className="mt-20">
            <FadeInStaggerItem>
              <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-gold">Memberships</p>
            </FadeInStaggerItem>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {memberships.map((m) => (
                <FadeInStaggerItem key={m.name}>
                  <article
                    className={`h-full flex flex-col justify-between border p-7 transition-colors duration-300 hover:border-cream/30 ${
                      m.unlimited ? "border-cream/25 bg-ink" : "border-line bg-ink"
                    }`}
                  >
                    {m.promo && (
                      <span className="mb-4 w-fit border border-dashed border-copper/70 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-copper">
                        10% off · STRONGSEPTEMBER10
                      </span>
                    )}
                    {!m.promo && <span className="mb-4 h-[26px]" />}
                    <h3 className="font-display text-2xl tracking-[0.08em]">{m.name}</h3>
                    <p className="mt-5 font-display text-5xl tracking-wide">
                      {m.price}
                      <span className="text-2xl">€</span>
                    </p>
                    <p className="mt-2 text-sm text-cream-soft">{m.per}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{m.note}</p>
                    <Button variant={m.unlimited ? "solid" : "outline"} className="mt-8 w-full" onClick={claim}>
                      I want this
                    </Button>
                  </article>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
        <FadeIn>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-copper">Visit</p>
              <h2 className="mt-4 font-display text-5xl tracking-[0.04em] md:text-6xl">
                Sarrià-
                <br />
                Sant Gervasi
              </h2>
              <p className="mt-6 max-w-md text-muted">
                A dark, focused room on Carrer d'Alfons XII. Arrive early, leave everything else at the door, and take your
                machine.
              </p>
              <div className="mt-8 space-y-2 text-sm text-cream-soft">
                <p>{studio.address}</p>
                <p>{studio.city}</p>
                <p className="pt-2">{studio.phone}</p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/schedule">Book a class</ButtonLink>
                <a
                  href="https://maps.google.com/?q=Carrer+d%27Alfons+XII+10+Barcelona"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-cream/35 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-cream"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={experience} alt="Class in session" className="h-[460px] w-full object-cover" />
              <div className="absolute -bottom-6 -left-4 border border-line bg-ink-2 px-6 py-4 sm:left-6">
                <p className="font-serif text-lg italic text-cream">Limited to 8 bodies.</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Every class, every hour</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-10">
          <h2 className="font-display text-4xl tracking-[0.04em] md:text-6xl">Ready to shake?</h2>
          <Link
            to="/schedule"
            className="bg-cream px-10 py-4 text-[12px] uppercase tracking-[0.24em] text-ink transition-colors hover:bg-white"
          >
            Book your first class
          </Link>
        </div>
      </section>
    </div>
  );
}
