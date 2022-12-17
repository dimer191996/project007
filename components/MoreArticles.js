import axios from "axios";
import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import moment from "moment";
import Link from "next/link";
import ArticleCard2 from "./ArticleCard2";

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
    <div>
      {loading && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-10 mb-10">

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13].map((data, index) => (
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

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-10 mb-10">

        {articles?.slice(2).map((el, index) => (

          <ArticleCard2 key={index}
            imgShow={true}
            imgSize=" h-26 w-1/3" article={el} />

        ))}

      </div>
      <div className="text-center w-full py-4 border-t border-b">
        <div className="font-bold text-lg">
          <Link href={"/"}><div>{"Read More >>"}</div></Link>
        </div>
      </div>
    </div>
  );
}
