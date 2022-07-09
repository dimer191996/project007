import fs from "fs";
import axios from "axios";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.hotseatmag.com";
  const nothing = "hello world";

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "api",
        "500.js",
        "404.js",
        "article",
        "index.js",
        "tag",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".js", "")}`;
    });

  const data = await axios
    .get("https://hot-app.herokuapp.com/api")
    .then(({ data }) => {
      return data;
    });
  const documents = data?.articles || [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
       ${documents.map(({ slug, image }) => {
         return ` <url>
          <loc>${baseUrl}/article/${slug}</loc>
          <image:image>
            <image:loc>${image
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;")}</image:loc>
          </image:image>
        </url>`;
       })}
    
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
