/** @type {import('next').NextConfig} */

const fs = require("fs");

const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    zergnet: fs.readFileSync("./zergnet.js").toString(),
    popsads: fs.readFileSync("./popsads.js").toString(),
    propellerads : fs.readFileSync("./propellerads.js").toString(),
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
  
    domains: [
      "links.papareact.com",
      "res.cloudinary.com",
      "i.imgur.com",
      "static1.srcdn.com",
      "static0.srcdn.com",
      "i.redd.it",
      "imgur.com",
      "en.memesrandom.com",
      "i.ibb.co",
      "iili.io",
      "cdn.buymeacoffee.com",
    ],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
