import Link from "next/link";
import React from "react";
import WithScreen from "../Layouts/WithScreen";

export default function Categories() {
  const categories = [
    {
      label: "Reality Tv",
      link: "/reality-tv",
    },
    {
      label: "Movies & Entertainement",
      link: "/movies-and-entertainement",
    },
  ];
  return (
    <div id="topics">
      <WithScreen width="sm:w-full border-t  border-b md:w-1/2">
        <ul className=" md:flex">
          {categories.map((el, n) => (
            <ul key={n} className=" md:w-1/2  text-center px-2 space-y-4">
              <Link href={el.link}>
                <li className=" text-lg font-bold border-b  line-clamp-1">
                  {el.label}
                </li>
              </Link>
              <ul className=" space-y-3">
                {el.topics?.map((topic, n) => (
                  <li key={n} className=" ">
                    <Link href={topic.link}>
                      <span className="bg-red-100 hover:bg-red-50 cursor-pointer ease-in-out duration-500 px-2 rounded text-sm font-semibold">
                        {topic.label}
                      </span>
                    </Link>
                    <ul className=" space-y-2 mt-2 ml-2">
                      {topic.tags?.map((tag, n) => (
                        <li key={n} className=" ">
                          <Link href={tag.link}>
                            <span className="bg-red-100 px-2 cursor-pointer rounded text-sm font-semibold">
                              {tag.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </ul>
          ))}
        </ul>
      </WithScreen>
    </div>
  );
}
