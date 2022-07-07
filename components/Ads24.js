import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";

export default function Ads24() {
  const ads = [
    {
      image: "https://i.ibb.co/0FyynNx/Capas-PLR-4-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },

    {
      image: "https://i.ibb.co/tL10x04/Capas-PLR-3-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
    {
      image: "https://i.ibb.co/rFkwY93/Capas-PLR-2-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
    {
      image: "https://i.ibb.co/gDFwRj1/Capas-PLR-1-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
    {
      image: "https://i.ibb.co/HFw8J87/005-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
    {
      image: "https://i.ibb.co/dkqFngf/003-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
    {
      image: "https://i.ibb.co/WGgTpR8/004-min.webp",
      title: "how to train your dog",
      link: "https://www.digistore24.com/redir/434590/db191996/",
    },
  ];
  return (
    <div>
      <div className="mt-4 mb-3">
        <div className="not-prose relative  overflow-hidden">
          <div className="relative overflow-auto">
            <div className="   mx-auto   min-w-0 ">
              <div className="flex justify-center">
                {ads.slice(4, 5).map((data, index) => (
                  <div
                    key={index}
                    className=" snap-center flex-none  rounded overflow-hidden m-2  "
                  >
                    <Link href={data.link} class="py-1">
                      <div class="flex space-x-4">
                        <div class="flex-1 space-y-6 py-1">
                          <div class="  rounded">
                            <div
                              className={`rounded-lg overflow-hidden  cursor-pointer `}
                            >
                              <div className={`relative  h-64 w-64 `}>
                                <Image
                                  src={data.image}
                                  className=" rounded-lg "
                                  objectFit="cover"
                                  layout="fill"
                                  position="relative"
                                  alt={data.title}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" separator font-bold"></div>
      </div>
    </div>
  );
}
