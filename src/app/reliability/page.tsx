import React from 'react'
import Image from 'next/image'
import reliabilityImage from '../../../public/reliability.png'
function Reliability() {
  return (
    <div>
      <Image src={reliabilityImage} alt="alt" className='w-full h-full' />
      Home
    </div>
  )
}

export default Reliability