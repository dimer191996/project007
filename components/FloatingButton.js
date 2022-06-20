import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  MailIcon,
  MailOpenIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

export default function FloatingButton({ hidebutton, showbutton, hideHeader }) {
  return (
    <div className="  border-t  flex w-full justify-center  fixed bottom-0 bg-white z-30">
      {hideHeader && (
        <div className="  absolute right-4  top-2 items-center flex justify-center z-40">
          <button
            onClick={hidebutton}
            className=" font-bold border border-red-800  rounded-full px-4 py-2 text-red-800"
          >
            <span className=" text-xl">X</span>
          </button>
        </div>
      )}
      {!hideHeader && (
        <div className=" absolute right-50 -top-4 items-center flex justify-center z-40">
          <button
            onClick={showbutton}
            className=" bg-green-800 font-bold  rounded-full px-4 text-white"
          >
            <ArrowCircleUpIcon className=" h-6" />
          </button>
        </div>
      )}

      <div
        className={` lg:w-1/3 md:w-1/2 w-full ${
          hideHeader && "my-15 "
        }  relative  space-y-5 cursor-pointer pt-6 pb-4  rounded-t md:px-6 px-4 flex flex-col text-center text-lg   font-bold text-black`}
      >
        {hideHeader && (
          <div className="flex justify-center text-4xl mt-4 font-black">
            <MailIcon className=" text-green-400 h-12" />
          </div>
        )}
        {hideHeader && (
          <p className="   text-center ">
            <span className="text-xl mb-4">
              Join our newsletter subscribers list to get the latest news,
              updates, delivered directly in your inbox.{" "}
            </span>
            <br /> <br />
            <span className=" text-green-700 text-2xl border-t border-b my-2">
              Only 2 articles per week.
            </span>
          </p>
        )}

        <Link href="/subscription">
          <div className=" h-8 text-gray-100 flex justify-center items-center px-3 border border-green-700 w-full rounded bg-green-600 ">
            {hideHeader && "Click Here To Subscribe"}{" "}
            {!hideHeader && "Subscribe Newsletter"}
          </div>
        </Link>
      </div>
    </div>
  );
}
