"use client"
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {

  const projects = [
    { projectImg: "/project1.svg", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/project2.svg", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/project2.svg", title: "Designs That Inspire Confidence", link: "View Project" },
    { projectImg: "/project3.svg", title: "Designs That Inspire Confidence", link: "View Project" },
  ]

  const clients = [
    { clientImg: "/client1.svg", star: ["/star.svg", "/star.svg", "/star.svg", "/star.svg",], description: "We’re proud to partner with incredible clients, bringing their visions to life through design and creativity. Hear directly from those who’ve experienced our dedication, precision, and passion firsthand.", clientName: "Liam Cater", designation: "Product Desiner" },
    { clientImg: "/client2.svg", star: ["/star.svg", "/star.svg", "/star.svg", "/star.svg",], description: "Each creation highlights our commitment to crafting visuals that build trust, engage audiences, and bring ideas to life.", clientName: "Maya Reynolds", designation: "Graphic Designer" },
  ]

  const startPageRef = useRef<HTMLDivElement>(null)
  const nextPageRef = useRef<HTMLDivElement>(null)

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
      opacity: 1,
      duration: 1,
      ease: "power3.in",
      stagger: 0.2,
    })

  //   gsap.from(nextPageRef.current, {
  //     x: -500,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power3.out",
  //     stagger: 0.2,
  //   })
  //   gsap.to(nextPageRef.current, {
  //     scrollTrigger: {
  //       trigger: nextPageRef.current,
  //       toggleActions: "restart pause none none",
  //       start: "top center",
  //       end: "bottom",
  //       markers: true
  //     },
  //     x: 0,
  //     opacity: 1,
  //     duration: 3,
  //     ease: "power3.out",
  //     stagger: 0.2,
  //   })
  })

  return (
    <div className="">
      <main className="my-6 md:my-2">
        <div ref={startPageRef} className="md:flex items-center justify-between space-y-18">
          <div className="space-y-4 flex flex-col items-center w-full">
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold text-start">Transforming Ideas<br />
              into Stunning Visuals</h2>
            <p className="text-white">&quot;Creative graphic design, branding,and motion
              graphics that captivate and inspire.&quot;</p>
            <Button variant="secondary" className='text-lg md:text-xl text-[#5858c3] font-bold p-5 cursor-pointer mb-4'>Contact Us</Button>
            <div className="flex items-center justify-center space-x-8">
              <Image
                src="/pinterst.svg"
                width={60}
                height={60}
                alt="title_image"
                loading="lazy"
              />
              <Image
                src="/instagram.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
              <Image
                src="/be.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
              <Image
                src="/whatsapp.svg"
                width={50}
                height={50}
                alt="title_image"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/frontpage.svg"
              width={900}
              height={900}
              alt="title_image"
              loading="lazy"
            />
          </div>
        </div>
        <div ref={nextPageRef} className="my-14">
          <div className="md:grid grid-cols-2 justify-items-center mx-4 my-6">
            <h2 className="text-2xl font-bold text-white my-4">Discover Our Best
              Projects</h2>
            <h2 className=" text-white">Explore our project collection, showcasing expert graphic design and video editing. Each creation highlights our commitment to crafting visuals that build trust, engage audiences, and bring ideas to life.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {
              projects.map((element, index) => (
                <div key={index}>
                  <Image
                  className="rounded-3xl"
                    src={element.projectImg}
                    width={200}
                    height={200}
                    alt="project"
                    loading="lazy"
                  />
                  <h4 className="text-white text-xl md:text-lg font-bold mt-2">{element.title}</h4>
                  <Button variant="outline" className=' text-[#5858c3] font-bold p-3 cursor-pointer my-2'>View Project</Button>
                </div>
              ))
            }
          </div>
        </div>
        <div className="my-14">
          <div className="grid justify-items-center my-4">
            <div>
              <h3 className="text-xl text-white">Testimonial</h3>
              <h4 className="text-2xl text-white font-bold">Our Client Recommed us </h4>
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
                    <div className="flex items-center">
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
    </div>
  );
}
