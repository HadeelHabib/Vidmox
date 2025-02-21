// import { IMGS } from "@/utils/imgs";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";



const Card: React.FC<CardProps> = ({ color, border}) => {
  return (
    <div
      className={`w-[410px] h-[1028px] rounded-[20px] px-[48px] font-jost border`}
      style={{ backgroundColor: color, borderColor: border }} // Inline style for dynamic color
    >
      <h3 className="text-center py-[30px] text-[25px] leading-[34px]">Package 1</h3>
      <h1 className="text-[40px] leading-[57px] font-[600] text-center text-[#1400F4]">
        $70/week
      </h1>
      <div className="w-[95%] mx-auto mt-4">
        <h3 className="text-[16px] leading-[150%] my-6 font-jost">Includes:</h3>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-start gap-x-4 mb-6">
              {/* <Image className="inline-block w-[24px]" src={IMGS.check} alt="Check icon" /> */}
              <div>
                <h3 className="inline text-[20px] font-[500]">
                  Weekly Check-ins via WhatsApp
                </h3>
                <p>Regular updates to track progress and make program adjustments.</p>
              </div>
            </div>
          ))}
      </div>
      <Button className="text-white w-[70%] ml-[40px] rounded-[25px] bg-gradient-to-l from-light-blue to-dark-blue font-[600] font-jost px-[54.54px] mt-[50px]">
        Buy Now
      </Button>
      <p className="text-center my-4">Not Convinced Yet? Let’s Talk</p>
    </div>
  );
};

export default Card;
