'use client'
import Image from "next/image";
import Link from "next/link";
import Proj from '../../assets/about_bg.jpg'
import { motion } from "framer-motion";
import { Github, Workflow } from "lucide-react";
import './Project.css'
const Projects = async () => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '15px'
    }
    const res = await fetch('https://portfolio-5-0-server.vercel.app/projects');
    const projects = await res.json();
    // console.log(projects)
    return (
        <div className="max-w-6xl mx-auto my-24">
            <h2 className="text-5xl text-[#8F00FF] text-start">Projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    projects.map(proj =>
                        <div key={proj._id} className='rounded-[23px]' style={customBg}>
                            <motion.div className="w-full" whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 0.8 }}>
                                <Image
                                    className="w-full h-full rounded-lg brightness-125 hover:brightness-90 transition-all"
                                    src={proj.image}
                                    width={400}
                                    height={400}
                                    id='scale-in-center'
                                />
                            </motion.div>
                            <div className="flex justify-between items-center my-3">
                                <h2 className="text-2xl my-4">{proj.title}</h2>
                                <div className="flex gap-4">
                                    <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href='#' ><Github size={20} /></Link></motion.span>
                                    <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href='#'><Workflow size={20} /></Link></motion.span>
                                </div>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Projects;