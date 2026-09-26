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


export default function Schedule() {
  const classes = useMemo(() => getUpcomingClasses(7), []);
  const upcomingClassesData = useMemo(() => {
    const map = new Map<string, { date: Date; classes: ClassItem[] }>();
    classes.forEach((c) => {
      const key = new Date(c.date).toDateString();
      if (!map.has(key)) {
        map.set(key, { date: new Date(c.date), classes: [] });
      }
      map.get(key)!.classes.push(c);
    });
    return Array.from(map.values());
  }, [classes]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [booked, setBooked] = useState<ClassItem | null>(null);
  const navigate = useNavigate();

  const activeDay = upcomingClassesData[selectedIndex];
  const selectedDate = activeDay?.date || new Date();
  const dow = selectedDate.getDay();
  const focus = weeklyFocus[dow === 0 ? 6 : dow - 1];

  const DUMMY_CLASSES: ClassItem[] = [
    {
      id: "dummy-1",
      date: selectedDate,
      time: '07:15',
      endTime: '08:05',
      name: 'FULL BODY (CENTER, GLUTES & TRICEPS)',
      instructorKey: 'alex',
      language: 'ES',
      spots: 4,
      capacity: 8,
    },
    {
      id: "dummy-2",
      date: selectedDate,
      time: '08:15',
      endTime: '09:05',
      name: 'FULL BODY (CENTER, GLUTES & TRICEPS)',
      instructorKey: 'ak',
      language: 'EN',
      spots: 1,
      capacity: 8,
    },
    {
      id: "dummy-3",
      date: selectedDate,
      time: '09:15',
      endTime: '10:05',
      name: 'FULL BODY (CENTER, GLUTES & TRICEPS)',
      instructorKey: 'paola',
      language: 'EN',
      spots: 7,
      capacity: 8,
    }
  ];

  const classesToRender = (activeDay && activeDay.classes && activeDay.classes.length > 0) ? activeDay.classes : DUMMY_CLASSES;

  return (
    <div className="pt-[76px]">
      <section className="border-b border-white/10 bg-ink-2">
        <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-10 md:py-24">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Timetable</p>
            <h1 className="mt-5 font-display text-6xl tracking-[0.04em] md:text-8xl">Schedule</h1>
            <p className="mt-6 max-w-lg text-muted">
              Fifty minutes. Eight machines. Choose your hour and meet your coach on the floor.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="sticky top-[76px] z-30 border-b border-white/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] gap-2 overflow-x-auto px-5 py-4 md:px-10">
          {upcomingClassesData.map((dayData, index) => {
            const d = dayData.date;
            const active = selectedIndex === index;
            return (
              <button
                key={d.toDateString()}
                onClick={() => setSelectedIndex(index)}
                className={`min-w-[86px] border px-3 py-3 text-left transition-all duration-300 ease-in-out ${
                  active ? "border-cream bg-cream text-ink" : "border-white/10 text-cream hover:border-cream/35 hover:bg-cream/5"
                }`}
              >
                <span className="block text-[10px] tracking-[0.2em] opacity-70">{formatDay(d)}</span>
                <span className="mt-1 block font-display text-xl tracking-wide">{formatDate(d)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 py-12 md:px-10 md:py-16">
        <div className="mb-10 flex flex-col justify-between gap-3 border-b border-white/10 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{focus.full} focus</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.06em]">{focus.title}</h2>
          </div>
          <p className="text-sm text-muted">{focus.muscles.join(" · ")}</p>
        </div>

        <FadeInStagger staggerDelay={0.05} className="divide-y divide-white/10 border-y border-white/10">
          <ul className="divide-y divide-white/10">
            {classesToRender.map((c, i) => {
              const coach = instructors[c.instructorKey];
              const full = c.spots === 0;
              return (
                <li key={c.id}>
                  <FadeInStaggerItem>
                    <div className="flex flex-col gap-5 py-7 transition-all duration-300 ease-in-out hover:bg-ink-2/70 sm:flex-row sm:items-center sm:gap-8 sm:px-4">
                      <div className="flex min-w-0 flex-1 items-center gap-5">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="h-16 w-16 shrink-0 object-cover sm:h-[72px] sm:w-[72px]"
                        />
                        <div className="min-w-0">
                          <p className="font-display text-xl tracking-[0.04em] text-cream sm:text-2xl">{c.name}</p>
                          <p className="mt-1 text-sm text-muted">
                            {coach.name}
                            <span className="mx-2 text-cream/20">/</span>
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
                          <p className={`mt-1 text-[11px] uppercase tracking-[0.18em] ${full ? "text-cream/50" : "text-muted"}`}>
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
          <button className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setBooked(null)} />
          <div className="animate-scale-in relative w-full max-w-md border border-white/15 bg-ink-2 p-9">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Momence booking</p>
            <h3 className="mt-4 font-display text-3xl tracking-[0.06em]">{booked.name}</h3>
            <p className="mt-5 text-sm text-muted">
              {formatDay(booked.date)} {formatDate(booked.date)} · {booked.time}–{booked.endTime}
            </p>
            <p className="mt-1 text-sm text-cream-soft">{instructors[booked.instructorKey].name}</p>
            <p className="mt-7 text-sm leading-relaxed text-muted">
              Sign in to confirm your machine. New to Corehaus? Create an account and we will hold your spot.
            </p>
            <ButtonExternalLink className="mt-8 w-full" href="https://momence.com/sign-in?hostId=47062">
              Continue to log in
            </ButtonExternalLink>
            <button
              onClick={() => setBooked(null)}
              className="mt-5 w-full text-center text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-cream"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
