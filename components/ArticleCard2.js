import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";

export default function ArticleCard2({ article, h = "h-64", scroll }) {
  return (
    <div className={` overflow-hidden  cursor-pointer `}>
      <div className={`relative ${h} w-full`}>
        <ArticleMainImage article={article} />
        <Link href={`/article/${article.slug}`}>
          <div className=" h-full w-full bg-gradient-to-t from-black opacity-95 "></div>
        </Link>

        <div className="absolute bottom-0 left-0 px-6 py-4">
          <h4 className=" font-semibold text-xs  uppercase text-green-100">
            By {article.author}
          </h4>
          <Link href={`/article/${article.slug}`}>
            <h2
              className={`mb-2  ${
                !scroll ? "text-2xl" : ""
              } font-black line-clamp-4 tracking-tight text-gray-200`}
            >
              {article.title}
            </h2>
          </Link>
          <div className=" gird grid-cols-2  mb-2 line-clamp-1 ">
            <ArticleTags t={article.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
