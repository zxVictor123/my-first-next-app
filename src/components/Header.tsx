'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Header= () =>  {
  const pathname = usePathname()
  // 跳转链接数据
  const LinkData = [
    {name: 'corridor',link: '/performance'},
    {name: 'village',link: '/reliability'},
    {name: 'castle',link: '/scale'},
  ]
  return (
    <div className='absolute w-full z-10'>
      <div className=' flex justify-between py-8  container mx-auto text-white'>
          <Link href="/" className='text-3xl font-bold'>Home</Link>
          <div className='flex gap-5 text-xl'>
            {
              LinkData.map((item) => <Link href={item.link} key = {item.name} className={`${pathname == item.link ? 'text-purple-500' : ''}`}>{item.name}</Link>)
            }
          </div>
      </div>
    </div>
  )
}

export default Header