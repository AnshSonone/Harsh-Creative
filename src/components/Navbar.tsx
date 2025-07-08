"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Navbar = () => {

  const [show, setShow] = useState('top-[-100%]')

  const toggleNav = () => {
    return show === 'top-[-100%]' ? setShow('top-[0%]') : setShow('top-[-100%]')
  }

  return (
    <div className='flex  flex-col md:flex-row items-center md:items-start md:justify-between justify-center px-10'>
      <div className='md:mx-5 w-full flex items-center justify-between md:block md:w-fit py-2'>
        <Image
          src="/logo_harsh.svg"
          width={100}
          height={100}
          loading='lazy'
          alt='logo'
        />
        <div onClick={toggleNav} className='space-y-1 md:hidden relative z-20'>
          <div className='w-[30px] h-[3px] bg-white rounded-lg'></div>
          <div className='w-[30px] h-[3px] bg-white rounded-lg'></div>
          <div className='w-[30px] h-[3px] bg-white rounded-lg'></div>
        </div>
      </div>
      <div className={`absolute ${show} bg-[#4545c7]/40 backdrop-blur-xs z-10 space-y-10 flex flex-col items-center justify-center py-6 w-full h-[50%] transition-all ease-in-out delay-150 duration-200 md:flex-row md:relative md:bg-transparent md:backdrop-blur-none md:items-start md:justify-between`}>
        <div className='flex flex-col justify-center items-center font-bold md:flex-row md:items-start md:space-x-14 space-y-10 md:text-lg text-2xl text-white'>
          <li className='list-none cursor-pointer hover:text-zinc-200'>Home
          </li>
          <li className='list-none cursor-pointer hover:text-zinc-200'>Services</li>
          <li className='list-none cursor-pointer hover:text-zinc-200'>About Us</li>
        </div>
        <Button variant="secondary" colors="algeGreen" className='text-lg md:text-xl text-[#5858c3] font-bold p-5 cursor-pointer'>Contact Us</Button>
      </div>
    </div>
  )
}

export default Navbar