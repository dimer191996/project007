import { ArticleJsonLd, NextSeo } from "next-seo";

let conanical = (category) => {
  switch (category) {
    case "tv":
      return "reality-tv";
    case "happyEverAfter":
      return "reality-tv/tlc-&-90-day-fiance/happily-ever-after";
    case "spoilers":
      return "reality-tv/tlc-&-90-day-fiance/spoilers";
    case "movie-review":
      return "movies-and-entertainment/movies";
    case "truecrime":
      return "movies-and-entertainment/true-crime";
    case "short":
      return "movies-and-entertainment/stories";
    default:
      return "";
      break;
  }
};
const SeoArticle = ({ article, children }) => (
  <>
    <NextSeo
      title={article.title}
      titleTemplate={article.title}
      defaultTitle={article.title}
      description={article.description}
      canonical={`https://www.hotseatmag.com/${conanical(article.category)}`}
      openGraph={{
        title: article.title,
        description: article.description,
        url: `https://www.hotseatmag.com/article/${article.slug}`,
        type: "article",
        article: {
          publishedTime: article.createdAt,
          // modifiedTime: "2018-01-21T18:04:43Z",
          // expirationTime: "2022-12-21T22:04:11Z",
          // section: "Section II",
          authors: [
            `https://www.hotseatmag.com/author/${article.author
              .trim()
              .replace(" ", "-")}`,
          ],
          tags: [`90 Day Fiance : ${article.category}`],
        },
        images: [
          {
            url: article.image,
            width: 850,
            height: 650,
            alt: article.description,
          },
        ],
      }}
    />

    {children}
  </>
);

export default SeoArticle;
