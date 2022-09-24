import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArticleCard2 from "./ArticleCard2";
import ArticleTags from "./ArticleTags";

export default function ForYouArticles({ slug }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${"/api/"}articles/article/related/${slug}`
      )
      .then(({ data }) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, []);

  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative">
            <div className="   mx-auto   min-w-0 ">
              <div
                key={article._id}
                className=" snap-center flex-none  h-wull w-full rounded overflow-hidden m-2 "
              >
                {loading ? (
                  ""
                ) : (
                  <div>
                    {" "}
                    <Link href={`/article/${article.slug}`}>
                      <div className=" cursor-pointer">
                        <h2
                          className={`mb-2 font-black text-xl line-clamp-4 tracking-tight`}
                        >
                          <span className=" text-gray-600">Related -</span>
                          <span className=" text-red-800">{article.title}</span>
                        </h2>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" separator"></div>
    </div>
  );
}
