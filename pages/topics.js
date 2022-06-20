import React, { useState } from "react";
import Link from "next/link";
import Data from "../data/index.json";
import MoreArticles from "../components/MoreArticles";
import { useRouter } from "next/router";
import Head from "next/head";
export default function () {
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <div className=" absolute h-screen w-full top-0 bottom-0 bg-white z-50  ">
      <Head>
        <title>Search | HotSeatMag</title>

        <meta
          name="description"
          content="Search All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />

        <meta property="og:title" content="Search | HotSeatMag" />

        <meta property="og:url" content="https://www.hotseatmag.com/topics" />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <div className="py-3 items-center flex justify-center">
        <button
          onClick={() => router.back()}
          className=" bg-gray-500 font-bold rounded px-4 text-white"
        >
          Close X
        </button>
      </div>
      <div className=" flex  flex-col justify-center items-center  bg-white">
        <div className=" flex flex-col mb-6 pt-5   justify-center items-center">
          <h2 className="m-0 p-0  text-2xl">
            <span className="md:text-xl font-semibold">
              Search Anything here
            </span>
          </h2>
        </div>
        <div className=" w-full flex lg:w-1/2   rounded-lg  bg-white">
          <input
            onChange={(event) => setQuery(event.target.value)}
            className=" border text-xl  flex mx-5 w-full px-4 py-3  mb-4 rounded-full  focus:outline-none "
            placeholder="Search here"
          />
        </div>
        <div className="lg:w-1/2 h md:2/3">
          <div className=" w-full  border-b md:grid md:grid-cols-2">
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-gq+t-1c-fj+xa"
              data-ad-client="ca-pub-4491397756399283"
              data-ad-slot="9911443569"
              data-full-width-responsive="true"
            ></ins>
            {Data.filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
              .slice(0, 9)
              .map((post, index) => (
                <Link href={post.link} key={index}>
                  <div className={` m-4 bg-${post.color}-600`}>
                    {post.article && (
                      <div>
                        <div className=" border-t py-2 ">
                          <p className=" cursor-pointer hover:underline text-blue-600 line-clamp-2">
                            {post.name}
                          </p>
                        </div>
                        <p className="text-sm font-bold line-clamp-3">
                          {" "}
                          <span className=" text-gray-400 ">
                            {post.createdAt} -
                          </span>{" "}
                          {post.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-gq+t-1c-fj+xa"
              data-ad-client="ca-pub-4491397756399283"
              data-ad-slot="9911443569"
              data-full-width-responsive="true"
            ></ins>
            {Data.filter((post) => {
              if (query === "") {
                return post;
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
              .slice(9, 20)
              .map((post, index) => (
                <Link href={post.link} key={index}>
                  <div className={` m-4 bg-${post.color}-600`}>
                    {post.article && (
                      <div>
                        <div className=" border-t py-2 ">
                          <p className=" cursor-pointer hover:underline text-blue-600 line-clamp-2">
                            {post.name}
                          </p>
                        </div>
                        <p className="text-sm font-bold line-clamp-3">
                          {" "}
                          <span className=" text-gray-400 ">
                            {post.createdAt} -
                          </span>{" "}
                          {post.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
          </div>
          <div className="h-screen">
            <h2 className="m-0 p-0  text-center mt-5 text-2xl">
              <span className="md:text-xl font-semibold">NEXT</span>
            </h2>
            <MoreArticles category={"tv"} />
          </div>
        </div>
      </div>
    </div>
  );
}
