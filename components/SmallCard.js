import { ChevronDoubleRightIcon, GiftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";

export default function SmallCard({
  article,
  imgSize = "h-20 w-1/3 ",
  imgShow = true,
  showTitle = true,
}) {
  return (
    <Link href={`/article/${article.slug}`}>
      {/* hover:scale-105 transition transform ease-out duration-200 */}
      <div className=" flex flex-col space-x-2  my-2  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
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
            {" "}
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

        <div className=" flex items-center justify-center  my-1 pt-1 ">
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
  );
}
