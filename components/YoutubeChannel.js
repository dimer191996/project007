import React from "react";

export default function YoutubeChannel(props) {
  return (
    <>
      {props.video && (
        <>
          <div className=" separator font-bold">
            <div className=" border p-1 rounded-lg">
              This Video Was Recomended For You .
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <iframe
              height="315"
              src={`https://www.youtube.com/embed/${props.video}`}
              title="YouTube video player"
              frameBorder="0"
              className=" rounded-lg w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="https://www.youtube.com/channel/UC-Cw_St0-4eCLW_5tEAIKkA?sub_confirmation=1"
            className=" rounded-lg flex justify-center items-center w-full shadow-sm bg-gray-50 mb-5 overflow-hidden "
          >
            <button className="w-full bg-red-900 hover:bg-red-800 m-2 leading-none py-2 px-3 rounded-lg text-white">
              <div className=" flex justify-center md:px-4 items-center">
                <div className="flex border-r mr-2 flex-col justify-center items-center">
                  <div className="pr-4 pb-1">😋🙏</div>
                  <div className=" font-bold pr-4">807+ Sub</div>
                </div>
                <div className=" text-sm font-bold">
                  <span className=" text-2xl">Subscribe </span> <br />
                  To Our Youtube Channel
                </div>
              </div>
            </button>
          </a>
        </>
      )}
    </>
  );
}
