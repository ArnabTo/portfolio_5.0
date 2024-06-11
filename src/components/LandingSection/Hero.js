'use client'
import React from "react";
import { Vortex } from "../ui/vortex";
import { delay, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import { IconMailFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { FlipWords } from "../ui/flip-words";

function Hero() {

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
    <div className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.div className="text-center leading-[7rem] mt-[8rem] lg:mt-0">

          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" text-2xl md:text-[4rem] text-white font-extrabold md:mb-5">
          Hi, I'm
            </motion.h1>
          </div>
          <div className="md:my-11">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" text-4xl md:text-[8rem] text-white font-extrabold md:mb-5">
              Arnab Saha
            </motion.h1>
          </div>

          <div className='text-2xl md:text-5xl font-bold my-2 md:my-5'>
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
        </motion.div>
      </Vortex>
    </div>
  );
}
export default Hero;