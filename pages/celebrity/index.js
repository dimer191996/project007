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
} from "@heroicons/react/solid";
import Ads24 from "../../components/Ads24";

export default function Howto({}) {
  const [page, setPage] = useState(1);

  const [pageCount, setPageCount] = useState(0);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    `/api/articles/pages?page=${page}&category=celebrity`,
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

  return (
    <SeoPage
      description={
        "   Your source for Entertainment news, Stories , Celebrities, Reality Tv more...!"
      }
      article={articles[0]}
      hearder={
        " Your source for entertainment , celebrities ,Reality Tv , and much more"
      }
      category={"none"}
    >
      <section className="">
        <div className=" mt-12 mb-12">
          <div className="  flex justify-center text-left">
            <h1 className=" text-4xl uppercase font-bold">
              #1 Celebrity News & More
            </h1>
          </div>
        </div>

        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className="  ">
              <div
                id={`${page}`}
                className=" col-span-12 px-2   "
              >
                <div>
                  <div className=" mb-5">
                    <div className="  text-left">
                      <h1 className=" border-t">
                        <span className=" bg-red-700  text-white border-b  py-1 px-4">
                          New Stories
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 gap-4">
                    {articles?.map((data, index) => (
                      <ArticleCard
                        key={data._id}
                        textSize="text-3xl"
                        article={data}
                      />
                    ))}
                  </div>
                  {!data && (
                    <div className="mt-4 mb-3">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        (data, index) => (
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
                        )
                      )}
                    </div>
                  )}
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
