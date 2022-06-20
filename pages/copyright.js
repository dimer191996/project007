import Image from "next/image";
import React from "react";
import WithScreen from "../Layouts/WithScreen";
import copyright1 from "../assets/images/copyright.png";
import copyright2 from "../assets/images/copyright.jpg";
import copyright3 from "../assets/images/copyright1.jpg";
import SubscribeNewsLatter from "../components/SubscribeNewsLatter";
import MoreArticles from "../components/MoreArticles";
import Head from "next/head";

export default function copyright() {
  return (
    <div>
      <Head>
        <title>Copyright | HotSeatMag</title>

        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />

        <meta property="og:title" content="Copyright | HotSeatMag" />

        <meta property="og:url" content="https://www.hotseatmag.com/about-us" />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <WithScreen width=" md:w-1/2 px-2 w-full">
        {" "}
        <div className=" prose  prose-md   lg:prose-xl   prose-a:text-red-800 ">
          <header className=" my-10">
            <h1 className=" w-full  font-sans uppercase   ">
              Hot Seat Media Copyright
            </h1>
            <div>
              <Image objectFit="fill" width="500" src={copyright1} />
            </div>
            <h2 className="   font-sans flex items-center justify-center">
              Digital Millennium Copyright Act Policy, Notice and Takedown
              Procedure
            </h2>
          </header>
          <div className="">
            <p className="  border-r px-2 text-justify">
              It is our policy to expeditiously respond to proper notices of
              alleged copyright infringement that comply with the United States
              Digital Millennium Copyright Act (DMCA), (the text of which can be
              found at the U.S. Copyright Office Web Site,
              http://www.copyright.gov). It is expected that all users of any
              part of Hot Seat Media.com will comply with applicable copyright
              laws.
            </p>
            <p className="  px-2 text-justify">
              If, however, we receive proper notification of claimed copyright
              infringement, our response to such notices will include removing
              or disabling access to material claimed to be the subject of
              infringing activity and/or terminating contributors, regardless of
              whether we may be liable for such infringement under United States
              law or the laws of another jurisdiction.
            </p>
          </div>
          <p className="  text-justify">
            If we remove or disable access in response to such a notice, we will
            make a good-faith attempt to contact the creator of the affected
            content so that they may make a counter notification pursuant to
            Sections 512(g)(2) and (3) of the DMCA. We may also document notices
            of alleged infringement on which we act.
          </p>
          <h2 className="flex flex-col border-t border-b justify-center items-center text-center font-sans py-5">
            INFRINGEMENT NOTIFICATION: <br />
            <span className=" ">
              {" "}
              Filing a DMCA Notice of Copyright Infringement
            </span>
          </h2>
          <div className="   space-x-4">
            <p>
              <p className=" text-justify">
                Upon receipt of proper notification of claimed infringement, Hot
                Seat Media.com will follow the procedures outlined herein and in
                the DMCA. <br />
                To file a notice of infringement with hoseatmag.com, you must
                provide a written communication (by email, fax and mail) that
                sets forth the information specified in the list below.
              </p>
            </p>
            <p>
              <div>
                <Image
                  objectFit="cover"
                  width="500"
                  height="500"
                  src={copyright2}
                />
              </div>
            </p>
          </div>
          <p className="  text-justify">
            Please note that you will be liable for damages (including costs and
            attorney’s fees) if you materially misrepresent that material is
            infringing your copyright(s). Accordingly, if you are not sure if
            you are the proper copyright holder or if copyright laws protect the
            material of yours, you may want to consult an attorney. To expedite
            our ability to process your request, please use the following format
            (including section numbers):
          </p>
          <ul className=" list-disc  ml-10">
            <li className="border-b  py-4 text-justify">
              Your contact information, including your name, address, telephone
              number, and, if available, an email address at which you, as the
              complaining party, may be contacted;
            </li>
            <li className="border-b  py-4 text-justify">
              The statement: “I am the copyright owner or an agent authorized to
              act on the owner’s behalf of the following copyrighted material:”;
            </li>
            <li className="border-b  py-4 text-justify">
              Identify with sufficient detail the copyrighted content that you
              believe has been infringed. (For example, “The copyrighted image
              at issue is the “Content Title” which can be described as
              “Description: literary work, image, etc.” by “name of the author”,
              including any federal registration information if available);
            </li>
            <li className="border-b  py-4 text-justify">
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity and that is to be removed
              or access to which is to be disabled, and information reasonably
              sufficient to permit the Hot Seat Media.com to locate the material
              (e.g. “Title of Article” at this location: https://Hot Seat
              Media.com/link-to-article/);
            </li>
            <li className="border-b  py-4 text-justify">
              The following statement: “I have a good faith belief that use of
              the aforementioned material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law”;
            </li>
            <li className="border-b  py-4 text-justify">
              The following statement: “I swear, under penalty of perjury, that
              the information in the notification is accurate”; and
            </li>
            <li className="border-b  py-4 text-justify">Sign the document.</li>
            <li className="border-b  py-4 text-justify">
              Send the written communication (by email, fax or mail to) our
              designated Copyright Agent to receive DMCA Notices:
            </li>
          </ul>
          <h3 className=" flex justify-center font-sans text-2xl border-b py-5">
            Counter Notification
          </h3>
          <div className=" mt-4 ">
            <div className=" text-justify">
              The provider of the allegedly infringing content may make a
              counter notification pursuant to sections 512(g)(2) and (3) of the
              Digital Millennium Copyright Act.
            </div>
            <div>
              <Image
                objectFit="cover"
                width="500"
                height="500"
                src={copyright3}
              />
            </div>
          </div>{" "}
          <p className="  text-justify">
            To file a counter notification with us, you must provide a written
            communication (by regular mail) that sets forth the information
            specified in the list below. Subject to prior written agreement you
            may not communicate the information specified below by email. Please
            note that you will be liable for damages (including costs and
            attorneys’ fees) if you materially misrepresent that a product or
            activity is not infringing the copyrights of others. Accordingly, if
            you are not sure whether certain material infringes the copyrights
            of others, we suggest that you first contact an attorney.
            <p>
              To expedite our ability to process your request, please use the
              following format (including section numbers):
            </p>
          </p>
          <ul className=" list-disc ml-10">
            <li className="border-b  py-4 text-justify">
              Identification of the material that has been removed or to which
              access has been disabled and the location at which the material
              appeared before it was removed or access to it was disabled;
            </li>
            <li className="border-b  py-4 text-justify">
              Your name, address, telephone number, and, if available, an email
              address at which you may be contacted;
            </li>
            <li className="border-b  py-4 text-justify">
              The following statement: “I consent to the jurisdiction of Federal
              District Court for the [insert the federal judicial district in
              which your address is located]”;
            </li>
            <li className="border-b  py-4 text-justify">
              The following statement: “I will accept service of process from
              [insert the name of the person who submitted the infringement
              notification] or his/her agent”;
            </li>
            <li className="border-b  py-4 text-justify">
              The following statement: “I swear, under penalty of perjury, that
              I have a good faith belief that the affected material was removed
              or disabled as a result of a mistake or misidentification of the
              material to be removed or disabled”; and
            </li>
            <li className="border-b  py-4 text-justify">Sign the document.</li>
            <li className="border-b  py-4 text-justify">
              Send the written communication (by email, fax or mail to) our
              designated Copyright Agent to receive DMCA Notices:
            </li>
          </ul>
          <p className="     text-justify">
            Upon receipt of such counter notification, Hot Seat Media.com will
            promptly provide the person who provided the original infringement
            notification with a copy of the counter notification, and inform
            that person that Hot Seat Media.com will replace the removed
            material or cease disabling access to it in 10 business days. Hot
            Seat Media.com will replace the removed material and cease disabling
            access to it not less than 10, nor more than 14, business days
            following receipt of the counter notice, unless our Designated Agent
            first receives notice from the person who submitted the original
            infringement notification that such person has filed an action
            seeking a court order to restrain the subscriber from engaging in
            infringing activity relating to the material on our system or
            network.
          </p>
          <h4 className=" py-5 flex border-t border-b justify-center items-center font-sans text-4xl">
            Repeat Infringers
          </h4>
          <p className=" mb-10">
            In accordance with Section 512(i)(1)(A) of the DMCA, Hot Seat
            Media.com will, in appropriate circumstances, disable and/or
            terminate the accounts of contributors who are repeat infringers.
          </p>
        </div>
      </WithScreen>
    </div>
  );
}
