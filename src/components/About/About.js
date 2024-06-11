'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import { Tabs } from "keep-react";
import ReacLogo from '../../assets/react-2.svg'
import NodeLogo from '../../assets/nodejs-icon.svg'
import ExpressLogo from '../../assets/icons8-express-js-500.svg'
import TailwindLogo from '../../assets/tailwind-css-2.svg'
import VScodeLogo from '../../assets/tailwind-css-2.svg'
import JSLogo from '../../assets/logo-javascript.svg'
import FigmaLogo from '../../assets/figma-5.svg'
import MongooseLogo from '../../assets/mongoose-1.svg'
import BootstrapLogo from '../../assets/bootstrap-5-1.svg'
import MongoDBLogo from '../../assets/mongodb-icon-1.svg'
import FirebaseLogo from '../../assets/firebase-1.svg'
import GithuLogo from '../../assets/github-icon-1.svg'
import VercelLogo from '../../assets/vercel.svg'
import TechTollTip from "../ToolTip/TechTollTip";
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
        <div className="max-w-7xl lg:mx-auto my-44" id="abt">
            <div className="mx-4">
           
                {/* <div className="flex flex-col lg:flex-row items-center justify-between"> */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                    <div>
                    <h2 className="text-5xl text-[#8F00FF] text-start my-5">About.</h2>
                        <motion.p className="abt_P tracking-widest mb-6" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="500">
                            Passionate MERN stack developer seeking a
                            challenging role to develop scalable web
                            applications and contribute to the success
                            of an innovative organization. Committed to
                            continuously learning new technologies and
                            delivering high-quality solutions that exceed
                            client expectations.
                        </motion.p>
                        <h2 className="text-4xl text-[#8F00FF] text-start mb-2">Technologies.</h2>
                        {/* <Tabs aria-label="tabs" style="underline" borderPosition="bottom" data-aos="zoom-in-up" >
                            <Tabs.Item style={{ color: 'red' }} title="Language" >
                                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-1" >
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={JSLogo} alt='express' />
                                    </span>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Frame Works" data-aos="zoom-in-up">
                                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-1">
                                    <span className="flex justify-start items-center gap-1 text-xl border-gray-500" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={ReacLogo} alt='reactlogo'  />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={NodeLogo} alt='node' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={ExpressLogo} alt='express' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={TailwindLogo} alt='tailwind' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={BootstrapLogo} alt='reactlogo' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl" data-aos="zoom-in-up">
                                        <Image style={customBg} className="w-[50%]" src={MongooseLogo} alt='mongoose' />
                                    </span>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Database" data-aos="zoom-in-up">
                                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-1">
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={MongoDBLogo} alt='express' />
                                    </span>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Tools" data-aos="zoom-in-up">
                                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center">
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={VScodeLogo} alt='mongoose' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={FigmaLogo} alt='mongoose' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={FirebaseLogo} alt='mongoose' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={GithuLogo} alt='mongoose' />
                                    </span>
                                    <span className="flex justify-start items-center gap-1 text-xl">
                                        <Image style={customBg} className="w-[50%]" src={VercelLogo} alt='mongoose' />
                                    </span>
                                </div>
                            </Tabs.Item>
                        </Tabs> */}
                        <TechTollTip/>
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
        </div>
    );
};

export default About;