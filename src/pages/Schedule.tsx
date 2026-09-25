import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../components/FadeIn";
import { Button, ButtonExternalLink } from "../components/Button";
import { getUpcomingClasses, instructors, weeklyFocus, type ClassItem } from "../data/content";

function formatDay(date: Date) {
  return date.toLocaleDateString("en-GB", { weekday: "short" }).toUpperCase();
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }).toUpperCase();
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function Schedule() {
  const classes = useMemo(() => getUpcomingClasses(7), []);
  const days = useMemo(() => {
    const map = new Map<string, Date>();
    classes.forEach((c) => map.set(c.date.toDateString(), c.date));
    return Array.from(map.values());
  }, [classes]);

  const [selected, setSelected] = useState<Date>(days[0]);
  const [booked, setBooked] = useState<ClassItem | null>(null);
  const navigate = useNavigate();

  const list = classes.filter((c) => isSameDay(c.date, selected));
  const dow = selected.getDay();
  const focus = weeklyFocus[dow === 0 ? 6 : dow - 1];

  return (
    <div className="pt-[76px]">
      <section className="border-b border-line bg-ink-2">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-10 md:py-20">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-copper">Timetable</p>
            <h1 className="mt-4 font-display text-6xl tracking-[0.04em] md:text-8xl">Schedule</h1>
            <p className="mt-5 max-w-lg text-muted">
              Fifty minutes. Eight machines. Choose your hour and meet your coach on the floor.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="sticky top-[76px] z-30 border-b border-line bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] gap-2 overflow-x-auto px-5 py-4 md:px-10">
          {days.map((d) => {
            const active = isSameDay(d, selected);
            return (
              <button
                key={d.toDateString()}
                onClick={() => setSelected(d)}
                className={`min-w-[86px] border px-3 py-3 text-left transition-colors ${
                  active ? "border-cream bg-cream text-ink" : "border-line text-cream hover:border-cream/40"
                }`}
              >
                <span className="block text-[10px] tracking-[0.2em] opacity-70">{formatDay(d)}</span>
                <span className="mt-1 block font-display text-xl tracking-wide">{formatDate(d)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-line pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{focus.full} focus</p>
            <h2 className="mt-1 font-display text-3xl tracking-[0.06em]">{focus.title}</h2>
          </div>
          <p className="text-sm text-muted">{focus.muscles.join(" · ")}</p>
        </div>

        <FadeInStagger staggerDelay={0.05} className="divide-y divide-line border-y border-line">
          <ul className="divide-y divide-line">
            {list.map((c, i) => {
              const coach = instructors[c.instructorKey];
              const full = c.spots === 0;
              return (
                <li key={c.id}>
                  <FadeInStaggerItem>
                    <div className="flex flex-col gap-5 py-6 transition-colors duration-300 hover:bg-ink-2/80 sm:flex-row sm:items-center sm:gap-8 sm:px-3">
                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="h-16 w-16 shrink-0 object-cover sm:h-[72px] sm:w-[72px]"
                        />
                        <div className="min-w-0">
                          <p className="font-display text-xl tracking-[0.04em] text-cream sm:text-2xl">{c.name}</p>
                          <p className="mt-1 text-sm text-muted">
                            {coach.name}
                            <span className="mx-2 text-line">/</span>
                            {c.language}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-10">
                        <div className="text-left sm:text-right">
                          <p className="font-display text-2xl tracking-wide">
                            {c.time}
                            <span className="text-sm text-muted"> – {c.endTime}</span>
                          </p>
                          <p className={`mt-1 text-[11px] uppercase tracking-[0.18em] ${full ? "text-copper" : "text-muted"}`}>
                            {full ? "Waitlist" : `${c.spots} spots left`}
                          </p>
                        </div>
                        <Button
                          variant={full ? "outline" : "solid"}
                          className="min-w-[132px] px-5"
                          onClick={() => setBooked(c)}
                        >
                          {full ? "Join waitlist" : "Book class"}
                        </Button>
                      </div>
                    </div>
                  </FadeInStaggerItem>
                </li>
              );
            })}
          </ul>
        </FadeInStagger>
      </div>

      {booked && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
          <button className="absolute inset-0 bg-ink/75 backdrop-blur-sm" onClick={() => setBooked(null)} />
          <div className="animate-scale-in relative w-full max-w-md border border-line bg-ink-2 p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-copper">Momence booking</p>
            <h3 className="mt-3 font-display text-3xl tracking-[0.06em]">{booked.name}</h3>
            <p className="mt-4 text-sm text-muted">
              {formatDay(booked.date)} {formatDate(booked.date)} · {booked.time}–{booked.endTime}
            </p>
            <p className="mt-1 text-sm text-cream-soft">{instructors[booked.instructorKey].name}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Sign in to confirm your machine. New to Corehaus? Create an account and we will hold your spot.
            </p>
            <ButtonExternalLink className="mt-8 w-full" href="https://momence.com/sign-in?hostId=47062">
              Continue to log in
            </ButtonExternalLink>
            <button
              onClick={() => setBooked(null)}
              className="mt-4 w-full text-center text-[11px] uppercase tracking-[0.2em] text-muted hover:text-cream"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
