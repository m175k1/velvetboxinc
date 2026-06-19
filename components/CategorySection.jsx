"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { stagger } from "./Reveal";

export default function CategorySection({ category, products }) {
  return (
    <section id={category.slug} className="scroll-mt-28 py-14 sm:py-20">
      <div className="container-px">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pill"
            >
              <span>{category.emoji}</span> {category.blurb}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-serif text-4xl tracking-tight text-plum sm:text-5xl"
            >
              {category.name}
            </motion.h2>
          </div>
          <a
            href="#shop"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-mauve"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
