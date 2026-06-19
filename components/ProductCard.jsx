"use client";

import { motion } from "framer-motion";
import { item } from "./Reveal";
import { asset } from "../data/asset";

function Stars({ rating }) {
  return (
    <span className="text-xs text-gold" aria-label={`${rating} stars`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-petal/40">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

const peso = (n) => "₱" + n.toLocaleString("en-PH");

export default function ProductCard({ product }) {
  const { name, price, oldPrice, rating, sold, badge, image, colors } = product;

  return (
    <motion.article
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/70 p-3 shadow-soft ring-1 ring-white/70 backdrop-blur"
    >
      <div className="relative overflow-hidden rounded-2xl">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-gradient-to-r from-petal to-mauve px-3 py-1 text-[11px] font-semibold text-white shadow-soft">
            {badge}
          </span>
        )}

        <button
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-mauve opacity-0 shadow-soft ring-1 ring-petal/30 transition-all duration-300 hover:bg-white group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          ♥
        </button>

        <img
          src={asset(image)}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* slide-up quick add */}
        <div className="absolute inset-x-3 bottom-3 translate-y-[130%] transition-transform duration-500 ease-out group-hover:translate-y-0">
          <button className="w-full rounded-full bg-plum/90 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-plum">
            Add to bag · {peso(price)}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3.5">
        <div className="flex items-center justify-between">
          <Stars rating={rating} />
          <span className="text-[11px] text-ink/45">{sold} sold</span>
        </div>

        <h3 className="mt-1.5 line-clamp-2 font-medium leading-snug text-ink">
          {name}
        </h3>

        {colors?.length ? (
          <div className="mt-2 flex gap-1.5">
            {colors.map((c) => (
              <span
                key={c}
                className="h-4 w-4 rounded-full ring-1 ring-black/5 transition-transform hover:scale-125"
                style={{ background: c }}
              />
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex items-end gap-2 pt-3">
          <span className="font-serif text-xl text-plum">{peso(price)}</span>
          {oldPrice && (
            <span className="pb-0.5 text-sm text-ink/40 line-through">
              {peso(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
