import React from 'react';
import Image from 'next/image';


const hero = () => {
  return (
    <section className='relative w-full pt-48 pb-40 px-28 flex flex-col justify-center inset-x-0 m-auto'>
        <main className='flex pt-8 pb-20 gap-20 items-center'>
        <div className='flex flex-col py-4 px-12 shct-content border-2 border-[#ffffffa5] rounded-2xl'>
            <div className='pt-12'>
               <h1 className='text-[3.5rem] text-white font-text'>
                <span className='block'>ABOUT</span>
                <span className='block '>VFX &nbsp; PRODUCTIONS</span>
                </h1> 
            </div>
            <div className='flex flex-row py-12'>
                <p className='font-subtext text-[1.2rem] text-white'>vfx productions was created specifically to help people who
                   do not have advanced knowledge or training in the field of 
                   video editing or creating visual effects</p>
            </div>
        </div>
        <div className='shci-contnet'>
           <Image
            width={800}
            height={200}
             src="/miku2.png" alt="imagen de curso de edicion" className='rounded-2xl'
           />
        </div>
        </main>
        <main className='flex pb-[10rem] pt-[10rem] gap-20 items-center'>
        <div className='shct-content py-4 px-12 shct-content border-2 border-[#ffffffa5] rounded-2xl'>
            <div className='pt-12'>
               <h1 className='text-[3.5rem] text-white font-text'>
                <span className='block'>ABOUT</span>
                <span className='block'>DAZKON</span>
                </h1> 
            </div>
            <div className='py-12'>
                <p className='font-subtext text-[1.2rem] text-white'>vfx productions was created specifically to help people who
                   do not have advanced knowledge or training in the field of 
                   video editing or creating visual effects</p>
            </div>
        </div>
        <div className='shci-content'>
        <Image 
               width={800}
               height={200}
             src="/miku3.png" alt="imagen de curso de edicion" className='rounded-2xl'
           />
        </div>
        </main>
    </section>
  )
}

export default hero