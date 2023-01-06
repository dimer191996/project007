import Link from "next/link";
import React from "react";
import { MdRssFeed } from 'react-icons/md';
export default function Footer() {
  return (
    <div>

      <footer className=" bg-gray-100 shadow-lg dark:bg-gray-800 my-32">
        <div className="flex justify-center py-10"> 
          <div className="">
              <a
                href="https://www.hotseatmag.com/rss.xml"
                rel="noreferrer"
                target="_blank"
              >
                <MdRssFeed color="#ee802f" size="30px" />
              </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" lg:w-1/2 md:w-3/4 w-full  ">
            <ul className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-4  font-semibold   sm:justify-center sm:mt-0">
              <li className="lg:text-start text-center">
                <Link href="/about-us" className="hover:underline underline">
                  About Us
                </Link>
              </li>
              <li className="lg:text-start text-center">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className="lg:text-start text-center">
                <Link href="/copyright" className="hover:underline">
                  Copyright
                </Link>
              </li>
              <li className="lg:text-start text-center">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="lg:text-start text-center">
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
        <div className="flex  items-center justify-center mt-4 ">
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
