import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";
import SmallCard from "./SmallCard";

export default function ArticlesSection2({ articles, tagPage }) {
  return (
    <section className=" grid md:grid-cols-1 2xl:grid-cols-3 md:gap-x-4  gap-y-4  border-b pb-5">
      {articles?.map((data) => (
        <div key={data._id}>
          {data.category !== "short" ? (
            <SmallCard imgSize="md:h-32 h-20 w-24 md:w-48" article={data} />
          ) : (
            <div>
              <div className=" separator text-left">
                {!tagPage && (
                  <h1 className=" mb-5 text-4xl font-bold">
                    {data.category === "short"
                      ? "Entertainment & True Stories"
                      : ""}
                  </h1>
                )}
              </div>
              <ArticleCard2 height={64} article={data} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
