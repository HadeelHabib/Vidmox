import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black ">
      <div className="flex items-center text-white ">
        <div className="font-jost ml-[10%]  mt-8">
          <h1 className="text-[72px] relative z-[1111] w-[160%] leading-[120%] font-[700]">
            The Dedicated Video
            <br />
            Hosting
            <br />
            Platforms For EdTech
          </h1>
          <p>
            All the advanced features your EdTech needs,
            <br />
            are in one place.
          </p>
          <div className="mt-6">
            <Button className="bg-gradient-to-l from-dark-blue to-light-blue text-[15px] font-[400] text-white rounded-[26px] px-12">
              Sign up
            </Button>
            <Button className="bg-black border border-white text-[15px] font-[400] text-white rounded-[26px] px-10 mx-4">
              Watch Demo
            </Button>
          </div>
        </div>
        <div className="mr-0 relative  w-[841px] h-[699px]">
          {/* <Image className="opacity-[40%] transperant-theme" src={IMGS.landing} alt="" /> */}
          <div className="absolute inset-y-0 left-[-50px] w-1/4 bg-black opacity-90 h-[800px] top-[-20px] blur-lg"></div>

        </div>
      </div>
      <div className="my-20 ">
        {/* <Image className="w-full" src={IMGS.frame} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
