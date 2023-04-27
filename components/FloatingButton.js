import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import React from "react";

export default function FloatingButton({ actionButton, hideHeader }) {
  return (
    <>
      {!hideHeader && (
        <div className="     shadow flex w-full justify-center  fixed bottom-0 border-t-2 bg-white z-30">
          <div className=" absolute right-50 -top-4 border-2 rounded-full items-center flex justify-center z-40">
            <button
              onClick={actionButton}
              className=" bg-red-800 font-bold flex items-center  rounded-full px-4 text-white"
            >
              <ArrowCircleDownIcon className="h-8" />
              <span>hide this ad</span>
            </button>
          </div>

          <div
            className={` lg:w-3/4 mt-6 mx-4 mb-2 md:w-2/3 xl:w-4/5 bg-gray-200 w-full  relative  space-y-5 cursor-pointer pt-6 pb-4  rounded-t md:px-6 px-4 flex flex-col text-center text-lg   font-bold text-black`}
          >
            <ins
              class="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-4491397756399283"
              data-ad-slot="8015491666"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </div>
      )}
    </>
  );
}
