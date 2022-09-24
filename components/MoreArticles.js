import axios from "axios";
import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import moment from "moment";
import Link from "next/link";

export default function MoreArticles({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${"/api/articles/article/more/"}${category}`)
      .then(({ data }) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(null);
      });
  }, []);

  return (
    <div className=" flex  justify-center">
      <div className="    mb-5">
        <div className="h-6 text-center">{loading ? "loading" : ""}</div>
        <div className="">
          <ol class="relative border-l mx-2 border-gray-200 dark:border-gray-700">
            {articles.slice(1).map((el, index) => (
              
                <SmallCard key={index} imgSize=" w-1/2 " showTitle={false} article={el} />
              
            ))}
          </ol>
          <ins
            class="adsbygoogle"
            style={{ display: "block", backgroundColor: "#eeee" }}
            data-ad-format="fluid"
            data-ad-layout-key="-gq+t-1c-fj+xa"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="9911443569"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}
