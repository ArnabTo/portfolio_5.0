'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { Github, Workflow } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const AllProjects = ({ project }) => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '15px'
    }
    const customBgBadge = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '10px',
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <div key={project._id} className='rounded-[23px] max-w-2xl mx-auto my-8' style={customBg}>
                <motion.div className="w-full" whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Image
                        className="w-full h-full rounded-lg brightness-100 hover:brightness-90 transition-all"
                        src={project.image}
                        width={400}
                        height={400}
                        id='scale-in-center'
                        alt="project image"
                    />
                </motion.div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-4">
                    {
                        project.techs ? project.techs?.map((tech, index) => <span key={index} className='flex justify-center items-center rounded-md font-inter text-white' style={customBgBadge}>{tech}</span>) : <h1>loading</h1>
                    }

                </div>
                <div className="flex justify-between items-center my-3">
                    <h2 className="text-2xl my-4">{project.title}</h2>
                    <div className="flex gap-4">
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer text-white'><Link href={project.github} ><Github size={20} /></Link></motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer text-white'><Link href={project.live}><Workflow size={20} /></Link></motion.span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;