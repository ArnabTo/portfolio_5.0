"use client";
import React, { useEffect, useState } from "react";
import { MenuItem, Menu, ProductItem, HoveredLink } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useToast } from "../ui/use-toast";
import { Loader } from "lucide-react";
import axios from "axios";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

const Navbar = ({ className }) => {
    const [active, setActive] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/get-latest-projects');
                if (response.data.success) {
                    setProjects(response.data.data || []);
                    if (response.data.data && response.data.data.length > 0) {
                        toast({
                            title: 'Success',
                            description: 'Projects fetched successfully',
                            variant: 'default',
                        });
                    } else {
                        toast({
                            title: 'No Projects',
                            description: 'No projects available.',
                            variant: 'default',
                        });
                    }
                } else {
                    throw new Error(response.data.message || 'Failed to fetch projects');
                }
            } catch (error) {
                toast({
                    title: 'Error',
                    description: error.message,
                    variant: 'destructive',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [toast]);


    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href='/'>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <Link href='/allprojects'>
                    <MenuItem setActive={setActive} active={active} item="Projects">
                        {
                            loading ?
                                <div className="w-full h-screen flex justify-center items-center"> <Loader className="animate-spin" size={50} color="#ffffff" /></div>
                                :
                                projects.length > 0
                                    ?
                                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                        <ProductItem
                                            title={projects[0]?.title}
                                            href={projects[0]?.github}
                                            src={projects[0]?.image}
                                            description={projects[0]?.about}
                                        />
                                        <ProductItem
                                            title={projects[1]?.title}
                                            href={projects[1]?.github}
                                            src={projects[1]?.image}
                                            description={projects[1]?.about}
                                        />
                                        <ProductItem
                                            title={projects[2]?.title}
                                            href={projects[2]?.github}
                                            src={projects[2]?.image}
                                            description={projects[2]?.about}
                                        />
                                        <ProductItem
                                            title={projects[3]?.title}
                                            href={projects[3]?.github}
                                            src={projects[3]?.image}
                                            description={projects[3]?.about}
                                        />
                                    </div>
                                    :
                                    <div className="w-full h-screen flex justify-center items-center text-5xl text-white font-extrabold">No projects available.</div>
                        }
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Connects">
                    <div className="flex flex-col space-y-4 text-sm">
                        <Link href='https://www.linkedin.com/in/itsarnab'><HoveredLink href="https://www.linkedin.com/in/itsarnab">LinkedIn</HoveredLink></Link>
                        <Link href='https://github.com/ArnabTo'><HoveredLink href="https://github.com/ArnabTo">GitHub</HoveredLink></Link>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Navbar;
