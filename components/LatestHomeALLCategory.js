import React from "react";
import useSWR from "swr";
import { fetcher } from "../lib/utils";
import ArticleCard from "./ArticleCard";
import ArticleCard2 from "./ArticleCard2";
import ArticleMainImage from "./ArticleMainImage";
import ArticleTags from "./ArticleTags";
import Carousel from "./Carousel";
import LastestCategorySection from "./LastestCategorySection";

export default function ({ category }) {
  const { data, isValidating, error } = useSWR(`/api/home/latest`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
  });
  if (error) {
    return <div></div>;
  }
  return (
  <LastestCategorySection loading={isValidating} articles={data?.articles} />
  );
}
