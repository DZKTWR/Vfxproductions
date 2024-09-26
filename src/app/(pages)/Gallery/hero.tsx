'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const hero = () => {
  return (
    <div>
        <section className='relative w-full flex pt-48 pb-16 px-36 justify-center inset-x-0 m-auto'>
            <div className='flex flex-col sctr-content pt-10'>
                <div className='flex py-12'>
                    <h1 className='text-[4rem] text-white font-text'>
                        <span className='block text-start'>
                            GALLERY
                        </span>
                        <span className='block text-start'>
                            AND VIDEOS
                        </span>
                    </h1>
                </div>
                <div className='pr-[8rem]'>
                <p className='text-[1.2rem] text-white'>Explore our extensive collection of videos focused on video editing,visual effects, and animation. 
                    This section features a diverse range of content showcasing advanced editing techniques and special effects.
                </p>
                <p className='text-[1.2rem] text-white pt-6'>
                    Additionally, you'll find an art gallery presenting impressive videos 
                    with effects and anime edits from our two prominent accounts: VFX Productions and Dazkon.
                </p>
                </div>
            </div>
            <div className='flex flex-row scir-content'>
                <Image 
                  width={100}
                  height={100}
                src="/photomontage.jpg" alt="imagen de un potomontaje de una esfera de nieve" className='rounded-[2rem]' />
            </div>
        </section>
        <section className='relative w-full pt-40 pb-20 px-36 flex justify-center inset-x-0 m-auto'>  
        <div className='st-content flex flex-col justify-center'>
            <motion.div>
                <h1 className='text-[4.5rem] text-white font-text '>
                WATCH ALL THE VIDEOS HERE
                </h1>
            </motion.div>
            <motion.div>
                <h2 className='text-[1.2rem] text-white py-7 font-subtext'>
                Here you will find all the free videos on how to create special effects, how to make anime editions, also how to create animations.
                </h2>
            </motion.div>
            <motion.div className='mt-5'>
                <a href="" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>Get it now</a>
            </motion.div>
        </div>
        <motion.div className='sv-content flex flex-row'>
            <video autoPlay loop playsInline muted className='rounded-[2rem]'>
                <source src='up1.mp4' type='video/mp4'/>
            </video>
        </motion.div>
        </section>
        <section className='relative w-full pt-48 pb-20 px-36 flex justify-center inset-x-0 m-auto'>
        <motion.div className='sv-content flex flex-row'>
            <video autoPlay loop playsInline muted className='rounded-[2rem]'>
                <source src='up1.mp4' type='video/mp4'/>
            </video>
        </motion.div>
        <div className='st-content flex flex-col justify-center pl-16'>
            <motion.div>
                <h1 className='text-[4.5rem] text-white font-text '>
                   Art Gallery
                </h1>
            </motion.div>
            <motion.div>
                <h2 className='text-[1.2rem] text-white py-6 font-subtext'>
                   find all the art gallery of vfx productions and dazkon a mix of anime editions and special effects, with their social networks of each one.Unlook your creativity with our in-depth tutorials.
                </h2>
            </motion.div>
            <motion.div className='mt-7'>
                <a href="" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>Get it now</a>
            </motion.div>
        </div>
        </section>
    </div>
  )
}

export default hero
