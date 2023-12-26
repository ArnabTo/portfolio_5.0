"use client";
import { Button, Navbar } from "keep-react";
import './Nav.css'

const Nav = () => {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            <Navbar fluid={true} className='rounded-md bg-transparent'>
                <Navbar.Container className="flex items-center justify-center">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8"
                    >
                        <Navbar.Link linkName="Home" />
                        <Navbar.Link linkName="Projects" />
                        <Navbar.Brand>
                           <span className="text-white text-4xl">LOGO</span>
                        </Navbar.Brand>
                        <Navbar.Link linkName="Projects" />
                        <Navbar.Link linkName="Blogs" />
                    </Navbar.Container>
                    <Navbar.Brand>
                        <span className="text-black mr-32 md:hidden">gjgvj</span>
                    </Navbar.Brand>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Projects" />
                            <Navbar.Link linkName="Blogs" />
                            <Navbar.Link linkName="News" />
                            <Navbar.Link linkName="Resources" />
                        </Navbar.Container>
                    </Navbar.Collapse>

                    <Navbar.Container className="flex items-center gap-3">
                        <Navbar.Container
                            tag="ul"
                            className="lg:flex hidden items-center justify-between gap-5"
                        >
                        </Navbar.Container>
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default Nav;