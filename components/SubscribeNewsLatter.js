import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function SubscribeNewsLatter(props) {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <Link href="/subscription">
      <div className=" pb-5 cursor-pointer border-t border-b py-2   md:w-full ">
        <div className="md:flex md:justify-center md:items-center px-5 bg-gray-200 py-2 ">
          <div className=" flex flex-col-reverse ">
            <form
              name="subscription"
              method="POST"
              action="/subscribe/?success=true"
              data-netlify="true"
              id="sqv-comment-form-media"
              className="flex justify-center items-center"
            >
              <input type="hidden" name="form-name" value="subscription " />

              <div className="pl-3 flex flex-col space-y-4  ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-control rounded focus:outline-dashed px-2"
                  placeholder="Email *"
                  size="30"
                  style={{ height: "35px" }}
                  aria-required="true"
                />
                <button
                  type="submit"
                  className=" rounded-lg mx-4 text-white px-6 bg-green-600 py-2 hover:bg-green-700 text-sm hover:text-gray-100 ease-in-out duration-100 border"
                  id="submit"
                  name="submit"
                >
                  {!props.removedesc
                    ? " Click Here To JOIN"
                    : "🙏 Subscribe to our Newslatter 🙏 ."}
                </button>
              </div>
            </form>
            <div className=" ">
              {!success ? (
                " "
              ) : (
                <span className=" flex ease-in-out justify-center items-center transition-opacity duration-500">
                  <p className=" px-2 rounded-md shadow-md text-center font-bold bg-green-600 text-white">
                    Thanks you for your Subscription !
                  </p>
                </span>
              )}{" "}
            </div>
            <span className="  justify-center my-2 items-center ease-in-out transition-opacity duration-500">
              {!props.removedesc && (
                <p className="  text-gray-900 font-bold text-center text-2xl mb-2">
                  <span>Subscribe to our Newslatter .</span>
                </p>
              )}
              {!props.removedesc && (
                <p className=" font-sans  text-red-900  text-center text-sm">
                  <span>
                    Join our subscribers list to get the latest <br /> news,
                    updates, delivered directly in your inbox.
                  </span>
                </p>
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

SubscribeNewsLatter.propTypes = {};

export default SubscribeNewsLatter;
