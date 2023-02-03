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
              <div className="  grid grid-cols-1">
                <div className=" col-span-6">
                  <div className=" col-span-7">
                    <ol class="relative border-l mx-2 border-gray-200 dark:border-gray-700">
                      {articles.map((el, index) => (
                        <ArticleCard2 key={index} article={el} />
                      ))}
                    </ol>
                  </div>
                </div>
               
              <div className=" flex justify-center my-10 items-center">
                {page !== 1 && (
                  <ul className=" flex  mx-1  items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-500  justify-center rounded   ">
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
                <ul className=" flex  w-full mx-1 items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-500  justify-center rounded   ">
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
              </div> <div className=" col-span-6">
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
      </section>
    </SeoPage>
  );
};

export default tagsPage;
