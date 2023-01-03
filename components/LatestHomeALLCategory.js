import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib/utils";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";
import Carousel from "./Carousel";

export default function ({ category }) {
  const { data, error } = useSWR(
    `/api/home/latest`,
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
      <div className="mt-4 mx-5 mb-3">

        <div className="">
          {[1].map((data, index) => (
            <div
              key={index}
              className=" snap-center flex-none  h-64 w-full rounded overflow-hidden m-2  "
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

    );
  }
  return (<Carousel items={data.articles} />);
}
