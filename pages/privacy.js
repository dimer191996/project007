import React from "react";
import privacy1 from "../assets/images/privacy.jpg";
import privacy2 from "../assets/images/privacy2.jpg";
import privacy3 from "../assets/images/privacy3.jpg";
import { LinkIcon } from "@heroicons/react/solid";
import WithScreen from "../Layouts/WithScreen";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function privacy() {
  return (
    <WithScreen width=" md:w-1/2 px-2 w-full">
      <Head>
        <title>Privacy | HotSeatMag</title>

        <meta
          name="description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />

        <meta property="og:title" content="Privacy | HotSeatMag" />

        <meta property="og:url" content="https://www.hotseatmag.com/privacy" />

        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="All the latest movie news, movie trailers & reviews - and the same for TV, too."
        />
      </Head>
      <div className=" prose  prose-md   lg:prose-xl   prose-a:text-red-800  my-16">
        <header>
          <h1 className="  flex flex-col text-center justify-center font-sans">
            HOT SEAT MEDIA <br />
            <span className=" text-lg "> Privacy Policy</span>
          </h1>
        </header>
        <div>
          <p className="   text-justify">
            {
              " We respect your privacy and we are committed to safeguarding your\
              privacy while online at our site. The following discloses the\
              information gathering and dissemination practices for this Web\
              site."
            }
          </p>
          <p className="  font-bold flex justify-center items-center   text-justify">
            This Privacy Policy was last updated on January 16, 2021.
          </p>

          <h2 className="py-4 text-xl flex justify-center items-center font-sans border-b border-t">
            Legal Ownership
          </h2>
          <p className="   text-justify">
            {
              "  Hot Seat Mag (the “Website”) is owned and operated by bwCode inc.\
              (“us” or “we”), a corporation incorporated under the laws of\
              Canada, having its head office at"
            }
            <b> {"7405 Kigali Highway , Kt 644, Kakyiru."}</b>
          </p>

          <h2 className="py-4 text-xl flex justify-center items-center font-sans border-b border-t">
            Personal Data Collected
          </h2>
          <p className="   text-justify">
            {
              "  When you visit our Website, we don't collect certain information\
              related to your device, such as your IP address, we only get what\
              pages you visit on our Website, whether you were referred to by\
              another website, and at what time you accessed our Website. We\
              will not collect any data without your prior explicit consent."
            }
          </p>
          <p className="   text-justify">
            {
              " We do not collect any other type of personal data. If you are\
              accessing our website through a social media account, please refer\
              to the social media provider’s privacy policy for information\
              regarding their data collection."
            }
          </p>

          <p className="   text-justify">
            {
              "Please note that we comply with the following ID partners’ privacy\
              terms:"
            }
          </p>
          <ul className=" list-disc ml-10">
            <li className=" border-b py-4 ">
              {
                " LiveRamp’s country-specific terms when it comes to the\
                collection, use, and disclosure of user information. If you have\
                any questions about the extent of the information collected,\
                please visit:"
              }
              <Link
                className=" "
                href="https://liveramp.com/authenticated-traffic-solution-country-specific-terms/"
              >
                {
                  "   https://liveramp.com/authenticated-traffic-solution-country-specific-terms/"
                }
              </Link>
            </li>
            <li className=" border-b py-4 ">
              {
                "ID5’s country-specific terms relating to the collection,\
                processing, and transferring of user personal data. If you have\
                any questions about the nature and extent of the information\
                collected, please consult:"
              }
              <Link className=" " href="https://www.id5.io/privacy-policy">
                https://www.id5.io/privacy-policy
              </Link>
            </li>
            <li className=" border-b py-4 ">
              Criteo’s privacy terms, which can be accessed here:{" "}
              <Link className=" " href="https://www.criteo.com/privacy/">
                https://www.criteo.com/privacy/
              </Link>
            </li>
          </ul>

          <h2 className="py-4 text-xl flex justify-center items-center font-sans border-b border-t">
            Log Files
          </h2>
          <p className="   text-justify">
            {
              " Like most standard Web site servers, we use log files. This\
              includes internet protocol (IP) addresses, browser type, internet\
              service provider (ISP), referring/exit pages, platform type,\
              date/timestamp, and number of clicks to analyze trends, administer\
              the site, track user’s movement in the aggregate, and gather broad\
              demographic information for aggregate use."
            }
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b ">
            Cookies
          </h2>
          <p className="   text-justify">
            {
              "  A cookie is a piece of data stored on the user’s computer tied to\
              information about the user. We and some of our business partners\
              (for example, advertisers) use cookies on our Website. These\
              cookies track usage of the site for security, analytics and\
              targeted advertising purposes."
            }
          </p>
          <p className="   text-justify">
            We use the following type of cookies:
          </p>
          <ul className="static-list list-disc ml-10">
            <li className=" border-b py-4 ">
              Essential cookies: these cookies are essential to the provision of
              our Website.
            </li>
            <li className=" border-b py-4 ">
              {
                " Functionality cookies: these cookies help us remember choices\
                you have made while on our website, remember your preferences,\
                and personalize your Website experience."
              }
            </li>
            <li className=" border-b py-4 ">
              Analytics and performance cookies: these cookies help us collect
              statistical and analytical usage to help up analyze website usage.
            </li>
            <li className=" border-b py-4 ">
              {
                " Social media cookies: These cookies allow you to interact with\
                content on certain social media platforms, such a “liking” our\
                articles. Depending on your social media setting, the social\
                media network will have record of this and may display your name\
                or identifier in relation to this action."
              }
            </li>
            <li className=" border-b py-4 ">
              {
                " Advertising and targeted advertising cookies: these cookies\
                track your browsing habits and location to provide you with\
                advertising in line with your interests. Please see our\
                “advertisers” section below for details."
              }
            </li>
          </ul>
          <p className="   text-justify">
            {
              " If you wish to disable cookies, you may do so through your\
              individual browser options. For further information regarding\
              cookies and how to manage them, please see"
            }
            <Link className=" " href="http://www.allaboutcookies.org/">
              http://www.allaboutcookies.org/
            </Link>
            .
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Pixel tags
          </h2>
          <p className="   text-justify">
            {
              "  We use pixel tags, which are small graphic files that allow us and\
              our trusted third party partners to track your Website usage and\
              collect usage data, including the number of pages you visit, the\
              time you spend on each page, what you click on next, and other\
              information about your Website visit."
            }
          </p>
          <Image objectFit="fill" src={privacy1} />

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b ">
            Advertisers
          </h2>
          <p className="   text-justify">
            {
              "We use third-party advertising companies to serve ads when you\
              visit our Web site. These companies may use information (not\
              including your name, address, email address or telephone number)\
              about your visits to this and other Web sites in order to provide\
              advertisements about goods and services of interest to you. If you\
              would like more information about this practice and to know your\
              choices about not having this information used by these companies,"
            }
            <Link
              className=" "
              href="http://www.networkadvertising.org/managing/opt_out.asp"
            >
              click here.
            </Link>
          </p>
          <p className="   text-justify">
            {
              "  Advertisers, as third-party vendors, use cookies to collect usage\
              and demographic data in order to serve ads on our site. For\
              example, Google’s use of the DART cookie enables it to serve ads\
              to our users based on their visit to our sites and other sites on\
              the Internet. Users may opt out of the use of the DART cookie by\
              visiting the Google ad and content network privacy policy."
            }
          </p>
          <p className="   text-justify">
            {
              " We have reviewed all of our advertising partners’ policies to\
              ensure that they comply with all applicable data privacy laws and\
              recommended data security practices."
            }
          </p>

          <p className="   text-justify">We use the following advertisers:</p>

          <ul className=" list-disc ml-10">
            <Link
              className=" flex "
              href="https://www.facebook.com/about/privacy"
            >
              <li className=" border-b py-4 ">
                Facebook Audience Network: <LinkIcon className=" h-6 mx-2" />
                https://www.facebook.com/about/privacy
              </li>
            </Link>

            <Link
              className="flex "
              href="https://www.amazon.ca/gp/help/customer/display.html/?ie=UTF8&amp;nodeId=918814"
            >
              <li className=" border-b py-4 ">
                Amazon: <LinkIcon className=" h-6 mx-2" />
                https://www.amazon.ca/gp/help/customer/display.html/?ie=UTF8&amp;nodeId=918814
              </li>
            </Link>
            <Link
              className="flex "
              href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/#:~:text=Google%20AdSense%20requires%20you%20to,comply%20with%20the%20GDPR%20requirements."
            >
              <li className=" border-b py-4 line-clamp-3 ">
                Google Adsense: <LinkIcon className=" h-6 mx-2" />
                https://www.privacypolicies.com/blog/privacy-policy-google-adsense/#:~:text=Google%20AdSense%20requires%20you%20to,comply%20with%20the%20GDPR%20requirements.
              </li>
            </Link>

            <Link className="flex " href="https://www.ezoic.com/terms/">
              <li className=" border-b py-4 ">
                Ezoic Ads : <LinkIcon className=" h-6 mx-2" />
                https://www.ezoic.com/terms/
              </li>
            </Link>
          </ul>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Links to Other Websites
          </h2>
          <p className="   text-justify">
            {
              "  This site contains links to other sites. Please be aware that we\
              are not responsible for the privacy practices of such other sites.\
              We encourage our users to be aware when they leave our site, and\
              to read the privacy statements of each and every website that\
              collects personally identifiable information. This privacy\
              statement applies solely to information collected by this Website."
            }
          </p>
          <Image objectFit="fill" src={privacy2} />
          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b  ">
            Purpose of Data Collection
          </h2>
          <p className="   text-justify">
            We use the information we collect in order to:
          </p>
          <ul className="static-list list list-disc ml-10">
            <li className=" border-b py-4 ">
              Administer our Website, including troubleshooting, and statistical
              or data analysis;
            </li>
            <li className=" border-b py-4 ">
              To improve our Website and enhancing user experience by ensuring
              you have access to personalized content in line with your
              interests;
            </li>
            <li className=" border-b py-4 ">
              Analyze user use and optimize our services.
            </li>
            <li className=" border-b py-4 ">
              To ensure that our Website remains secure and is not subject to
              any hacking or fraud.
            </li>
            <li className=" border-b py-4 ">
              Share information with our partners to provide targeted
              advertising and social media features.
            </li>
          </ul>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Data Shared with Third Parties
          </h2>
          <p className="   text-justify">
            {
              " We do not sell or rent your personal data to third parties.\
              However, our partners, including ad partners, may collect data in\
              relation to your Website usage as disclosed herein. All such data\
              will only be collected with your prior explicit consent. Please\
              see our “advertisers” section above for details."
            }
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            How your Data is Stored
          </h2>
          <p className="   text-justify">
            All data collected through our Website is stored on servers located
            in the United States. Our servers are certified under the EU-US
            Privacy Shield.
          </p>
          <p className="   text-justify">
            IP address and user agent string data from all visitors is stored in
            rotating log files on Amazon servers for up to 7 days. All of our
            employees, agents and partners are committed to keeping your data
            confidential.
          </p>
          <p className="   text-justify">
            We have reviewed our partners privacy policies to ensure that they
            comply with similar policies in order to ensure your data security.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Consent under Applicable Laws
          </h2>
          <p className="   text-justify">
            {
              "If you are based in the European Economic Area (“EEA”), a consent\
              window will appear when accessing this website. If you have\
              clicked “yes”, your consent will be stored on our servers for\
              twelve (12) months and your data will be processed as disclosed in\
              this privacy policy. After twelve months, you will be asked to\
              provide consent again."
            }
          </p>
          <p className="   text-justify">
            We comply with the IAB Europe Transparency &amp; Consent Framework.
          </p>
          <p className="   text-justify">
            {" "}
            You can withdraw consent at any time. Withdrawing consent may impede
            your ability to access certain services and will not allow us to
            provide the personalized Website experience.
          </p>
          <Image objectFit="fill" src={privacy3} />
          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b ">
            Data Security
          </h2>
          <p className="   text-justify">
            Our servers comply with ISO 27018, a code of practice that focuses
            on protection of personal data in the cloud. We comply with all
            reasonable precautions in order to ensure your data’s safety.
          </p>
          <p className="   text-justify">
            In the event that we become aware of any data security breach,
            alteration, unauthorized access or disclosure of any personal data,
            we will take all reasonable precautions to protect your data and
            will notify you as required by all applicable laws.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Accessing, Amending and Deleting your Data
          </h2>
          <p className="   text-justify">
            You have the right to request information regarding the data we have
            on file for you, to request correction and/or deletions of your
            personal information. Please contact us at
            <a
              className=" "
              href="mailto:db191996@gmail.com"
              classNameName="px-2"
              target="_top"
            >
              db191996@gmail.com
            </a>{" "}
            or at the postal address listed above, attention: Data compliance
            department.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Age
          </h2>
          <p className="   text-justify">
            This Website does not target people below the age of 16. By visiting
            this Website. You hereby warrant that you are 16 years of age or
            older or are visiting the Website under parental supervision.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Legal Disclaimer
          </h2>
          <p className="   text-justify">
            Though we make every effort to preserve user privacy, we may need to
            disclose personal information when required by law wherein we have a
            good-faith belief that such action is necessary to comply with a
            current judicial proceeding, a court order or legal process served
            on any of our sites.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Notification of Changes
          </h2>
          <p className="   text-justify">
            Whenever we change our privacy policy, we will post those changes to
            this Privacy Policy page, and other places we deem appropriate, so
            our users are always aware of what information we collect, how we
            use it, and under what circumstances, if any, we disclose it.
          </p>

          <h2 className="pb-4 text-xl flex justify-center items-center font-sans border-b border-t ">
            Contact Information
          </h2>
          <p className="   text-justify">
            If users have any questions or suggestions regarding our privacy
            policy, please contact us at
            <Link
              className=" "
              href="db191996@gmail.com"
              target="_top"
              classNameName="px-2"
            >
              db191996@gmail.com
            </Link>{" "}
            or by mail at the postal address listed above, attention: Data
            Compliance Department.
          </p>
        </div>
      </div>
    </WithScreen>
  );
}
