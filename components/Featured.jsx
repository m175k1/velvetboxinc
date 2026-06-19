"use client";

import { motion } from "framer-motion";

export default function Featured() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="shimmer-sweep relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mauve via-petal to-rose p-8 shadow-glow sm:p-14"
        >
          <div className="blob h-60 w-60 bg-white/40 right-10 top-[-3rem]" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Limited drop
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl">
                The Soft Glow <span className="italic">Velvet Box</span>
              </h2>
              <p className="mt-4 max-w-md text-white/85">
                A curated set of our bestselling lip, cheek & glow essentials —
                wrapped in our signature blush velvet box. Save 35% this week
                only.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#cosmetics"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-plum shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Get the box →
                </a>
                <div className="text-white">
                  <span className="font-serif text-3xl">₱899</span>
                  <span className="ml-2 text-white/70 line-through">₱1,380</span>
                </div>
              </div>

              <Countdown />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-sm"
            >
              <div className="overflow-hidden rounded-[2rem] ring-4 ring-white/40">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
                  alt="The Soft Glow Velvet Box"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Countdown() {
  const blocks = [
    ["02", "Days"],
    ["14", "Hrs"],
    ["37", "Min"],
    ["09", "Sec"],
  ];
  return (
    <div className="mt-8 flex gap-3">
      {blocks.map(([n, l]) => (
        <div
          key={l}
          className="glass grid h-16 w-16 place-items-center rounded-2xl text-center ring-1 ring-white/50"
        >
          <span className="font-serif text-xl leading-none text-plum">{n}</span>
          <span className="text-[10px] uppercase tracking-wide text-ink/60">
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}
