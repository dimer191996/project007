import React from "react";

export default function SocialMedia() {
  return (
    <div>
      {" "}
      <div className="">
        <div className="flex justify-center">
          <div className="mt-4 w-2/3 items-center">
            <a
              href="https://www.youtube.com/channel/UC-Cw_St0-4eCLW_5tEAIKkA?sub_confirmation=1"
              className=" "
            >
              <button className="w-full bg-red-900 hover:bg-red-800 m-2 leading-none py-2 px-3 rounded-lg text-white">
                <div className=" flex justify-center px-4 items-center">
                  <div className="pr-4"></div>
                  <div className="flex items-center justify-center">
                    <div className=" font-bold text-lg  p-2 shadow rounded">
                      Subscribers To Our Youtube Channel
                    </div>
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
