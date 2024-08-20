import React from 'react'

import brand1 from '/brand/01.png'
import brand2 from '/brand/02.png'
import brand3 from '/brand/03.png'
import brand4 from '/brand/04.png'
import brand5 from '/brand/05.png'


function BrandSection() {
  return (
    <div className='w-[1000px] flex items-center justify-between m-auto my-20'>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
    </div>
  )
}

export default BrandSection