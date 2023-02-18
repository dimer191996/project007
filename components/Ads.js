import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleMainImage from "./ArticleMainImage";

export default function Ads() {
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          overflow: "hidden",
          backgroundColor: "#eeee",
        }}
        data-ad-client="ca-pub-4491397756399283"
        data-ad-slot="3538660225"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <div className="separator my-3"></div>
    </div>
  );
}
