"use client";
import Logo from "@/assets/svgs/logo";
import { nav } from "@/configs/constants";
import { Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/");
  return (
    <div className="bg-black">
      <div className="w-[80%] mx-auto py-4 flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="lg:flex hidden gap-x-4 items-center text-white font-jost">
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
        <div className="flex gap-x-2 items-center">
          <Link href={"/"} className="font-jost text-white">
            Login
          </Link>
          <Button className="text-white rounded-[25px] bg-gradient-to-l from-light-blue to-dark-blue font-[600] font-jost px-8 mx-2">
            Talk To Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
