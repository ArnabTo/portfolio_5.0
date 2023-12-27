"use client";
import { IconBrandGithubFilled } from "@tabler/icons-react";
// import { Button, Navbar } from "keep-react";
import { Dropdown, Navbar } from "flowbite-react";
import { Button } from "keep-react";
import Image from "next/image";
import Link from "next/link";
import './Nav.css'
import Lottie from "lottie-react";
import HomeIcon from '../../assets/homeicon1.json'
import { Home, CircleUserRound, PanelsTopLeft, Contact } from "lucide-react";
const Nav = () => {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            <Navbar fluid rounded className="flex justify-center">
                <Navbar.Brand className="md:hidden mr-20" href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link href="#" active><Home strokeWidth={1.25} size={40} color='#8F00FF' /></Navbar.Link>
                    <Navbar.Link href="#" ><CircleUserRound strokeWidth={1.25}  size={40} color='#8F00FF' /></Navbar.Link>
                    <Navbar.Link href="#" >Logo</Navbar.Link>
                    <Navbar.Link href="#" ><PanelsTopLeft strokeWidth={1.25} size={40} color='#8F00FF' /></Navbar.Link>
                    <Navbar.Link href="#" ><Contact strokeWidth={1.25} size={40} color='#8F00FF'/></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;