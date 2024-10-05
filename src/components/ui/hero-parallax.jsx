"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import About from "../About/About";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    (<div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
    <div>
                    <div className="max-w-[5rem] rounded-full">
                        {/* <Image className="rounded-full" src={PortfoliImg} width={400} height={400} alt="profile" /> */}
                    </div>
                    <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-600 my-4">
                        About me
                    </h1>

                    {/* Bio content starts here */}
                    <p className="mt-4 text-lg text-center lg:text-start text-white">
                        I am a passionate and skilled front-end developer who enjoys building responsive, dynamic, and user-oriented web interfaces.<br />
                        My focus is on creating seamless user experiences using modern tools like <strong>React.js</strong> and <strong>Next.js</strong>,
                        along with design-focused CSS frameworks such as <strong>TailwindCSS</strong> and <strong>Bootstrap</strong>.
                    </p>

                    <p className="mt-4 text-lg text-center lg:text-start text-white">
                        In addition to my front-end expertise, I am a full-stack developer specializing in the <strong>MERN Stack</strong>.<br />
                        I leverage my experience to efficiently work across the entire stack, utilizing technologies like <strong>Node.js</strong>,
                        <strong>Express.js</strong>, and <strong>MongoDB</strong>.<br />
                        This allows me to deliver complete solutions, from developing refined front-end applications to designing scalable backend systems.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 text-center lg:text-start text-white">Core Competencies & Technologies</h3>

                    <ul className="list-disc list-inside mt-4 text-lg text-center lg:text-start text-white">
                        <li><strong>React.js</strong> & <strong>Next.js</strong> – For fast, interactive UIs</li>
                        <li><strong>JavaScript</strong> – Enabling dynamic functionality</li>
                        <li><strong>HTML/CSS</strong> with <strong>TailwindCSS</strong> and <strong>Bootstrap</strong> – For stunning, responsive designs</li>
                        <li><strong>Node.js</strong> & <strong>Express.js</strong> – For back-end development</li>
                        <li><strong>MongoDB</strong> – For database management</li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-6 text-center lg:text-start text-white">About Me</h3>

                    <p className="mt-4 text-lg text-center lg:text-start text-white">
                        Curiosity-driven, I am passionate about continuous learning.<br />
                        My strong focus is on solving real-world problems through code, crafting impactful solutions that improve user satisfaction and, in turn, boost business performance.
                    </p>
                </div>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </Link>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
