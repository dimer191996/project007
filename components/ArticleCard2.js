import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";

export default function ArticleCard2({ article, h, scroll }) {
  return (
    <div>
      <div className="relative w-full h-64 rounded-lg overflow-hidden   cursor-pointer ">
        <ArticleMainImage article={article} />
        <Link href={`/article/${article.slug}`}>
          <div className=" h-full w-full bg-gradient-to-t from-black opacity-80 "></div>
        </Link>

        <div className="absolute bottom-0 left-0 px-6 py-4">
          <h4 className=" font-semibold   uppercase text-green-100">
            {article.category}
          </h4>
          <Link href={`/article/${article.slug}`}>
            <h4
              className={`mb-2  ${
                !scroll ? "text-2xl" : ""
              } font-semibold tracking-tight text-white`}
            >
              {article.title}
            </h4>
          </Link>
          <div className=" gird grid-cols-2  mb-2 line-clamp-1 ">
            <ArticleTags t={article.tags} />
          </div>
        </div>
      </div>
    </div>
  );
}
