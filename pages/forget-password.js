import Head from "next/head";
import Link from "next/link";

export default function ForgetPassword() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>Forget Password | HotSeatMag</title>

        <meta property="og:title" content="Forget Password  | HotSeatMag" />

        <meta
          property="og:url"
          content="https://www.hotseatmag.com/forget-password"
        />

        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <div className="my-10 border-b">
        <div
          id=""
          class="bg-white text-base w-5/6 md:w-1/2 lg:w-1/2 rounded-lg  m-auto -brown-400  mt-20 flex flex-col"
        >
          <div id="whoobe-pa28x" class="p-4 flex flex-col">
            <div class="flex flex-col items-center justify-center">
              <span className="md:text-3xl text-2xl lg:text-4xl text-center   font-black ">
                Forget Your Password ?
              </span>
              <div>
                <span className=" text-black text-center flex justify-center font-bold  py-4">
                  Do you have an account ? <br /> If yes add your Email. <br />
                </span>
              </div>
            </div>
            <div className=" flex flex-col justify-center">
              <div className=" md:mx-10">
                <input
                  type="email"
                  auc
                  className="p-1 w-full px-4 border my-4 border-black"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required="false"
                />

                <button
                  type="button"
                  value="button"
                  class="hover:text-gray-100 font-black text-white w-full hover:bg-red-600 bg-red-700  m-auto my-4 px-6 py-2  text-lg rounded shadow-px-4 border-0"
                  id="whoobe-wkfvm"
                >
                  RECOVER
                </button>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  className=" text-black items-center flex justify-center font-bold underline py-4"
                  href="/register"
                >
                  {"<< Create a new Account"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
