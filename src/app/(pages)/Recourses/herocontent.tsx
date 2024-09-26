"use client";

import React from 'react';
import { motion } from "framer-motion";

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
  

const herocontent = () => {
  return (
    <>
      <section className='pt-20 pb-40 justify-center m-auto'>
        <header className='relative pt-10 pb-10 px-9 flex items-center mx-auto justify-center inset-x-0'>
          <nav className='flex justify-between '>
            <motion.ul 
                  initial="hidden"
                  animate="visible"
                  variants={container2Variants} 
              className='flex text-[#000000] text-base [&>li>button]:font-[500] [&>li>button]:inline-block [&>li>button]:mx-8
                [&>li>button]:px-9 [&>li>button]:py-2 [&>li>button]:roboto-font [&>li>button]:border [&>li>button]:rounded-3xl [&>li>button]:bg-white'>
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
        <main className='relative pt-48 pb-1 px-36 '>
            <section className='flex flex-col pb-20'>
                <motion.div className='pb-12'>
                    <h1 className='text-[3.2rem] text-white font-text'>
                        MOST POPULAR 
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
            <section className='flex flex-col py-24'>
                <motion.div className='pb-12'>
                    <h1 className='text-[3.2rem] text-white font-text'>
                        RECENTLY ADDED
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
            <section className='flex flex-col py-24'>
                <motion.div className='pb-12'>
                    <h1 className='text-[3.2rem] text-white font-text'>
                        ACTIVE PACKS
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
        </main>
      </section>
    </>
  )
}

export default herocontent