import React from 'react'
import Ads from './Ads'
import ArticleMainImage from './ArticleMainImage'
import ArticleTags from './ArticleTags'
import ForYouArticles from './ForYouArticles'
import InstagramEmbed from './InstagramEmbed'

export default function ArticleBody({article}) {
  return (
    <div className="px-4 md:px-0">
    <div className="mt-5">
      <div
        className="prose py-2  has-dropcap prose-xl mt-6  lg:prose-xl   prose-a:text-red-800"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
      ></div>
      <div className=" md:flex justify-center md:p-2">
        <div className="relative h-[30rem] w-full ">
          <a href={article.image}>
            <ArticleMainImage article={article} />
          </a>
        </div>
      </div>
      <div className="separator"></div>
      <Ads/>
      <div className="separator"></div>
      <div
        id="chapter-1"
        className="prose prose-xl py-2   lg:prose-xl first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML1 }}
      ></div>
      <div className="separator"></div>

      {article.related1 && <ForYouArticles slug={article.related1} />}

      <div
        id="chapter-2"
        className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black  prose-a:text-red-800"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML2 }}
      ></div>
      {!!article.video1 ? (
        <InstagramEmbed
          instagramContent={
            article.video1
              ? `https://www.instagram.com/reel/${article.video1}/?utm_source=ig_embed&amp;utm_campaign=loading`
              : "https://web.facebook.com/groups/1118449878512007"
          }
        />
      ) : (
       <Ads/>
      )}
      <div
        id="chapter-3"
        className="prose prose-xl py-2 mt-5  lg:prose-xl   first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML3 }}
      ></div>

      <div className="separator"></div>
     
      <div className="separator"></div>

      <div
        id="#chapter-4"
        className="prose prose-xl py-2  lg:prose-xl  first-letter:text-2xl  first-letter:font-black prose-a:text-red-800"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML4 }}
      ></div>
      {/* <div className="separator"></div>
      <Reactions article={article}/> */}
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
    </div>
  </div>
  )
}
