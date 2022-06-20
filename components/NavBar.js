import Image from "next/image";
import Link from "next/link";
import {
  CameraIcon,
  HomeIcon,
  LockClosedIcon,
  MenuIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const categories = [
    {
      label: "Reality Tv",
      link: "/reality-tv",
    },
    {
      label: "Movies & Enter...",
      link: "/movies-and-entertainement",
    },

    {
      label: "Member Login",
      link: "/login",
    },
    {
      label: "Become Member",
      link: "/register",
    },
  ];
  const navEl = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className=" h-6 text-red-700" />,
    },
    {
      name: "Reality-TV",
      link: "/reality-tv",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Stories ",
      link: "/movies-and-entertainment",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },

    // { name: "Food & Recipes" },
  ];
  return (
    <nav className=" fixed w-full top-0 md:flex justify-center space-x-4  z-50 bg-white  border-b">
      <div className="relative lg:h-28 h-10 md:h-24 md:w-20  rounded-lg ">
        <Image
          src="https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png"
          className=" p-2"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div>
        <div className=" py-2 px-5 md:px-0  bg-white ">
          <div className=" flex justify-center  md:py-4 md:px-5">
            <Link href={"/topics"}>
              <button className=" w-full  flex  items-center   md:border-2  rounded-full ">
                <input
                  className="ml-4  flex-grow mr-2  text-black focus:outline-none py-1 transparent"
                  type="text"
                  placeholder="Start your search"
                />

                <SearchIcon className="  hidden md:inline-flex h-7 cursor-pointer rounded-full  bg-red-700 p-1 text-white" />
              </button>
            </Link>

            {!showMenu && (
              <div
                onClick={() => setShowMenu(true)}
                className="flex bg-red-700 text-white font-bold rounded cursor-pointer  md:hidden items-center  justify-star space-x-2"
              >
                <div className=" flex items-center space-x-2 p-1 rounded-full">
                  MENU
                  <MenuIcon className="h-6" />
                </div>
              </div>
            )}
            {showMenu && (
              <div
                onClick={() => setShowMenu(false)}
                className="flex  bg-red-700 text-white font-bold rounded cursor-pointer  md:hidden items-center  justify-star space-x-2"
              >
                <div className=" flex items-center space-x-2 p-1 rounded-full">
                  CLOSE
                  <span className=" font-black px-2">{"X"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" ease-in-out duration-500 transition bg-white">
          {showMenu ? (
            <ul className=" grid grid-cols-2 m-2 ">
              {categories.map((el, n) => (
                <ul key={n} className="  ml-5 px-2 space-y-4">
                  <Link href={el.link}>
                    <li className="cursor-pointer text-blue-900 hover:to-blue-700  text-lg font-bold border-b  line-clamp-1">
                      {el.label}
                    </li>
                  </Link>
                  <ul className=" space-y-3">
                    {el.topics?.map((topic, n) => (
                      <li key={n} className=" ">
                        <Link href={topic.link}>
                          <span className=" hover:bg-red-50 cursor-pointer ease-in-out duration-500 px-2 rounded text-sm font-semibold">
                            {topic.label}
                          </span>
                        </Link>
                        <ul className=" space-y-2 mt-2 ml-2">
                          {topic.tags?.map((tag, n) => (
                            <li key={n} className=" ">
                              <Link href={tag.link}>
                                <span className=" px-2 cursor-pointer rounded text-sm font-semibold">
                                  {">>"} {tag.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ul>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className=" md:flex  hidden  ">
          <div className=" flex border-black  justify-center w-full lg:px-5">
            <ul className="md:flex  md:space-x-6 border-t  md:items-center  md:justify-end grid grid-cols-5 md:grid-cols-3">
              {navEl.map((el, index) => (
                <Link key={index} href={`${el.link}`}>
                  <li className="hover:bg-gray-200    py-2   font-semibold cursor-pointer  lg:px-4 items-center justify-center flex">
                    {el.name}
                  </li>
                </Link>
              ))}
              {!showMenu && (
                <div
                  onClick={() => setShowMenu(true)}
                  className=" items-center text-gray-900 justify-star space-x-2"
                >
                  <div className=" bg-red-700 text-white cursor-pointer font-bold flex items-center space-x-2 p-1 rounded">
                    MENU
                    <MenuIcon className="h-6" />
                  </div>
                </div>
              )}
              {showMenu && (
                <div
                  onClick={() => setShowMenu(false)}
                  className=" items-center text-gray-900 justify-star space-x-2"
                >
                  <div className=" bg-red-800 text-white font-bold cursor-pointer flex items-center space-x-2 p-1 rounded">
                    CLOSE
                    <span className=" font-black px-2">{"X"}</span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
