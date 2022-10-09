import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" flex items-center  justify-center">
      <div className=" h-32 w-1/2 border-b text-center flex justify-center items-center">
        <h1 className=" font-bold text-2xl">
          <div className=" ">
            404 - Can you Beleive It !!
            <br /> Page Not Found Lol . <br />
            <Link href="/" ><span className=" text-blue-700 underline cursor-pointer">{"<< Back home"}</span></Link>
          </div>
        </h1>
      </div>
    </div>
  );
}
