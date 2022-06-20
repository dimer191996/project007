import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  MailruShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  MailruIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
export default function ShareArticle({ slug }) {
  function share(params) {
    axios
      .put(`http://localhost:3020/api/article/share/${slug}`)
      .then(({ data }) => {})
      .catch((err) => {});
  }

  return (
    <div className=" sticky top-20 sm:top-0 z-30 ">
      <div
        onClick={share}
        className=" md:absolute md:-left-24 -left-10 pt-4  bg-white shadow md:shadow-none border-r   p-1 top-24 sm:mt-28 "
      >
        <div className="flex items-center md:flex-col  md:space-y-4 space-x-3 sm:space-x-0  ">
          <div className=" font-bold text-sm">Share 😃</div>
          <FacebookMessengerShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <FacebookMessengerIcon size={28} round={true} />
          </FacebookMessengerShareButton>

          <FacebookShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <FacebookIcon size={28} round={true} />
          </FacebookShareButton>

          <TwitterShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <TwitterIcon size={28} round={true} />
          </TwitterShareButton>

          <EmailShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <EmailIcon size={28} round={true} />
          </EmailShareButton>

          <WhatsappShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <WhatsappIcon size={28} round={true} />
          </WhatsappShareButton>

          <TelegramShareButton
            url={`${"https://www.hotseatmag.com/article/"}${slug}`}
          >
            <TelegramIcon size={28} round={true} />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
}
