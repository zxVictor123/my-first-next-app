import React from 'react'
import Image from 'next/image'
import { HeroProps } from './type'

function Hero(props: HeroProps) {
  return (
    <div className='h-full relative'>
        <div className='absolute inset-0 '>
          <Image src={props.imageSrc} alt={props.imageAlt} className='object-cover object-center w-full h-full' />
          <div className={`absolute inset-0 bg-gradient-to-r ${props.gradientColor}`}>
            <div className='h-full flex justify-center  pt-160'>
              <h1 className='text-white text-7xl text-center'>{props.content}</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero