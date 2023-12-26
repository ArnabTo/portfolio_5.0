'use client'
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'
import { IconMailFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
const Hero = () => {

    return (
        <Parallax
            blur={6}
            bgImage='https://i.ibb.co/DgYx2Mb/herobg-1.png'
            strength={-200}
            bgImageAlt='Hero Bg'
        >
            <div className="hero h-[100vh] flex justify-center items-center">
                <div className='hero-container  max-w-6xl mx-auto mb-36 lg:mb-0 '>
                    <motion.div className="text-center pt-[2rem] leading-[7rem]">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}

                            className="text-[8rem] md:text-[10rem]"><span className='text-[5rem]'>Hi, I'm</span>Arnab Saha</motion.h1>
                        <span className='text-[#8F00FF]'>
                            <TypeAnimation
                                className='text-[5rem]'
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front-End Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'MERN Stack Developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={10}
                                style={{ display: 'inline-block' }}
                                repeat={3}
                            />
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className='btn bg-white text-black px-12 py-3 rounded-sm text-2xl flex justify-center mx-auto transition-all hover:bg-[#8F00FF] hover:text-white'>Resume</motion.button>
                        <span className='flex justify-center my-4 gap-4'>
                            <Link href='https://github.com/ArnabTo' className='hover:text-[#8F00FF] transition-all'><IconBrandGithubFilled size={42} /></Link>
                            <Link href='https://www.linkedin.com/in/itsarnab/' className='hover:text-[#8F00FF] transition-all'><IconBrandLinkedin size={42} /></Link>
                            <Link href='mailto:arnabs929@gmail.com' className='hover:text-[#8F00FF] transition-all'><IconMailFilled size={42} /></Link>
                        </span>
                    </motion.div>
                </div>
            </div>
        </Parallax>
    );
};

export default Hero;