import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
import '../../app/globals.css';
const ProjectCard = ({ proj }) => {
    const { title, about, techs, image, github, live } = proj;

    return (
        <CardContainer className="inter-var cursor-pointer h-full">
            <CardBody className="bg-zinc-950 flex flex-col relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#8F00FF]/[0.3] dark:bg-black dark:border-white/[0.2]  w-full lg:w-[30rem] xl:w-full h-full rounded-3xl p-3 lg:p-6 border border-borderColor group">
                <CardItem translateZ="100" className="w-full mb-5">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl filter grayscale brightness-50 group-hover:filter-none"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className='flex-grow'>
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-white dark:text-white flex-grow"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-lg text-gray-300 max-w-[30rem] mt-2 dark:text-neutral-300 flex-grow"
                    >
                        {about}
                    </CardItem>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={github}
                        target="__blank"
                        className="text-white px-4 py-2 rounded-xl text-lg font-normal dark:text-white"
                    >
                        Repo →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-white dark:bg-black dark:text-white text-black text-lg font-semibold"
                    >
                        <Link href={live}>Preview</Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default ProjectCard;