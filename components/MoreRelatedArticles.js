import React, { useEffect, useRef, useState} from "react";
import SmallCard from "./SmallCard";
import SkeletonCard from "./SkeletonCard";
import { fetcher } from "../lib/utils";
import { useRouter } from "next/router";
import { useTransition } from "react";

export default function MoreRelatedArticles({ tags, currentArticle }) {
  
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const endOfPageRef = useRef(null);
  useEffect(() => {
    fetchArticles();
  }, [page]);
  useEffect(()=>{
    setArticles([])
    setPage(1)
  },[tags])
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
  }, [loading, error , !(pageCount < 1)]);

  const fetchArticles = async () => {
    setLoading(true);
    if (tags) {
      let randomWord;
      const tagsArray = tags.match(/[^,]+/g); // Match one or more comma-separated tags
      const lastTag = tagsArray[tagsArray.length - 1].trim().replace(/-/g, " ");
      const words = lastTag.split(" "); // Split the last tag into an array of words
      if (words.length === 1) {
        randomWord = words[0];
      } else {
        const randomIndex = Math.floor(Math.random() * words.length); // Generate a random index
        randomWord = words[randomIndex]; // Select a random word from the array
      }
      try {
        const data = await fetcher(
          `${"/api/articles/article/more/related/"}${randomWord}?page=${page}`
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
    }
  };
  const handleRefresh = () => {
    setArticles([]);
    setPage(page);
    setError(false);
    fetchArticles();
  };
  let skeletonCards = Array(5).fill(0);

  return (
    <div>

      <nav
        aria-label="Posts"
        className=" grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-4 mb-10"
      >
        <ins
          class="adsbygoogle"
          styles={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-gk+1e-62-j9+1m1"
          data-ad-client="ca-pub-4491397756399283"
          data-ad-slot="8687040549"
        ></ins>
        {articles.map((el, index) =>
          el.title !== currentArticle ? (
            <SmallCard showIMG={true} key={index} article={el} />
          ) : (
            ""
          )
        )}
      </nav>
      {pageCount < 1 && (
        <div className="text-center">You've reached the end</div>
      )}
      {loading &&
        skeletonCards.map((data, index) => <SkeletonCard key={index} />)}
      <div ref={endOfPageRef} style={{ height: "1px" }}></div>
    </div>
  );
}
