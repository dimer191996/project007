import Link from "next/link";
import React from "react";
import { MdRssFeed } from 'react-icons/md';
export default function Footer() {
  return (
    <div>
<div className=" separator"></div>
      <footer className=" dark:bg-gray-800 mb-32">
       
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
            © 2023{" "}
            <a href="https://www.hotseatmag.com/" className="hover:underline">
              BwCode™ | Dimer
            </a>
            . All Rights Reserved.
          </span>
        </div>
       <div className="flex justify-center items-center">
          <div className="  w-full flex  items-center justify-center ">
            <ul className=" inline-flex text-center space-x-2 text-xs ">
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
      </footer>
    </div>
  );
}
