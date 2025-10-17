"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PointerHighlight } from "../ui/pointer-highlight";

export default function AnimatedTimeline() {
    const timeline = [
        {
            title: "Worked as a Freelancer",
            subtitle: "March 2024 – December 2024",
        },
        {
            title: "Junior Software Developer",
            subtitle: "Raktch Technology & Software",
            company: "January 2025 – Present",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto mb-10 text-white flex flex-col items-center overflow-hidden">
            <h1 className="text-center text-lg md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-indigo-600">
                Work Experience
                {/* <PointerHighlight
                    rectangleClassName="bg-white/10 border border-white/20 backdrop-blur-sm"
                    pointerClassName="text-white"
                >
                    <span className="relative z-10 font-bold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                        Experience
                    </span>
                </PointerHighlight> */}
            </h1>


            <div className="relative w-full max-w-4xl px-8 md:px-16">
                {/* Timeline Bar with fading edges */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0">
                    <motion.div
                        className="h-full bg-white rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    />
                </div>

                {/* Timeline Items */}
                <div className="flex justify-between relative z-10">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4 }}
                            className="flex-1 flex flex-col items-center cursor-pointer my-20"
                        >
                            {/* Card */}
                            <Card className="bg-[#060606] border border-white/20 text-white shadow-lg hover:shadow-white/10 transition-all duration-300 w-52 md:w-64 h-40 flex items-center justify-center">
                                <CardContent className="p-4 text-center flex flex-col justify-center">
                                    <h3 className="text-base md:text-lg font-semibold mb-1">
                                        {item.title}
                                    </h3>
                                    {item.company && (
                                        <p className="text-sm opacity-80">{item.company}</p>
                                    )}
                                    <p className="text-xs opacity-60 mt-1">{item.subtitle}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Fade overlay for extra smoothness */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060606] via-transparent to-[#060606] z-20" />
            </div>
        </div>
    );
}
