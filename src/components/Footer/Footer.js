'use client';
import { Footer, FooterBrand } from "flowbite-react";
import Image from "next/image";
import { Link } from 'react-scroll/modules'
import Logo from '../../assets/logo.png'
import FooterLogo from '../../assets/footerlogo.png'
const FooTer = () => {
    const cumsomBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: '#8F00FF',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '10px'
    }
    return (
        <div>
            <Footer container style={cumsomBg}>
                <div className="max-w-7xl mx-auto">
                    <div className="w-full text-center">
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between md:justify-between my-2">
                            <Footer.LinkGroup>
                                <Footer.Link href="#" className="text-[#fff]">
                                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} className='text-xl'>
                                        Home
                                    </Link>
                                </Footer.Link>
                                <Footer.Link href="#" className="text-[#fff]">
                                    <Link activeClass="active" to="abt" spy={true} smooth={true} offset={0} duration={500} className='text-xl'>
                                        About
                                    </Link>
                                </Footer.Link>
                                <Footer.Link href="#" className="text-[#fff]">
                                    <Link activeClass="active" to="abt" spy={true} smooth={true} offset={0} duration={500}>
                                    <span className="font-semibold text-[#fff] flex text-2xl"><Image src={FooterLogo} width={20} height={20} alt="logo" />ARSDEV</span>
                                    </Link>
                                </Footer.Link>
                                <Footer.Link href="#" className="text-[#fff]">
                                    <Link activeClass="active" to="projs" spy={true} smooth={true} offset={0} duration={500} className='text-xl'>
                                        Projects
                                    </Link>
                                </Footer.Link>
                                <Footer.Link href="#" className="text-[#fff]">
                                    <Link activeClass="active" to="cont" spy={true} smooth={true} offset={0} duration={500} className='text-xl'>
                                        Contact
                                    </Link>
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <hr className="my-4 bg-black" />
                        <p className="">© 2024. Created by ARSDEV.</p>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooTer;