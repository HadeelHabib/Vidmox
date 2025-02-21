// import { IMGS } from '@/utils/imgs'
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const Analytics = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="">
          <h1 className="text-[32px] leading-[120%] font-[600]">Analytics</h1>
          <p className="w-[70%] mt-4 text-[18px] font-[500] font-[jost] leading-[120%]">
            Measure and optimize your videos’ performance with analytics that
            help you take action. We’ve got video heatmaps and A/B testing, and
            you can integrate Wistia analytics with your marketing automation
            platform.
          </p>
        </div>
        <div className="">
          <div className="relative w-[519px] h-[476px] bg-gradient-to-b rounded-[20px] from-[#4D69F1] to-[#C3CEFF] my-[10%] shadow-[0_2px_15px_rgba(0,0,0,0.5)] shadow-[#C3CEFF]">
            {/* <Image className='w-[359px] h-[539.29px] absolute bottom-0 left-[29px]' src={IMGS.img4} alt='' />     */}
            {/* <Image className='absolute w-[174px] h-[58px] top-[95px] right-[45.5px]' src={IMGS.prototype3} alt=''/> */}
            {/* <Image className='absolute w-[124px] h-[58px] left-[-22.5px] bottom-[43px]' src={IMGS.prototype1} alt=''/> */}
            {/* <Image className='absolute w-[179px]  bottom-[38px] h-[58.5px] right-[71.5px]' src={IMGS.prototype2} alt=''/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
