import { getAllProjects } from "@/utils/getAllProjects";
import { Home } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/3DCard/ProjectCard";


const allprojects = async () => {

    const allProjects = await getAllProjects();
    
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <span className="flex justify-between">
                <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                   All projects.
                </h1>
                <Link className="flex flex-col items-center" href='/'><Home strokeWidth={1.25} size={40} color='#8F00FF' />Back to Home</Link>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-8">
                {
                    allProjects.data.map(project => <ProjectCard key='project._id' proj={project} />)
                }
            </div>
        </div>
    );
};

export default allprojects;