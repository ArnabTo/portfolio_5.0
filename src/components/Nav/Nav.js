"use client";
import { Dropdown, Navbar } from "flowbite-react";
import './Nav.css'
import { Home, CircleUserRound, PanelsTopLeft, Contact } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from '../../assets/logo.png'
const Nav = () => {

    const cumsomBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '10px'
    }
    return (
        <motion.div className="max-w-4xl mx-auto mt-8">
            <Navbar fluid rounded className="flex justify-center w-full lg:w-1/2 mx-auto" style={cumsomBg}>
                <Navbar.Brand className="md:hidden mr-36" href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"><Image src={Logo} width={100} height={100} alt="logo" /></span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link className="bg-transparent" href="#" active><motion.span className="navItem flex flex-row md:flex-col justify-center items-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><Home strokeWidth={1.25} size={40} color='#8F00FF' />Home</motion.span></Navbar.Link>
                    <Navbar.Link className="bg-transparent" href="#" active><motion.span className="navItem flex flex-row md:flex-col justify-center items-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><CircleUserRound strokeWidth={1.25} size={40} color='#8F00FF' />About</motion.span></Navbar.Link>
                    <Navbar.Link className="bg-transparent hidden md:block" href="#" active><motion.span className="navItem relative top-4" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}> <Image src={Logo} width={100} height={100} alt="logo" /></motion.span></Navbar.Link>
                    <Navbar.Link className="bg-transparent" href="#" active><motion.span className="navItem flex flex-row md:flex-col justify-center items-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><PanelsTopLeft strokeWidth={1.25} size={40} color='#8F00FF' />Projects</motion.span></Navbar.Link>
                    <Navbar.Link className="bg-transparent" href="#" active><motion.span className="navItem flex flex-row md:flex-col justify-center items-center" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><Contact strokeWidth={1.25} size={40} color='#8F00FF' />Contacts</motion.span></Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </motion.div>
    );
};

export default Nav;