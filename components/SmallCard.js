import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

export default function SmallCard({
  article, showIMG=true
}) {
  return (
    <div className="">
      <Link href={`/article/${article.slug}`}>
        {/* hover:scale-105 transition transform ease-out duration-200 */}
        <div className=" flex flex-col  mb-2 p-1  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
          <div className="flex">
              {showIMG &&<div className=" relative h-[99.5px] w-1/3 md:h-[149px] md:w-[248px]">
                <ArticleMainImage article={article} />
              </div>}
            <div
              className={` ${ !showIMG ? "w-full mx-1":"w-2/3 ml-2" }`}
            >
                <div className=" flex items-center line-clamp-1   ">
                    <ArticleTags t={article.tags} tagsN={1} />                  
                </div>
              <span className=" line-clamp-3  hover:text-red-700 md:text-2xl text-lg font-black">
                {article.title}
              </span>
              <div className="hidden md:flex">
              <p className=" hidden text-gray-600  line-clamp-3 ">{article.description}</p>
              </div>
             
            </div>
          </div>

        </div>
      </Link>
      <div class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>



    </div>
  );
}
