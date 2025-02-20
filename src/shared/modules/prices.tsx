import React from 'react'
import Card from '../components/card'

const Prices = () => {
  return (
    <div className='w-[90%] mx-auto bg-black text-white'>
      <h1 className='text-center text-[48px] leading-[120%] font-[600] font-jost py-12'>Pricing</h1>
      <div className="flex items-center justify-between">
        <Card color='#343434' border='#343434'/>
        <Card color='#121212' border='#1400F4'/>
        <Card color='#343434' border='#343434'/>
      </div>
    </div>
  )
}

export default Prices
