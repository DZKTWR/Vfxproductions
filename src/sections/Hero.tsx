"use client";

import React, {useRef,useState } from 'react';
import { motion } from "framer-motion";
import { FlipWords } from "@/ui/flip-words";
import Link from "next/link";
import Image from 'next/image';
import Magnetic from "@/components/magnetic";
import { useLanguage } from '@/components/context/LanguageContext';

export function FlipWordsDemo() {
    const words = ['Animation','Editing','3D blender']; {
        return <FlipWords words={words} />
    }
    }



const Hero = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const { language, setLanguage, t , NavbarComponent } = useLanguage()


    const videoRef = useRef<HTMLVideoElement | null>(null);
    const soundwaveRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlayingWave, setIsPlayingWave] = useState(false);

    const toggleMute = () => {
        const newMuteState = !isMuted;
        setIsMuted(newMuteState);

        if (soundwaveRef.current) {
            if (newMuteState) {
                
                soundwaveRef.current.pause();
                soundwaveRef.current.currentTime = 0; 
                setIsPlayingWave(false);
            } else {
                // Reproducir sonido
                soundwaveRef.current.play();
                setIsPlayingWave(true);
            }
        }

    };

    return (
        <>
             <NavbarComponent />
            <section className=' text-center relative h-screen w-screen'>
                <div className='relative tr-hero-content z-[15] h-full m-auto inset-x-0 justify-center flex flex-col items-center overflow-hidden'>
                   <header style={{ transform: 'translate(0px, 0px)'}} >
                        <motion.div className="flex flex-col md:w-full items-center"
                        initial={{y: 100,opacity:0}}
                        animate={{y: 0,opacity:1}}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        >
                            <h1 className='text-[4.5rem] sm:text-[6.7rem] bg-clip-text vfx-font text-[#e0e8ee] slc '>
                                    VFX Productions
                            </h1>
                            <h2 className='relative -top-2 text-[1.2rem] sm:text-[1.7rem] sm:pb-4 text-[#e0e8ee] py-1 roboto-font slc'>
                               {t( 'A way to learn' )}  <FlipWordsDemo />
                            </h2>
                        </motion.div>
                    </header>
                    <footer className='flex flex-col justify-start pt-7 '>
                        <motion.div
                        initial={{y: 100, opacity:0}}
                        animate={{y: 0, opacity:1}}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <Magnetic>
                                 <Link href="/Courses" className='border-2 border-[#ffffff] rounded-full text-lg inline-block font-medium px-6 py-2
                                 text-[#e0e8ee] roboto-font bttn-learn '>
                                    {t('Learn More!')} 
                                 </Link>
                            </Magnetic>
                        </motion.div>
                    </footer>
                </div>
                <div className='z-[2] absolute top-0 h-full w-full bottom-0 opacity-15'>
                            <video ref={videoRef} muted={isMuted} autoPlay loop className='object-center object-cover h-full w-full'>
                                <source src='Final.mp4' type='video/mp4'/>
                            </video>
                    </div>
                <div className='absolute flex flex-row top-auto bottom-[4rem] left-[4.5rem] right-auto z-[20] justify-evenly items-center iconsw-responsive'>
                    <Magnetic>
                        <button onClick={toggleMute} className='mr-2 text-white text-xl border cursor-pointer hover:bg-white/25 backdrop:blur-lg rounded-full '>
                            {isMuted ? (
                                <Image width={60} height={60} src='/soundwave.png' alt='image-soundwave' className='px-4 pb-[0.58rem] pt-[0.58rem] soundwave'/>
                            ): (
                             <video loop muted playsInline autoPlay style={{ pointerEvents: 'none' } }ref={soundwaveRef} width={60} height={60} className='soundwave'>
                                <source src='soundmuted.webm' type='video/webm' />
                             </video>
                            )}
                        </button>
                    </Magnetic>
                       <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='ml-2'>
                            <Image height={30} width={27} src='/global.png' alt='image-global' className='globalcolor'/>
                            {isOpen && (
                            <div className="absolute flex top-full left-0 right-auto mt-2 shadow-md rounded-md z-[50]">
                              {['en', 'es'].map((lang) => (
                                <button
                                  key={lang}
                                  onClick={() => {
                                    setLanguage(lang as 'en' | 'es')
                                    setIsOpen(false)
                                  }}
                                  className="justify-center w-full text-left px-4 py-2 text-white relative"
                                >
                                  {t(lang === 'en' ? 'En' : 'Es')}
                                  {language === lang && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-100 animate-pulse z-[50]"  />
                                  )}
                                </button>
                              ))}
                            </div>
                        )}
                        </button>

                </div>
            </section>
        
        </>
            
    );
};

export default Hero
