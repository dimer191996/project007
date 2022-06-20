import React from "react";

export default function SocialMedia() {
  return (
    <div>
      {" "}
      <div className=" py-6">
        <h1 className=" text-center  font-bold text-lg">JOIN US</h1>
        <div className="flex justify-center">
          <div className="mt-4 w-1/2 items-center">
            <a
              href="https://web.facebook.com/groups/1118449878512007"
              className=""
            >
              <button className="w-full bg-blue-900 hover:bg-blue-800 m-2 leading-none py-2 px-3 rounded-lg text-white">
                <div className=" flex justify-center items-center">
                  <div className="pr-4">FB </div>
                  <div className="flex">
                    <div className=" font-bold pr-4">20,097 </div>
                    <div className=" text-sm font-bold">Members</div>
                  </div>
                </div>
              </button>
            </a>
            <a
              href="https://www.youtube.com/channel/UC-Cw_St0-4eCLW_5tEAIKkA?sub_confirmation=1"
              className=" "
            >
              <button className="w-full bg-red-900 hover:bg-red-800 m-2 leading-none py-2 px-3 rounded-lg text-white">
                <div className=" flex justify-center px-4 items-center">
                  <div className="pr-4">YT</div>
                  <div className="flex">
                    <div className=" font-bold pr-4">807</div>
                    <div className=" text-sm font-bold">Subscribers</div>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
