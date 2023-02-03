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

export default function Home({ }) {
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
        " Your source for entertainment , celebrities ,Reality Tv , and much more"
      }
      tags={'Reality Tv'}
      keyword=""
      category={""}
    >
      <section className="">
        {/* <div className=" mt-12 mb-12">
          <div className="  flex justify-center">
            <div className="lg:w-1/2 md:mx-10 flex justify-center items-center rounded bg-red-700 py-2 px-2">
              <h2 className="text-white text-4xl font-bold">
                #1
              </h2>
              <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold"> MOVIE, TV NEWS & STORIES WEBSITE</h1>
            </div>
          </div>
        </div> */}
        
        <div className="grid md:grid-cols-12 md:mx-0 lg:mx-10 ">
        <div className=" col-span-7">
            <div className=" flex justify-center  ">
              <div id={`${page}`} className=" px-2   ">
                <div>
                 <LatestHomeALLCategory/>
                </div>

                <div>

                  {articles?.slice(3).map((data, index) => (
                    <div className="my-2 rounded overflow-hidden">

                      <SmallCard
                        showTitle={false}
                        imgShow={true}
                        imgSize=" h-auto w-2/3"
                        key={data._id}
                        article={data}
                      />
                    </div>
                  ))}

                  <div className=" flex justify-center my-10 items-center">
                    {page !== 1 && (
                      <ul className=" flex  mx-1  items-center bg-gray-100 hover:bg-gray-200 ease-in-out duration-500  justify-center rounded   ">
                        <li
                          disabled={page === 1}
                          className={`px-2 py-2  flex  text-red-800 ${page === 1
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
                        className={`md:px-2 flex py-2 text-blue-600 hover:text-blue-700 ${page === pageCount
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
                <div className="">
                  <div className="  flex justify-center">
                    <div className="w-full flex justify-center items-center rounded bg-white py-2 px-2">
                      <h2 className="text-gray-700 mx-3 text-4xl font-bold">
                        #1
                      </h2>
                      <h1 className="text-blacks text-2xl font-bold">Marketing , Reviews</h1>
                    </div>
                  </div>
                </div>
                <PopularArticle category={"howto"} />
                <div className="">
                  <CategoriesTitle title={'Improve Your Quality of Live'} />
                  <PopularArticle category={"lifestyle"} />

                </div>
              </div>
              <div className="row-start-2 mt-5 sm:row-start-auto col-span-3  space-y-2 px-2">

              </div>
            </div>
          </div>
          <div className="col-span-5 py-10">
            <CategoriesTitle title={'Cinema, Movies & Stories'} />
            <PopularArticle category={"short"} />
            <CategoriesTitle title={'Celebrity NEWS'} />
            <PopularArticle category={"celebrity"} />
            <CategoriesTitle title={'Popular Reality TV NEWS'} />
            <PopularArticle category={"tv"} />
            <CategoriesTitle title={'World NEWS'} />
            <PopularArticle category={"news"} />
          </div>
         
        </div>
      </section>
    </SeoPage>
  );
}
