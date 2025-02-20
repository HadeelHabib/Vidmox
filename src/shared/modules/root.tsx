import React from 'react'
import Hero from './hero'
import Uploading from './uploading'
import Customization from './customization'
import Analytics from './analytics'
import Prices from './prices'
import Customer from './customer'
import SignUp from './signup'
import AboutUs from './aboutus'

const Root = () => {
  return (
    <div className='bg-black'>
      <Hero/>
      <Uploading/>
      <Customization/>
      <Analytics/>
      <Prices/>
      <Customer/>
      <AboutUs/>
      <SignUp/>
    </div>
  )
}
// the last part
// responsive for it all

export default Root
