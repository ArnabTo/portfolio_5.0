
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
const ProjectCard = ({ proj }) => {

    return (
        <CardContainer className="inter-var">
            <CardBody className=" bg-zinc-950 relative group/card  dark:hover:shadow-2xl  dark:hover:shadow-[#8F00FF]/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full lg:w-[30rem] xl:w-[35rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                >
                    {proj?.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Production grade fitness tracking application. Built with a team of 6 developers.
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 "
                >
                    {
                        proj?.techs ? proj.techs?.map((tech, index) => <span key={index} className='flex justify-center items-center rounded-md bg-white text-black px-5' >{tech}</span>) : <span>loading</span>
                    }
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={proj?.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={proj?.github}
                        target="__blank"
                        className="text-white px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Repo →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white dark:bg-black dark:text-white text-black text-xs font-bold"
                    >
                        <Link href={proj?.live}>Preview</Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default ProjectCard;