import React from 'react'
import Image from 'next/image'
import performanceImage from '../../../public/performance.png'
function Performance() {
  return (
    <div>
      <Image src={performanceImage} alt="alt" className='w-full h-full' />
      Home
    </div>
  )
}

export default Performance