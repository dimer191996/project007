import { CurrencyYenIcon } from "@heroicons/react/solid";
import React from "react";
import { FacebookIcon } from "react-share";
export default function FacebookGroup(props) {
  return (
    <>
      <a
        href="https://web.facebook.com/groups/1118449878512007"
        className=" rounded-lg flex justify-center items-center w-full shadow-sm bg-gray-50 mb-5 overflow-hidden "
      >
        <button className="w-full bg-blue-900 hover:bg-blue-800 m-2 leading-none py-2 px-3 rounded-lg text-white">
          <div className=" md:flex justify-center md:px-4 items-center">
            <div className="flex md:border-r border-b py-2 md:py-0 md:mr-5 flex-col justify-center items-center">
              <div className="pr-4">
                {" "}
                <FacebookIcon size={28} round={true} />
              </div>
              <div className=" font-bold md:pr-4">200,107 Members</div>
            </div>
            <div className=" text-sm font-bold">
              <span className=" text-2xl">Visit </span> <br />
              Our Facebook Group
            </div>
          </div>
        </button>
      </a>
      {props.group && ""}
    </>
  );
}
