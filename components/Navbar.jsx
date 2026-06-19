"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { asset } from "../data/asset";

const links = [
  { label: "Cosmetics", href: "#cosmetics" },
  { label: "Skincare", href: "#skincare" },
  { label: "Apparel", href: "#apparel" },
  { label: "Accessories", href: "#accessories" },
];

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-mauve text-cream shadow-soft"
    >
      <nav className="container-px grid grid-cols-3 items-center py-3">
        {/* LEFT — menu */}
        <div className="flex items-center justify-start">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative inline-block text-[1.1rem] font-medium text-cream/90 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-cream transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-cream ring-1 ring-cream/25 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* CENTER — logo */}
        <a
          href="#top"
          className="flex justify-center deputs"
          aria-label="Velvet Box Inc. — home"
        >
          <span
            role="img"
            aria-label="Velvet Box Inc."
            className="block h-16 w-full bg-cream sm:h-20"
            style={{
              maskImage: `url(${asset("/logo.png")})`,
              WebkitMaskImage: `url(${asset("/logo.png")})`,
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
          />
        </a>

        {/* RIGHT — account + cart */}
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <a
            href="#account"
            aria-label="Account"
            className="grid h-10 w-10 place-items-center rounded-full text-cream transition-colors hover:bg-white/10"
          >
            <UserIcon />
          </a>
          <a
            href="#cart"
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full text-cream transition-colors hover:bg-white/10"
          >
            <BagIcon />
            <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-cream text-[10px] font-bold text-mauve">
              0
            </span>
          </a>
        </div>
      </nav>

      {/* mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-cream/15 md:hidden"
          >
            <ul className="container-px space-y-1 py-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[1.25rem] font-medium text-cream/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
