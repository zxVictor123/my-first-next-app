import React from 'react'
import scaleImage from '../../../public/scale.png'
import Hero from '@/components/Hero'

function Scale() {
  return (
    <Hero imageSrc={scaleImage} imageAlt='scale' content='May there be gentle and dreams' gradientColor='from-pink-300/30'/>
  )
}

export default Scale