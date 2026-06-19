import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryStrip from "@/components/CategoryStrip";
import CategorySection from "@/components/CategorySection";
import Featured from "@/components/Featured";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { categories, products } from "@/data/products";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <CategoryStrip />

      {categories.map((cat, i) => {
        const items = products.filter((p) => p.category === cat.slug);
        if (!items.length) return null;
        return (
          <Fragment key={cat.slug}>
            <CategorySection category={cat} products={items} />
            {i === 0 && <Featured />}
          </Fragment>
        );
      })}

      <Newsletter />
      <Footer />
    </main>
  );
}
