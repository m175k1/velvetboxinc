"use client";

const items = [
  "Cruelty-free",
  "Dermatologist-tested",
  "Free shipping over ₱999",
  "Soft pastel edit",
  "Vegan formulas",
  "Made to glow",
  "30-day returns",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-petal/30 bg-gradient-to-r from-sand via-blush to-sand py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-serif text-lg italic text-plum/80"
          >
            {t}
            <span className="text-petal">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
