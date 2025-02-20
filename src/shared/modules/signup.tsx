import { IMGS } from '@/utils/imgs'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
  return (
    <div className='bg-[#000] my-[10%] .transperant-theme py-8'>
      <div className="text-white w-[1280px] h-[348px] mx-auto relative bg-[#0D028E] text-center rounded-[32px]">
        <Image src={IMGS.frame1}  alt=''/>
        <h3 className='absolute font-jost text-48px leading-[120%] text-[58px] font-[500] left-[237.5px] top-[91px]'>Ready to join Vidmox for a twist?</h3>
      </div>
    </div>
  )
}

export default SignUp
