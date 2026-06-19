import "./globals.css";
import { Cinzel, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

// Classical inscriptional caps — matches the Velvet Box Inc. logo wordmark.
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

// Elegant high-contrast serif (with italics) for headings & prices.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Velvet Box — Cosmetics & Apparel",
  description:
    "Velvet Box Inc. Soft, luminous cosmetics, skincare, and apparel — made to make you glow.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
