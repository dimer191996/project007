import { useEffect, useState } from "react";
import axios from "axios";
import MoreArticles from "../../components/MoreArticles";
import SeoArticle from "../../components/SeoArticles";
import WithScreen from "../../Layouts/WithScreen";
import TableOfContent from "../../components/TOC";
import CategoriesTitle from "../../components/CategoriesTitle";
import MoreRelatedArticles from "../../components/MoreRelatedArticles";
import ArticleHaeder from "../../components/ArticleHaeder";
import ArticleHeader2 from "../../components/ArticleHeader2";
import ArticleBody from "../../components/ArticleBody";
import Ads from "../../components/Ads";
import ShareArticle from "../../components/ShareArticle";
import ArticleHeader0 from "../../components/ArticleHeader0";

export async function getServerSideProps({ params }) {
  const article = await axios
    .get(`${"https://www.hotseatmag.com/api/articles/article/"}${params.slug}`, {
      timeout: 5000,
    })
    .then((res) => res.data.article)
    .catch(({ err }) => console.log(err));

  if (!article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article: article || null,
    },
  };
}

const Post = ({ article }) => {

  const tags = article.tags;
  const tagsArray = tags.split(" , ");


  const [showArticle, setShowArticle] = useState(false);
  const [timer, setTimer] = useState();

  useEffect(() => {

    const timeleft = 50;
    const downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        setShowArticle(true);
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar")?.value = 50 - timeleft;
      timeleft -= 1;
      setTimer(timeleft)
    }, 2000);


  }, [])

  return (
    <SeoArticle article={article} tags={tagsArray} category={article.category}>
      <WithScreen width=" relative w-full  lg:w-[45%] md:w-[55%] ">
        <ArticleHeader0 article={article}/>
      </WithScreen>    
      <WithScreen width=" relative w-full  lg:w-[45%] md:w-[55%] ">
        <ShareArticle slug={article.slug} />
        <div className="lg:mx-12  relative md:mx-0  sm:ml-0 ">
         
         <Ads/>
         <ArticleHeader2 article={article}/>         
          
          <TableOfContent/>
          <ArticleBody article={article}/>
          
        </div>
      </WithScreen>
      <WithScreen width=" relative w-full  lg:w-[48%] md:w-[55%] ">

      <CategoriesTitle title={`Related Posts`}/>
          <MoreRelatedArticles currentArticle={article.title} tags={tags}/>
        </WithScreen>
      
    </SeoArticle>
  );
};

export default Post;
