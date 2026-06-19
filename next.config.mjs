/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/<repo>/ — so assets need that "/<repo>" prefix.
// The deploy workflow sets PAGES_BASE_PATH to "/<repo>" automatically.
// Locally it's empty, so `npm run dev` keeps working at "/".
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export", // generate a static `out/` folder (works on GitHub Pages)
  trailingSlash: true, // makes /about -> /about/index.html so Pages serves it
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // GitHub Pages has no image-optimization server, so serve images as-is.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cf.shopee.ph" },
      { protocol: "https", hostname: "down-ph.img.susercontent.com" },
    ],
  },
};

export default nextConfig;
