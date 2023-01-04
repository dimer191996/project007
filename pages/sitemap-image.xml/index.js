//pages/server-sitemap-index.xml/index.js
import axios from "axios";
import { getServerSideSitemapIndex, getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const data = await axios(`${'https://www.hotseatmag.com/api'}/articles`).then(({ data }) => {
    return data
  });
  const fields = data.map((item) => {
    const slug = item.slug
    const updatedAt = item.updatedAt
    const image = item.image
    return {
      loc: `${"https://www.hotseatmag.com/article"}/${slug}`,
      lastmod: updatedAt,
      "image:image":
        `<image:loc>${image.replace(/&/g, "&amp;")}</image:loc>`
      ,
    }
  });
  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() { }