import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { useLanguage } from '@/components/context/LanguageContext';


const Herocontent = () => {
    const { t } = useLanguage()
    
  return (
    <div>
        <section className='relative w-full pt-48 pb-40 px-36 inset-x-0 m-auto sectionart'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-[6rem] font-text text-white titleact-1'>
                        <span className= 'block text-center'>
                           {t('ACTIVE')} 
                        </span>
                        <span className='block text-center'>
                           {t('COURSES')} 
                        </span>
                    </h1>
                    <h2 className='text-[1.5rem] font-subtext text-white py-7 subt-act-1' >
                        {t('Explore our top-rated video editing guides')}
                    </h2>
                </div>
            <section className='py-28 items-center '>
                <div className='grid gap-12 sc-container'>
                    <Link href='https://youtu.be/udLIaEMpA1A'  className='relative bg-[#1f202266] rounded-3xl p-8 my-2 sact-content-1 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={500}
                                height={500}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] titlemastact-1 font-text'>{t('Mastering anime editing')}</h1>
                                <p className='text-[1.3rem] font-subtext mt-5 subtxtmastct-1'>{t('Create editing anime video')}</p>
                            </div>
                        </div >
                    </Link>
                    <Link href='https://youtu.be/udLIaEMpA1A'  className='relative bg-[#1f202266] rounded-3xl p-8 mt-40 -mb-40 sact-content-2 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={500}
                                height={500}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] titlemastact-2 font-text'>{t('Mastering anime editing')}</h1>
                                <p className='text-[1.3rem] font-subtext mt-5 subtxtmastct-2'>{t('Create editing anime video')}</p>
                            </div>
                        </div >
                    </Link>
                    <Link href='https://youtu.be/udLIaEMpA1A'  className='relative bg-[#1f202266] rounded-3xl p-8 my-2 sact-content-3 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                    width={500}
                                    height={500}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] titlemastact-3 font-text'>{t('Mastering anime editing')}</h1>
                                <p className='text-[1.3rem] font-subtext mt-5 subtxtmastct-3'>{t('Create editing anime video')}</p>
                            </div>
                        </div >
                    </Link>
                    <Link href='https://youtu.be/udLIaEMpA1A'  className='relative bg-[#1f202266] rounded-3xl p-8 mt-40 -mb-40 sact-content-4 smts-content'>
                        <div className='flex items-center text-white hover:text-black sc-hvr'>
                            <div className='flex flex-row mst-si-contnent'>
                                <Image
                                width={500}
                                height={500}
                                src="/Curso1.png" alt="" className='rounded-3xl' />
                            </div>
                            <div className='flex flex-col justify-center mst-st-content ml-5'>
                                <h1 className='text-[2.5rem] titlemastact-4 font-text'>{t('Mastering anime editing')}</h1>
                                <p className='text-[1.3rem] font-subtext mt-5 subtxtmastct-4'>{t('Create editing anime video')}</p>
                            </div>
                        </div >
                    </Link>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Herocontent
