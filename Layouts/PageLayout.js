import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import ArticleCard2 from "../components/ArticleCard2";
import ArticlesSection from "../components/ArticlesSection";
import SeoPage from "../components/SeoPage";

export default function PageLayout({
  articles,
  topics,
  hearder,
  pageDescription,
  category,
}) {
  return (
    <SeoPage
      description={pageDescription}
      article={articles[0]}
      hearder={hearder}
      category={category}
    >
      <div className=" md:flex border-b justify-center py-5 ">
        <div className=" w-full lg:w-2/3 mx-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            {articles?.slice(0, 4).map((data) => (
              <ArticleCard2 h={96} article={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className=" lg:w-1/2 md:w-4/5 px-4 border-b">
          <div className="  grid md:grid-cols-2 py-6 space-x-4  sm:space-y-2 md:space-x-0 ">
            {articles.slice(4, 6)?.map((data) => (
              <ArticleCard key={data._id} article={data} />
            ))}
          </div>

          <div className=" separator">Ads</div>
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

          <hearder className=" border-t  flex    flex-col items-center">
            <div className=" my-5  py-2">
              <h2 className=" px-4 font-bold text-2xl  text-center">
                {hearder}
              </h2>
              <div className="px-4 flex items-center justify-center font-semibold text-md my-5 text-center">
                <p className=" ">{pageDescription}</p>
              </div>
            </div>
          </hearder>

          <div className="my-5">
            <div className=" separator text-left">
              <h1 className=" text-4xl font-bold">Latest</h1>
            </div>
          </div>
          <ArticlesSection articles={articles?.slice(6, 10)} />

          {articles.length > 15 && (
            <ArticlesSection articles={articles?.slice(10, 16)} />
          )}

          {articles.length > 20 && (
            <ArticlesSection articles={articles?.slice(16, 22)} />
          )}

          {articles.length > 26 && (
            <ArticlesSection articles={articles?.slice(21, 27)} />
          )}

          {articles.length > 39 && (
            <ArticlesSection articles={articles?.slice(27, 40)} />
          )}
        </div>
      </div>
    </SeoPage>
  );
}
