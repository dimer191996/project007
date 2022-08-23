import useSWRInfinite from "swr";
import { fetcher } from "../lib/utils";
import { useEffect, useState } from "react";
import SeoPage from "../components/SeoPage";
import SmallCard from "../components/SmallCard";
import ArticleCard from "../components/ArticleCard";
import PopularArticle from "../components/PopularArticle";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Ads24 from "../components/Ads24";

export default function Home({}) {
  const [page, setPage] = useState(1);

  const [pageCount, setPageCount] = useState(0);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    `https://god-in-control.herokuapp.com/api/hot/articles?page=${page}`,
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
    return <div></div>;
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
            <h1 className=" text-4xl font-bold">
              #1 MOVIE, TV NEWS & STORIES WEBSITE
            </h1>
          </div>
        </div>

        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className=" mb-5">
              <div className="  text-left">
                <h1 className=" border-t">
                  <span className=" bg-red-700  text-white border-b  py-1 px-4">
                    Cinema & Movies
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <PopularArticle category={"short"} />
            </div>
            <div className=" flex justify-center  ">
              <div id={`${page}`} className=" md:w-2/3 px-2   ">
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

                  {articles?.slice(0, 1).map((data, index) => (
                    <ArticleCard key={data._id} article={data} />
                  ))}
                </div>
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
                  {articles?.slice(1).map((data, index) => (
                    <SmallCard
                      showTitle={false}
                      imgShow={true}
                      imgSize=" h-32 w-1/2"
                      key={data._id}
                      article={data}
                    />
                  ))}
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
                          page === pageCount
                            ? " text-gray-800"
                            : "cursor-pointer "
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
                </div>
              </div>
            </div>
            <div className="row-start-2 mt-5 sm:row-start-auto col-span-3  space-y-2 px-2">
              <div className=" sticky top-20">
                <div className="">
                  <div className=" mb-5">
                    <div className="  text-left">
                      <h1 className=" border-t">
                        <span className=" bg-red-700  text-white border-b  py-1 px-4">
                          Popular Reality TV
                        </span>
                      </h1>
                    </div>
                  </div>
                  <PopularArticle category={"tv"} />
                  <div></div>
                </div>
                <div className="">
                  <div className=" mb-5">
                    <div className="  text-left">
                      <h1 className=" border-t">
                        <span className=" bg-red-700  text-white border-b  py-1 px-4">
                          Improve Your Life
                        </span>
                      </h1>
                    </div>
                  </div>
                  <PopularArticle category={"howto"} />
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SeoPage>
  );
}
