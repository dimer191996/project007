import { ChevronDoubleRightIcon, GiftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import moment  from 'moment';

export default function SmallCard({
  article,
  imgSize = "h-20 w-1/3 ",
  imgShow = true,
  showTitle = true,
}) {
  return (
    <li  class="mb-10 ml-4">
    <Link href={`/article/${article.slug}`}>
      {/* hover:scale-105 transition transform ease-out duration-200 */}
      <div className=" flex flex-col space-x-2 mb-2 p-1  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
        <div className={`${imgShow ? "flex" : ""}  p-1 `}>
          {imgShow && (
            <div className={"relative " + imgSize}>
              <ArticleMainImage article={article} />
            </div>
          )}

          <div
            className={` ${
              imgShow && "w-4/5"
            } flex flex-col  pl-2 leading-tight`}
          >
          
            <h2 className=" line-clamp-4 hover:text-red-700 text-2xl font-black">
              {article.title}
            </h2>{" "}
            <div className=" flex items-center line-clamp-1  ">
              {article.category === "howto" ? (
                <div className=" flex items-center justify-start">
                  <GiftIcon className="h-8 text-green-600" />
                  <ArticleTags t={article.tags} />
                </div>
              ) : (
                <ArticleTags t={article.tags} />
              )}
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center  pt-1 ">
          {showTitle && (
            <div className="  leading-4 text-sm font-semibold flex-grow">
              <h2 className=" text-[14px]">By {article.author}</h2>
            </div>
          )}

          {showTitle && (
            <div className=" border mt-2  px-2 rounded-md">
              <h3 className="font-bold  text-sm flex items-center">
                <span>{"Read More"}</span>{" "}
                <ChevronDoubleRightIcon className=" h-5" />{" "}
              </h3>
            </div>
          )}
        </div>
      </div>
    </Link>
    <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

    <p class="mb-4 text-base bg-gray-50 rounded-lg p-2  border-b font-normal text-gray-500 dark:text-gray-400">
      
      <span className=" line-clamp-2">{article.description}</span>
      
    </p>

    </li>
  );
}
