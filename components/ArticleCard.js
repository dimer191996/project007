import Image from "next/image";
import React from "react";

import Link from "next/link";
import ArticleTags from "./ArticleTags";
import ArticleMainImage from "./ArticleMainImage";
import moment from "moment";
import { GiftIcon } from "@heroicons/react/solid";

export default function ArticleCard({
  article,
  h = 64,
  textSize = "text-3xl",
}) {
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };
  return (
    <div className=" cursor-pointer   mb-4  ">
      <div className="  overflow-hidden pt-4  flex flex-col justify-center">
        <div className=" gird grid-cols-2  mb-2 line-clamp-1 ">
          <ArticleTags t={article.tags} />
        </div>
        <Link href={`/article/${article.slug}`}>
          <div className="">

            <Link href={`/article/${article.slug}`}>
              <p
                className={`  ${!scroll ? "text-4xl" : "text-3xl"
                  } font-black line-clamp-2 tracking-tight text-gray-900`}
              >
                {article.title}
              </p>
            </Link>
          </div>
        </Link>{" "}

        <p className=" text-2xl text-gray-600 h-24 line-clamp-3 ">{article.description}</p>
      </div>
    </div>
  );
}
