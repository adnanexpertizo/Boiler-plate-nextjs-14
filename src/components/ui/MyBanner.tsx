import { MyBannerProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const MyBanner = ({ text, imageUrl, className = '' }: MyBannerProps) => {
  return (
    <div className={`relative h-[300px] ${className}`}>
      <div className="absolute z-30 top-0 left-0 w-full h-full opacity-60 bg-[#1B436B] flex items-center justify-center "></div>
      <Image
        src={imageUrl}
        alt="Slide"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute z-40 top-0 left-0 w-full h-full flex items-center justify-center ">
        <div className="w-[400px]  p-5 rounded flex justify-center items-center opacity-90">
          <p className="text-white md:text-[25px] text-[20px] text-center tracking-wider md:leading-8 leading-6">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBanner;
