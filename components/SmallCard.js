import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

export default function SmallCard({
  article,
}) {
  return (
    <div className="">
      <Link href={`/article/${article.slug}`}>
        {/* hover:scale-105 transition transform ease-out duration-200 */}
        <div className=" flex flex-col space-x-2 mb-2 p-1  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
          <div className="flex">
              <div className=" relative h-[99.5px] w-[149px] md:h-[149px] md:w-[248px]">
                <ArticleMainImage article={article} />
              </div>
            <div
              className="w-full ml-2"
            >
               <div className=" flex items-center   ">
             
                    <ArticleTags t={article.tags} tagsN={1} />
                    <div className="flex">
                      <span className="px-2 font-bold">👁️  {article.views}</span>
                    </div>
                  
                </div>
              <h2 className=" line-clamp-3  hover:text-red-700 md:text-2xl text-xl font-black">
                {article.title}
              </h2>
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
