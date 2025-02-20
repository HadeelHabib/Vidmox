import { IMGS } from '@/utils/imgs'
import Image from 'next/image'
import React from 'react'
import Review from '../components/review'

const AboutUs = () => {
  return (
    <div className='bg-black text-white my-[10%]'>
      <h1 className='text-center text-[48px] font-jost font-[500]'>&lt;{" "} What Our Client Says About Us {" "}&gt;</h1>
      <div className="w-[1280px] h-[562.92px] mx-auto relative">
            <div className="flex  items-start justify-between my-12">
                <Image className='w-[161px] h-[159.63px] absolute top-0 right-0' src={IMGS.roundecibe3} alt=''/>
                <Image className='w-[161px] h-[159.63px] absolute top-0 left-0' src={IMGS.roundecibe2} alt=''/>
                <Image className='w-[360.68px] h-[350.68px] absolute top-[73.63px] left-[498.76px]' src={IMGS.ellipse} alt=''/>
                <Image className='w-[360.68px] h-[350.68px] absolute bottom-[17px] left-[-7.05px]' src={IMGS.ellipse} alt=''/>
                <Image className='w-[360.68px] h-[350.68px] absolute bottom-[-17px] right-[36.16px]' src={IMGS.ellipse} alt=''/>
                <Image className='w-[161px] h-[159.63px] absolute right-[362px] bottom-0' src={IMGS.roundecibe2} alt=''/>
            </div>
            <div className="relative z-[1111] flex gap-x-4">
                <Review/>
                <Review/>
                <Review/>
            </div>
      </div>
    </div>
  )
}

export default AboutUs
