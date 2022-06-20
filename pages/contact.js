import { MailIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import WithScreen from "../Layouts/WithScreen";
import Head from "next/head";

export default function contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);
  return (
    <div className=" bg-gray-50">
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

          <title>Contact Us | HotSeatMag</title>

          <meta property="og:title" content="Contact Us | HotSeatMag" />

          <meta
            property="og:url"
            content="https://www.hotseatmag.com/contact-us"
          />

          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
          />
        </Head>
      <WithScreen width="">
        <div className=" border-b ">
          <div className=" md:flex justify-center my-8">
            <div id="respond" className=" p-5" style={{ display: "block" }}>
              <span className=" items-center font-bold my-5 justify-center flex text-3xl">
                CONTACT US
              </span>
              <form
                name="contact"
                method="POST"
                action="/contact/?success=true"
                data-netlify="true"
                id="sqv-comment-form-media"
                className="comment-form svq-form svq-media-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="comment-notes flex justify-center items-center">
                  <span className="px-2 text-sm rounded-md bg-gray-200 ">
                    Required fields are marked{" "}
                    <span className="required px-1"> * </span>
                  </span>
                  {success && (
                    <span className=" flex">
                      <span className="required px-1 hidden md:flex"> | </span>
                      <p className=" px-2 rounded-md shadow-md font-bold bg-green-600 text-white">
                        Thanks for your message!{" "}
                      </p>
                    </span>
                  )}
                </p>
                <div className="comment-form-notifications svq-notice request-response not-logged"></div>
                <div className=" md:flex flex-col my-4  space-y-4 justify-center items-center">
                  <div className="form-group space-y-4 ">
                    <input
                      id="author"
                      name="author"
                      type="text"
                      className="   w-full rounded p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary"
                      placeholder="Name *"
                      size="30"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="   w-full rounded p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary"
                      placeholder="Email *"
                      size="30"
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group ">
                    <textarea
                      className="   w-full rounded p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary"
                      id="message"
                      name="message"
                      cols="45"
                      rows="2"
                      aria-required="true"
                      placeholder="Message*"
                    ></textarea>
                  </div>
                  <div className="form-submit md:flex text-center mt-10">
                    <button
                      type="submit"
                      className=" w-full border-black border hover:bg-red-600 hover:text-white hover:border-none flex justify-center items-center px-4 py-2 rounded-lg"
                      id="submit"
                      name="submit"
                    >
                      <span className="btn--default-state">Send Message</span>
                      <MailIcon className="h-6 px-2" />{" "}
                      {/* <span className="btn--loading-state">
                  <span className="svq-icon icon-loading icon-is-loading icon--x18"></span>
                  Loading
                </span> */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </WithScreen>
    </div>
  );
}
