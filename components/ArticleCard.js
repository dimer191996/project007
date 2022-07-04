import Image from "next/image";
import React from "react";

import Link from "next/link";
import ArticleTags from "./ArticleTags";
import ArticleMainImage from "./ArticleMainImage";
import moment from "moment";

export default function ArticleCard({
  article,
  h = 64,
  textSize = "text-2xl",
}) {
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };
  return (
    <div className=" cursor-pointer   mb-4  ">
      <div
        className={` relative w-auto h-${h}  bg-gray-100  hover:shadow-md  overflow-hidden`}
      >
        <Link href={`/article/${article.slug}`}>
          <div>
            <ArticleMainImage article={article} />
          </div>
        </Link>
      </div>
      <div className="  overflow-hidden pt-4  flex flex-col justify-center">
        {/* <div className=" gird grid-cols-2  mb-2 line-clamp-1 ">
          <ArticleTags t={article.tags} />
        </div> */}
        {/* <Link href={`/article/${article.slug}`}>
          <p className=" text-sm  leading-6  mb-2  line-clamp-1">
            By <span className=" font-bold">{article.author} </span>published
            about{" "}
            <span className=" font-bold">{cleanDate(article.createdAt)}</span>
          </p>
        </Link> */}
        <Link href={`/article/${article.slug}`}>
          <p
            className={`line-clamp-3 leading-7 mb-2 hover:text-red-600 text-red-800 font-bold ${textSize}`}
          >
            {article.title}
          </p>
        </Link>{" "}
      </div>
    </div>
  );
}
