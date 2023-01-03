//pages/server-sitemap-index.xml/index.js
import axios from "axios";
import { getServerSideSitemapIndex ,getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const data = await axios(`${'https://www.hotseatmag.com/api'}/articles`).then(({data})=>{
    return data
  });
  const fields = data.map((item) => ({
    loc: `${"https://www.hotseatmag.com/article"}/${item.slug}`,
    lastmod: item.updatedAt,
    priority: 0.7,
    changefreq: "daily",
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {}