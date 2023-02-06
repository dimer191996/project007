import { fetcher } from "../../lib/utils";
import SeoPage from "../../components/SeoPage";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
// import Ads24 from "../../components/Ads24";
import TruncateText from "../../components/TruncateText";
import usePaginatedFetch from "../../hooks/usePaginatedFetch";
import LastestCategorySection from "../../components/LastestCategorySection";
import CategoriesTitle from "../../components/CategoriesTitle";
import SmallCard from "../../components/SmallCard";

export default function Celebrity({}) {
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
  } = usePaginatedFetch("/api/articles/pages","short", fetcher);



  if (error) {
    return <div>error = {JSON.stringify(error)}</div>;
  }

  return (
    <SeoPage
      description={`Here, you will find articles about a wide selection of the latest and greatest films from around the world. From blockbuster hits to indie darlings, we have something for every film fan. Our movie category is constantly updated with new releases, so be sure to check back often for the latest in cinema. Whether you're a fan of action, drama, comedy, or something in between, you'll find it all here at Hot Seat Magazine. Start reading your favorite movies today!`
    }
      hearder={`
       Welcome to our movie category !
      `}
      category={"movies-and-entertainment"}
    >
      <section  id={`${page}`} className="">
       <LastestCategorySection loading={isValidating} articles={items}/>
        <div className=" md:flex justify-center my-5 ">
          <div className=" lg:w-[50rem]">
            <div className=" mt-6 mb-12">
              <div className=" ">
                <h1 className=" text-center uppercase text-4xl font-bold mb-5">
                  Welcome to our Movie & Entertainment  category ! 

                </h1>
                <TruncateText text="Welcome to Hot Seat Magazine, your go-to source for all the latest celebrity news and gossip. Our team is committed to bringing you the freshest updates on your favorite stars, from the red carpet to behind-the-scenes. Dive into our exclusive interviews and catch up on the lives and careers of the celebrities you love. Thank you for choosing Hot Seat Magazine for your entertainment news fix." maxLength={250}/>
              </div>
            </div>
            <div className=" md:flex justify-center">
              <div className="lg:w-3/4 ">
                <div>
                  <CategoriesTitle title={"Latest"} />

                  {items?.slice(4).map((data, index) => (
                    <div className="my-4 mx-2 rounded overflow-hidden">
                      
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
            </div>
          </div>
        </div>
      </section>
    </SeoPage>
  );
}
