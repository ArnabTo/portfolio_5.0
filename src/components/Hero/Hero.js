'use client'
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'
import { IconMailFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Link from 'next/link';
import { delay, motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Nav from '../Nav/Nav';
const Hero = () => {
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

    const backgroundImageStyle = {
        backgroundImage: "url('https://i.ibb.co/DgYx2Mb/herobg-1.png')",
        /* Additional CSS properties can be added as needed */
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      };

    return (
        <div style={backgroundImageStyle}>
            <Nav />
            <div className="hero h-[110vh] lg:h-[100vh] flex justify-center items-center">
                <div className='hero-container  max-w-7xl mx-auto mb-36 lg:mb-12 '>
                    <motion.div className="text-center leading-[7rem] mt-[8rem] lg:mt-0">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}

                            className="text-[8rem] md:text-[10rem] text-white"><span className='text-[5rem] text-white'>Hi, I'm</span>Arnab Saha</motion.h1>
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
                            onClick={downlaodResume}
                            className='btn bg-white text-black px-12 py-3 rounded-sm text-2xl flex justify-center mx-auto transition-all hover:bg-[#8F00FF] hover:text-white'>Resume</motion.button>
                        <span className='flex justify-center my-4 gap-4'>
                            <Link href='https://github.com/ArnabTo' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandGithubFilled size={42} /></Link>
                            <Link href='https://www.linkedin.com/in/itsarnab/' className='text-white hover:text-[#8F00FF] transition-all'><IconBrandLinkedin size={42} /></Link>
                            <Link href='mailto:arnabs929@gmail.com' className='text-white hover:text-[#8F00FF] transition-all'><IconMailFilled size={42} /></Link>
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;