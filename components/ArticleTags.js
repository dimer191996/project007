import Link from "next/link";
import React from "react";

export default function ArticleTags({ t , tagsN }) {
  let allTags;
  const tags = t;
  if (tags) {
    const tagsArray = tags.split(" , ");
    let tagsEl = () => {
      return tagsArray.slice(-tagsN).map((el) => (
        <Link key={el} href={`/tag/${el}`}>
          <span className="px-1 cursor-pointer mb-1 text-sm font-semibold inline-block border-b border-red-700  text-gray-700 bg-white  last:mr-0 mr-1">
            #{el.replace(/-/g, "")}
          </span>
        </Link>
      ));
    };
    allTags = tagsEl;
  }

  return <div>{tags && allTags()}</div>;
}
