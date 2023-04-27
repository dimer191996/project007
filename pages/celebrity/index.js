import { fetcher } from "../../lib/utils";
import { useEffect, useState, useRef } from "react";
import SeoPage from "../../components/SeoPage";
import SmallCard from "../../components/SmallCard";
import LatestHomeALLCategory from "../../components/LatestHomeALLCategory";
import SkeletonCard from "../../components/SkeletonCard";
import Link from "next/link";
import CategoriesTitle from "../../components/CategoriesTitle";

export default function Home({}) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const endOfPageRef = useRef(null);

  useEffect(() => {
    fetchArticles();
  }, [page]);

  useEffect(() => {
    if (error) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading && !error && !(pageCount === 0)) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (endOfPageRef.current) {
      observer.observe(endOfPageRef.current);
    }

    return () => {
      if (endOfPageRef.current) {
        observer.unobserve(endOfPageRef.current);
      }
    };
  }, [loading, error, !(pageCount === 0)]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await fetcher(
        `/api/articles/pages?page=${page}&category=${"celebrity"}`
      );
      if (data && data.articles) {
        setPageCount(data.pagination.remainingPages);
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
    setArticles([]);
    setPage(page);
    setError(false);
    fetchArticles();
  };
  let skeletonCards = Array(10).fill(0);
  return (
    <SeoPage
      description={`  Welcome to Hot Seat Magazine, your go-to source for all the latest celebrity news and gossip. Our team is committed to bringing you the freshest updates on your favorite stars, from the red carpet to behind-the-scenes. Dive into our exclusive interviews and catch up on the lives and careers of the celebrities you love. Thank you for choosing Hot Seat Magazine for your entertainment news fix.`}
      hearder={" Celebryties | HotSeatMag "}
      tags={"celebrity"}
      keyword="celebrity"
      category={"celebrity"}
    >
      <section className="">
        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-3/4 md:flex">
              <div className="md:w-3/4 w-full">
                <div className=" flex justify-center  ">
                  <div className=" px-2 w-full   ">
                    
                    <h2 className="text-xl lg:text-4xl my-3 font-bold">
                      Richest Celebrities
                    </h2>
                    <p className=" my-4 border-b lg:text-xl">
                      Curious about the richest celebrities? Discover the net
                      worth, biography, plastic surgery stories, and weight loss
                      journeys of your favorite stars. Get the latest updates
                      and uncover the secrets of showbiz! Let's dive in!
                    </p>
                    <div>
                      <ul className=" my-4">
                        <li>
                          <h3 className=" text-2xl font-semibold mb-2">
                            Subcategories
                          </h3>
                          <ul className=" grid grid-cols-2 ">
                            <Link href={"/celebrity/net-worth"}>
                              <li className="text-lg font-bold p-2 bg-gray-200 flex justify-center">
                                Net worth
                              </li>
                            </Link>
                            <Link href={"/celebrity/biography"}>
                              <li className="text-lg font-bold p-2 bg-blue-200 flex justify-center">
                                Biography
                              </li>
                            </Link>
                            <Link href={"/celebrity/plastic-surgery"}>
                              <li className="text-lg font-bold p-2 bg-yellow-200 flex justify-center">
                                Platic Surgery
                              </li>
                            </Link>
                            <Link href={"/celebrity/weight-loss"}>
                              <li className="text-lg font-bold p-2 bg-green-200 flex justify-center">
                                Weight Loss
                              </li>
                            </Link>
                            <Link href={"/celebrity/lifestyle"}>
                              <li className="text-lg font-bold p-2 bg-indigo-200 flex justify-center">
                                Lifestyle
                              </li>
                            </Link>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <CategoriesTitle title={"What's New"} />
                      {articles.map((article, index) => (
                        <SmallCard key={article.id} article={article} />
                      ))}
                      {loading &&
                        skeletonCards.map((index) => (
                          <SkeletonCard key={index} />
                        ))}

                      {error && (
                        <div className=" h-64px flex items-center justify-center">
                          <button
                            className=" p-2 bg-red-700 rounded shadow text-white font-semibold"
                            onClick={handleRefresh}
                          >
                            Error loading articles. Click to refresh.
                          </button>
                        </div>
                      )}
                      {pageCount === 0 && (
                        <div className="text-center">
                          You've reached the end
                        </div>
                      )}
                      <div ref={endOfPageRef} style={{ height: "1px" }}></div>
                    </div>
                  </div>
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
