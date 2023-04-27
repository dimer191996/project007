import React from "react";
import ArticleTags from "./ArticleTags";
import ShareArticle from "./ShareArticle";
import YoutubeChannel from "./YoutubeChannel";
import ArticleMainImage from "./ArticleMainImage";

export default function ArticleHaeder({ article }) {
  return (
    <section className=" flex flex-col my-3">
      <header className="flex">
        <div className=" w-full ">
          <div className=" md:flex justify-center">
          <div className="relative h-[25rem] w-[25rem] ">
            <a href={article.image}>
              <ArticleMainImage article={article} />
            </a>
          </div>
        </div> 
        </div>
      </header>
    </section>
  );
}
