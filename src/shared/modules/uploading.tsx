import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const Uploading = () => {
  return (
    <div className='bg-black text-white'>
      <div className="w-[80%] mx-auto flex items-center justify-between">
        <div className="">
            <h1 className='text-[32px] leading-[120%] font-[600]'>Create</h1>
            <p className='w-[70%] mt-4 text-[18px] font-[500] font-[jost] leading-[120%]'>Uploading videos should be simple for everyone. That's why you can upload your videos right from your dashboard or through your application's API. You have full freedom to upload videos from anywhere—no hidden fees. Plus, you'll get an instant notification once your video is uploaded and processed.</p>
        </div>
        <div className="">
            <div className="relative w-[519px] h-[476px] bg-gradient-to-b rounded-[20px] from-[#E8EC3E] to-[#A1D661] my-[10%] shadow-[0_2px_15px_rgba(0,0,0,0.5)] shadow-[#E8EC3E]">
                {/* <Image className='w-[359px] h-[539.29px] absolute bottom-0 left-[29px]' src={IMGS.img2} alt='' /> */}
                <div className="absolute bg-white w-[228.8px] h-[243px] rounded-[12.62px] right-[37.2px] top-[50px]">
                    {/* <Image className='mx-auto mt-[26.82px] w-[189.35px]' src={IMGS.group} alt='' /> */}
                    <Button className='text-white rounded-[25px] bg-black font-[600] font-jost mt-[20px] px-12 ml-[41.84px]'>Upload</Button> 

                </div>
                {/* <Image className='absolute bottom-0 right-[8px] w-[432px] opacity-60 ' src={IMGS.line} alt=''/> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Uploading
