"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section className="py-14 sm:py-20">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-white/70 px-6 py-12 text-center shadow-soft ring-1 ring-white/70 backdrop-blur sm:px-12 sm:py-16"
        >
          <div className="blob h-52 w-52 animate-blob bg-rose left-[-2rem] top-[-2rem]" />
          <div className="blob h-52 w-52 animate-blob bg-mauve/60 right-[-2rem] bottom-[-2rem]" />

          <div className="relative z-10 mx-auto max-w-xl">
            <span className="pill mx-auto">💌 Join the glow list</span>
            <h2 className="mt-5 font-serif text-3xl text-plum sm:text-4xl">
              Get 10% off your first Velvet Box
            </h2>
            <p className="mt-3 text-ink/65">
              Early access to drops, soft-glow tips, and members-only treats —
              straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-petal/40 bg-white px-5 py-3 text-sm text-ink outline-none transition-shadow focus:ring-2 focus:ring-petal/50"
              />
              <button type="submit" className="btn-primary">
                {sent ? "You're in! ✦" : "Subscribe"}
              </button>
            </form>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm text-mauve"
              >
                Thanks for joining — check your inbox for your code 💗
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
