// ───────────────────────────────────────────────────────────────────────────
//  VELVET BOX — PRODUCT CATALOG
//  This is the ONLY file you edit to manage products.
//
//  When you send screenshots of the Shopee store, each item just becomes one
//  object below. Fields:
//    id        unique number
//    name      product title
//    category  must match a `slug` in the `categories` array
//    price     selling price (number, in PHP)
//    oldPrice  optional original price for the strike-through (number or null)
//    rating    0–5
//    sold      units sold (string is fine, e.g. "1.2k")
//    badge     optional tag shown on the card ("Bestseller", "New", "-30%"...)
//    image     image URL (Shopee CDN link, Unsplash, or /public path)
//    colors    optional array of hex swatches
// ───────────────────────────────────────────────────────────────────────────

export const categories = [
  { slug: "cosmetics", name: "Cosmetics", emoji: "💄", blurb: "Lips, eyes & complexion" },
  { slug: "skincare", name: "Skincare", emoji: "🧴", blurb: "Glow-first essentials" },
  { slug: "apparel", name: "Apparel", emoji: "👗", blurb: "Soft, everyday silhouettes" },
  { slug: "accessories", name: "Accessories", emoji: "👜", blurb: "The finishing touches" },
];

export const products = [
  {
    id: 1,
    name: "Velvet Matte Liquid Lipstick",
    category: "cosmetics",
    price: 249,
    oldPrice: 399,
    rating: 4.9,
    sold: "3.4k",
    badge: "Bestseller",
    image: "/products/1.jpg",
    colors: ["#C04A5B", "#E08DA0", "#8C4A55", "#D96B7A"],
  },
  {
    id: 2,
    name: "Soft Focus Cushion Foundation",
    category: "cosmetics",
    price: 459,
    oldPrice: 590,
    rating: 4.8,
    sold: "2.1k",
    badge: "-22%",
    image: "/products/2.jpg",
    colors: ["#F1C9A5", "#E0A87E", "#C98C63"],
  },
  {
    id: 3,
    name: "Petal Bloom Eyeshadow Palette",
    category: "cosmetics",
    price: 525,
    oldPrice: null,
    rating: 4.9,
    sold: "1.8k",
    badge: "New",
    image: "/products/3.jpg",
    colors: ["#E7B7C4", "#C98BA6", "#A86A86"],
  },
  {
    id: 4,
    name: "Rosé Glow Liquid Blush",
    category: "cosmetics",
    price: 199,
    oldPrice: 280,
    rating: 4.7,
    sold: "4.6k",
    badge: "Hot",
    image: "/products/4.jpg",
    colors: ["#EBA6BB", "#F2B5C4", "#D98499"],
  },
  {
    id: 5,
    name: "Hydra-Dew Vitamin C Serum",
    category: "skincare",
    price: 389,
    oldPrice: 520,
    rating: 4.9,
    sold: "2.9k",
    badge: "Bestseller",
    image: "/products/5.jpg",
  },
  {
    id: 6,
    name: "Cloud Cream Gentle Moisturizer",
    category: "skincare",
    price: 299,
    oldPrice: null,
    rating: 4.8,
    sold: "1.5k",
    badge: null,
    image: "/products/6.jpg",
  },
  {
    id: 7,
    name: "Petal Soft Lounge Set",
    category: "apparel",
    price: 699,
    oldPrice: 999,
    rating: 4.8,
    sold: "980",
    badge: "-30%",
    image: "/products/7.jpg",
    colors: ["#F7D6DD", "#FDEDE6", "#C98BA6"],
  },
  {
    id: 8,
    name: "Blush Linen Wrap Dress",
    category: "apparel",
    price: 899,
    oldPrice: 1190,
    rating: 4.9,
    sold: "1.1k",
    badge: "New",
    image: "/products/8.jpg",
    colors: ["#F2B5C4", "#FFF7F3", "#D9A86C"],
  },
  {
    id: 9,
    name: "Quilted Mini Shoulder Bag",
    category: "accessories",
    price: 549,
    oldPrice: 750,
    rating: 4.7,
    sold: "760",
    badge: "Hot",
    image: "/products/9.jpg",
    colors: ["#EBA6BB", "#8C5A78", "#FFF7F3"],
  },
  {
    id: 10,
    name: "Pearl Drop Hair Clips (Set of 3)",
    category: "accessories",
    price: 159,
    oldPrice: 240,
    rating: 4.8,
    sold: "5.2k",
    badge: "Bestseller",
    image: "/products/10.jpg",
  },
  {
    id: 11,
    name: "Dewy Lip & Cheek Tint Duo",
    category: "cosmetics",
    price: 229,
    oldPrice: 320,
    rating: 4.9,
    sold: "3.0k",
    badge: "New",
    image: "/products/11.jpg",
    colors: ["#F2B5C4", "#EBA6BB"],
  },
  {
    id: 12,
    name: "Silk Touch Scrunchie Trio",
    category: "accessories",
    price: 129,
    oldPrice: null,
    rating: 4.6,
    sold: "2.4k",
    badge: null,
    image: "/products/12.jpg",
    colors: ["#F7D6DD", "#C98BA6", "#FDEDE6"],
  },
];
