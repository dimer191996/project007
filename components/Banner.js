import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArticleCard from "./ArticleCard";

let count = 0;
let slideInterval;

export default function Banner({ articles }) {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const slideRef = useRef();

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };
  // // const startSlider = () => {
  // //   slideInterval = setInterval(() => {
  // //     handleOnNextClick();
  // //   }, 3000);
  // // };
  // const pauseSlider = () => {
  //   clearInterval(slideInterval);
  // };
  // const handleOnNextClick = () => {
  //   if (count === articles.length - 1) return;
  //   count = (count + 1) % articles.length;
  //   setCurrentIndex(count);
  //   slideRef.current.classList.add("fade-anim");
  // };

  // const handleOnPrevClick = () => {
  //   const cards = articles.length;
  //   count = (currentIndex + cards - 1) % cards;
  //   setCurrentIndex(count);
  //   slideRef.current.classList.add("fade-anim");
  // };

  // useEffect(() => {
  //   // startSlider();
  //   slideRef.current.addEventListener("animationend", removeAnimation);
  //   slideRef.current.addEventListener("mouseenter", pauseSlider);
  //   // slideRef.current.addEventListener("mouseleave", startSlider);

  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, []);

  return (
    <div className="relative h-[230px] sm:h-[200px] lg:h-[500px] xl:h=[800px] 2xl:h=[900px]">
      <div className=" flex h-full">
        <div className=" w-1/3 max-h-max bg-red-700">
          <div className=" h-full"> hshs</div>
        </div>
        <div className=" flex-grow grid grid-rows-12">
          <div className="relative bg-red-300 row-span-4  ">
            <Image
              src="https://links.papareact.com/0fm"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" bg-red-500  row-span-8 "> haha</div>
        </div>
      </div>
    </div>
  );
}
