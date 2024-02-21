'use client';
import { motion } from "framer-motion";
import Link from "next/link";
const SeeMBtn = () => {
    return (<motion.div className='text-center my-12 text-white' whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}><Link href='allprojects' className='seeMoreBtn'>See more...</Link></motion.div> );
};

export default SeeMBtn;