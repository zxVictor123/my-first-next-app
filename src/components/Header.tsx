'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Header= () =>  {
  const pathname = usePathname()
  // 跳转链接数据
  const LinkData = [
    {name: 'corridor',link: '/performance',highLightColor: 'text-white text-shadow-close-white'},
    {name: 'village',link: '/reliability',highLightColor: 'text-purple-600 text-shadow-close-purple'},
    {name: 'castle',link: '/scale',highLightColor: 'text-black text-shadow-close-black'},
  ]
  return (
    <div className='absolute w-full z-10'>
      <div className=' flex justify-between py-8  container mx-auto text-gray-300'>
          <Link href="/" className={`${pathname == '/' ? 'text-white text-shadow-close-white' : ''} text-3xl font-bold`}>Home</Link>
          <div className='flex gap-5 text-xl'>
            {
              LinkData.map((item) => <Link href={item.link} key = {item.name} className={`${pathname == item.link ? `${item.highLightColor} scale-110 ` : ''}`}>{item.name}</Link>)
            }
          </div>
      </div>
    </div>
  )
}

export default Header