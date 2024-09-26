import React from 'react';
import Image from 'next/image';

const Herocontent = () => {
  return (
    <div>
        <section className='relative w-full pt-48 pb-40 px-36 inset-x-0 m-auto'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[6rem] font-text text-white'>
                        <span className= 'block text-center'>
                            ACTIVE
                        </span>
                        <span className='block text-center'>
                            COURSES
                        </span>
                    </h1>
                    <h2 className='text-[1.5rem] font-subtext text-white py-7'>Explore our top-rated video editing guides</h2>
                </div>
            <section className='py-28 items-center '>
                <div className='grid gap-12 sc-container'>
                    <a href='#'  className='relative bg-[#1f202266] rounded-3xl p-8 my-2 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={100}
                                height={100}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] font-text'>Mastering anime editing</h1>
                                <p className='text-[1.3rem] font-subtext mt-5'>Create editing anime video</p>
                            </div>
                        </div >
                    </a>
                    <a href='#'  className='relative bg-[#1f202266] rounded-3xl p-8 mt-40 -mb-40 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={100}
                                height={100}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] font-text'>Mastering anime editing</h1>
                                <p className='text-[1.3rem] font-subtext mt-5'>Create editing anime video</p>
                            </div>
                        </div >
                    </a>
                    <a href='#'  className='relative bg-[#1f202266] rounded-3xl p-8 my-2 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                    width={100}
                                    height={100}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] font-text'>Mastering anime editing</h1>
                                <p className='text-[1.3rem] font-subtext mt-5'>Create editing anime video</p>
                            </div>
                        </div >
                    </a>
                    <a href='#'  className='relative bg-[#1f202266] rounded-3xl p-8 mt-40 -mb-40 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={100}
                                height={100}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] font-text'>Mastering anime editing</h1>
                                <p className='text-[1.3rem] font-subtext mt-5'>Create editing anime video</p>
                            </div>
                        </div >
                    </a>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Herocontent
