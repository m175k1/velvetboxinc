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
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1599733589046-75a93e6c3b4f?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80",
    colors: ["#F7D6DD", "#C98BA6", "#FDEDE6"],
  },
];
