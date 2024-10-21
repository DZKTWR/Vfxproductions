'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { useLanguage } from '@/components/context/LanguageContext';



const hero = () => {
    const { t } = useLanguage()
  return (
    <div>
        <section className='relative w-full h-screen flex pt-48 pb-16 px-36 justify-center items-center inset-x-0 m-auto sctin-glly-1'>
            <div className='flex flex-col sctr-content justify-center'>
                <div className='flex pb-9'>
                    <h1 className='text-[4.5rem] text-white font-text titlegll-1'>
                        <span className='block text-start txtspan-1'>
                           {t('GALLERY')} 
                        </span>
                        <span className='block text-start txtspan-2'>
                           {t('AND VIDEOS')} 
                        </span>
                    </h1>
                </div>
                <div className='pr-[7rem] cont-txt-gall-1'>
                <p className='text-[1.2rem] text-white txtgll-1'>
                    {t('Explore our extensive collection of videos focused on video editing,visual effects, and animation.')}

                    {t('This section features a diverse range of content showcasing advanced editing techniques and special effects.')}
                    
                </p>
                <p className='text-[1.2rem] text-white pt-6 txtgll-2'>
                    {t("Additionally, you'll find an art gallery presenting impressive videos with effects and anime edits from our two prominent accounts: VFX Productions and Dazkon.")}

                </p>
                </div>
            </div>
            <div className='flex flex-row scir-content'>
                <Image 
                  width={1000}
                  height={1000}
                src="/photomontage.jpg" alt="imagen de un potomontaje de una esfera de nieve" className='rounded-[2rem]' />
            </div>
        </section>
        <section className='relative w-full pt-40 pb-20 px-36 flex justify-center inset-x-0 m-auto sctin-glly-2'>  
        <div className='st-content flex flex-col justify-center'>
            <motion.div>
                <h1 className='text-[4.5rem] text-white font-text titlegll-2'>
                {t("WATCH ALL THE VIDEOS HERE")}
                </h1>
            </motion.div>
            <motion.div>
                <h2 className='text-[1.2rem] text-white py-7 font-subtext pr-4 txtgll-3'>
                {t("Here you will find all the free videos on how to create special effects, how to make anime editions, also how to create animations.")}
                </h2>
            </motion.div>
            <motion.div className='mt-5'>
                <Link href="#" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>
                {t("Watch it now")}
                </Link>
            </motion.div>
        </div>
        <motion.div className='sv-content flex flex-row'>
            <video autoPlay loop playsInline muted className='rounded-[2rem]'>
                <source src='up1.mp4' type='video/mp4'/>
            </video>
        </motion.div>
        </section>
        <section className='relative w-full pt-48 pb-20 px-36 flex justify-center  inset-x-0 m-auto sctin-glly-3'>
        <motion.div className='sv-content flex flex-row'>
            <video autoPlay loop playsInline muted className='rounded-[2rem]'>
                <source src='up1.mp4' type='video/mp4'/>
            </video>
        </motion.div>
        <div className='st-content flex flex-col justify-center pl-16'>
            <motion.div>
                <h1 className='text-[4.5rem] text-white font-text titlegll-3'>
                    {t("Art Gallery")}

                </h1>
            </motion.div>
            <motion.div>
                <h2 className='text-[1.2rem] text-white py-6 font-subtext txtgll-4'>
                    {t("find all the art gallery of vfx productions and dazkon a mix of anime editions and special effects, with their social networks of each one.Unlook your creativity with our in-depth tutorials.")}
                </h2>
            </motion.div>
            <motion.div className='mt-7'>
                <Link href="/ArtGallery" className='mt-4 border-2 border-white px-14 pt-3 pb-3 rounded-3xl text-center text-white text-[1.1rem] font-subtext'>
                {t("Watch it now")}
                </Link>
            </motion.div>
        </div>
        </section>
    </div>
  )
}

export default hero
