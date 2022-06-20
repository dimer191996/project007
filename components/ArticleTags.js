import Link from "next/link";
import React from "react";

export default function ArticleTags({ t }) {
  let allTags;
  const tags = t;
  if (tags) {
    const tagsArray = tags.split(" , ");
    let tagsEl = () => {
      return tagsArray.slice(-2).map((el) => (
        <Link key={el} href={`/tag/${el}`}>
          <span className="px-1 cursor-pointer text-xs font-semibold inline-block py-1 rounded text-red-600 bg-red-200  last:mr-0 mr-1">
            #{el.replace(/-/g, " ")}
          </span>
        </Link>
      ));
    };
    allTags = tagsEl;
  }

  return <div>{tags && allTags()}</div>;
}
