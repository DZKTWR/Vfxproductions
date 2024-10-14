'use client';

import React from 'react';
import Image from 'next/image';
import  { motion }  from 'framer-motion';
import Link from "next/link";

// Variantes del contenedor padre 
const containerVariants = {
  hidden: {},
  visible: {  
    transition: {
      staggerChildren: 0.2, // Controla el intervalo entre cada elemento
    },
  },
};
// Variantes de cada item 
const itemsCotainerV = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0 ,opacity: 1, transition: { ease: "easeOut", duration: 0.5} },
};


const hero = () => {
return (
    <div>
      <section className='relative w-full pt-48 pb-40 px-36 flex justify-center inset-x-0 m-auto sectioncor-1'>  
        <motion.div 
         variants={containerVariants}
        className='st-content flex flex-col justify-center'>
          <motion.div 
            variants={itemsCotainerV}
          >
            <h1 className='text-[4.5rem] text-white font-text titlecos-1 '>
            LEARN THE  ART OF VIDEO EDITING
            </h1>
          </motion.div>
          <motion.div
          variants={itemsCotainerV}
          >
            <h2 className='text-[1.2rem] text-white mt-7 font-subtext'>
            Unlook your creativity with our in-depth tutorials.
            </h2>
          </motion.div>
          <motion.div
          variants={itemsCotainerV}
          >
            <p className='text-[1.1 rem] text-white mb-3 font-subtext'>
            Total Free
            </p>
          </motion.div>
          <motion.div 
          variants={itemsCotainerV}
          className='mt-7'>
            <Link href="" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>
            Get it now
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
        className='sv-content flex flex-row'>
          <video autoPlay loop playsInline muted className='rounded-[2rem]'>
            <source src='up1.mp4' type='video/mp4'/>
          </video>
        </motion.div>
      </section>
      <section className='relative w-full pt-40 pb-40 pl-36 px-[7.5rem] inset-x-0 m-auto sectioncor-2'>
        <div className='flex justify-center py-20'>
            <div className='sv-content-themost flex flex-row mr-9'>
            <video autoPlay loop playsInline muted className='w-auto rounded-[2rem]'>
            <source src='Up1 (1).webm' type='video/webm'/>
            </video>
            </div>
          <div className='st-content-themost flex flex-col justify-center'>
          <h1 className='text-[4.5rem] text-white font-text titlecos-2'>
            THE MOST POPULAR TUTORIALS
          </h1>
          <h2 className='text-[1.3rem] text-white font-subtext mt-7'>
            Explore our top-rated video editing guides.
          </h2>
          <div className='mt-16'>
            <Link href="" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>
            Watch Now
            </Link>
          </div>
          </div>
        </div>
        <section className='flex pt-5' >
          <div className='ms-content flex flex-col bg-white rounded-2xl mts-content mr-10 mt-10'>
            <Link href='#' className='flex justify-center'>
              <div className='flex flex-row mtsc-img'>
                <Image 
                  width={100}
                  height={100}
                src="/Curso1.png" alt="imagen de curso de edicion" className='rounded-2xl'/>
              </div>
              <div className='flex flex-col mtsc-text justify-center pl-5'>
                <h1 className='text-2xl font-text py-1'>Mastering anime editing</h1>
                <p className='text-base font-subtext py-1'>Create editing anime video </p>
              </div>
              </Link>
          </div>
          <div className='cdy-content flex flex-col bg-white rounded-2xl dyn-content ml-10 mt-10'>
            <Link href="" className='flex justify-center'>
              <div className='flex flex-row dyc-img'>
                <Image 
                  width={100}
                  height={100}
                src="/Curso1.png" alt="imagen de curso de edicion" className='rounded-2xl'/>
              </div>
              <div className='flex flex-col dyc-text justify-center pl-5'>
                <h1 className='text-2xl font-text py-1'>Creating Dynamic trasitions</h1>
                <p className='text-base font-subtext py-1'>Discover the secrets to smooth trasitions in anime style</p>
              </div>
            </Link>
          </div> 
        </section>
      </section>
      <section className='relative w-full pt-40 pb-40 px-36 inset-x-0 m-auto sectioncor-3'>
        <div className='flex py-16 justify-center'>
            <div className='st-content flex flex-col justify-center'>
              <motion.div>
            <h1 className='text-[4rem] text-white font-text titlecos-3'>
            RECENTLY ADDED
            </h1>
              </motion.div>
              <motion.div>
            <h2 className='text-[1.3rem] text-white mt-7 font-subtext'>
            Explore our recent content.
            </h2>
              </motion.div>
              <motion.div className='mt-16'>
                <Link href="" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>
                Watch Now
                </Link>
              </motion.div>
            </div>
            <motion.div className='sv-content flex flex-row'>
          <video autoPlay loop playsInline muted className='rounded-[2rem]'>
            <source src='up1.mp4' type='video/mp4'/>
          </video>
            </motion.div>
        </div>
        <section className='flex pt-5' >
          <div className='ms-content flex flex-col bg-white rounded-2xl mts-content mr-10 mt-10'>
            <Link href='#' className='flex justify-center'>
              <div className='flex flex-row mtsc-img'>
                <Image 
                  width={100}
                  height={100}
                src="/Curso1.png" alt="imagen de curso de edicion" className='rounded-2xl'/>
              </div>
              <div className='flex flex-col mtsc-text justify-center pl-5'>
                <h1 className='text-2xl font-text py-1'>Mastering anime editing</h1>
                <p className='text-base font-subtext py-1'>Create editing anime video </p>
              </div>
              </Link>
          </div>
          <div className='cdy-content flex flex-col bg-white rounded-2xl dyn-content ml-10 mt-10'>
            <Link href="" className='flex justify-center'>
              <div className='flex flex-row dyc-img'>
                <Image 
                  width={100}
                  height={100}
                src="/Curso1.png" alt="imagen de curso de edicion" className='rounded-2xl'/>
              </div>
              <div className='flex flex-col dyc-text justify-center pl-5'>
                <h1 className='text-2xl font-text py-1'>Creating Dynamic trasitions</h1>
                <p className='text-base font-subtext py-1'>Discover the secrets to smooth trasitions in anime style</p>
              </div>
            </Link>
          </div> 
        </section>
      </section>
    </div>
)
}

export default hero
