import React from 'react'
import performanceImage from '../../../public/performance.png'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'corridor',
}
function Performance() {
  return (
    <Hero imageSrc={performanceImage} imageAlt='performance' content='Leaving home to pursue something' gradientColor='from-green-300/50' />
  )
}

export default Performance