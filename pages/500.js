import Head from "next/head";
import Link from "next/link";

export default function Custom500() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

        <title>Server Error | HotSeatMag</title>

        <meta property="og:title" content="Server Error | HotSeatMag" />

        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>

      <div className=" flex flex-col text-center space-y-6">
        <h1 className="lg:text-3xl text-2xl font-black">
          We apologize for the inconvenience{" "}
        </h1>
        <div className=" text-xl font caret-black">
          {" "}
          The website is currently under mentenance
        </div>
        <Link href={"/subscription"}>
          <div className=" cursor-pointer font-bold text-blue-600">
            Click here To Be notify when we're ready .
          </div>
        </Link>
      </div>
    </div>
  );
}
