import moment from "moment";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";

export default function ArticleHeader2({ article }) {
  const cleanDate = (date) => {
    return moment(date).fromNow();
  };
  return (
    <section>
       <div className=" px-3">
        <div className=" my-5 flex gap-y-2 gap-x-2">
          <div className=" flex p-1  rounded-lg cursor-pointer hover:bg-green-100 duration-500 ease-out px-2">
            🐻 Views : <span className=" px-2  font-bold">{article.views}</span>
          </div>

          <div className=" flex p-1 rounded-lg cursor-pointer hover:bg-green-100 duration-500 ease-out px-2">
            🌻 Shares :{" "}
            <span className=" px-2  font-bold">{article.shares}</span>
          </div>
        </div>
      </div>
      <div className=" px-4 flex bg-white flex-row items-center justify-between ">
        <div className="flex flex-col   py-2 ">
          <div className="  leading-4  font-semibold flex-grow">
            <i itemprop="name" className=" md:text-lg text-md">
              By {article.author}
            </i>
          </div>
          <div className="  leading-4  flex-grow">
            <i className="">{cleanDate(article.createdAt)}</i>
          </div>
        </div>
        <div></div>
        <div>
          <div className=" text-sm font-bold">3 min Read</div>
        </div>
      </div>
    </section>
  );
}
