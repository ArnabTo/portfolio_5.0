'use client';
import { Spotlight } from "../ui/Spotlight";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import { IconMailFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import GitHubGif  from '@/assets/Github.gif';
const Hero = () => {

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

    <BackgroundBeamsWithCollision>
      <div>
        <div className="p-4 max-w-7xl mx-auto mt-28 lg:mt-40 relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-[#a434faf8] bg-opacity-50">
            Hi, I'm <br /> Arnab Saha.
          </h1>
          <div className='text-2xl md:text-5xl text-center font-bold my-2 md:my-5 bg-clip-text '>
            <FlipWords words={words} /> <br />
          </div>
          <button onClick={downlaodResume} className="relative flex m-auto my-8 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Resume
            </span>
          </button>
          {/* <span className='flex justify-center my-4 gap-4'>
            <Link href='https://github.com/ArnabTo' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandGithubFilled size={42} /></Link>
            <Link href='https://www.linkedin.com/in/itsarnab/' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandLinkedin size={42} /></Link>
            <Link href='mailto:arnabs929@gmail.com' className='text-white hover:text-[#8F00FF] transition-all'><IconMailFilled size={42} /></Link>
          </span> */}
          <span className='flex flex-col md:flex-row items-center justify-center my-4 gap-2'>
            <Link href='https://github.com/ArnabTo'>
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(128,0,128,0.6)_0%,rgba(128,0,128,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className="text-xl">
                    GitHub
                  </span>
                  <IconBrandGithubFilled size={25} />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
            <Link href='https://www.linkedin.com/in/itsarnab/'>
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(128,0,128,0.6)_0%,rgba(128,0,128,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className="text-xl">
                    Linkedin
                  </span>
                  <IconBrandLinkedin size={25} />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
            <Link href='mailto:arnabs929@gmail.com'>
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(128,0,128,0.6)_0%,rgba(128,0,128,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span className="text-xl">
                    Mail
                  </span>
                  <IconMailFilled size={25} />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          </span>
        </div>
      </div>
    </BackgroundBeamsWithCollision>

  );
};

export default Hero;