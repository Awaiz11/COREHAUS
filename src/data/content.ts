const paula = "/images/instructors/paula.jpg";
const alex = "/images/instructors/alex.jpg";
const ak = "/images/instructors/ak.jpg";
const paola = "/images/instructors/paola.jpg";

export const studio = {
  name: "Corehaus",
  tagline: "Create the strongest version of yourself",
  address: "Carrer d'Alfons XII 10",
  city: "Barcelona, 08006",
  neighborhood: "Sarrià-Sant Gervasi",
  phone: "+34 670 87 36 30",
  email: "hello@corehaus.es",
  instagram: "@corehaus_es",
  instagramUrl: "https://www.instagram.com/corehaus_es/",
};

export const instructors = {
  paula: { name: "Paula Fernández", image: paula, role: "Head Coach" },
  alex: { name: "Alex Alvarez", image: alex, role: "Coach" },
  ak: { name: "AK Khurana", image: ak, role: "Coach" },
  paola: { name: "Paola Villafuerte", image: paola, role: "Coach" },
} as const;

export type InstructorKey = keyof typeof instructors;

export const weeklyFocus = [
  {
    day: "Mon",
    full: "Monday",
    title: "Glutes & Core",
    muscles: ["Glutes", "Hamstrings", "Center"],
    className: "Full Body (Center, Glutes & Triceps)",
  },
  {
    day: "Tue",
    full: "Tuesday",
    title: "Pull & Press",
    muscles: ["Back", "Chest", "Arms"],
    className: "Full Body (Hamstrings & Arm Wrap)",
  },
  {
    day: "Wed",
    full: "Wednesday",
    title: "Inner / Outer",
    muscles: ["Adductors", "Abductors", "Abs"],
    className: "Full Body (Leg Wrap & Arm Wrap)",
  },
  {
    day: "Thu",
    full: "Thursday",
    title: "Center Line",
    muscles: ["Core", "Glutes", "Shoulders"],
    className: "Full Body (Hamstrings & Shoulders)",
  },
  {
    day: "Fri",
    full: "Friday",
    title: "Lower Power",
    muscles: ["Quads", "Glutes", "Obliques"],
    className: "Full Body (Center, Glutes & Triceps)",
  },
  {
    day: "Sat",
    full: "Saturday",
    title: "Upper Sculpt",
    muscles: ["Arms", "Back", "Core"],
    className: "Full Body (Hamstrings & Arm Wrap)",
  },
  {
    day: "Sun",
    full: "Sunday",
    title: "Full Sculpt",
    muscles: ["Total Body", "Center", "Burn"],
    className: "Full Body (Leg Wrap & Arm Wrap)",
  },
];

export type ClassItem = {
  id: string;
  date: Date;
  time: string;
  endTime: string;
  name: string;
  instructorKey: InstructorKey;
  spots: number;
  capacity: number;
  language: "EN" | "ES";
};

const weekdayTimes = ["07:15", "08:15", "09:15", "12:15", "13:15", "17:15", "18:15", "19:15", "20:15"];
const weekendTimes = ["09:15", "10:15", "11:15", "12:15", "17:15", "18:15"];
const coachRotation: InstructorKey[] = ["paula", "alex", "ak", "paola"];

function addMinutes(time: string, minutes: number) {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m + minutes, 0, 0);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function seeded(n: number) {
  const x = Math.sin(n * 999) * 10000;
  return x - Math.floor(x);
}

export function getUpcomingClasses(days = 7): ClassItem[] {
  const items: ClassItem[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dow = date.getDay();
    const focus = weeklyFocus[dow === 0 ? 6 : dow - 1];
    const times = dow === 0 || dow === 6 ? weekendTimes : weekdayTimes;

    times.forEach((time, idx) => {
      const seed = date.getDate() * 13 + idx * 7 + dow;
      const spots = Math.floor(seeded(seed) * 9);
      items.push({
        id: `${date.toISOString().slice(0, 10)}-${time}`,
        date,
        time,
        endTime: addMinutes(time, 50),
        name: focus.className,
        instructorKey: coachRotation[(dow + idx) % coachRotation.length],
        spots,
        capacity: 8,
        language: idx % 5 === 0 ? "ES" : "EN",
      });
    });
  }
  return items;
}

export const introOffers = [
  {
    name: "Intro Offer",
    price: "59",
    unit: "€",
    detail: "3 classes",
    note: "Expires after 15 days",
    cta: "Start here",
    featured: false,
  },
  {
    name: "2 Weeks Unlimited",
    price: "129",
    unit: "€",
    detail: "Unlimited intro",
    note: "Expires after 15 days",
    cta: "Sign me up",
    featured: true,
  },
];

export const packages = [
  {
    name: "Single Class",
    price: "29",
    per: null as string | null,
    note: "Expires after 15 days",
    promo: false,
    cta: "I want this",
  },
  {
    name: "5 Pack",
    price: "119",
    per: "24€ / class",
    note: "Expires after 30 days",
    promo: true,
    cta: "I want this",
  },
  {
    name: "8 Pack",
    price: "179",
    per: "22€ / class",
    note: "Expires after 45 days",
    promo: true,
    cta: "I want this",
  },
  {
    name: "12 Pack",
    price: "259",
    per: "21.5€ / class",
    note: "Expires after 60 days",
    promo: false,
    cta: "I want this",
  },
];

export const memberships = [
  {
    name: "4 Classes / Month",
    price: "96",
    per: "24€ / class",
    note: "Minimum 3 months",
    promo: true,
    unlimited: false,
  },
  {
    name: "8 Classes / Month",
    price: "169",
    per: "21€ / class",
    note: "Minimum 3 months",
    promo: true,
    unlimited: false,
  },
  {
    name: "12 Classes / Month",
    price: "249",
    per: "20.5€ / class",
    note: "Minimum 3 months",
    promo: false,
    unlimited: false,
  },
  {
    name: "Unlimited",
    price: "329",
    per: "From 16.5€ / class",
    note: "Minimum 3 months",
    promo: false,
    unlimited: true,
  },
];

export const pillars = [
  {
    num: "01",
    title: "Strength Training",
    text: "The best of pilates, weight training, and resistance training to build strength, a leaner physique, and toned muscles.",
  },
  {
    num: "02",
    title: "Time Under Tension",
    text: "Slow and controlled movements that specifically target key muscle groups, all while ensuring minimal strain on the organs and joints.",
  },
  {
    num: "03",
    title: "A One-of-a-Kind Experience",
    text: "Paired with DJ-curated playlists and instructors fueling your “yes, I can” mindset, you’ll leave motivated, supported, and seeing results immediately.",
  },
];
