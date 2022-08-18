import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";

export default function Ads24() {
  const ads = [
    {
      image: "https://i.imgur.com/IlH8tTT.jpg",
      title:
        "Monobeach Princess Tent Girls Large Playhouse Kids Castle Play Tent with Star Lights Toy for Children Indoor",
      link: "https://www.digistore24.com/redir/434590/db191996/",
      order: "https://i.imgur.com/g58QRg2.png",
    },
  ];
  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="flex justify-center">
                <div className="snap-x overflow-x-auto scrollbar-hide  flex justify-center ">
                  {ads.map((data, index) => (
                    <div className=" snap-center shadow p-2 cursor-pointer flex-none rounded overflow-hidden m-2 ">
                      <Link href={data.link} class="py-1">
                        <div className="relative h-64 w-64">
                          <Image
                            src={data.image}
                            className=" rounded-lg "
                            objectFit="contain"
                            layout="fill"
                            position="relative"
                            alt={data.title}
                          />
                          <div className=" absolute">
                            <div className=" rounded text-white bg-red-700 font-black px-2">
                              -34% $28.95
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className=" w-64">
                        <h2 className=" line-clamp-3 font-bold hover:text-red-700">
                          {data.title}...
                        </h2>
                      </div>
                      <Link href={data.link} class="py-1">
                        <div className="relative h-20 w-64">
                          <Image
                            src={data.order}
                            className=" rounded-lg "
                            objectFit="contain"
                            layout="fill"
                            position="relative"
                            alt={data.title}
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" separator font-bold"></div>
      </div>
    </div>
  );
}
