import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib/utils";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";

export default function ({ category }) {
  const { data, error } = useSWR(
    `https://hot-app.herokuapp.com/api/hot/articles/${category}/popular`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
    }
  );
  if (error) {
    return <div>error = {JSON.stringify(error)}</div>;
  }
  if (!data) {
    return (
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="snap-x overflow-x-auto  scrollbar-hide md:scrollbar-default  flex">
                {[1, 2, 3, 4].map((data, index) => (
                  <div
                    key={index}
                    className=" snap-center flex-none  h-64 w-64 rounded overflow-hidden m-2  "
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
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="snap-x overflow-x-auto  scrollbar-hide md:scrollbar-default  flex">
                {data?.articles?.map((article) => (
                  <div
                    key={article._id}
                    className=" snap-center flex-none  h-64 w-64 rounded overflow-hidden m-2  "
                  >
                    <ArticleCard2
                      imgShow={false}
                      textSize="text-lg leading-normal"
                      showTitle={false}
                      key={article._id}
                      article={article}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
