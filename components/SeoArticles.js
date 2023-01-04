import { NewsArticleJsonLd , NextSeo } from "next-seo";

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
    <NewsArticleJsonLd
      url={"https://hotseatmag.com/article/"+article.slug}
      title={article.title}
      images={[
        article.image,
        article.image1,
        article.image2
      ]}
      section={article.category}
      keywords={article.tags}
      datePublished={article.createdAt}
      dateModified={article.updatedAt}
      authorName={article.author}
      publisherName="Dime Bwimba"
      publisherLogo="https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png"
      description={article.description}
      body={article.sanitizedHTML + article.sanitizedHTML1 + article.sanitizedHTML2 + article.sanitizedHTML+article.sanitizedHTML3 + article.sanitizedHTML4}
      isAccessibleForFree={true}
    />
    <NextSeo
      title={article.title}
      titleTemplate={article.title}
      defaultTitle={article.title}
      description={article.description}
      canonical={`https://www.hotseatmag.com`}
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
          tags: [article?.tags.split('-') ],
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
