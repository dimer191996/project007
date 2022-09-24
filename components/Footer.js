import Link from "next/link";
import React from "react";
export default function Footer() {
  const tags =
    "movies , celebrity , amazon , lpbw , sisters-wives , movie-review , the-Art-of-Improvement , 90-Day-The-Single-Life , 90-day-fiance , 90-day-fiance-before-the-90-days , 90-day-fiance-happy-ever-after , 90-day-fiance-couples , the-ultimatum-marry-or-move-on";
  const tagsArray = tags.split(" , ");
  return (
    <div>
      <footer className=" bg-gray-100 shadow-lg border-t dark:bg-gray-800">
        <div className="md:flex  pt-4 my-5  justify-center items-center ">
          <div className=" md:flex justify-center  lg:w-1/2 ">
            <div className=" md:w-1/2">
              <h2 className=" text-lg text-center py-2 border-b mb-2 font-bold">
                Popular Tags
              </h2>

              <ul>
                {tagsArray.map((el, index) => (
                  <li
                    key={index}
                    class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-500 text-red-100 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-archive mr-2"
                    >
                      <polyline points="21 8 21 21 3 21 3 8"></polyline>
                      <rect x="1" y="3" width="22" height="5"></rect>
                      <line x1="10" y1="12" x2="14" y2="12"></line>
                    </svg>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" md:w-1/2">
              <div className=" flex justify-center">
                <iframe
                  src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fweb.facebook.com%2Fgroups%2F1118449878512007&width=280&show_metadata=true&appId=321461765200716&height=1032"
                  width="280"
                  height="310"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className=" lg:w-1/2 md:w-3/4 w-full  border rounded-lg ">
            <ul className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-4  font-semibold   sm:justify-center sm:mt-0">
              <li className=" text-blue-600 lg:text-start text-center">
                <Link href="/about-us" className="hover:underline underline">
                  About Us
                </Link>
              </li>
              <li className=" text-blue-600 lg:text-start text-center">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className=" text-blue-600 lg:text-start text-center">
                <Link href="/copyright" className="hover:underline">
                  Copyright
                </Link>
              </li>
              <li className=" text-blue-600 lg:text-start text-center">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className=" text-blue-600 lg:text-start text-center">
                {" "}
                <Link href="/disclaimer" className="hover:underline">
                  Quick Disclaimer
                </Link>
              </li>
              <li className=" text-blue-600 lg:text-start text-center">
                <Link href="/terms-conditions" className="hover:underline">
                  Terms And Conditions
                </Link>
              </li>{" "}
            </ul>
          </div>
        </div>
        <div>
          <li className=" text-blue-600 lg:text-start text-center">
            <Link href="#" className="hover:underline text-xs">
              <div className=" cursor-pointer text-red-800">
                <span className=" text-sm">Earn Money By writing For Us</span>
                <br />
                db191996@gmail.com
              </div>
            </Link>
          </li>
        </div>
        <div className="flex  items-center justify-center mt-4 mb-32">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://www.hotseatmag.com/" className="hover:underline">
              BwCode™ | Dimer
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <hr className="mb-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </footer>
    </div>
  );
}
