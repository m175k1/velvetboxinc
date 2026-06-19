"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* animated pastel blobs */}
      <div className="blob h-72 w-72 animate-blob bg-rose left-[-4rem] top-24" />
      <div
        className="blob h-80 w-80 animate-blob bg-mauve/70 right-[-3rem] top-10"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="blob h-64 w-64 animate-blob bg-gold/50 left-1/2 top-[22rem]"
        style={{ animationDelay: "6s" }}
      />

      <div className="container-px relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <motion.div style={{ y: yText, opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="pill"
          >
            ✨ New season · Soft Glow Edit
          </motion.span>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-plum sm:text-6xl lg:text-7xl">
            {["Beauty that", "feels like"].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="block italic text-gradient"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease }}
            >
              a soft hug.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            Velvet Box brings together luminous cosmetics, glow-first skincare,
            and the softest everyday apparel — curated to make you feel
            effortlessly radiant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#shop" className="btn-primary">
              Explore the collection →
            </a>
            <a href="#cosmetics" className="btn-ghost">
              Shop cosmetics
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-10 flex items-center gap-7"
          >
            {[
              ["12k+", "Happy glows"],
              ["4.9★", "Avg rating"],
              ["100%", "Cruelty-free"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-2xl text-plum">{n}</div>
                <div className="text-xs uppercase tracking-wide text-ink/50">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* hero visual */}
        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-rose/60 via-blush to-gold/40 blur-2xl" />
          <div className="relative animate-float overflow-hidden rounded-[2.5rem] shadow-glow ring-1 ring-white/70">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
              alt="Velvet Box beauty edit"
              className="h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent" />
          </div>

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
            className="glass absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-soft ring-1 ring-white/60"
          >
            <div className="text-xs text-ink/60">Bestseller</div>
            <div className="text-sm font-semibold text-plum">Velvet Matte Lip</div>
            <div className="text-xs text-mauve">₱249 · 4.9★</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="glass absolute -right-3 bottom-14 rounded-2xl px-4 py-3 shadow-soft ring-1 ring-white/60"
          >
            <div className="flex -space-x-2">
              {["#F2B5C4", "#EBA6BB", "#C98BA6", "#D9A86C"].map((c) => (
                <span
                  key={c}
                  className="h-6 w-6 rounded-full ring-2 ring-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="mt-1.5 text-xs font-medium text-plum">
              Loved by 12k+ glow-getters
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
