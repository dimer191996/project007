import Image from "next/image";
import React from "react";

import Link from "next/link";
import ArticleTags from "./ArticleTags";
import ArticleMainImage from "./ArticleMainImage";

export default function ArticleCard({ article }) {
  return (
    <div className=" cursor-pointer   mb-4  ">
      <div className=" relative w-auto h-64  bg-gray-100  hover:shadow-md shadow overflow-hidden">
        <Link href={`/article/${article.slug}`}>
          <div>
            <ArticleMainImage article={article} />
          </div>
        </Link>
      </div>
      <div className="  overflow-hidden pt-4  flex flex-col justify-center">
        <div className=" gird grid-cols-2  mb-2 line-clamp-1 ">
          <ArticleTags t={article.tags} />
        </div>
        <Link href={`/article/${article.slug}`}>
          <p className="  line-clamp-2 leading-7 mb-2 hover:text-red-600 text-red-800 font-bold text-2xl">
            {article.title}
          </p>
        </Link>{" "}
        <Link href={`/article/${article.slug}`}>
          <p className="text-lg md:text-md font-semibold hover:text-gray-600  leading-6   line-clamp-3">
            {article.description}
          </p>
        </Link>
      </div>
    </div>
  );
}
