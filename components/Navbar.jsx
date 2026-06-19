"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Cosmetics", href: "#cosmetics" },
  { label: "Skincare", href: "#skincare" },
  { label: "Apparel", href: "#apparel" },
  { label: "Accessories", href: "#accessories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <nav
          className={`container-px flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "glass mx-auto max-w-6xl py-2.5 shadow-soft ring-1 ring-white/60"
              : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-petal to-mauve text-white shadow-soft">
              <span className="text-base">✦</span>
            </span>
            <span className="font-display text-lg font-600 uppercase tracking-[0.18em] text-plum">
              Velvet&nbsp;Box
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-ink/80 transition-colors hover:text-plum"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-petal transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#shop" className="btn-primary hidden sm:inline-flex">
              Shop now
              <span aria-hidden>→</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/70 ring-1 ring-petal/40 md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-plum">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="container-px md:hidden"
          >
            <ul className="glass mt-2 space-y-1 rounded-3xl p-3 shadow-soft ring-1 ring-white/60">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-white hover:text-plum"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#shop"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-1 w-full"
                >
                  Shop now →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
