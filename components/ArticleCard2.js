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
          <span className="font-semibold text-xs  uppercase text-green-100">
            By {article?.author}
          </span>
         
        </div>
      </div>

      <Link href={`/article/${article.slug}`}>
        <p
          className={`mt-4 mb-2 h-16  ${!scroll ? "text-3xl" : ""
            } font-black line-clamp-2 tracking-tight text-gray-900`}
        >
          {article?.title}
        </p>
      </Link>
      <p className=" text-2xl text-gray-600 h-24 line-clamp-3 ">{article?.description}</p>
    </div>
  );
}
