'use client';
import Image from "next/image";
import React from "react";
// import { Button } from "./ui/button";
import HeroImage from "../assets/HeroImage.png";
import Waitlistform from "./Waitlistform";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center py-10 lg:py-40">
      <div className="flex flex-col lg:min-w-[40%] lg:items-start items-center ">
        <div className="text-center lg:text-left text-5xl lg:text-7xl text-[#5D3FD3] pb-5 lg:pb-10 ">
          You focus on learning let <br /> AI take <br />
          notes
        </div>
        <div className="text-[#333333] text-xl lg:text-2xl py-2 lg:py-2">
          You focus on learning and growing,
          <br /> let AI take notes and clear doubts
        </div>
        <Waitlistform/>
      </div>
      <div className="lg:min-w-[60%]">
        <Image
          className="rounded-2xl"
          src={HeroImage}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default HeroSection;
