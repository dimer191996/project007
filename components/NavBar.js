import Image from "next/image";
import Link from "next/link";
import {
  EyeOffIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

function NavLink({ href, label, el }) {
  const [celebSubcategoriesMenu, setCelebSubcategoriesMenu] = useState(false)
  const router = useRouter();
  const className =
    router.pathname === href ? "border-b-4  border-red-600 " : "";

  return (
    <Link href={href}>
      <li

        className={`hover:text-red-600 text-white relative text-sm md:text-2xl md:px-2 lg:px-2 lg:text-xl  xl:text-2xl py-2  font-black cursor-pointer items-center `}
      >
        <span onClick={()=>setCelebSubcategoriesMenu(!celebSubcategoriesMenu)} className={className}>{label}</span>
       { celebSubcategoriesMenu &&  <ul className=" absolute right-2 bg-black mt-1  z-40">
          {el?.sublink?.map((sub, index) => (
            <li
              key={index}
              className="hover:bg-gray-900 text-white w-48 ml-4 text-xl py-2 font-black cursor-pointer"
            >
              <Link href={sub.link}><span> ✔ {sub?.name}</span></Link>
            </li>
          ))}
        </ul>}
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
      name: "News",
      link: "/news",
      icon: <HomeIcon className=" h-6 text-red-700" />,
    },
    {
      name: "TV",
      link: "/reality-tv",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
    },
    {
      name: "Celebrity",
      link: "/celebrity",
      icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
      sublink: [
        {
          name: "Net Worth",
          link: "/celebrity/net-worth",
          icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
        },
        {
          name: "Biography",
          link: "/celebrity/biography",
          icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
        },
        {
          name: "Platic Surgery",
          link: "/celebrity/plastic-surgery",
          icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
        },
        {
          name: "Weight Loss",
          link: "/celebrity/weight-loss",
          icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
        },
        {
          name: "Lifestyle",
          link: "/celebrity/lifestyle",
          icon: <VideoCameraIcon className=" text-blue-700 h-6" />,
        },
      ],
    },
   

    // { name: "Food & Recipes" },
  ];
  return (
    <>
      <header className="bg-black py-4 sticky top-0 z-50">
        <div className="flex justify-center ">
          <div className="flex items-center justify-center w-full">
            <button className=" w-full md:w-1/2 px-3  flex  items-center   rounded-full ">
              <Link href="/">
                <div className="relative h-10 w-20  rounded-lg ">
                  <Image
                    src="https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png"
                    className=" p-2"
                    objectFit="contain"
                    layout="fill"
                    alt="HotSeatMag Logo"
                  />
                </div>
              </Link>
              <Link href={"/search"}>
                <input
                  className=" rounded px-4 bg-gray-800 flex-grow mr-2 text-white focus:outline-none py-2 transparent"
                  type="text"
                  placeholder="Start your search"
                />
              </Link>
              <SearchIcon className="inline-flex h-9 cursor-pointer rounded  bg-red-700 p-1 text-white" />
              <div
                className={` block sm:hidden items-center text-gray-900 justify-center`}
              >
                <div
                  onClick={() => setShowMenu(!showMenu)}
                  className="mx-1 text-2xl rounded bg-red-700 text-white cursor-pointer font-bold flex items-center justify-center "
                >
                  {!showMenu ? (
                    <MenuIcon className="h-9 p-1 rounded" />
                  ) : (
                    <EyeOffIcon className="h-9 p-1 rounded" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>{" "}
        {/* Mobile menu */}
        {showMenu && (
          <div className=" block sm:hidden pb-5 border-black justify-center w-full lg:px-5">
            <ul className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-6 md:space-x-6 m-4  md:items-center md:justify-end relative ">
              {navEl.map((el, index) => (
                <Link key={index} href={`${el.link}`}>
                  <li className="hover:bg-gray-900 text-white text-2xl  font-black cursor-pointer lg:px-4 py-1 flex-col flex">
                    {el.name}
                    <ul className=" md:justify-end relative ">
                      {el.sublink?.map((sub, index) => (
                        <li
                          key={index}
                          className="hover:bg-gray-900 text-md text-white ml-5 font-black cursor-pointer items-center flex"
                        >
                          <span className="text-xl"> ✔ {sub.name}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </header>
      <nav className=" bg-black w-full z-50">
        {/* P menu */}
        <div className="sm:flex hidden   border-black justify-center ">
          <ul className=" sm:grid sm:grid-cols-1 md:grid md:grid-cols-4 gap-x-0 text-sm  md:items-center md:justify-end relative ">
            {navEl.map((el, index) => (
              <NavLink key={index} href={el.link} label={el.name} el={el} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
