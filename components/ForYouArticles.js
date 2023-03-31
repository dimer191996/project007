import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArticleCard2 from "./ArticleCard2";
import ArticleTags from "./ArticleTags";
import SmallCard from "./SmallCard";
import ArticleMainImage from "./ArticleMainImage";

export default function ForYouArticles({ slug }) {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${"/api/"}articles/article/related/${slug}`)
      .then(({ data }) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [slug]);

  return (
    <div>
      {" "}
      <div className="separator"></div>
      <div>
        <div className=" my-5">
          <div className="  flex justify-center uppercase">
            <div className="w-full flex justify-center items-center rounded bg-white py-2 px-2">
              <div className="h-2 w-full bg-blue-700"></div>
              <h5 className="text-black lg:w-4/5  w-5/6 bg-gray-200 rounded text-center px-2 font-bold">
                Read also
              </h5>
              <div className="h-2 w-full bg-blue-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-blue-300">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative">
            <div className="   mx-auto   min-w-0 ">
              <div
                key={article._id}
                className=" snap-center flex-none  h-wull w-full rounded overflow-hidden  "
              >
                {loading ? (
                  "Loading"
                ) : (
                  <Link href={`/article/${article.slug}`}>
                    <div className=" flex flex-col hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
                      <div className="">
                        <div className=" relative h-64 w-full">
                          <ArticleMainImage article={article} />
                        </div>
                        <div className={"px-2"}>
                          <span className=" line-clamp-3  hover:text-red-700 md:text-2xl text-lg font-black">
                            {article.title}
                          </span>
                          <div className="hidden md:flex">
                            <p className=" hidden text-gray-600  line-clamp-3 ">
                              {article.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </div>
  );
}
