import React from "react";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";

export default function ArticlesSection({ articles, tagPage }) {
  return (
    <>
      <section className=" grid md:grid-cols-2 2xl:grid-cols-3 md:gap-x-4  gap-y-4  pb-5">
        {articles?.map((data) => (
          <div key={data._id}>
            {data.category !== "short" ? (
              <ArticleCard article={data} />
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
    </>
  );
}
