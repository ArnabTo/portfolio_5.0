'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'

const About = () => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '10px'
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
               <div className="w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
                    <div>
                        <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                            About me
                        </h1>
                        <motion.p className="abt_P tracking-widest mb-6 leading-8 text-base text-gray-300 text-center lg:text-start">
                            Hello! I am Arnab. I am a professional <span className=" text-purple-500">Full Stack Developer</span> based in Dhaka, Bangladesh.
                            <br/>
                            From my passion for Web Development, I have skilled myself in various front-end and back-end technologies.
                            With my expertise, I have successfully completed several projects.
                            From creating a fitness app that personalizes your exercise and diet journey to developing a platform for sharing
                            surplus food, my journey has been filled with opportunities to make a difference. 
                            <br/>
                            Projects <span className=" text-purple-500">Fit-Track, Student and Class Management, and Share Plate</span> stand as testaments to my commitment to using technology for good.
                            <br/>
                            My tech stack includes <span className=" text-purple-500">HTML, CSS, JavaScript, React, and Next</span> for front-end and <span className=" text-purple-500">Nodejs, ExpressJs, and MongoDB </span>for back-end development.
                            <br/>
                            Feel free to explore my portfolio to see the exciting projects I've worked on. I'm always open to new opportunities and collaborations, so don't hesitate to get in touch if you have a project in mind or just want to say hello!
                        </motion.p>
                    </div>
                    <div className="flex-1">
                        <Tilt glareEnable={true}>
                            <Image
                                style={{ width: '50%', border: '5px solid #8F00FF', borderRadius: '40px', padding: '5px', margin: "auto" }}
                                src={PortfoliImg}
                                alt='Portfolio Img'
                                height='5rem'
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
    );
};

export default About;