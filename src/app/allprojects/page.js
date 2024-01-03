import { getAllProjects } from "@/utils/getAllProjects";
import { Home } from "lucide-react";
import Link from "next/link";
import AllProjects from "./AllProjects";

const allprojects = async () => {

    const allProjects = await getAllProjects();

    return (
        <div className='max-w-7xl mx-auto my-16'>
            <span className="flex justify-between">
                <h2 className="text-5xl text-[#8F00FF] text-start">All of the Projects.</h2>
                <Link className="flex flex-col items-center" href='/'><Home strokeWidth={1.25} size={40} color='#8F00FF' />Back to Home</Link>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-8">
                {
                    allProjects.map(project => <AllProjects key={project._id} project={project}></AllProjects>)
                }
            </div>
        </div>
    );
};

export default allprojects;