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

                {/* Bio content starts here */}
                <p className="mt-4 text-lg text-center lg:text-start text-white">
                    I am a passionate and skilled front-end developer who enjoys building responsive, dynamic, and user-oriented web interfaces.<br />
                    My focus is on creating seamless user experiences using modern tools like <strong>React.js</strong> and <strong>Next.js</strong>, 
                    along with design-focused CSS frameworks such as <strong>TailwindCSS</strong> and <strong>Bootstrap</strong>.
                </p>

                <p className="mt-4 text-lg text-center lg:text-start text-white">
                    In addition to my front-end expertise, I am a full-stack developer specializing in the <strong>MERN Stack</strong>.<br />
                    I leverage my experience to efficiently work across the entire stack, utilizing technologies like <strong>Node.js</strong>, 
                    <strong>Express.js</strong>, and <strong>MongoDB</strong>.<br /> 
                    This allows me to deliver complete solutions, from developing refined front-end applications to designing scalable backend systems.
                </p>

                <h3 className="text-2xl font-semibold mt-6 text-center lg:text-start text-white">Core Competencies & Technologies</h3>
                
                <ul className="list-disc list-inside mt-4 text-lg text-center lg:text-start text-white">
                    <li><strong>React.js</strong> & <strong>Next.js</strong> – For fast, interactive UIs</li>
                    <li><strong>JavaScript</strong> – Enabling dynamic functionality</li>
                    <li><strong>HTML/CSS</strong> with <strong>TailwindCSS</strong> and <strong>Bootstrap</strong> – For stunning, responsive designs</li>
                    <li><strong>Node.js</strong> & <strong>Express.js</strong> – For back-end development</li>
                    <li><strong>MongoDB</strong> – For database management</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-6 text-center lg:text-start text-white">About Me</h3>
                
                <p className="mt-4 text-lg text-center lg:text-start text-white">
                    Curiosity-driven, I am passionate about continuous learning.<br />
                    My strong focus is on solving real-world problems through code, crafting impactful solutions that improve user satisfaction and, in turn, boost business performance.
                </p>
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