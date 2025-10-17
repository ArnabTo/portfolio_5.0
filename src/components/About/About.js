'use client'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { BackgroundGradient } from "../ui/background-gradient";
import { PointerHighlight } from "../ui/pointer-highlight";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="relative max-w-7xl mx-auto z-10 px-4">
            {/* === Gaussian Blur Background === */}
            <div
                className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-black/60 border border-white/10"
                style={{
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                }}
            ></div>

            {/* === Content === */}
            <div className="relative p-6 md:p-10">
                <div className="max-w-[5rem] mx-auto lg:mx-0">
                    <BackgroundGradient>
                        <Image
                            className="rounded-full"
                            src={PortfoliImg}
                            width={400}
                            height={200}
                            alt="profile"
                        />
                    </BackgroundGradient>
                </div>

                <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-indigo-600 my-4">
                    About me
                </h1>
                <p className="mt-4 text-lg text-center lg:text-start text-white/90 leading-relaxed">
                    I am a passionate <strong>Junior Software Developer</strong> with hands-on experience in building modern web applications using
                    <PointerHighlight
                        rectangleClassName="bg-yellow-500/10 border border-white/20 backdrop-blur-sm rounded-sm"
                        pointerClassName="text-indigo-400">
                        <span className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] p-1">
                            Django, Python React.js, and Next.js,
                        </span>
                    </PointerHighlight>.
                    I enjoy transforming ideas into dynamic, scalable, and high-performing digital solutions while continuously expanding my skills in software development.
                </p>


                <p className="mt-4 text-lg text-center lg:text-start text-white/90 leading-relaxed">
                    Over the past year, I have gained hands-on experience in developing complete
                    <PointerHighlight
                        rectangleClassName="bg-indigo-600/30 border border-white/20 backdrop-blur-sm rounded-sm"
                        pointerClassName="text-indigo-400">
                        <span className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] p-2">
                            eCommerce platforms, HRM (Human Resource Management) systems, EdTech platforms, Fitness solutions, Agency websites 
                        </span>
                    </PointerHighlight>
                    and so on from the ground up — both individually and as part of collaborative teams. My work spans full-stack development using
                    <strong> Django</strong>, <strong> Python</strong>, and <strong> other techs</strong>, with a focus on building scalable architectures,
                    robust backend logic, responsive user interfaces, and seamless digital experiences that adapt beautifully across devices.
                </p>

                <p className="mt-4 text-lg text-center lg:text-start text-white/90 leading-relaxed">
                    On the mobile side, I’ve worked extensively with
                    <PointerHighlight
                        rectangleClassName="bg-blue-500/10 border border-white/20 backdrop-blur-sm rounded-sm"
                        pointerClassName="text-indigo-400">
                        <span className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] p-1">
                            React Native
                        </span>
                    </PointerHighlight>
                    to develop cross-platform applications that provide smooth and responsive user experiences.
                    My ability to bridge design and functionality enables me to deliver clean, modern, and maintainable code across diverse technology stacks.
                </p>

                <p className="mt-4 text-lg text-center lg:text-start text-white/90 leading-relaxed">
                
                    <PointerHighlight
                        rectangleClassName="bg-green-500/10 border border-white/20 backdrop-blur-sm rounded-sm"
                        pointerClassName="text-indigo-400">
                        <span className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] p-1">
                            JavaScript (ES6+), React.js, Next.js, Python, Django, Node.js, Express.js, and MongoDB
                        </span>
                    </PointerHighlight>,
                    complemented by strong proficiency in
                    <strong> TailwindCSS</strong>, <strong> Bootstrap</strong>, and <strong> REST API</strong> integration.
                    I prioritize responsive design principles, accessibility, and performance optimization in every project I build.
                </p>

                <p className="mt-4 text-lg text-center lg:text-start text-white/90 leading-relaxed">
                    As a developer, I am deeply driven by curiosity and continuous learning.
                    I focus on solving real-world problems through technology —
                    crafting products that enhance user satisfaction, streamline business operations, and create measurable impact.
                    My ultimate goal is to grow as a
                    <PointerHighlight
                        rectangleClassName="bg-white/10 border border-white/20 backdrop-blur-sm rounded-sm"
                        pointerClassName="text-indigo-400">
                        <span className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] p-1">
                            software engineer who builds technology that truly matters.
                        </span>
                    </PointerHighlight>
                </p>


            </div>
        </div>
    );
};

export default About;
