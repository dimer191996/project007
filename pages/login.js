import Head from "next/head";
import Link from "next/link";

export default function login() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>Login | HotSeatMag</title>

        <meta property="og:title" content="Login | HotSeatMag" />

        <meta property="og:url" content="https://www.hotseatmag.com/login" />

        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <div className="my-10 border-b">
        <div
          id=""
          className="bg-white  text-base w-5/6 md:w-1/2 lg:w-1/3  rounded-lg  m-auto -brown-400  flex flex-col "
        >
          <div id="whoobe-pa28x" className="p-4 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <span className="md:text-xl text-center text-2xl lg:text-2xl   font-black ">
                <span className="">
                  <span className="text-red-600">W</span>ELCOME BACK
                  <br />
                  <span className="text-red-600">H</span>OT{" "}
                  <span className="text-red-600">S</span>EAT{" "}
                  <span className="text-red-600">M</span>EMBER
                </span>{" "}
              </span>
            </div>
            <div className=" flex flex-col justify-center">
              <div className=" md:mx-10">
                <input
                  type="email"
                  autocomplete="off"
                  className="p-1 w-full px-4 border my-4 "
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="password"
                  autocomplete="off"
                  className="p-1 w-full px-4 border my-4 border-black"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />

                <button
                  type="button"
                  value="button"
                  className="hover:text-gray-100 focus:shadow-lg focus:outline-none font-black text-white w-full hover:bg-red-600 bg-red-700  m-auto my-4 px-6 py-2  text-lg rounded shadow-px-4 border-0"
                  id="whoobe-wkfvm"
                >
                  {"LOG IN"}
                </button>

                <div className="my-2 flex flex-col">
                  <div>
                    <Link
                      href="/register"
                      className=" text-black font-bold underline py-4"
                    >
                      Don't have an account ? Click here.
                    </Link>
                  </div>
                  <div className=" flex font-bold items-center justify-center mt-3">
                    ----- comming soon -----
                  </div>
                  <div className=" my-2">
                    <button
                      className=" m-auto items-center    py-2 flex  font-bold hover:bg-gray-100 justify-center  text-sm rounded shadow-px-4 border w-full"
                      id="whoobe-wkfvm"
                    >
                      Continue without a password
                    </button>
                  </div>
                  <div className=" my-2">
                    <button
                      className=" m-auto items-center    py-2 flex  font-bold hover:bg-gray-100 justify-center  text-sm rounded shadow-px-4 border w-full"
                      id="whoobe-wkfvm"
                    >
                      Continue with Google
                    </button>
                  </div>
                  <div className=" my-2">
                    <button className=" m-auto font-bold  items-center flex hover:bg-gray-100 justify-center py-2   text-sm rounded shadow-px-4 border w-full">
                      Continue With Facebook
                    </button>
                  </div>
                </div>
                <div className=" items-center flex flex-col my-2">
                  <div className=" my-2">
                    <Link
                      className="m-auto underline   flex justify-center py-2 text-gray-900   text-sm rounded"
                      href="/forget-password"
                    >
                      Forget Your Password ?
                    </Link>
                  </div>
                  <Link
                    className="m-auto underline text-sm  items-center  flex justify-center py-2 text-gray-900   rounded"
                    href="/contact"
                  >
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
