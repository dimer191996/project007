import { fetcher } from "../../lib/utils";
import SeoPage from "../../components/SeoPage";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import ArticleCard2 from "../../components/ArticleCard2";
import TruncateText from "../../components/TruncateText";
import usePaginatedFetch from "../../hooks/usePaginatedFetch";
import SmallCard from "../../components/SmallCard";
import CategoriesTitle from "../../components/CategoriesTitle";
import LatestHomeALLCategory from "../../components/LatestHomeALLCategory";
import LastestCategorySection from "../../components/LastestCategorySection";

export default function TV({}) {
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
  } = usePaginatedFetch("/api/articles/pages", "tv", fetcher);

  if (error) {
    return <div>error = {JSON.stringify(error)}</div>;
  }
  return (
    <SeoPage
      description={`   Welcome to our reality TV category page! Here, you'll find a wide selection of the best and most popular reality TV shows from around the world. From competition shows like "Survivor" and "The Voice," to reality dating shows like "The Bachelor" and "Love Island," we've got something for everyone. Our page is constantly updated with the latest and greatest reality TV shows, so be sure to check back often to see what's new. Whether you're a fan of cooking shows, home renovation shows, or just want to see real people living their lives on camera, our reality TV category has something for you. So sit back, relax, and get ready to be entertained by some of the most popular reality TV shows on the planet!`}
      hearder={`
      Welcome to our reality TV category page!
      `}
      category={"reality-tv"}
    >
      <section  id={`${page}`} className="">
       <LastestCategorySection loading={isValidating} articles={items}/>
        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className=" mt-6 mb-12">
              <div className=" ">
                <h1 className=" text-center uppercase text-4xl font-bold mb-5">
                  #1 Welcome to our reality TV category page!
                </h1>
                <TruncateText
                  maxLength={250}
                  text={`Welcome to our reality TV category page! Here, you'll find a wide selection of the best and most popular reality TV shows from around the world. From competition shows like "Survivor" and "The Voice," to reality dating shows like "The Bachelor" and "Love Island," we've got something for everyone. Our page is constantly updated with the latest and greatest reality TV shows, so be sure to check back often to see what's new. Whether you're a fan of cooking shows, home renovation shows, or just want to see real people living their lives on camera, our reality TV category has something for you. So sit back, relax, and get ready to be entertained by some of the most popular reality TV shows on the planet!`}
                />
              </div>
            </div>
            <div className=" md:flex justify-center">
              <div className="lg:w-3/4 ">
                <div>
                  <CategoriesTitle title={"Latest"} />

                  {items?.slice(4).map((data, index) => (
                    <div className="my-4 mx-2 rounded overflow-hidden">
                      {index === 3 ? (
                        <div className=" top-20 ">
                          <div className=" bg-gray-700 border-b-2 border-t-2 text-white border-b-red-700">
                            <div className=" mt-6 mb-12 bg-s p-2 late-200">
                              <div className=" ">
                                <h1 className=" text-center uppercase text-xl font-bold mb-5">
                                  #1 Most Popular : 90 Day Fiance
                                </h1>

                                <TruncateText
                                  maxLength={200}
                                  text={`"90 Day Fiancé" is a reality TV show that airs on the TLC network. The show follows couples who have applied for or received a K-1 visa, which allows a foreign partner to travel to the United States for 90 days in order to marry their U.S. citizen partner. The show documents the couples' relationships and their journey towards marriage, including any challenges or difficulties they may face along the way. "90 Day Fiancé" has been a popular and successful show, with multiple spin-offs and international versions. If you enjoy reality TV shows that follow real people and their relationships, you might enjoy "90 Day Fiancé."`}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <SmallCard key={data._id} article={data} />
                    </div>
                  ))}
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
              </div>
              {/* <div className=" top-20 ">
                <div className=" bg-gray-700 border-b-2 border-t-2 text-white border-b-red-700">
                  
                  <div className=" mt-6 mb-12 bg-s p-2 late-200">
                    <div className=" ">
                      <h1 className=" text-center uppercase text-xl font-bold mb-5">
                        #1 Most Popular : 90 Day Fiance
                      </h1>

                      <TruncateText
                        maxLength={200}
                        text={`"90 Day Fiancé" is a reality TV show that airs on the TLC network. The show follows couples who have applied for or received a K-1 visa, which allows a foreign partner to travel to the United States for 90 days in order to marry their U.S. citizen partner. The show documents the couples' relationships and their journey towards marriage, including any challenges or difficulties they may face along the way. "90 Day Fiancé" has been a popular and successful show, with multiple spin-offs and international versions. If you enjoy reality TV shows that follow real people and their relationships, you might enjoy "90 Day Fiancé."`}
                      />
                    </div>
                  </div>
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </SeoPage>
  );
}
