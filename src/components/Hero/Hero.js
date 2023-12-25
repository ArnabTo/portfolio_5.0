'use client'
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'
const Hero = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mt-[10rem] leading-[5rem]">
                <h1 className="text-[5rem]">Hello, I'm</h1><br />
                <h1 className="text-[10rem] mb-14">Arnab Saha</h1>
                <span className='text-[#963cfd]'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Front-End Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'MERN Stack Developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '8em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </span>
            </div>
        </div>
    );
};

export default Hero;