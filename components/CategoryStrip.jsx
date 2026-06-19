"use client";

import { motion } from "framer-motion";
import { stagger, item } from "./Reveal";

const tiles = [
  {
    slug: "cosmetics",
    name: "Cosmetics",
    img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "skincare",
    name: "Skincare",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "apparel",
    name: "Apparel",
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=700&q=80",
  },
];

export default function CategoryStrip() {
  return (
    <section id="shop" className="scroll-mt-28 py-12 sm:py-16">
      <div className="container-px">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {tiles.map((t) => (
            <motion.a
              key={t.slug}
              href={`#${t.slug}`}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ring-1 ring-white/60"
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-2xl text-white">{t.name}</h3>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/85">
                  Shop now
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
