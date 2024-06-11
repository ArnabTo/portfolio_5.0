'use client';
import { cn } from "@/utils/cn";
import { Spotlight } from "../ui/Spotlight";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import { IconMailFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

const Hero2 = () => {

    const words = ['Front-end Developer', 'MERN stack Developer'];

    const downlaodResume = () => {
        const resumeFileId = '1u_zexSUlhWfdNneIVBLgYhoTLqDkGgoz';
        const fileURL = `https://drive.google.com/uc?id=${resumeFileId}`;
        const fileLInk = document.createElement('a');
        fileLInk.href = fileURL
        fileLInk.download = 'resume.pdf';
        document.body.appendChild(fileLInk);
        fileLInk.click();
        document.body.removeChild(fileLInk);
      };
    
    return (

             <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#8F00FF"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-[#a434faf8] bg-opacity-50">
        Hi, I'm <br /> Arnab Saha.
        </h1>
        
        <div className='text-2xl md:text-5xl text-center font-bold my-2 md:my-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            <FlipWords words={words} /> <br />
          </div>
          <button onClick={downlaodResume} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Resume
            </span>
          </button>
          <span className='flex justify-center my-4 gap-4'>
            <Link href='https://github.com/ArnabTo' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandGithubFilled size={42} /></Link>
            <Link href='https://www.linkedin.com/in/itsarnab/' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandLinkedin size={42} /></Link>
            <Link href='mailto:arnabs929@gmail.com' className='text-white hover:text-[#8F00FF] transition-all'><IconMailFilled size={42} /></Link>
          </span>
      </div>
    </div>
    
    );
};

export default Hero2;