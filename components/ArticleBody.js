import React, { useState } from "react";
import Ads from "./Ads";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import ForYouArticles from "./ForYouArticles";
import InstagramEmbed from "./InstagramEmbed";
import { CursorClickIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

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
       
        <div className="separator"></div>
        {article.related1 && <ForYouArticles slug={article.related1} />}

        {!!article.video1 ? (
          <InstagramEmbed
            instagramContent={
              article.video1
                ? `https://www.instagram.com/reel/${article.video1}/?utm_source=ig_embed&amp;utm_campaign=loading`
                : "https://web.facebook.com/groups/1118449878512007"
            }
          />
        ) : (
          <Ads />
        )}
        <div className="relative ">
          {!next==1 && (
            <>
              <div
                id="Story Continues mt-5"
                className=" h-[20%] bottom-0  absolute  w-full bg-gradient-to-t from-gray-100 opacity-95 "
              ></div>
              <div className="absolute -bottom-5 w-full ">
                <div className="flex justify-center">
                  <Link
                    href={'/article/'+article.slug+'?next=1'}
                    className=" cursor-pointer"
                  >
                    <div className="py-2 cursor-pointer shadow-xl px-12 flex items-center space-x-4 justify-center bg-blue-700 text-white w-full rounded-lg text-2xl font-bold">
                      <CursorClickIcon className="h-6"/> <span>Keep reading 📖</span>
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
          <div id="comment" className=" border-b my-5">
            <div className=" font-bold ">
              <div
                className="fb-comments"
                data-href={`https://www.hotseatmag.com/article/${article.slug}`}
                data-numposts="5"
                data-width="100%"
                data-height="20px"
                data-colorscheme="light"
              ></div>
            </div>
          </div>
        </section>
        {/* <div className="separator"></div>
      <Reactions article={article}/> */}
      </div>
    </div>
  );
}
