import { fetcher } from "../../../lib/utils";
import { useEffect, useState, useRef } from "react";
import SeoPage from "../../../components/SeoPage";
import SmallCard from "../../../components/SmallCard";
import SkeletonCard from "../../../components/SkeletonCard";
import CategoriesTitle from "../../../components/CategoriesTitle";

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
        if (target.isIntersecting && !loading && !error && !(pageCount <= 0)) {
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
        `/api/articles/article/more/related/bio?page=${page}`
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
      description={
        "Discover the secrets behind your favorite celebs with our exclusive celebrity biographies. From scandals to success stories, we've got it all! "        
      }
      hearder={" Celebry Biography | HotSeatMag "}
      tags={"Celebrity Biography"}
      keyword="Celebrity Biography"
      category={"celebrity/biography"}
    >
      <section className="">
        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-3/4 md:flex">
              <div className=" flex justify-center  ">
                <div className=" px-2 w-full   ">
                  
                    <div className="md:w-3/4 w-full">
                    <h2 className="text-4xl my-3 font-bold">
                    Celebrities Biographies
                    </h2>
                    <h2 className=" my-4 border-b lg:text-xl">
                    Unveiling the Untold Stories of Celebrities - Get the Juicy Details Now!
                    </h2>
                    <CategoriesTitle title={'What\'s New'}/>

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
              <div className="md:w-1/4"></div>
            </div>
          </div>
        </div>
      </section>
    </SeoPage>
  );
}
