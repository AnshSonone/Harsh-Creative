import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Footer = () => {

    const socialLinks = [
        {icon: "/pinterst.svg", social: "Pinterst"},
        {icon: "/instagram.svg", social: "Instagram"},
        {icon: "/whatsapp.svg", social: "Whatsapp"},
        {icon: "/be.svg", social: "Behance"},
    ]

  return (
    <div className='grid md:grid-cols-2'>
        <div className='bg-zinc-400 flex flex-col space-y-4 items-center py-4'>
            <h2 className='text-xl font-bold'>Let's Work <span className='text-[#869A59]'>Together</span></h2>
            <Button variant="secondary" size="lg" className='md:text-lg text-2xl text-[#5858c3] font-bold p-5 cursor-pointer'>Contact Us</Button>
        </div>
        <div className='bg-[#869A59] space-y-4 p-4 flex flex-col items-center'>
            <div className='space-y-2'>
            <h3 className='text-lg'>Discover why we are best<span className='text-white'>{" "}Design Agency</span></h3>
            <h4 className='text-sm'>2025@Tobi Visuals All Right Reserved</h4>
            </div>
            <div className='flex items-center space-x-4'>
                {
                    socialLinks.map((element, index) => (
                        <div className='flex items-center' key={index}>
                    <Image
                        src={element.icon}
                        width={30}
                        height={30}
                        alt='icon'
                        loading='lazy'
                    />
                    <span>{element.social}</span>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Footer