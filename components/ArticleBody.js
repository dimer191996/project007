import React, { useState } from "react";
import Ads from "./Ads";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import ForYouArticles from "./ForYouArticles";
import InstagramEmbed from "./InstagramEmbed";
import { ArrowCircleDownIcon, ArrowCircleUpIcon, CursorClickIcon, LockOpenIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import Reactions from "./Reactions";

export default function ArticleBody({ article }) {
  const route = useRouter()
  const {next} = route.query
  console.log(next)
  
  return (
    <div className="px-4 md:px-0">
      <div className="mt-5">
        <div
          className="prose py-2  has-dropcap prose-xl mt-6  lg:prose-xl   prose-a:text-red-800"
          dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
        ></div>
       
       
        {article.related1 && <ForYouArticles slug={article.related1} />}

        <div className="relative ">
          {!next==1 && (
            <>
              <div
                id="Story-Continues"
                className=" h-[20%] bottom-0  absolute  w-full bg-gradient-to-t from-gray-100 opacity-95 "
              ></div>
              <div className="absolute -bottom-5 w-full ">
                <div className="flex justify-center">
                  <Link
                    href={'/article/'+article.slug+'?next=1#chapter-3'}
                    className=" cursor-pointer w-full"
                  >
                    <div className="py-2 cursor-pointer shadow-xl px-12 flex items-center space-x-4 justify-center bg-blue-700 text-white w-full rounded-lg text-2xl font-bold">
                      <CursorClickIcon className="h-6 animate-ping"/> <span>Keep reading</span> <ArrowCircleDownIcon className="h-6"/>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
          <div
            id="chapter-2"
            className="prose prose-xl py-2 mb-5  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
            dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
          ></div>
        </div>
        <section className={!next==1 ? " h-0 overflow-hidden": ""}>
            <>
              <div
                id="chapter-3"
                className="prose prose-xl py-2 mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
              ></div>
              <div
                id="chapter-4"
                className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
              ></div>
              <div
                id="chapter-4"
                className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }}
              ></div>
            </>
        </section>
     
        <Reactions article={article}/>
      </div>
    </div>
  );
}
