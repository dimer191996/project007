import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import MoreArticles from "../../components/MoreArticles";
import SeoArticle from "../../components/SeoArticles";
import ShareArticle from "../../components/ShareArticle";
import YoutubeChannel from "../../components/YoutubeChannel";
import WithScreen from "../../Layouts/WithScreen";
import ArticleMainImage from "../../components/ArticleMainImage";
import Link from "next/link";
import ArticleTags from "../../components/ArticleTags";
import ForYouArticles from "../../components/ForYouArticles";
import InstagramEmbed from "../../components/InstagramEmbed";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";

export async function getServerSideProps({ params }) {
  
  const article = await axios
    .get(`${"https://hot-data.herokuapp.com/api/"}article/` + params.slug, {
      timeout: 10000,
    })
    .then((res) => res.data.article)
    .catch(({ err }) => console.log(err));

  if (!article) {
    return {
      notfound: true,
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
  const tagsEl = () => {
    return tagsArray.map((el) => (
      <Link href={`/tag/${el}`}>
        <span className="px-2 cursor-pointer underline text-cyan-600">
          #{el.split("-")}
        </span>
      </Link>
    ));
  };

  const [showArticle, setShowArticle] = useState(false);
  const [timer , setTimer ] = useState();

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
    <SeoArticle article={article}>
 
      <WithScreen width=" relative w-full  lg:w-[45%] md:w-[55%] ">
        <div className="lg:mx-12  relative md:mx-0  sm:ml-0 ">
          <ShareArticle slug={article.slug} />
          <section className=" flex flex-col">
            <header className="flex p-3">
              <div className=" w-full ">
                <div className=" text-lg my-4 font-semibold">
                  Category :
                  <span className=" uppercase"> {article.category}</span>
                </div>
                <h1 className="font-black text-4xl ">{article.title}</h1>
                <div className="my-5 flex items-center">
                  <ArticleTags t={article.tags} />{" "}
                </div>
                <h2 className=" font- text-xl text-gray-700  mb-5 ">
                  {article.description}
                </h2>
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
                <ArticleMainImage article={article} />
              </div>
            </div>

            <div className=" px-4 flex bg-white flex-row items-center justify-between ">
              <div className="flex flex-col   py-2 ">
                <div className="  leading-4  font-semibold flex-grow">
                  <h3 className=" md:text-lg text-md">By {article.author}</h3>
                </div>
                <div className="  leading-4  flex-grow">
                  <h3 className="">{cleanDate(article.createdAt)}</h3>
                </div>
              </div>
              <div></div>
              <div>
                <div className=" text-sm font-bold">3 min Read</div>
              </div>
            </div>
          </section>
          <div className="separator"></div>
          <ins
            class="adsbygoogle"
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
     
          <div className="separator"></div>

          
            <section className="px-4 md:px-0">
              <div className="mt-5">
                <div
                  className="prose py-2  has-dropcap prose-xl mt-6  lg:prose-xl   prose-a:text-red-800"
                  dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
                ></div>
                <div className="separator"></div>

                <ins
                  class="adsbygoogle"
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
                <div className="separator"></div>
                <div
                  id="chapter-1"
                  className="prose prose-xl py-2   lg:prose-xl first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
                  dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
                ></div>
                <div className="separator"></div>

                {article.category !== "howto" && <ForYouArticles />}

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
                  <div>
                    <div className="separator"></div>
                    <ins
                      class="adsbygoogle"
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
                    <div className="separator"></div>
                  </div>
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
                <div id="comment" className=" border-t border-b my-5">
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
              <section>
                <div className=" space-y-2">
                  <p className=" text-3xl font-bold">
                    Not sure what to read next ?
                  </p>
                  <p className=" text-lg">We can help.</p>
                </div>
              </section>
            </section>
       
        
        </div>
        <section>
          <MoreArticles category={article.category} />
        </section>
        {!showArticle ? (
        <>
          <div className=" flex my-5 justify-center relative items-center">
          <div className="text-center text-white absolute font-bold">
           {"Wait for the Code "} - {timer}
          </div>
            <progress className="w-full " value="0" max="50" id="progressBar"></progress>
          </div>
        </>
      ):<p className="text-center">BXDRDDRTVVBGD</p>}
      </WithScreen>
    </SeoArticle>
  );
};

export default Post;
