import React from 'react'
import Image from 'next/image'
import homeImage from '../../public/home.png'
function Home() {
  return (
    <div>
      <Image src={homeImage} alt="alt" className='w-full ' />
      Home
    </div>
  )
}

export default Home