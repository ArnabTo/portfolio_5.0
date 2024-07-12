'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Label, Textarea, TextInput } from 'flowbite-react';
import { ExternalLink, Facebook, Github, Linkedin, LinkedinIcon, Mail } from 'lucide-react';
import './Contact.css'
import Link from 'next/link';
const Contact = () => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: '#09090b',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '20px'
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id='cont'>
            <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                Contact
            </h1>
            <div className=" md:grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-4 gap-4">
                <div className="col-span-3 row-span-4">
                    <form action="https://formspree.io/f/mayryqjw" method="POST" className="flex  flex-col justify-center gap-4 p-4 flex-1" style={customBg}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" className="text-white" />
                            </div>
                            <TextInput id="name" name='name' type="text" className='bg-black' placeholder="Name" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" className="text-white" />
                            </div>
                            <TextInput id="email1" name='email' type="email" placeholder="name@gmail.com" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" className="text-white" />
                            </div>
                            <Textarea id="comment" name='message' placeholder="Leave a comment..." required rows={4} />
                        </div>
                        <button className='bg-zinc-900 border-[1px] border-[#67676720] p-4 hover:bg-[#8F00FF] text-white transition-all delay-75 rounded-md' type="submit">Submit</button>
                    </form>
                </div>
                <Link className="col-start-4 my-2 md:my-0 flex justify-between items-center" style={customBg} href='https://www.facebook.com/profile.php?id=100040177386596'><Facebook className="text-white" /><ExternalLink className="text-white" /></Link>
                <Link className="col-start-5 my-2 md:my-0 flex justify-between items-center" style={customBg} href='#'><Facebook className="text-white" /><ExternalLink className="text-white" /></Link>
                <Link className="row-start-2 my-2 md:my-0 col-start-4 flex justify-between items-center " style={customBg} href='https://www.linkedin.com/in/itsarnab/'><LinkedinIcon className="text-white" /><ExternalLink className="text-white" /></Link>
                <Link className=" row-start-2 my-2 md:my-0 col-start-5 flex justify-between items-center" style={customBg} href='https://github.com/ArnabTo'><Github className="text-white" /><ExternalLink className="text-white" /></Link>
                <Link className='col-span-2 my-2 md:my-0 col-start-4 row-start-3 flex justify-between items-center' style={customBg} href='mailto:arnabs929@gmail.com'><Mail className="text-white" /><ExternalLink className="text-white" /></Link>
                <div className='col-span-2 my-2 md:my-0 col-start-4 row-start-4' style={customBg}>d</div>
            </div>
        </div>
    );
};

export default Contact;