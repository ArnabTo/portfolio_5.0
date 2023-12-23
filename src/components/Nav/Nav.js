"use client";
import { Button, Navbar } from "keep-react";
import './Nav.css'

const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar fluid={true} className='bg-transparent' >
                <Navbar.Container className="flex items-center justify-center">
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8 text-white"
                    >
                        <Navbar.Link linkName="Home" />
                        <Navbar.Link linkName="Projects" />
                        <Navbar.Brand>
                            Logo
                        </Navbar.Brand>
                        <Navbar.Link linkName="Projects" />
                        <Navbar.Link linkName="Blogs" />
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar" className="bg-black">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5 text-white">
                            <Navbar.Link linkName="Home" />
                            <Navbar.Link linkName="Projects" />
                            <Navbar.Link linkName="Blogs" />
                            <Navbar.Link linkName="News" />
                            <Navbar.Link linkName="Resources" />
                        </Navbar.Container>
                    </Navbar.Collapse>
                    <Navbar.Container className="flex items-center gap-3">
                        <Navbar.Toggle />
                    </Navbar.Container>
                </Navbar.Container>
            </Navbar>
        </div>
    );
};

export default Nav;