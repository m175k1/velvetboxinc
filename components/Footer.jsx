export default function Footer() {
  const cols = [
    {
      title: "Shop",
      links: ["Cosmetics", "Skincare", "Apparel", "Accessories", "Gift sets"],
    },
    {
      title: "Help",
      links: ["Shipping", "Returns", "Track order", "FAQ", "Contact us"],
    },
    {
      title: "Velvet Box",
      links: ["Our story", "Sustainability", "Ingredients", "Careers", "Press"],
    },
  ];

  return (
    <footer className="mt-10 border-t border-petal/30 bg-gradient-to-b from-sand to-blush/50">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-petal to-mauve text-white">
                ✦
              </span>
              <span className="font-serif text-xl text-plum">Velvet Box</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink/60">
              Soft, luminous cosmetics, skincare & apparel — curated to make you
              feel effortlessly radiant.
            </p>
            <div className="mt-5 flex gap-3">
              {["Instagram", "TikTok", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/70 text-xs font-medium text-plum ring-1 ring-petal/40 transition-colors hover:bg-white"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-serif text-lg text-plum">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink/60 transition-colors hover:text-mauve"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-petal/30 pt-6 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Velvet Box Inc. All rights reserved.</p>
          <p>Made with 💗 · Cruelty-free & vegan</p>
        </div>
      </div>
    </footer>
  );
}
