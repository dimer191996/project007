import useSWRInfinite from "swr";
import { fetcher } from "../../lib/utils";
import { useEffect, useState } from "react";
import SeoPage from "../../components/SeoPage";
import SmallCard from "../../components/SmallCard";
import ArticleCard from "../../components/ArticleCard";
import PopularArticle from "../../components/PopularArticle";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Ads24 from "../../components/Ads24";
import ArticleCard2 from "../../components/ArticleCard2";
import TruncateText from "../../components/TruncateText";
import usePaginatedFetch from "../../hooks/usePaginatedFetch";

export default function News({}) {
  const {
    items,
    error,
    mutate,
    size,
    setSize,
    isValidating,
    page,
    pageCount,
    handlePreviousPage,
    handleNextPage,
  } = usePaginatedFetch("/api/articles/pages","news", fetcher);


  if (error) {
    return <div>error = {JSON.stringify(error)}</div>;
  }

  return (
    <SeoPage
      description={
         `Summarize latest news and events in concise and engaging language to stay informed and on top of current events.`
      }
      hearder={
       "  Latest NEWS category  "
      }
      category={"reality-tv"}
    >
      <section className="">

        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className=" mt-6 mb-12">
              <div className=" ">
                <h1 className=" text-center uppercase text-4xl font-bold mb-5">
                Welcome to our NEWS category ! 
                </h1>
                <TruncateText text="Stay informed with the latest news and insights from the world of News. Our team of experienced journalists and editors work around the clock to bring you the most relevant and up-to-date information. Read on for in-depth coverage, analysis and expert opinions on News trends, events, and more. Make HotSeatMag your go-to source for all things News" maxLength={250}/>
              </div>
            </div>
            <div className="">
              <div className="row-start-2 sm:row-start-auto col-span-3  space-y-2 px-2">
                <div className=" sticky top-20">
                  <div className=" mb-5">
                    <div className="  text-left">
                      <h1 className=" border-t">
                        <span className=" bg-red-700  text-white border-b  py-1 px-4">
                          Popular
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div>
                    <PopularArticle category={"news"} />
                  </div>
                  {/* <div className="">
                    <div>
                      <Ads24 />
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                id={`${page}`}
                className=" col-span-4  "
              >
                <div>
                  <div className=" mb-5">
                    <div className="  text-left">
                      <h1 className=" border-t">
                        <span className=" bg-red-700  text-white border-b  py-1 px-4">
                          Latest
                        </span>
                      </h1>
                    </div>
                  </div>

                  {items?.slice(0, 1).map((data, index) => (
                    <div className="my-4 mx-2 rounded overflow-hidden">    
                      <ArticleCard2 key={data._id} article={data} />
                    </div>
                  ))}
                </div>
                {isValidating && (
                  <div className="mt-4 mb-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, index) => (
                      <div
                        key={index}
                        className=" snap-center flex-none  h-64 w-auto rounded overflow-hidden m-2  "
                      >
                        <div class="py-1">
                          <div class="animate-pulse flex space-x-4">
                            <div class="flex-1 space-y-6 py-1">
                              <div class="h-64 bg-slate-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className=" mb-5">
                  <div className="  text-left">
                    <h2 className=" border-t">
                      <span className=" bg-red-700  text-white border-b  py-1 px-4">
                        Breaking Stories
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                <div class=" md:grid md:grid-cols-2  mx-1 border-gray-200 dark:border-gray-700">
                  {items?.slice(1).map((data, index) => (
                    <div className="my-2 mx-2 rounded overflow-hidden">     
                      <ArticleCard2
                        showTitle={false}
                        imgShow={true}
                        imgSize=" h-26 w-1/3"
                        key={data._id}
                        article={data}
                      />
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       

        <div className=" flex justify-center my-10 items-center">
          {page !== 1 && (
            <ul className=" flex lg:w-1/6 mx-1  items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-500  justify-center rounded   ">
              <li
                disabled={page === 1}
                className={`px-2 py-2  flex  text-red-800 ${
                  page === 1
                    ? " text-gray-400 cursor-not-allowed"
                    : "cursor-pointer "
                } `}
                onClick={handlePreviousPage}
              >
                <ChevronDoubleLeftIcon className=" h-6" />{" "}
                <span>Previous </span>
              </li>
            </ul>
          )}
          <ul className=" flex  lg:w-1/6 w-full mx-1 items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-500  justify-center rounded   ">
            <li
              className={`md:px-2 flex py-2 text-blue-600 hover:text-blue-700 ${
                page === pageCount ? " text-gray-800" : "cursor-pointer "
              }`}
              disabled={page === pageCount}
              onClick={handleNextPage}
            >
              <a href={`#${page}`} className=" flex">
                <span>Load more</span>
                <ChevronDoubleRightIcon className=" h-6" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SeoPage>
  );
}
