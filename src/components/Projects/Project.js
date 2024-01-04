'use client';
import { motion } from "framer-motion";
import { Github, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import './Project.css'

const Project = ({ proj }) => {
    // console.log(proj)

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

    return (
        <div>
            <div key={proj._id} className='rounded-[23px]' style={customBg}>
                <motion.div className="w-full" whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8 }}>
                    <Image
                        className="w-full h-full rounded-lg brightness-100 hover:brightness-90 transition-all"
                        src={proj.image}
                        width={400}
                        height={400}
                        id='scale-in-center'
                        alt="project image"
                    />
                </motion.div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-4">
                    {
                        proj.techs ? proj.techs?.map((tech, index) => <span key={index} className='flex justify-center items-center rounded-md font-inter' style={customBgBadge}>{tech}</span>) : <h1>loading</h1>
                    }

                </div>
                <div className="flex justify-between items-center my-3">
                    <h2 className="text-2xl my-4">{proj.title}</h2>
                    <div className="flex gap-4">
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href={proj.github} ><Github size={20} /></Link></motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href={proj.live}><Workflow size={20} /></Link></motion.span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;