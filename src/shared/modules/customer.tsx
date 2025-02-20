import { IMGS } from "@/utils/imgs";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Customer = () => {
  return (
    <div className="w-[80%] mx-auto my-[10%] text-white bg-black">
      <div className="flex items-center justify-between">
       <div className="mr-[128px]">
       <h1 className="text-[32px] leading-[120%] font-[600]">
          Customer Support
        </h1>
        <p className=" mt-4 text-[18px] font-[500] font-[jost] leading-[120%]">
          Using Vidmox to boost your video marketing is about as easy as it
          gets. But if you need a hand, our in-house experts are just an email
          or chat awa
        </p>
        <Button className='text-white rounded-[25px] bg-gradient-to-l from-light-blue to-dark-blue font-[600] font-jost px-10 mx-2 my-4' >Contact Us</Button> 

       </div>
       <Image src={IMGS.customer} alt="" className="w-[628px] h-[476px] rounded-[20px]"/>
      </div>
    </div>
  );
};

export default Customer;
