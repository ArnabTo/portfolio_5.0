'use client'
import { Progress } from "flowbite-react";
import Image from "next/image";
import PortfoliImg from '../../assets/portfolioimg.jpg';
import './About.css'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import { Tabs } from "keep-react";
const About = () => {
    return (
        <div className="max-w-6xl mx-auto">
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
                    <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
                        <Tabs.Item style={{color:'red'}} title="Language">Profile content</Tabs.Item>
                        <Tabs.Item title="Frame Works">Dashboard content</Tabs.Item>
                        <Tabs.Item title="Database">Settings content</Tabs.Item>
                        <Tabs.Item title="Tools">Contacts content</Tabs.Item>
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
    );
};

export default About;