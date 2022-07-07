import axios from "axios";
import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

export default function MoreArticles({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${"https://hot-app.herokuapp.com/api/"}articles/category/${category}`
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
    <div className=" flex  justify-center">
      <div className=" w-[90%]   mb-5">
        <div className="h-6 text-center">{loading ? "loading" : ""}</div>
        <div className="">
          {articles?.slice(0, 5).map((el, index) => (
            <SmallCard showTitle={false} key={index} article={el} />
          ))}
          <ins
            class="adsbygoogle"
            style={{ display: "block", backgroundColor: "#eeee" }}
            data-ad-format="fluid"
            data-ad-layout-key="-gq+t-1c-fj+xa"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="9911443569"
            data-full-width-responsive="true"
          ></ins>
          {articles?.slice(5, 10).map((el, index) => (
            <SmallCard showTitle={false} key={index} article={el} />
          ))}
          <ins
            class="adsbygoogle"
            style={{ display: "block", backgroundColor: "#eeee" }}
            data-ad-format="fluid"
            data-ad-layout-key="-gq+t-1c-fj+xa"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="9911443569"
            data-full-width-responsive="true"
          ></ins>
          {articles?.slice(10, 20).map((el, index) => (
            <SmallCard showTitle={false} key={index} article={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
