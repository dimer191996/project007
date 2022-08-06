import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <div>
      <footer className=" bg-gray-100 shadow-lg border-t dark:bg-gray-800">
        <div className="md:flex  pt-4 my-5  justify-center items-center ">
          <div className="  ">
            <div className=" w-full">
              <h2 className=" text-lg text-center font-bold">Popular Tags</h2>
              <ul className=" text-center mb-5 ">
                <li className="m-1">
                  <a className="" href="https://www.hotseatmag.com/tag/lpbw">
                    <span className=" p-1 bg-red-600 text-white text-sm font-bold rounded">
                      LPBW
                    </span>
                  </a>
                </li>
                <li className="m-1">
                  <a
                    className=""
                    href="https://www.hotseatmag.com/tag/90-day-fiance"
                  >
                    <span className=" p-1 bg-red-600 text-white text-sm font-bold rounded">
                      90 Day Fiance
                    </span>
                  </a>
                </li>
                <li className="m-1">
                  <a
                    className=""
                    href="https://www.hotseatmag.com/tag/movie-review"
                  >
                    <span className=" p-1 bg-red-600 text-white text-sm font-bold rounded">
                      Moviereview, Movienews
                    </span>
                  </a>
                </li>
                <li className="m-1">
                  <a
                    className=""
                    href="https://www.hotseatmag.com/tag/90-day-fiance-before-the-90-days"
                  >
                    <span className=" p-1 bg-red-600 text-white text-sm font-bold rounded">
                      90 Day Fiance Before The 90 Days
                    </span>
                  </a>{" "}
                </li>

                <li className="m-1">
                  <a
                    className=""
                    href="https://www.hotseatmag.com/tag/the-ultimatum-marry-or-move-on"
                  >
                    <span className=" p-1 bg-red-600 text-white text-sm font-bold rounded">
                      The Ultimatum Marry Or Move On
                    </span>
                  </a>
                </li>
                <li className="m-1">
                  <a
                    className=""
                    href="https://www.hotseatmag.com/tag/90-day-fiance-happy-ever-after"
                  >
                    <span className=" p-1 border-b-2 border-red-600  text-sm font-bold rounded">
                      90 Day Fiance Happy Ever After
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" w-full">
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
              <li className=" lg:text-start text-center">
                <Link href="/about-us" className="hover:underline underline">
                  About Us
                </Link>
              </li>
              <li className=" lg:text-start text-center">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className=" lg:text-start text-center">
                <Link href="/copyright" className="hover:underline">
                  Copyright
                </Link>
              </li>
              <li className=" lg:text-start text-center">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className=" lg:text-start text-center">
                {" "}
                <Link href="/disclaimer" className="hover:underline">
                  Quick Disclaimer
                </Link>
              </li>
              <li className=" lg:text-start text-center">
                <Link href="/terms-conditions" className="hover:underline">
                  Terms And Conditions
                </Link>
              </li>{" "}
            </ul>
          </div>
        </div>
        <div>
          <li className=" lg:text-start text-center">
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
