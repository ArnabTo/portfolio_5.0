import './Project.css'
import Project from "./Project";
import { getLatesstProjects } from '@/utils/getLatestProjects';
import SeeMBtn from './SeeMBtn';
import ProjectCard from '../3DCard/ProjectCard';
const Projects = async () => {

    const projects = await getLatesstProjects();

    return (
        <div className="max-w-7xl mx-4 lg:mx-auto my-24" id='projs'>
            <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                Latest Projects
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <ProjectCard proj={projects[0]} />
                </div>
                <div>
                    <ProjectCard proj={projects[1]} />
                </div>
                <div>
                    <ProjectCard proj={projects[2]} />
                </div>
                <div>
                    <ProjectCard proj={projects[3]} />
                </div>
            </div>
            <SeeMBtn />
        </div>
    );
};

export default Projects;