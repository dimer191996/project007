//pages/server-sitemap-index.xml/index.js
import axios from "axios";
import { getServerSideSitemapIndex, getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
    const data = await axios(`${'https://www.hotseatmag.com/api'}/articles`).then(({ data }) => {
        return data
    });
    const fields = data.map((item) => {
        const slug = item.slug
        const createdAt = item.createdAt
        const title = item.title
        return {
            loc: `${"https://www.hotseatmag.com/article"}/${slug}`,
            priority: 0.7,
            changefreq: "daily",
            "news:news":
                `<news:publication>
                    <news:name>Hot Seat Magazine</news:name>
                    <news:language>en</news:language>
                </news:publication>
                <news:publication_date>${createdAt}</news:publication_date>
                <news:title>${title.replace(/&/g, "&amp;")}</news:title>`
            ,
        }
    });
    return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() { }