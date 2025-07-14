import React, { RefObject } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
    footerSectionRef: RefObject<HTMLDivElement>
  }

const Footer: React.FC<FooterProps> = ({footerSectionRef}) => {

    const socialLinks = [
        { icon: "/pinterst.svg", social: "Pinterst", link: "https://www.pinterest.com/tobivisual01/?invite_code=174a809d6abe49bc912f288ad4e462c2&sender=1029143089757033614" },
        { icon: "/instagram.svg", social: "Instagram", link: "https://www.instagram.com/tobi_visual_/?igsh=MWMycWFoYTYyb2s5bA%3D%3D#" },
        { icon: "/whatsapp.svg", social: "Whatsapp", link: "https://wa.me/916263222207" },
        { icon: "/be.svg", social: "Behance", link: "https://www.behance.net/gallery/220823141/Portfolio?fbclid=PAY2xjawI4wNFleHRuA2FlbQIxMQABpi2p70YgPmNS1zOdI0NVX9RwqfjIxjKrSfoK4fs9_Nig0IqdhR-LX_BYWA_aem_CJ1qm8Jh2BHETm9y3i8HEA" },
    ]

    return (
        <div ref={footerSectionRef} className=''>
            <div className='bg-zinc-400 flex flex-col space-y-4 items-center py-4'>
                <h2 className='text-xl font-bold'>Let&apos;s Work <span className='text-[#b3ff00]'>Together</span></h2>
                <Link href="tel: +62632 22207">
                    <Button variant="secondary" size="lg" className='text-lg md:text-xl text-[#5858c3] font-bold p-5 cursor-pointer'>Call +91 62632 22207</Button>
                </Link>
            </div>
            <div className='bg-[#4545c7] space-y-4 p-4'>
                <div className='space-y-2'>
                    <h3 className='text-lg'>Discover why we are best<span className='text-white'>{" "}Design Agency</span></h3>
                    <h4 className='text-sm'>2025@Tobi Visuals All Right Reserved</h4>
                </div>
                <div className=' space-x-4 space-y-2 md:flex items-center'>
                    {
                        socialLinks.map((element, index) => (
                            <div className='flex items-center' key={index}>
                                <Link href={element.link} target='#'>
                                    <Image
                                        src={element.icon}
                                        width={30}
                                        height={30}
                                        alt='icon'
                                        loading='lazy'
                                    />
                                    <span className='mx-2 text-white font-bold'>{element.social}</span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer