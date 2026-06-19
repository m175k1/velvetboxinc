# Velvet Box — Cosmetics & Apparel

A soft pastel beauty e-commerce site for **Velvet Box Inc**, built with Next.js +
Tailwind CSS + Framer Motion. Heavy on smooth scroll animations, parallax, and
hover micro-interactions.

## Run it

```bash
npm install      # first time only
npm run dev      # → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing products (the only file you touch)

All products live in [`data/products.js`](data/products.js). Each item is one
object. To add the real Velvet Box catalog from the Shopee screenshots, copy an
existing object and fill in:

| field      | meaning                                             |
| ---------- | --------------------------------------------------- |
| `id`       | unique number                                       |
| `name`     | product title                                       |
| `category` | one of: `cosmetics`, `skincare`, `apparel`, `accessories` |
| `price`    | selling price in PHP (number)                       |
| `oldPrice` | original price for strike-through, or `null`        |
| `rating`   | 0–5                                                 |
| `sold`     | units sold, e.g. `"1.2k"`                           |
| `badge`    | small tag, e.g. `"Bestseller"`, `"New"`, `"-30%"`   |
| `image`    | image URL (Shopee CDN, Unsplash, or `/public` path) |
| `colors`   | optional array of hex swatches                      |

Add a new category by adding an entry to the `categories` array (the page builds
its sections automatically).

## Structure

```
app/            layout, global styles, page (assembles sections)
components/      Navbar, Hero, Marquee, CategoryStrip, CategorySection,
                ProductCard, Featured, Newsletter, Footer, Reveal helpers
data/products.js  the catalog ← edit this
```

## Notes

- Placeholder images use Unsplash. `next.config.mjs` already allows the Shopee
  CDN hosts (`cf.shopee.ph`, `down-ph.img.susercontent.com`) so you can paste
  Shopee image links directly.
- Animations respect `prefers-reduced-motion`.
