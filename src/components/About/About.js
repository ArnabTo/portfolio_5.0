'use client'
import { Progress } from "flowbite-react";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import { Tabs } from "keep-react";
import { IconBrandNodejs, IconBrandReact, IconBrandStripe, IconBrandTailwind, IconEmphasis, IconBrandGithubFilled, IconBrandVercel, IconBrandVscode, IconBrandFigma, IconBrandMongodb, IconBrandJavascript   } from '@tabler/icons-react';

const About = () => {
    return (
        <div className="max-w-6xl lg:mx-auto mt-24 mb-24">
            <div className="mx-4">
                <h2 className="text-5xl text-[#8F00FF] text-start">About.</h2>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex-1">
                        <motion.p className="abt_P tracking-widest mb-6">
                            Passionate MERN stack developer seeking a
                            challenging role to develop scalable web
                            applications and contribute to the success
                            of an innovative organization. Committed to
                            continuously learning new technologies and
                            delivering high-quality solutions that exceed
                            client expectations.
                        </motion.p>
                        <h2 className="text-4xl text-[#8F00FF] text-start mb-2">Technologies.</h2>
                        <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
                            <Tabs.Item style={{ color: 'red' }} title="Language">
                            <span className="flex justify-start items-center gap-1 text-xl "><IconBrandJavascript/> JavaScript </span>
                                 
                            </Tabs.Item>
                            <Tabs.Item title="Frame Works">
                                <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-1">
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandReact/>ReactJS</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandTailwind/> TailwindCSS</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandNodejs/>NodeJS </span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandStripe/>StripeJS(Basic)</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconEmphasis/>ExpressJS</span>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Database">
                            <span className="flex justify-start items-center gap-1 text-xl"><IconBrandMongodb/>MongoDB</span>     
                            </Tabs.Item>
                            <Tabs.Item title="Tools">
                            <div className="grid grid-cols-2 lg:grid-cols-5 justify-center items-center">
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandGithubFilled/>GitHub</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandVercel/>Vercel</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandVscode/>VSCode</span>
                                    <span className="flex justify-start items-center gap-1 text-xl"><IconBrandFigma/>Figma</span>
                                </div>
                            </Tabs.Item>
                        </Tabs>
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