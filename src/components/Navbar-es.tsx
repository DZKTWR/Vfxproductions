"use client";

import React from 'react';
import Link from "next/link";
import  { useEffect, useRef , useState } from 'react';
import Image from "next/image";
import Menu from "./menu";
import Magnetic from "@/components/magnetic";

const Navbares = () => {

  //animation type hover
  const listItemRef = useRef<HTMLUListElement | null>(null);
  const menuBackDropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && listItemRef.current && menuBackDropRef.current) {
      const listItems = listItemRef.current.querySelectorAll<HTMLLIElement>("li");
      const menuBackDrop = menuBackDropRef.current;

      const handleMouseEnter = (item: HTMLLIElement) => {
        if (listItemRef.current) {
          

        const { left, top, width, height } = item.getBoundingClientRect();
        const { scrollX, scrollY } = window;
        
        const containerRect = listItemRef.current.getBoundingClientRect();
        const offsetLeft = left - containerRect.left;
        const offsettop = top - containerRect.top;

        menuBackDrop.style.setProperty("--left", `${offsetLeft}px`);
        menuBackDrop.style.setProperty("--top", `${offsettop}px`); 
        menuBackDrop.style.setProperty("--width", `${width}px`);
        menuBackDrop.style.setProperty("--height", `${height}px`); 
        menuBackDrop.style.opacity = "1";
        menuBackDrop.style.visibility = "visible";
        }
      };

      const handleMouseLeave = () => {
        menuBackDrop.style.opacity = "0";
        menuBackDrop.style.visibility = "hidden";
      };

      listItems.forEach((item) => {
        item.addEventListener("mouseenter", () => handleMouseEnter(item));
        item.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        listItems.forEach((item) => {
          item.removeEventListener("mouseenter", () => handleMouseEnter(item));
          item.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, []);

 //menu-responsive 
   const [isMenuOpen, setIsMeuOpen] = useState(false);
   const [isMoblie, setIsMoblie] = useState(false);

   useEffect(() => {
    const handleResize = () =>{
      setIsMoblie(window.innerWidth < 900);
    };
    handleResize ();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
   }, []);

     const toggleMenu = () => {
      setIsMeuOpen(!isMenuOpen);
    };


  return (
    <header>
      <button className='menu-open cursor-pointer menu-icon absolute top-[20px] left-auto right-4 z-[61] border border-white p-2 rounded-full' onClick={toggleMenu} aria-label='Toggle menu'>
            <Image width={25} height={25} src="/icon-menu.svg" alt='image of menu'/>
       </button> 
      <div
      id="header"
      className='base-navbar py-2 px-9 flex items-center fixed top-[20px] max-w-[38rem] mx-auto z-[60]
      justify-between inset-x-0 border dark:border-white/[0.7]  bg-[#454545]/10 backdrop-blur-md rounded-full' 
      >  
        <nav 
        className='flex flex-grow justify-evenly navbar'>
                <ul ref={listItemRef}
                className='flex text-[#dbe3e9] text-base [&>li>a]:font-[500] [&>li>a]:inline-block 
                [&>li>a]:px-5 [&>li>a]:py-2 [&>li>a]:roboto-font'>
                    <li><Link href="/Courses" >Cursos</Link></li>
                    <li><Link href="/Gallery" >Galeria</Link></li>
                    <li><Link href="/Recourses">Recursos</Link></li>
                    <li><Link href="/About">Acerca</Link></li>
               </ul>
        </nav>
        <Magnetic>
          <button className='border border-white rounded-3xl py-2 px-5 text-white button-login hover:bg-white/5 backdrop-blur-lg'>Iniciar sesión</button>
        </Magnetic>

        <div
          id="menu-backdrop"
          ref={menuBackDropRef}
          className="absolute bg-white/5 backdrop-blur-lg rounded 
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-[3.2rem]
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500 ease-in-out
          opacity-0 -z-10"
        />
      </div>
      
      { isMoblie && <Menu isOpen={isMenuOpen} onClose={() => setIsMeuOpen(false)}/>}

    </header>

  )
}

export default Navbares;