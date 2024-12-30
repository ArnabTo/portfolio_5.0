'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import About from "./About";
import { Link } from "lucide-react";
import Image from "next/image";


const AboutSec = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const ImageRow = ({ images, direction }) => {
        const x = useTransform(
            scrollYProgress,
            [0, 1],
            direction === "left" ? [0, -200] : [0, 200]
        );

        return (
            <motion.div className="flex" style={{ x }}>
                {images.map((src, index) => (
                    <div key={index} className="group cursor-pointer relative flex-shrink-0 w-full md:w-auto p-2">
                        <Image
                        width={500}
                        height={500}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-56 object-cover rounded-lg transition-transform transform"
                        />
                    </div>
                ))}
            </motion.div>
        );
    };

    const images = [
        "https://i.ibb.co/ncRWbLt/aba974cebcbbd9b696a0016e65451abc.jpg",
        "https://i.ibb.co/2MSWB30/thumb3.png",
        "https://i.ibb.co/qxQr81t/Blog-Verse-10-05-2024-09-53-PM.png",
        "https://i.ibb.co/Brpt3B8/Anno-Feed-10-05-2024-09-52-PM.png",
        "https://i.ibb.co/9qt4Sqc/Nettracking-10-05-2024-09-51-PM.png",
        "https://i.ibb.co/yW4bsRt/Vite-React-10-05-2024-09-51-PM.png",
        "https://i.ibb.co/ncRWbLt/aba974cebcbbd9b696a0016e65451abc.jpg",
        "https://i.ibb.co/gMCqcb7/Fit-Track-10-05-2024-09-50-PM.png",
        "https://i.ibb.co/2MSWB30/thumb3.png",
        "https://i.ibb.co/yW4bsRt/Vite-React-10-05-2024-09-51-PM.png",
        "https://i.ibb.co/Brpt3B8/Anno-Feed-10-05-2024-09-52-PM.png",
        "https://i.ibb.co/9qt4Sqc/Nettracking-10-05-2024-09-51-PM.png",
        "https://i.ibb.co/2MSWB30/thumb3.png",
        "https://i.ibb.co/qxQr81t/Blog-Verse-10-05-2024-09-53-PM.png",
        "https://i.ibb.co/Brpt3B8/Anno-Feed-10-05-2024-09-52-PM.png",

    ];

    const rows = [];
    for (let i = 0; i < images.length; i += 4) {
        rows.push(images.slice(i, i + 4));
    }

    return (
        <div className="relative pt-10 pb-10" ref={containerRef}>
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-1 gap-4 p-4 opacity-20 overflow-hidden -z-10">
                {rows.map((row, index) => (
                    <ImageRow key={index} images={row} direction={index % 2 === 0 ? "left" : "right"} />
                ))}
            </div>
            <About/>
        </div>
    );
};

export default AboutSec;