import Image from "next/image";
import Link from "next/link";
import Proj from '../../assets/about_bg.jpg'
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
    const customBgBadge = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '10px',
    }
  
    const res = await fetch('https://vercel.com/arnab-sahas-projects/portfolio-5-0-server/projects',{
       cache:'no-store', 
    });
    const projects = await res.json();
    // console.log(projects)
    return (
        <div className="max-w-7xl mx-auto my-24">
            <h2 className="text-5xl text-[#8F00FF] text-start">Latest Projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {
                    projects.map(proj =>
                        <div key={proj._id} className='rounded-[23px]' style={customBg}>
                            <div className="w-full">
                                <Image
                                    className="w-full h-full rounded-lg brightness-100 hover:brightness-90 transition-all"
                                    src={proj.image}
                                    width={400}
                                    height={400}
                                    id='scale-in-center'
                                    alt="project image"
                                />
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-4">
                                {
                                   proj.techs ?  proj.techs?.map((tech, index) =>  <span key={index} className='flex justify-center items-center rounded-md font-inter' style={customBgBadge}>{tech}</span> ) : <h1>loading</h1>
                                }
                               
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <h2 className="text-2xl my-4">{proj.title}</h2>
                                <div className="flex gap-4">
                                    <span style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href='#' ><Github size={20} /></Link></span>
                                    <span style={customBg} className='rounded-md brightness-50 hover:brightness-100 cursor-pointer'><Link href='#'><Workflow size={20} /></Link></span>
                                </div>
                            </div>
                        </div>)
                }
            </div>
           <div className='text-center my-12'><Link href='#' className='seeMoreBtn'>See more...</Link></div> 
        </div>
    );
};

export default Projects;