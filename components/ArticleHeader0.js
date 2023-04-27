import React from "react";
import YoutubeChannel from "./YoutubeChannel";
import ArticleTags from "./ArticleTags";
import ArticleMainImage from "./ArticleMainImage";
import Link from "next/link";

export default function ArticleHeader0({ article }) {
  return (
    <div className="px-3">
      <div className=" text-lg my-4 font-semibold">
        <Link
          href={
            article.category === "tv" ? "/reality-tv" : "/" + article.category
          }
        >
          <span itemprop="genre" className=" uppercase underline">
            {article.category}
          </span>
        </Link>
      </div>
      <h1 itemprop="headline" className="font-black text-4xl ">
        {article.title}
      </h1>
      <div className="my-5 flex items-center">
        <ArticleTags t={article.tags} />{" "}
      </div>
      <p itemprop="descrition" className=" font- text-xl text-gray-700  ">
        {article.description}
      </p>
      <div className="relative h-[25rem] w-full rounded overflow-hidden shadow ">
        <a href={article.image}>
          <ArticleMainImage article={article} />
        </a>
      </div>
    </div>
  );
}
