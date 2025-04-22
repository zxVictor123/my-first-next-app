import React from 'react'
import Image from 'next/image'
import scaleImage from '../../../public/scale.png'
function Scale() {
  return (
    <div>
      <Image src={scaleImage} alt="alt" className='w-full h-full' />
      Home
    </div>
  )
}

export default Scale