import React from "react";
import ArticleTags from "./ArticleTags";
import ShareArticle from "./ShareArticle";
import YoutubeChannel from "./YoutubeChannel";
import ArticleMainImage from "./ArticleMainImage";

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
          <div className=" md:flex justify-center md:p-2">
          <div className="relative h-[30rem] w-full ">
            <a href={article.image}>
              <ArticleMainImage article={article} />
            </a>
          </div>
        </div> 
          <h1 itemprop="headline" className="font-black text-4xl ">
            {article.title}
          </h1>
          <div className="my-5 flex items-center">
            <ArticleTags t={article.tags} />{" "}
          </div>
          <p
            itemprop="descrition"
            className=" font- text-xl text-gray-700  "
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
