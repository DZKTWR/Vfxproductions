import React from 'react';
import Image from 'next/image';


const hero = () => {
  return (
    <main className='relative w-full pt-48 pb-40 px-28 flex flex-col justify-center inset-x-0 m-auto main-about' >
        <section className='flex pt-20 pb-20 gap-20 items-center sectionabt-1'>
        <div className='flex flex-col py-4 px-12 shct-content border-2 border-[#ffffffa5] rounded-2xl bg-slate-200  '>
            <div className='pt-12'>
               <h1 className='text-[3.5rem] text-[#121315] font-text titleabt-1'>
                <span className='block'>ABOUT</span>
                <span className='block '>VFX &nbsp; PRODUCTIONS</span>
                </h1> 
            </div>
            <div className='flex flex-row py-12 cont-abt-1'>
                <p className='font-subtext text-[1.2rem] text-[#121315] textabt-1'>vfx productions was created specifically to help people who
                   do not have advanced knowledge or training in the field of 
                   video editing or creating visual effects</p>
            </div>
        </div>
        <div className='shci-contnet'>
           <Image
            width={800}
            height={800}
             src="/miku2.png" alt="imagen de curso de edicion" className='rounded-2xl'
           />
        </div>
        </section>
        <section className='flex pb-[10rem] pt-[10rem] gap-20 items-center sectionabt-2'>
        <div className='shct-content1 py-4 px-12 shct-content border-2 border-[#ffffffa5] rounded-2xl bg-slate-200 '>
            <div className='pt-12'>
               <h1 className='text-[3.5rem] text-[#121315] font-text titleabt-2'>
                <span className='block'>ABOUT</span>
                <span className='block'>DAZKON</span>
                </h1> 
            </div>
            <div className='py-12 contabt-2'>
                <p className='font-subtext text-[1.2rem] text-[#121315] textabt-2'>vfx productions was created specifically to help people who
                   do not have advanced knowledge or training in the field of 
                   video editing or creating visual effects</p>
            </div>
        </div>
        <div className='shci-content2'>
        <Image 
               width={800}
               height={800}
             src="/miku3.png" alt="imagen de curso de edicion" className='rounded-2xl'
           />
        </div>
        </section>
    </main>
  )
}

export default hero