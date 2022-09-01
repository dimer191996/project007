import React from "react";
import Link from "next/link"
export default function LinkedArticle() {
  return (
    <Link href={"/article/5-small-changes-that-will-improve-your-life"}>
      <div className="prose">
        <table className="border-l border-r bg-gray-100 hover:bg-gray-50 cursor-pointer border-gray-200">
          <thead>
            <tr>
              <th className=" text-center text-lg">
                5 small changes that will improve your life.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" font-semibold text-gray-600 text-center">
                When you set your alarm before bed, put it on the other side of
                the bedroom.
              </td>
            </tr>
            <tr>
              <td className=" font-semibold text-gray-600 text-center">
                Add one personal item to your work to-do list each day.
              </td>
            </tr>
            <tr>
              <td className=" font-semibold text-gray-600 text-center">
                Keep a “Praise” folder in your email inbox.
              </td>
            </tr>
            <tr>
              <td className=" font-semibold text-gray-600 text-center">
                KCarry a water bottle with you everywhere you go.
              </td>
            </tr>
            <tr>
              <td className=" font-semibold text-gray-600 text-center">
                Don’t go to sleep angry at the people you care about.
              </td>
            </tr>
            <tr>
              <td className=" bg-blue-100 text-xl font-semibold text-gray-600 text-center">
               Learn More {">>"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Link>
  );
}
