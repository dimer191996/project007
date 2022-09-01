import { NextSeo } from "next-seo";

let conanical = (category) => {
  switch (category) {
    case "tv":
      return "reality-tv";
    case "movie-review":
      return "movies-and-entertainment";
    case "truecrime":
      return "movies-and-entertainment";
    case "short":
      return "movies-and-entertainment";
    default:
      return "";
  }
};

const SeoPage = ({ article, hearder, category, description, children }) => (
  <>
    <NextSeo
      title={hearder}
      titleTemplate={hearder}
      defaultTitle={article?.title}
      description={description}
      canonical={`https://www.hotseatmag.com/`}
      openGraph={{
        title: article?.title,
        description: article?.description,
        url: `https://www.hotseatmag.com/article/${article?.slug}`,
        type: "article",
        article: {
          publishedTime: article?.createdAt,
          // modifiedTime: "2018-01-21T18:04:43Z",
          // expirationTime: "2022-12-21T22:04:11Z",
          // section: "Section II",
          authors: [
            `https://www.hotseatmag.com/author/${article?.author
              .trim()
              .replace(/ /g, "-")}`,
          ],
          tags: [`${article?.tags}, + ${category} `],
        },
        images: [
          {
            url: article?.image,
            width: 800,
            height: 600,
            alt: article?.description,
          },
        ],
      }}
    />
    {children}
  </>
);

export default SeoPage;
