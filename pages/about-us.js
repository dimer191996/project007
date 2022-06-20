import Head from "next/head";
import React from "react";
import MoreArticles from "../components/MoreArticles";
import SubscribeNewsLatter from "../components/SubscribeNewsLatter";
import WithScreen from "../Layouts/WithScreen";

export default function aboutUs() {
  return (
    <div>
      <Head>
        <title>About Us | HotSeatMag</title>

        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />

        <meta property="og:title" content="About Us | HotSeatMag" />

        <meta property="og:url" content="https://www.hotseatmag.com/about-us" />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <WithScreen width=" md:w-1/2 px-2 w-full">
        <div className=" prose prose-md   lg:prose-xl   prose-a:text-red-800 pt-20 border-b  ">
          <header>
            <h1 className=" w-full  font-sans uppercase   ">
              About Hot Seat Media
            </h1>
          </header>{" "}
          <div className="flex justify-center items-center">
            <p className="">
              {" Evrything started with the group THE"}
              <b>{" 90 DAY FIANCE HOT SEAT GROUP"}</b>
              {" and If Your not a member please join now"}{" "}
              <a href="" pfac>
                {" "}
                {"here"}{" "}
              </a>
              .{" "}
              {
                "Trust me Its Fun !. we're over 20k beautyfull people. Welcome!!!"
              }{" "}
              <br />
              {
                " Since its inception in 2021, HotSeatMag has evolved to become good community and most renowned TLC entertainment news sites in the world, serving more than 13k people in the last month alone."
              }
            </p>{" "}
          </div>
          <div className="flex justify-center items-center">
            <p className="">
              {
                "We don't simply report on TLC Tv Shows like 90 Day Fiance, Happy Ever After , The '90 Day':Single Life..., short stories, crime stories, food and recipes...; we editorialize it with unique perspective that appeals to a wide range of readers, from casual entertainment fans to diehard enthusiasts readers ."
              }
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="">
              {
                "  Hot Seat Media is the ultimate TLC entertainment portal, providing news, reviews, and very soon podcasts on television, cinema, and  video reviews, as well as 'in the future' YouTube channel , among other things."
              }
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="">
              {
                " Hot Seat Media, which is supported on any platform, The team is\
              comprised of passionate people like Me Dimer Bwimba aka"
              }
              <a
                className="px-2"
                href="https://www.facebook.com/groups/1118449878512007/"
              >
                Dimer au Congo
              </a>
              {
                " I'm the CEO, CTO , Software Developper,..., And My Dog Hannah\
              who's the Product manager of the site,... . We are united by a\
              passion for all things entertainment and a desire to create and to\
              provide the best user experience , as well as the most engaging,\
              content possible for visitors to our site, which is why we created\
              Hot Seat Magazine."
              }
            </p>
          </div>
        </div>
        <SubscribeNewsLatter />
      </WithScreen>
    </div>
  );
}
