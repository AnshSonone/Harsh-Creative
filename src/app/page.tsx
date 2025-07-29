"use client"
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link";

export default function Home() {

  const projects = [
    { projectImg: "/project1.svg", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/project2.svg", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/graphic_2.png", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/project3.svg", title: "Designs That Inspire Confidence", link: "View Project" },
  ]

  const clients = [
    { clientImg: "/client1.svg", star: ["/star.svg", "/star.svg", "/star.svg", "/star.svg",], description: "We’re proud to partner with incredible clients, bringing their visions to life through design and creativity. Hear directly from those who’ve experienced our dedication, precision, and passion firsthand.", clientName: "Liam Cater", designation: "Product Desiner" },
    { clientImg: "/client2.svg", star: ["/star.svg", "/star.svg", "/star.svg", "/star.svg",], description: "Each creation highlights our commitment to crafting visuals that build trust, engage audiences, and bring ideas to life.", clientName: "Maya Reynolds", designation: "Graphic Designer" },
  ]

  const startPageRef = useRef<HTMLDivElement>(null)
  const nextPageRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  // const footerSectionRef = useRef<HTMLElement>(null)

  gsap.registerPlugin(useGSAP, ScrollTrigger)


  useGSAP(() => {
    gsap.from(startPageRef.current, {
      x: -200,
      duration: 1,
      ease: "power1.in",
      stagger: 0.2,
      opacity: 0,
    })

    gsap.to(startPageRef.current, {
      x: 0,
      opacity: 2,
      duration: 1,
      ease: "power3.in",
      stagger: 0.2,
    })

    gsap.from(nextPageRef.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })
    gsap.to(nextPageRef.current, {
      scrollTrigger: {
        trigger: nextPageRef.current,
        toggleActions: "play none none none",
        start: "top bottom",
        end: "bottom",
      },
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      stagger: 0.2,
      
    })

    gsap.from(testimonialRef.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })
    gsap.to(testimonialRef.current, {
      scrollTrigger: {
        trigger: nextPageRef.current,
        toggleActions: "play none none none",
        start: "bottom bottom",
        end: "bottom",
      },
      x: 0,
      opacity: 1,
      duration: 3,
      ease: "power3.out",
      stagger: 0.2,
      
    })
  })

  // const scroolToSection = () => {
  //   if(footerSectionRef.current){
  //     footerSectionRef.current.scrollIntoView({behavior: "smooth"})
  //   }
  // }

  return (
      <main className="my-6 md:my-2 relative">
        <div ref={startPageRef} className="md:flex items-center justify-between space-y-18">
          <div className="space-y-4 flex flex-col items-center justify-center w-full">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-white font-bold text-start mx-8">Transforming Ideas
              <br/>into Stunning Visuals</h2>
            <p className="text-white mx-8">&quot;Creative graphic design, branding,and motion
              graphics that captivate and inspire.&quot;</p>
            <Button variant="secondary" className='text-lg md:text-xl text-[#5858c3] font-bold p-5 cursor-pointer mb-4'>Contact Us</Button>
            <div className="flex items-center justify-center space-x-8">
              <Link href="https://www.pinterest.com/tobivisual01/?invite_code=174a809d6abe49bc912f288ad4e462c2&sender=1029143089757033614" target="#">
              <Image
                src="/pinterst.svg"
                width={60}
                height={60}
                alt="title_image"
                loading="lazy"
              />
              </Link>
              <Link href="https://www.instagram.com/tobi_visual_/?igsh=MWMycWFoYTYyb2s5bA%3D%3D#" target="#">
              <Image
                src="/instagram.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
              </Link>
              <Link href="https://www.behance.net/gallery/220823141/Portfolio?fbclid=PAY2xjawI4wNFleHRuA2FlbQIxMQABpi2p70YgPmNS1zOdI0NVX9RwqfjIxjKrSfoK4fs9_Nig0IqdhR-LX_BYWA_aem_CJ1qm8Jh2BHETm9y3i8HEA" target="#">
              <Image
                src="/be.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
              </Link>
              <Link href="https://wa.me/916263222207" target="#">
              <Image
                src="/whatsapp.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
              </Link>
            </div>
          </div>
          <div className="flex justify-end mx-6 md:mx-0">
            <Image
              className="rounded-2xl md:rounded-none"
              src="/frontpage.svg"
              width={900}
              height={900}
              alt="title_image"
              loading="lazy"
            />
          </div>
        </div>
        <div ref={nextPageRef} className="my-14 opacity-0">
          <div className="mx-8 md:mx-26 grid md:grid-cols-2 my-14">
            <h2 className="text-3xl font-bold text-white my-4">Discover Our Best
              Projects</h2>
            <p className=" text-white md:mr-14">Explore our project collection, showcasing expert graphic design and video editing. Each creation highlights our commitment to crafting visuals that build trust, engage audiences, and bring ideas to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {
              projects.map((element, index) => (
                <div key={index} className="my-4 flex flex-col items-center md:block">
                  <Image
                  className="rounded-3xl"
                    src={element.projectImg}
                    width={150}
                    height={200}
                    alt="project"
                    loading="lazy"
                  />
                  <h4 className="text-white text-xl md:text-lg mt-2">{element.title}</h4>
                  <Link href={"/projects"}><Button variant="outline" className=' text-[#5858c3] font-bold p-3 cursor-pointer my-2'>View Project</Button></Link>
                </div>
              ))
            }
          </div>
          <div>
          </div>
        </div>
        <div ref={testimonialRef} className="my-14 md:mx-14">
          <div className=" my-4">
            <div className="my-4 mx-8 md:mx-10">
              <h3 className="text-2xl lg:text-4xl font-bold text-white">Testimonial</h3>
              <h4 className="text-2xl text-white lg:text-4xl font-bold">Our Client Recommed us </h4>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 space-x-4 mx-10">
            {
              clients.map((element, index) => (
                <div key={index} className=" space-x-4 my-4">
                  <div className="flex justify-center md:block">
                    <Image
                    className="rounded-3xl"
                      src={element.clientImg}
                      width={200}
                      height={200}
                      alt="img"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="flex items-center my-2 ">
                    {
                      element.star.map((e, i) => <div key={i} >
                        <Image
                          src={e}
                          width={20}
                          height={20}
                          alt="img"
                          loading="lazy"
                        />
                      </div>)
                    }
                    </div>
                    <div className="text-white border-b-white border-b-[1px] py-4">
                      <h3 >4 / 5</h3>
                      <p >{element.description}</p>
                    </div>
                    <div className="text-white py-4">
                      <h3>{element.clientName}</h3>
                      <h3>{element.designation}</h3>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
  );
}
