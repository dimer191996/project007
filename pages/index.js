import useSWRInfinite from "swr";
import { fetcher } from "../lib/utils";
import { useEffect, useState } from "react";
import SeoPage from "../components/SeoPage";
import SmallCard from "../components/SmallCard";
import ArticleCard from "../components/ArticleCard";
import PopularArticle from "../components/PopularArticle";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import Ads24 from "../components/Ads24";
import ArticleCard2 from "../components/ArticleCard2";
import Carousel from "../components/Carousel";
import CategoriesTitle from "../components/CategoriesTitle";
import LatestHomeALLCategory from "../components/LatestHomeALLCategory";
import LinkedArticle from "../components/LinkedArticle";

export default function Home({}) {
  const [page, setPage] = useState(1);

  const [pageCount, setPageCount] = useState(0);

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    `/api/home?page=${page}`,
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
      hearder={
        "Hot Seat Magazine | TV, Movies , Entertainment , Celebrity , News , Lifestyle "
      }
      tags={"Reality Tv"}
      keyword=""
      category={""}
    >
      <section  id={`${page}`} className="">
        <LatestHomeALLCategory/>
        
        <div className="">
            <div className="flex justify-center">
              <div className="lg:w-3/4 md:flex">
                <div className="md:w-3/4 w-full">                 
                    <div className=" flex justify-center  ">
                      <div className=" px-2 w-full   ">
                        <div>
                        <CategoriesTitle title={"Latest"} />
                          {articles?.slice(3).map((data, index) => (
                            <div className="my-2 rounded overflow-hidden">
                              {index === 3 ? <LinkedArticle/>:"" }
                              <SmallCard key={data._id} article={data} />
                            </div>
                          ))}
                          {
                            isValidating ? <div className="w-full">
                            <div className="">
                              {[1,2,3,4,5,6,7,8,9].map((data, index) => (
                                <div
                                  key={index}
                                  className=" snap-center flex-none  h-64 w-full rounded overflow-hidden m-2  "
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
                          </div>:""
                          }
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
                                <a href={`#${page}`} className="">
                                  <div>Load more</div>
                                  <div className="flex justify-center">
                                    <ChevronDoubleDownIcon className=" h-6" />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                       
                      </div>
                    </div> 
                
                  <div className=" py-10">
                    <CategoriesTitle title={"Marketing & Reviews"} />
                    <PopularArticle category={"howto"} />
                    <CategoriesTitle title={"Improve Your Quality of Live"} />
                    <PopularArticle category={"lifestyle"} />
                    <CategoriesTitle title={"Cinema, Movies & Stories"} />
                    <PopularArticle category={"short"} />
                    <CategoriesTitle title={"Celebrity NEWS"} />
                    <PopularArticle category={"celebrity"} />
                    <CategoriesTitle title={"Popular Reality TV NEWS"} />
                    <PopularArticle category={"tv"} />
                    <CategoriesTitle title={"World NEWS"} />
                    <PopularArticle category={"news"} />
                  </div>
                </div> 
                <div className="md:w-1/4"></div>
              </div>
            </div>
        </div>
      </section>
    </SeoPage>
  );
}
