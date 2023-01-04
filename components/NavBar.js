import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { useRouter } from "next/router";


function NavLink({ href, label }) {
  const router = useRouter();
  const className = router.pathname === href ? 'border-b-4  border-red-600 ' : '';

  return (
    <Link href={href}>
      <li className={`hover:text-red-600 text-white  text-2xl  xl:text-3xl py-2 font-black cursor-pointer lg:px-4 items-center justify-center flex`}>
        <span className={className}>{label}</span>
      </li>
    </Link>
  );
}


export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  
  const navEl = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className=" h-6 text-red-700" />,
    },
    {
      name: "RealityTV",
      link: "/reality-tv",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Cinema",
      link: "/movies-and-entertainment",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Celebrity",
      link: "/celebrity",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Lifestyle",
      link: "/lifestyle",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Marketing",
      link: "/howto",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    // { name: "Food & Recipes" },
  ];
  return (

    <div className=" ">
      <header className="bg-black">
        <div className="flex justify-center md:mb-5 md:pb-5">

          <Link href="/">
            <div className="relative h-36 w-36  rounded-lg ">
              <Image
                src="https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png"
                className=" p-2"
                objectFit="contain"
                layout="fill"
                alt="HotSeatMag Logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center pb-5">
          <Link href={"/topics"}>
            <button className=" md:w-1/2 flex  items-center  border-2  rounded-full ">
              <input
                className="ml-4  flex-grow mr-2 bg-black text-black focus:outline-none py-1 transparent"
                type="text"
                placeholder="Start your search"
              />

              <SearchIcon className="inline-flex h-7 cursor-pointer rounded-full  bg-red-700 p-1 text-white" />
            </button>
          </Link>
        </div>
      </header>
      <nav className="sticky top-0 bg-black w-full z-50">
        <div className={` block sm:hidden items-center text-gray-900 justify-center`}>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="w-full text-2xl bg-red-700 text-white cursor-pointer font-bold flex items-center justify-center "
          >
            MENU
            <MenuIcon className="h-6" />
          </div>
        </div>
        {/* P menu */}
        <div className="sm:flex hidden   border-black justify-center  lg:px-5">
          <ul className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-6 gap-x-0  md:items-center md:justify-end relative ">
            {navEl.map((el, index) => (
              <NavLink key={index} href={el.link} label={el.name} />
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        {showMenu && <div className=" block sm:hidden pb-5 border-black justify-center w-full lg:px-5">
          <ul className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-6 md:space-x-6  md:items-center md:justify-end relative ">
            {navEl.map((el, index) => (
              <Link key={index} href={`${el.link}`}>
                <li className="hover:bg-gray-900 text-white text-2xl py-2 font-black cursor-pointer lg:px-4 items-center justify-center flex">
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>}
      </nav>
    </div>
  );
}
