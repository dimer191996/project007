import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import MoreArticles from "../../components/MoreArticles";
import SeoArticle from "../../components/SeoArticles";
import ShareArticle from "../../components/ShareArticle";
import YoutubeChannel from "../../components/YoutubeChannel";
import WithScreen from "../../Layouts/WithScreen";
import ArticleMainImage from "../../components/ArticleMainImage";
import ArticleTags from "../../components/ArticleTags";
import ForYouArticles from "../../components/ForYouArticles";
import InstagramEmbed from "../../components/InstagramEmbed";
import TableOfContent from "../../components/TOC";
import Reactions from "../../components/Reactions";

export async function getServerSideProps({ params }) {
  const article = await axios
    .get(`${"https://www.hotseatmag.com/api/articles/article/"}${params.slug}`, {
      timeout: 10000,
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
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };

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
        <div className="lg:mx-12  relative md:mx-0  sm:ml-0 ">
          <section className=" flex flex-col">
            <ShareArticle slug={article.slug} />
            <header className="flex p-3">
              <div className=" w-full ">
                <div className=" text-lg my-4 font-semibold">
                  Category :
                  <span itemprop="genre" className=" uppercase"> {article.category}</span>
                </div>
                <h1 itemprop="headline" className="font-black text-4xl ">{article.title}</h1>
                <div className="my-5 flex items-center">
                  <ArticleTags t={article.tags} />{" "}
                </div>
                <p itemprop="descrition" className=" font- text-xl text-gray-700  mb-5 ">
                  {article.description}
                </p>
                {article.sanitizedHTML && (
                  <YoutubeChannel title={article.title} video={article.video} />
                )}
              </div>
            </header>
          </section>

          <section>
            <div className=" px-3">
              <div className=" my-5 flex gap-y-2 gap-x-2">
                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  🐻 Views :{" "}
                  <span className=" px-2  font-bold">{article.views}</span>
                </div>

                <div className="bg-red-800 flex p-1 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-500 ease-out px-2">
                  🌻 Shares :{" "}
                  <span className=" px-2  font-bold">{article.shares}</span>
                </div>
              </div>
            </div>

            <div className=" md:flex justify-center md:p-2">
              <div className="relative h-[20rem] w-full ">
                <a href={article.image}>
                  <ArticleMainImage article={article} />
                </a>
              </div>
            </div>
           
            <div className=" px-4 flex bg-white flex-row items-center justify-between ">
              <div className="flex flex-col   py-2 ">
                <div className="  leading-4  font-semibold flex-grow">
                  <i itemprop="name" className=" md:text-lg text-md">By {article.author}</i>
                </div>
                <div className="  leading-4  flex-grow">
                  <i className="">{cleanDate(article.createdAt)}</i>
                </div>
              </div>
              <div></div>
              <div>
                <div className=" text-sm font-bold">3 min Read</div>
              </div>
            </div>
          </section>
        
         
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              textAlign: "center",
              overflow: "hidden",
              backgroundColor: "#eeee",
            }}
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="3538660225"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <div className="separator my-3"></div>
          <TableOfContent/>
          
          <div className="px-4 md:px-0">
            <div className="mt-5">
              <div
                className="prose py-2  has-dropcap prose-xl mt-6  lg:prose-xl   prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
              ></div>
              <div className="separator"></div>
              <ins
                className="adsbygoogle"
                style={{
                  display: "block",
                  textAlign: "center",
                  overflow: "hidden",
                  backgroundColor: "#eeee",
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="2168142036"
                data-full-width-responsive="true"
              ></ins>
              <div className="separator"></div>
              <div
                id="chapter-1"
                className="prose prose-xl py-2   lg:prose-xl first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
              ></div>
              <div className="separator"></div>

              {article.related1 && <ForYouArticles slug={article.related1} />}

              <div
                id="chapter-2"
                className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
              ></div>
              {!!article.video1 ? (
                <InstagramEmbed
                  instagramContent={
                    article.video1
                      ? `https://www.instagram.com/reel/${article.video1}/?utm_source=ig_embed&amp;utm_campaign=loading`
                      : "https://web.facebook.com/groups/1118449878512007"
                  }
                />
              ) : (
                <ins
                className="adsbygoogle"
                style={{
                  display: "block",
                  textAlign: "center",
                  overflow: "hidden",
                  backgroundColor: "#eeee",
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="2168142036"
                data-full-width-responsive="true"
              ></ins>
              )}
              <div
                id="chapter-3"
                className="prose prose-xl py-2 mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
              ></div>

              <div className="separator"></div>
              <ins
                className="adsbygoogle"
                style={{
                  display: "block",
                  textAlign: "center",
                  overflow: "hidden",
                  backgroundColor: "#eeee",
                }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-4491397756399283"
                data-ad-slot="2168142036"
                data-full-width-responsive="true"
              ></ins>
              <div className="separator"></div>

              <div
                id="#chapter-4"
                className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }}
              ></div>
              <div className=" flex items-center my-5">
                <span className=" font-bold pr-3">Tags : </span>
                <ArticleTags t={article.tags} />{" "}
              </div>
              {/* <div className="separator"></div>
              <Reactions article={article}/> */}
              <div id="comment" className=" border-b my-5">
                <div className=" font-bold ">
                  <div
                    className="fb-comments"
                    data-href={`https://www.hotseatmag.com/article/${article.slug}`}
                    data-numposts="5"
                    data-width="100%"
                    data-height="20px"
                    data-colorscheme="light"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className=" space-y-2">
                <p className=" text-3xl font-bold">
                  Not sure what to read next ?
                  {article.related2 && <ForYouArticles slug={article.related2} />}
                </p>
              </div>
            
            </div>
          </div>

        </div>
      </WithScreen>
      <MoreArticles category={article.category} />


    </SeoArticle>
  );
};

export default Post;
