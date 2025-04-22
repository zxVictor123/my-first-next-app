import React from 'react'
import reliabilityImage from '../../../public/reliability.png'
import Hero from '@/components/Hero'

function Reliability() {
  return (
    <Hero imageSrc={reliabilityImage} imageAlt='reliability' content='Where will it lead' gradientColor='from-blue-300/50'/>
  )
}

export default Reliability