import React, { useEffect, useState } from "react";
import Ads24 from "../../components/Ads24";
import ArticleCard2 from "../../components/ArticleCard2";
import PopularArticle from "../../components/PopularArticle";
import SeoPage from "../../components/SeoPage";
import SmallCard from "../../components/SmallCard";
import useSWRInfinite from "swr";
import { useRouter } from "next/router";
import { fetcher } from "../../lib/utils";

import moment from "moment";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

const tagsPage = () => {
  const Router = useRouter();
  const { tag } = Router.query;

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    `${"/api/articles/"}${tag}?page=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
    }
  );
  const articles = data ? [].concat(...data.articles) : [];

  const isLoadingInitialData = !data && !error;

  useEffect(() => {
    if (data) {
      setPageCount(Math.round(data.pagination?.pageCount));
    }
  }, [data]);

  function handlePreviousPage() {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  }

  function handleNextPage() {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  }

  if (error) {
    return <div>error = {JSON.stringify(error)}</div>;
  }
  if (!data) {
    return (
      <SeoPage
        article={articles[0]}
        description={articles[0]?.description}
        hearder={tag?.replace(/-/g, " ") + " | HotSeatMag"}
        category={"empty"}
        title={tag?.replace(/-/g, " ") + " | HotSeatMag "}
      >
        <div className="">
          <div className=" h-64 text-center flex justify-center items-center">
            Loading you're data... 1s left
          </div>
        </div>
      </SeoPage>
    );
  }
  return (
    <SeoPage
      article={articles[0]}
      description={articles[0]?.description}
      hearder={tag?.replace(/-/g, " ") + " | HotSeatMag"}
      category={"empty"}
      title={tag?.replace(/-/g, " ") + " | HotSeatMag "}
    >
      <section className="">
        <div className=" flex flex-col justify-center items-center text-center h-32">
          <h1 className=" mb-2 font-semibold text-2xl">Tags</h1>

          <h2 className=" font-black text-3xl uppercase">
            {tag?.replace(/-/g, " ")}
          </h2>
        </div>
        <div className=" md:flex justify-center my-5 ">
          <div className="md:flex flex-row justify-center w-full lg:w-2/3 md:mx-4 ">
            <div className="md:w-3/4  mx-4">
              <div className=" md:grid grid-cols-1 gap-4 mb-5">
                <div className=" mb-5">
                  <div className="  text-left">
                    <h1 className=" border-t">
                      <span className=" bg-red-700  text-white border-b  py-1 px-4">
                        Popular
                      </span>
                    </h1>
                  </div>
                </div>
                <PopularArticle category={articles[0]?.category} />{" "}
                {articles.slice(0, 1).map((article) => (
                  <ArticleCard2 article={article} />
                ))}
              </div>
              <div className="  grid grid-cols-1">
                <div className=" col-span-6">
                  <div className=" col-span-7">
                    <ol class="relative border-l mx-2 border-gray-200 dark:border-gray-700">
                      {articles.slice(1).map((el, index) => (
                        <li key={index} class="mb-10 ml-4">
                          <SmallCard
                            imgSize=" w-1/2 "
                            showTitle={false}
                            article={el}
                          />
                          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                          <time class="mb-1 text-sm font-bold leading-none text-gray-700 dark:text-gray-700">
                            {moment(el.createdAt).fromNow()}
                          </time>
                          {/* <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Application UI code in Tailwind CSS
                </h3> */}
                          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {el.description}
                          </p>
                          <a
                            href={"/article/" + el.slug}
                            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          >
                            Learn more{" "}
                            <svg
                              class="ml-2 w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className=" col-span-6">
                  <ins
                    class="adsbygoogle"
                    style={{ display: "block", backgroundColor: "#eeee" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-gq+t-1c-fj+xa"
                    data-ad-client="ca-pub-4491397756399283"
                    data-ad-slot="9911443569"
                    data-full-width-responsive="true"
                  ></ins>
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
};

export default tagsPage;
