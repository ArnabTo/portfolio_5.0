'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import ProjectCard from "@/components/3DCard/ProjectCard";
import Link from "next/link";
import { Home, Loader } from "lucide-react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();


    useEffect(() => {
        const fetchProjects = async () => {

            try {
                const response = await axios.get('/api/get-projects', { cache: 'no-store' });
                setProjects(response.data.data || []);

            } catch (error) {
                toast({
                    title: 'Error',
                    description: error.message,
                    variant: 'destructive',
                })
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, [toast])

    const skeletonArray = ['', '', '', '', ''];
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <span className="flex justify-between">
                <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                    All projects.
                </h1>
                <Link className="flex flex-col items-center" href='/'>
                    <Home strokeWidth={1.25} size={40} color='#8F00FF' />Back to Home
                </Link>
            </span>

            {
                loading ?
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
                        {
                            skeletonArray.map(() => (
                                <div className="w-5/6 bg-[#1b1b2081] h-[30rem] rounded-lg p-10 space-y-5 mb-10">
                                    <div className="w-24 h-8 bg-[#5555553f] rounded-lg"></div>
                                    <div className="w-full h-8 bg-[#5555553f] rounded-lg"></div>
                                    <div className="grid grid-cols-4 gap-2">
                                        <div className="w-full h-8 bg-[#5555553f] rounded-lg"></div>
                                        <div className="w-full h-8 bg-[#5555553f] rounded-lg"></div>
                                        <div className="w-full h-8 bg-[#5555553f] rounded-lg"></div>
                                        <div className="w-full h-8 bg-[#5555553f] rounded-lg"></div>
                                    </div>
                                    <div className="w-full h-56 bg-[#5555553f] rounded-lg"></div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    projects.length > 0
                        ?
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 my-8">
                            {
                                projects.map((project, index) => <ProjectCard key={index} proj={project} />)
                            }
                        </div>
                        :
                        <div className="w-full h-screen flex justify-center items-center text-5xl text-white font-extrabold">No projects available.</div>
            }

        </div>
    );
};

export default Projects;
