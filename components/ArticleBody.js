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
import YoutubeChannel from "./YoutubeChannel";

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
                        <div
            id="chapter-2"
            className="prose prose-xl py-2 mb-5  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
            dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
          ></div>
        </div>
        <section>
            <>
              <div
                id="chapter-3"
                className="prose prose-xl py-2 mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
              ></div>
              <Ads/>
              <div
                id="chapter-4"
                className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
                dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
              ></div>
   {article.sanitizedHTML && (
            <YoutubeChannel title={article.title} video={article.video} />
          )}
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
