/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/tv/tlc",
        destination: "/reality-tv",
        permanent: true,
      },
      {
        source: "/reality-tv/tlc-&-90-day-fiance",
        destination: "/reality-tv",
        permanent: true,
      },
      {
        source: "/movies-and-entertainment/stories",
        destination: "/movies-and-entertainment",
        permanent: true,
      },
      {
        source: "/tv/tlc/90-day-fiance",
        destination: "/reality-tv",
        permanent: true,
      },
      {
        source: "/tv/tlc/90-day-fiance-happy-ever-after",
        destination: "/reality-tv",
        permanent: true,
      },
      {
        source: "/tv/tlc/90-day-fiance-spoilers",
        destination: "/reality-tv",
        permanent: true,
      },
      {
        source: "/stories",
        destination: "/movies-and-entertainment",
        permanent: true,
      },
      {
        source: "/movie-reviews",
        destination: "/movies-and-entertainment",
        permanent: true,
      },
      {
        source: "/hot/topics",
        destination: "/",
        permanent: true,
      },
    ];
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
      "cdn.buymeacoffee.com",
    ],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;

// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } = require("next/constants");

// // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
// module.exports = (phase) => {
//   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
//   // when `next build` or `npm run build` is used
//   const isProd =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
//   // when `next build` or `npm run build` is used
//   const isStaging =
//     phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

//   console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

//   const env = {
//     API_URL_LOCAL: (() => {
//       if (isDev) return "http://localhost:3020/api/";
//       if (isProd) {
//         return "https://blog-hot-article.herokuapp.com/api/";
//       }
//       if (isStaging) return "http://localhost:3020/api/";
//       return "RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)";
//     })(),
//   };

//   // next.config.js object
//   return {
//     env,
//   };
// };
