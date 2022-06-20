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
        `${"https://hot-seat-app.herokuapp.com/api/"}articles/category/${"short"}`
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
        <div className=" separator font-bold">
          <div className=" border p-1 rounded-lg">
            {/* <span className=" text-red-500">Sorry to interupt ,</span> <br /> */}
            Articles Recomended For You .{loading && "loading..."}
          </div>
        </div>
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="snap-x overflow-x-auto scrollbar-hide md:scrollbar-default flex">
                <div className=" snap-center flex-none  h-64 w-64 rounded overflow-hidden m-2 ">
                  <ins
                    class="adsbygoogle"
                    style={{ display: "block", backgroundColor: "#eee" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-77+eq+28-5k+1i"
                    data-ad-client="ca-pub-4491397756399283"
                    data-ad-slot="6878692325"
                  ></ins>
                </div>
                {articles.slice(5).map((article) => (
                  <div
                    key={article._id}
                    className=" snap-center flex-none  h-64 w-64 rounded overflow-hidden m-2 "
                  >
                    <ArticleCard2 scroll={true} article={article} />
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
