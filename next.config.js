/** @type {import('next').NextConfig} */

// next.config.js

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

    //domains: ['github.com', 'i.ibb.co', 'user-images.githubusercontent.com', 'cdn.discordapp.com', 'prozcash.ru', 'i.seadn.io', 'sea2.discourse-cdn.com', 'pbs.twimg.com', 'free2z.cash', 'images.app.goo.gl'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// Merge MDX config with Next.js config
module.exports = withBundleAnalyzer(withMDX(nextConfig));
