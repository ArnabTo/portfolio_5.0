'use client';
import './Project.css'
import SeeMBtn from './SeeMBtn';
import ProjectCard from '../3DCard/ProjectCard';
import { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';
import { Loader } from 'lucide-react';
import fetchProjects from '@/utils/fetchLatestProjects';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {

        const getProjects = async () => {
            try {
                const projs = await fetchProjects();

                if (projs && projs.length > 0) {
                    setLoading(false);
                    setProjects(projs || []);
                    if (projects && projects.length > 0) {
                        toast({
                            title: 'Success',
                            description: 'Projects fetched successfully',
                            variant: 'default',
                        });
                    } 
                } else {
                    throw new Error(response.data.message || 'Failed to fetch projects');
                }
            } catch (error) {
                console.log(error)
            }finally {
                setLoading(false);
            }
        }
        getProjects();
    }, [projects.data, toast])

    return (
        <div className="max-w-7xl mx-4 lg:mx-auto" id='projs'>
            <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                Latest Projects
            </h1>
            {
                loading ?
                    <div className="w-full h-screen flex justify-center items-center"> <Loader className="animate-spin" size={50} color="#ffffff" /></div>
                    :
                    projects.length > 0
                        ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
                            {
                                projects.map((project, index) => <ProjectCard key={index} proj={project} />)
                            }
                        </div>
                        :
                        <div className="w-full h-screen flex justify-center items-center text-5xl text-white font-extrabold">No projects available.</div>
            }
            <SeeMBtn />
        </div>
    );
};

export default Projects;