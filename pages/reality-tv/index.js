import { fetcher } from "../../lib/utils";
import { useEffect, useState, useRef } from "react";
import SeoPage from "../../components/SeoPage";
import SmallCard from "../../components/SmallCard";
import LatestHomeALLCategory from "../../components/LatestHomeALLCategory";
import SkeletonCard from "../../components/SkeletonCard";
import CategoriesTitle from "../../components/CategoriesTitle";

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
  }, [loading, error]);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const data = await fetcher(`/api/articles/pages?page=${page}&category=${'tv'}`);
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
        "Welcome to our reality TV category page! Here, you'll find a wide selection of the best and most popular reality TV shows from around the world. From competition shows like Survivor and The Voice, to reality dating shows like The Bachelor\
        and Love Island,we've got something for everyone. Our page is constantly updated with the latest and greatest reality TV shows, so be sure to check back often to see what\'s new. Whether you\'re a fan of cooking shows, home renovation shows, or just want to see real people living their lives on camera, our reality TV category has something for you. So sit back, relax, and get ready to be entertained by some of the most popular reality TV shows on the planet!"
      }
      hearder={
        " Reality TV | Hot Seat Mag "
      }
      tags={"reality-tv"}
      keyword="reality-tv"
      category={"reality-tv"}
    >
      <section className="">

        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-3/4 md:flex">
              <div className="md:w-3/4 w-full">
                <div className=" flex justify-center  ">
                  <div className=" px-2 w-full   ">
                  <h2 className="text-xl lg:text-4xl my-3 font-bold">
                      Reality TV
                    </h2>
                    <p className=" my-4 border-b lg:text-xl">
                    The ultimate destination for all your reality TV news, recaps, and gossip. 
                    Stay up-to-date with your favorite shows and stars.
                    </p>
                    <CategoriesTitle title={"What's New"} />

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
