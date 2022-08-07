import axios from "axios";
import React, { useEffect, useState } from "react";
import ArticleCard2 from "./ArticleCard2";

export default function ForYouArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${"https://hot-data.herokuapp.com/api/"}articles/category/${"howto"}`
      )
      .then(({ data }) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(null);
      });
  }, [articles.length]);

  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="snap-x overflow-x-auto scrollbar-hide md:scrollbar-default flex justify-center">
                {articles.map((article) => (
                  <div
                    key={article._id}
                    className=" snap-center flex-none  h-wull w-full rounded overflow-hidden m-2 "
                  >
                    <ArticleCard2
                      h="h-96 text-2xl"
                      scroll={true}
                      article={article}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" separator"></div>
    </div>
  );
}
