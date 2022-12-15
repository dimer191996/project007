import { NextSeo } from "next-seo";
import Head from "next/head";


const SeoPage = ({ article, hearder, category, tags, description, children }) => (


  <>
<Head>
          <title>{tags?.map((el) => (`${el.split("-")} , `))}</title>
          <meta name="description" content={article?.description}/>
          <meta name="keywords" content={tags?.map((el) => (`${el.split("-")} , `))}/>
          <meta name="article:tag" content={tags?.map((el) =>(`${el.split("-")} , `))} />
          <meta name="author" content={article?.author}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="canonical" href={`https://www.hotseatmag.com/article/${article?.slug}`}/>
          <meta property="og:type" content="article"/>
          <meta property="og:title" content={article?.title}/>
          <meta property="og:description" content={article?.description}/>
          <meta property="og:url" content={`https://www.hotseatmag.com/article/${article?.slug}`}/>
          <meta property="og:image" content={article?.image}/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content={article?.title}/>
          <meta name="twitter:description" content={article?.description}/>
          <meta name="twitter:image" content={article?.image}/>
          <meta name="robots" content="index,follow"/>
          <meta name="googlebot" content="index,follow"/>
          <meta name="referrer" content="origin"/>
          <meta name="language" content="en"/>
          <meta name="copyright" content={`Copyright ${article?.author}`}/>
          <meta name="rating" content="general"/>
</Head>
    {children}
  </>
);

export default SeoPage;
