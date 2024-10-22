"use client";

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from '@/components/context/LanguageContext';
  // Header app  
  // Variantes del contenedor padre (controla el stagger)
  const container2Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Controla el intervalo entre cada li
      },
    },
  };
  // Variantes de cada item (li)
  const item2Variants = {
    hidden: { y: 100, x: 100, opacity: 0 },
    visible: { y: 0,x: 0 ,opacity: 1, transition: { ease: "easeOut", duration: 0.5} },
  };
  

const Herocontent = () => {
  const { t } = useLanguage()
  return (
    <>
      <section className=' pb-20 justify-center m-auto'>
        <header className='relative pt-10 pb-10 px-9 flex items-center mx-auto justify-center inset-x-0'>
          <nav className='flex justify-between '>
            <motion.ul 
                  initial="hidden"
                  animate="visible"
                  variants={container2Variants} 
              className='flex text-[#000000] text-base [&>li>button]:font-[500] [&>li>button]:inline-block [&>li>button]:mx-8
                [&>li>button]:px-9 [&>li>button]:py-2 [&>li>button]:roboto-font [&>li>button]:border [&>li>button]:rounded-3xl [&>li>button]:bg-white navbar-recrus'>
              <motion.li
                variants={item2Variants}
              ><button >After Effets</button></motion.li>
              <motion.li
                variants={item2Variants}
              ><button >Premire Pro</button></motion.li>
              <motion.li
                variants={item2Variants}
              ><button >Cap Cut</button></motion.li>
              <motion.li
                variants={item2Variants}
              ><button >Davinchi Resolve</button></motion.li>
            </motion.ul>
          </nav>
        </header>
        <main className='relative pt-5 pb-1 px-36 mainrecur1'>
            <section className='flex flex-col pb-20 sctinrcurs-1'>
                <motion.div className='pb-12'>
                    <h1 className='text-[3.2rem] text-white font-text'>
                       {t('MOST POPULAR')}  
                    </h1>
                </motion.div>
                <div className='flex flex-row gap-6'>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                </div>
            </section>
            <section className='flex flex-col py-24 sctinrcurs-2'>
                <motion.div className='pb-12'>
                    <h1 className='text-[3.2rem] text-white font-text'>
                        {t('RECENTLY ADDED')} 
                    </h1>
                </motion.div>
                <div className='flex flex-row gap-6'>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                    <div>
                        <img src="miku2.png" alt="" className='rounded-3xl'/>
                    </div>
                </div>
            </section>
            <section className='flex flex-col py-24 sctinrcurs-3'>
                <motion.div className='pb-12 '>
                    <h1 className='text-[3.2rem] text-white font-text title-rcs1'>
                        {t('ACTIVE PACKS')} 
                    </h1>
                </motion.div>
                <div className='flex flex-row gap-6 sectionrecursimgs-1'>
                    <div className='imgrcus-1'>
                      <Link href="">
                         <img src="miku2.png" alt="" className='rounded-3xl'/>
                      </Link>
                    </div>
                    <div className='imgrcus-2'>
                      <Link href="">
                         <img src="miku2.png" alt="" className='rounded-3xl'/>
                      </Link>
                    </div>
                    <div className='imgrcus-3'>
                      <Link href="">
                         <img src="miku2.png" alt="" className='rounded-3xl'/>
                      </Link>
                    </div>
                    <div className='imgrcus-4'>
                      <Link href="">
                         <img src="miku2.png" alt="" className='rounded-3xl'/>
                      </Link>
                    </div>
                </div>
            </section>
              <div>
                <h2></h2>
              </div>
        </main>
      </section>
    </>
  )
}

export default Herocontent