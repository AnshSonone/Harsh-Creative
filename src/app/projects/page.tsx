import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Share } from "lucide-react"

const projects = [
  { projectImg: "/graphic_1.png", title: "Burger Modern Poster Design" },
  { projectImg: "/graphic_2.png", title: "Pharmacy Brochure Design" },
  { projectImg: "/graphic_3.png", title: "Porsche Poster Design" },
  { projectImg: "/graphic_4.png", title: "Lambo Modern Poster Design" },
  { projectImg: "/graphic_5.png", title: "Cosmetic Poster design" },
  { projectImg: "/graphic_6.jpg", title: "Rent a Car Poster Design" },
  { projectImg: "/graphic_7.png", title: "Modern Fun, Flyer Design" },
  { projectImg: "/graphic_8.png", title: "Glowte Skin Care Design" },
  { projectImg: "/graphic_9.png", title: "Social Media Poster Desgin" },
  { projectImg: "/graphic_10.png", title: "Modern SSM Design" },
  { projectImg: "/graphic_11.jpg", title: "Social Media Poster Designs" },
  { projectImg: "/graphic_12.jpg", title: "Nivya Poster Designs" },
  { projectImg: "/graphic_13.png", title: "Bloom Booster Designs" },
  { projectImg: "/graphic_14.png", title: "Travel World SMDesigns" },
  { projectImg: "/graphic_15.jpg", title: "Fashion SM Designs" },
  { projectImg: "/graphic_16.png", title: "Social Media Flyer" },
];


const Projects = () => {

  return (
    <div className="px-6 pb-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-10">
          Graphic Design <span className="text-[#B2D79C]">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="relative h-64 w-full rounded-xl overflow-hidden bg-center bg-cover shadow-lg"
            style={{ backgroundImage: `url('${project.projectImg}')` }}
          >
            <div className="absolute inset-0 flex flex-col justify-between items-center bg-black/40 p-4 space-y-2">
              <div className='flex flex-col items-end justify-center w-full space-y-2'>
                <Share className='text-white'/>
                <Image
                  src={'/logo_harsh.svg'}
                  width={40}
                  height={40}
                  loading={'lazy'}
                  alt='logo'
                />
              </div>
              <div className='flex flex-col items-center space-y-2'>
                <span className="text-white font-semibold">{project.title}</span>
                <Link href={project.projectImg} target='#' download={project.projectImg}><Button variant={'secondary'} className='cursor-pointer'>View</Button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
