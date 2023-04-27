import { fetcher } from "../../lib/utils";
import { useEffect, useState, useRef } from "react";
import SeoPage from "../../components/SeoPage";
import SmallCard from "../../components/SmallCard";
import LatestHomeALLCategory from "../../components/LatestHomeALLCategory";
import SkeletonCard from "../../components/SkeletonCard";

export default function Home({}) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount  , setPageCount] = useState(1)
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
        if (target.isIntersecting && !loading && !error && !(pageCount < 1)) {
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
  }, [loading, error, !(pageCount < 1)]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await fetcher(`/api/articles/pages?page=${page}&category=${'howto'}`);
      if (data && data.articles) {
        setPageCount(data.pagination.remainingPages)
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
        " Looking for the latest on Amazon, marketing, and more? Look no further than Hot Seat Mag. Our team of industry experts brings you the most current information on all things Amazon and marketing, including tips, strategies, and analysis. Stay up-to-date and ahead of the game with Hot Seat Mag."

      }
      hearder={
        " Daily Marketing Dose | HotSeatMag "
      }
      tags={"howto"}
      keyword="howto"
      category={"howto"}
    >
      <section className="">

        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-3/4 md:flex">
              <div className="md:w-3/4 w-full">
                <div className=" flex justify-center  ">
                  <div className=" px-2 w-full   ">
                    <div>
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
                     { !(pageCount > 1) && <div className="text-center">
                          You've reached the end
                      </div>}
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
