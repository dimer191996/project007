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
        `/api/articles/article/more/related/net-worth?page=${page}`
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
        "Discover the true wealth of top celebrities and their net worth. Get insights into their fortunes, assets, and financial success."
      }
      hearder={" Celebrity Net Worth | HotSeatMag "}
      tags={"Celebrity Net worth"}
      keyword="Celebrity Net worth"
      category={"celebrity/net-worth"}
    >
      <section className="">
        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-3/4 md:flex">
              <div className=" flex justify-center w-full ">
                <div className="md:w-3/4 w-full">
                <h2 className="text-4xl my-3 font-bold">
                      Richest Celebrities
                    </h2>
                    <p className=" my-4 border-b">
                    Find out the current net worth of these celebrities, including their earnings 
                    from their various ventures such as music albums, movies, endorsements, and business 
                    investments. Discover 
                    who tops the list as the wealthiest celebrity and how their net worth has evolved over the years.
                    </p>
                    <CategoriesTitle title={"What's New"} />
                  {articles.map((article, index) => (
                    <SmallCard key={article.id} article={article} />
                  ))}
                  {loading &&
                    skeletonCards.map((index) => <SkeletonCard key={index} />)}

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
                    <div className="text-center">You've reached the end</div>
                  )}
                  <div ref={endOfPageRef} style={{ height: "1px" }}></div>
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
