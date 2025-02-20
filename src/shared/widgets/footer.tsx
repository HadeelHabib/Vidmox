"use client";
import { nav } from "@/configs/constants";
import { ICONS } from "@/utils/icons";
import { IMGS } from "@/utils/imgs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState("/");
  return (
    <div>
      <div className="relative">
        <Image className="" src={IMGS.shape} alt="" />
        <Image
          src={IMGS.logo}
          alt=""
          className="absolute bottom-[39px] right-[640px] w-[191px]"
        />
      </div>
      <div className=" flex items-center justify-between mt-[10%] w-[80%] mx-auto pb-6   ">
        <div className="flex gap-x-4 items-center text-white font-jost">
          {nav.map((item: NavItems, index: number) => (
            <div key={index} className={`${active === item.url}`}>
              <Link
                onClick={() => setActive(item.url)}
                className={`${active === item.url ? "underline" : ""}`}
                href={item.url}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-x-4 items-center">
              <Link className="mix-color2" href={'/'} >{ICONS.twitter}</Link>
              <Link className="mix-color2" href={'/'} >{ICONS.facebook}</Link>
              <Link className="mix-color2" href={'/'} >{ICONS.linkedin}</Link>
            </div>
      </div>
      <div className="mix-color w-[80%] mx-auto h-[1px]"></div>

      <div className="mt-20 pb-20 w-[80%] mx-auto flex items-center justify-between">
        <p className="text-[14px] font-jost text-white">© 2024 Vidmox. All rights reserved.</p>
        <div className="flex items-center gap-x-4">
        <Link className="text-[14px] font-jost text-white" href={'/'}>Terms Of Service</Link> 
        <Link className="text-[14px] font-jost text-white" href={'/'}>Privecy Policy</Link> 
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
