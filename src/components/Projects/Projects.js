import './Project.css'
import Project from "./Project";
import { getLatesstProjects } from '@/utils/getLatestProjects';
import SeeMBtn from './SeeMBtn';
const Projects = async () => {

    const projects = await getLatesstProjects();

    return (
        <div className="max-w-7xl mx-auto my-24">
            <h2 className="text-5xl text-[#8F00FF] text-start">Latest Projects.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {
                    projects.map(proj => <Project proj={proj} key={proj._id}></Project>)
                }
            </div>
            <SeeMBtn />
        </div>
    );
};

export default Projects;