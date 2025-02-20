import { IMGS } from "@/utils/imgs";
import Ratings from "@/utils/ratings";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className="w-[411px] h-[454.43px] text-white rounded-[16.07px] bg-[#434343]/30 backdrop-blur bg-opacity-50">
      <div className="p-[40px] relative">
        <span className="absolute top-0 left-[20px]  text-white text-[60px]">
          “
        </span>
        <p className="font-jost py-8 text-[20px]">
          OHHHH Thanks god !!!! Finally there is someone making it for me to use
          on my projects. Love ya{" "}
        </p>
        <div className="text-center text-[20px] mx-[120px] w-[300px] my-12">
          <Ratings rating={4} />
        </div>
        <div className="w-[80%] mx-auto flex gap-x-6 items-center mt-[40px]">
          <Image className="w-[79.3px] h-[82.47px]" src={IMGS.profile} alt="" />
          <div className="">
            <h1 className="font-jost text-[20px]">John Williams</h1>
            <h1 className="text-[16.4px] opacity-50">Lead designer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
