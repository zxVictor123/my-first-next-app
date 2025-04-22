import React from 'react'
import homeImage from '../../public/home.png'
import Hero from '@/components/Hero'

function Home() {
  return (
    <Hero imageSrc={homeImage} imageAlt='home' content='The stream flows through the desolate year' gradientColor='from-orange-200/50'/>
  )
}

export default Home