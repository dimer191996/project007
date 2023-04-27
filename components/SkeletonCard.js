import React from "react";

export default function SkeletonCard() {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center ">
        <div className=" w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl">
          <div className="flex flex-col space-y-2">
            <div className=" flex flex-col  mb-2 p-1  hover:bg-gray-50 ease-out duration-500  rounded-lg cursor-pointer">
              <div className="flex">
              
                  <div className=" relative rounded-md bg-gray-300 h-[99.5px] w-1/3 md:h-[149px] md:w-[248px]">
    
          
                  </div>
               
                <div className= "w-2/3 mx-1 space-y-2 ml-2">
                    <div className=" h-[69.5px] md:h-[100px] w-full rounded-md bg-gray-300  "></div>
                    <div className=" h-[30px] md:h-[40px]  w-full rounded-md bg-gray-300 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
