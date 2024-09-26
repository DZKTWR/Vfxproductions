"use client";

import React from 'react';
import { motion } from "framer-motion";
import { FlipWords } from "@/ui/flip-words";

export function FlipWordsDemo() {
    const words = ['Animation','Editing','3D blender']; {
        return <FlipWords words={words} />
    }
    }

const Hero = () => {
    return (
            <section className='tr-section inset-x-0 text-center relative'>
                <div className='tr-hero-content z-4 w-full m-auto  justify-center px-6 flex flex-col'>
                    <header style={{ transform: 'translate(0px, 0px)'}} >
                        <motion.div className="flex flex-col md:w-full"
                        initial={{y: 100,opacity:0}}
                        animate={{y: 0,opacity:1}}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        >
                            <h1 className='text-[4.3rem] sm:text-8xl bg-clip-text vfx-font text-[#e0e8ee] slc'>
                                    VFX Productions
                            </h1>
                            <h2 className='text-[1.2rem] sm:text-2xl sm:py-5 text-[#e0e8ee] py-1 roboto-font slc'>
                                A way to learn <FlipWordsDemo />
                            </h2>
                        </motion.div>
                    </header>
                    <footer className='flex flex-col justify-start pt-7'>
                        <motion.div
                        initial={{y: 100, opacity:0}}
                        animate={{y: 0, opacity:1}}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <a href="/Courses" className='border-2 border-[#cfecff] rounded-full text-base inline-block font-medium px-6 py-2
                            text-[#e0e8ee] bg-[#141414bd] roboto-font'>
                                Learn More!
                            </a>
                        </motion.div>
                    </footer>
                </div>
            </section>
            
    )
}

export default Hero