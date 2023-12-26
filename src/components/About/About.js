'use client'
import { Progress } from "flowbite-react";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css'
const About = () => {
    return (
        <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-[#8F00FF] text-start">About.</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">

                <div className="flex-1">
              
                    <p className="abt_P tracking-widest">
                    I am a Junior MERN stack developer with expertise in building dynamic web applications. Proficient in technologies such as React, Express, Node, MongoDB, and Tailwind CSS, I bring a comprehensive skill set to the development landscape. Driven by a commitment to continuous improvement, I am currently expanding my skill set by delving into advanced technologies like Next.js. This strategic initiative is geared towards enhancing the performance and user experience of my projects, showcasing a proactive approach to staying abreast of industry trends. As a developer, I am dedicated to leveraging my knowledge to create robust, scalable, and high-performance solutions. My familiarity with the MERN stack, coupled with an ongoing pursuit of learning and mastery, positions me as a dynamic contributor to the field of web development.
                    </p>
                </div>
                <div className="flex-1">
                    <Image
                    style={{border:'5px solid #8F00FF', borderRadius:'40px', padding:'5px', margin:"auto"}}
                    src={PortfoliImg}
                    alt='Portfolio Img'
                    height='5rem'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;