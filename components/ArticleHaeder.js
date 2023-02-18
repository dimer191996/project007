import React from "react";
import ArticleTags from "./ArticleTags";
import ShareArticle from "./ShareArticle";
import YoutubeChannel from "./YoutubeChannel";

export default function ArticleHaeder({ article }) {
  return (
    <section className=" flex flex-col">
      <ShareArticle slug={article.slug} />
      <header className="flex p-3">
        <div className=" w-full ">
          <div className=" text-lg my-4 font-semibold">
            Category :
            <span itemprop="genre" className=" uppercase">
              {article.category}
            </span>
          </div>
          <h1 itemprop="headline" className="font-black text-4xl ">
            {article.title}
          </h1>
          <div className="my-5 flex items-center">
            <ArticleTags t={article.tags} />{" "}
          </div>
          <p
            itemprop="descrition"
            className=" font- text-xl text-gray-700  mb-5 "
          >
            {article.description}
          </p>
          {article.sanitizedHTML && (
            <YoutubeChannel title={article.title} video={article.video} />
          )}
        </div>
      </header>
    </section>
  );
}
