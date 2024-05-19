import './Project.css'
import Project from "./Project";
import { getLatesstProjects } from '@/utils/getLatestProjects';
import SeeMBtn from './SeeMBtn';
const Projects = async () => {

    const projects = await getLatesstProjects();

    return (
        <div className="max-w-7xl mx-4 lg:mx-auto my-24" id='projs'>
            <h2 className="text-5xl text-[#8F00FF] text-start">Latest Projects.</h2>
            <div className="grid
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-10
                      grid-rows-4 md:grid-rows-5 lg:grid-rows-11">
                <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 row-span-2 md:row-span-2 lg:row-span-5  p-4">
                    <Project proj={projects[0]}></Project>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 row-span-2 md:row-span-2 lg:row-span-5 col-start-1 sm:col-start-2 md:col-start-3 lg:col-start-6 row-start-1 sm:row-start-1 md:row-start-2 lg:row-start-2  p-4">
                    <Project proj={projects[1]}></Project>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 row-span-2 md:row-span-2 lg:row-span-5  p-4">
                    <Project proj={projects[2]}></Project>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-5 row-span-2 md:row-span-2 lg:row-span-5 col-start-1 sm:col-start-2 md:col-start-3 lg:col-start-6 row-start-1 sm:row-start-2 md:row-start-3 lg:row-start-7  p-4">
                    <Project proj={projects[3]}></Project>
                </div>
            </div>
            <SeeMBtn />
        </div>
    );
};

export default Projects;