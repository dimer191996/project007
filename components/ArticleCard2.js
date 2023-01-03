import { LinkIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";

export default function ArticleCard2({ article, h = "h-64", scroll }) {
  return (
    <div className={` overflow-hidden mt-5 cursor-pointer `}>
      <div className={`relative ${h} w-full`}>
      <ArticleMainImage article={article} />
        <Link href={`/article/${article.slug}`}>
          <div className=" h-[100%]   w-full bg-gradient-to-t from-black opacity-95 "></div>
        </Link>

        <div className="absolute bottom-0 left-0 px-6">
          <h3 className="font-semibold text-xs  uppercase text-green-100">
            By {article?.author}
          </h3>
         
        </div>
      </div>

      <Link href={`/article/${article.slug}`}>
        <h2
          className={`mt-4 mb-2  ${!scroll ? "text-3xl" : ""
            } font-black line-clamp-3 tracking-tight text-gray-900`}
        >
          {article?.title}
        </h2>
      </Link>
      <p className=" text-2xl text-gray-600 h-24 line-clamp-3 ">{article?.description}</p>
    </div>
  );
}
