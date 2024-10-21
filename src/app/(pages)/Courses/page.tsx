'use client';

import React from 'react'
import  { motion }  from 'framer-motion';
import Hero from './Hero'; 
import Herocontent from './Herocontent';


const page = () => {
  return (
    <div className='z-[20]'>
        <Hero />
        <Herocontent />
    </div>
  )
}

export default page
