import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react';
import { ArrowBigLeftDash, ExternalLink, Facebook, Github, Linkedin, LinkedinIcon, Mail } from 'lucide-react';
import './Contact.css'
import Link from 'next/link';
const Contact = () => {
    const customBg = {
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.125)',
        padding: '20px'
    }
  
    return (
        <div className='max-w-7xl mx-auto my-52' id='cont'>
            <h2 className="text-5xl text-[#8F00FF] text-start my-4">Contact.</h2>

            <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-4 gap-4">
                <div className="col-span-3 row-span-4">
                    <form action="https://formspree.io/f/mayryqjw" method="POST" className="flex  flex-col justify-center gap-4 p-4 flex-1" style={customBg}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Your Name" />
                            </div>
                            <TextInput id="name" name='name' type="text" className='bg-black' placeholder="Name" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" name='email' type="email" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" />
                            </div>
                            <Textarea id="comment" name='message' placeholder="Leave a comment..." required rows={4} />
                        </div>
                        <button className='bg-transparent border-[1px] border-[#67676720] p-4 hover:bg-[#8F00FF] text-white transition-all delay-75 rounded-md' type="submit">Submit</button>
                    </form>
                </div>
                <Link className="col-start-4 flex justify-between items-center" style={customBg} href='#'><Facebook /><ExternalLink /></Link>
                <Link className="col-start-5 flex justify-between items-center" style={customBg} href='#'><Facebook /><ExternalLink /></Link>
                <Link className="row-start-2 col-start-4 flex justify-between items-center " style={customBg} href='https://www.linkedin.com/in/itsarnab/'><LinkedinIcon /><ExternalLink /></Link>
                <Link className="row-start-2 col-start-5 flex justify-between items-center" style={customBg} href='https://github.com/ArnabTo'><Github /><ExternalLink /></Link>
                <Link className='col-span-2 col-start-4 row-start-3 flex justify-between items-center' style={customBg} href='mailto:arnabs929@gmail.com'><Mail /><ExternalLink /></Link>
                <div className='col-span-2 col-start-4 row-start-4' style={customBg}>d</div>
            </div>
        </div>
    );
};

export default Contact;