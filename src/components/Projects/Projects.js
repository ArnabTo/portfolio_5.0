'use client'
import Image from "next/image";
import Link from "next/link";
import Proj from '../../assets/about_bg.jpg'
import { motion } from "framer-motion";
const Projects = () => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding:'10px'
}
    return (
        <div className="max-w-6xl mx-auto my-24">
            <h2 className="text-5xl text-[#8F00FF] text-start">Projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href='#' style={customBg}>
                    <motion.div className="w-full"   whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8 }}>
                        <Image  className="w-full h-full rounded-sm" src={Proj} />
                        <div className=" absolute opacity-0 bottom-8 left-8">
                            <h2 className="text-2xl">Project 1</h2>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;