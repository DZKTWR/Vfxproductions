'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Herocontent from './herocontent';
import { useLanguage } from '@/components/context/LanguageContext';

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
const itemVariants = {
  hidden: { y: 100, x: 100, opacity: 0 },
  visible: { y: 0,x: 0 ,opacity: 1, transition: { ease: "easeOut", duration: 0.5} },
};
const Hero = () => {
  const { t } = useLanguage()
  return (
    <>
      <section className='relative w-full pt-36 pb-20 px-36 flex justify-center inset-x-0 m-auto '>
        <div className='flex flex-col m-16 justify-center'>
          <motion.div 
          initial={{y: 100, opacity:0}}
          animate={{y: 0,opacity:1}}
          transition={{ ease: "easeOut", duration: 0.3 }}
            className='flex font-text sh-contianer pb-3'>
            <h1 className='text-[4.5rem] text-white'>{t('ALL RESOURCES')}</h1>
          </motion.div>
          <motion.div
          initial={{y: 100, opacity:0}}
          animate={{y: 0,opacity:1}}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className='flex sp-container pt-3'>
            <p className='text-[1.2rem] text-white font-subtext'>{t('Find everything you need to After Effects, Davichi Resolve, Cap cut')}</p>
          </motion.div>
        </div>
      </section>
      <Herocontent />
    </>
  )
}

export default Hero