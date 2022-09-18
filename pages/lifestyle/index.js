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
    `/api/articles/pages?page=${page}&category=lifestyle`,
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
        "   If you like to nerd out about self-development as much as I do, you're in a wight place ."
      }
      article={articles[0]}
      hearder={
        "  We share productivity tips, career advice and lifestyle hacks, so we can become happier and more successful versions of ourselves... together 🤗"
      }
      category={"Lifestyle hacks, Self-development"}
    >
      <section className="">
        <div className=" mt-12 mb-12">
          <div className="  flex justify-center text-left">
            <h1 className=" text-4xl font-bold">#1 Lifestyle hacks, Self-development & More</h1>
          </div>
        </div>

        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className=" md:grid md:grid-cols-7  ">
              <div className="row-start-2 sm:row-start-auto col-span-3  space-y-2 px-2">
                <div className=" sticky top-20">
                  <div></div>
                  <div className="">
                    <div className=" mb-5">
                      <div className="  text-left">
                        <h1 className=" border-t">
                          <span className=" bg-red-700  text-white py-1 px-4">
                            Popular
                          </span>
                        </h1>
                      </div>
                    </div>
                    <PopularArticle category={"lifestyle"} />
                    
                  </div>
                </div>
              </div>
              <div
                id={`${page}`}
                className=" col-span-4 px-2  border-l border-r  "
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

                  {articles?.slice(0, 1).map((data, index) => (
                    <ArticleCard key={data._id} article={data} />
                  ))}
                </div>
                {!data && (
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
                        Learn How
                      </span>
                    </h2>
                  </div>
                </div>
                <div>
                  {articles?.slice(1).map((data, index) => (
                    <SmallCard
                      showTitle={false}
                      imgShow={true}
                      imgSize=" h-26 w-1/3"
                      key={data._id}
                      article={data}
                    />
                  ))}
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
