import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import Image from 'next/image';
import Link from 'next/link';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
const ProjectCard = ({ proj }) => {
    const { title, about, techs, image, github, live } = proj;

    return (
        <CardContainer className="inter-var">
            <CardBody className=" bg-zinc-950 relative group/card  dark:hover:shadow-2xl  dark:hover:shadow-[#8F00FF]/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full lg:w-[30rem] xl:w-[35rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-[30rem] mt-2 dark:text-neutral-300"
                >
                    {about}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="flex justify-between items-center gap-3 mt-3"
                >
                    {
                        techs ? techs.map((tech, index) => (
                        <div className="flex justify-center text-center" key={index}>
                                    <div className='bg-white  h-fit px-3 py-1 rounded-md'>{tech}</div>
                            </div>
                        ))
                            : <span>loading...</span>
                    }
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl filter grayscale hover:filter-none "
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={github}
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
                        <Link href={live}>Preview</Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default ProjectCard;