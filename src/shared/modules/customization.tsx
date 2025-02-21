import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const Customization = () => {
  return (
    <div className='bg-black text-white'>
    <div className="w-[80%] mx-auto flex items-center justify-between">
    <div className="mr-[20%]">
          <div className="relative w-[519px] h-[476px] bg-gradient-to-b rounded-[20px] from-mov to-[#E8937C] my-[10%] shadow-[0_2px_15px_rgba(0,0,0,0.5)] shadow-mov">
              {/* <Image className='w-[359px] h-[539.29px] absolute bottom-0 left-[130px]' src={IMGS.img3} alt='' /> */}
             {/* <Image className=' absolute top-[22px] w-[97.95px] h-[203px] left-[51px]' src={IMGS.menu} alt=''/> */}
             {/* <Image className='absolute left-[71px] bottom-[-30px] w-[137.53px] h-[166.44px]' src={IMGS.picker} alt='' /> */}
             <span className='w-[12.5px] h-[12.5px] absolute left-[134px] bg-[#1400F4] bottom-[-27px]'></span>
              
          </div>
      </div>
      <div className=" ">
          <h1 className='text-[32px] leading-[120%] font-[600]'>Customization</h1>
          <p className=' mt-4 text-[18px] font-[500] font-[jost] leading-[120%]'>Give your videos a home with folders, filters, and tags that make management a breeze. Then serve those videos up in our customizable, ad-free player that plays ultra fast and oh-so-smooth.</p>
      </div>
     
    </div>
  </div>
  )
}

export default Customization
