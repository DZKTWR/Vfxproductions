"use client";

import React from 'react';
import Link from "next/link";
import  { useEffect, useRef , useState } from 'react';
import Image from "next/image";
import Menu from "./menu";
import Magnetic from "@/components/magnetic";



const Navbar = () => {

  //animation type hover
  const listItemRef = useRef<HTMLUListElement | null>(null);
  const menuBackDropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && listItemRef.current && menuBackDropRef.current) {
      const listItems = listItemRef.current.querySelectorAll<HTMLLIElement>("li");
      const menuBackDrop = menuBackDropRef.current;

      menuBackDrop.style.left = "28rem";


      const handleMouseEnter = (item: HTMLLIElement) => {

        if (listItemRef.current) {

          const { left, top, width, height} = item.getBoundingClientRect();
          const { scrollX , scrollY} = window;

          const containerRect = listItemRef.current.getBoundingClientRect();
          const offsettop = top - containerRect.top;


          menuBackDrop.style.setProperty("--left", `${left}px`);
          menuBackDrop.style.setProperty("--top", `${offsettop}px`);
          menuBackDrop.style.setProperty("--width", `${width}px`);
          menuBackDrop.style.setProperty("--height", `${height}px`);

          menuBackDrop.style.left = "0";

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
      setIsMoblie(window.innerWidth < 1100);
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
       <button className='menu-open cursor-pointer menu-icon2 fixed top-[20px] left-auto right-4 z-[61] border border-white p-3 rounded-full' onClick={toggleMenu} aria-label='Toggle menu'>
            <Image width={27} height={27} src="/icon-menu.svg" alt='image of menu'/>
       </button> 
      <div
      id="header"
      className='py-5 px-24 flex items-center fixed top-0 z-[60]
      justify-between inset-x-0 bg-[#454545]/40
      backdrop-blur-xl  navbar2-responsive' 
      >
        <div className=' flex flex-grow basis-0'>
          <Link href="/" className='text-2xl text-white vfx-font'>VFX Productions</Link>
        </div>
        <nav className='flex flex-grow justify-evenly'>
                <ul ref={listItemRef}
                className='flex text-[#e0e8ee] text-base [&>li>a]:font-[500] 
                [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:roboto-font'>
                    <li><Link href="/Courses">Courses</Link></li>
                    <li><Link href="/Gallery">Gallery</Link></li>
                    <li><Link href="/Recourses">Recourses</Link></li>
                    <li><Link href="/About">About</Link></li>
                </ul>
        </nav>
        <div
          id="menu-backdrop"
          ref={menuBackDropRef}
          className="absolute bg-white/5 backdrop-blur-lg rounded 
          translate-x-[var(--left)] translate-y-[var(--top)]
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500 ease-in-out
          opacity-0 -z-10 "
        />
        <div className='flex flex-grow justify-end basis-0 gap-7'>
          <Magnetic>
          <button className='text-base text-white border border-white py-2 px-9 rounded-full'>
            Login
          </button>
          </Magnetic>
          <Magnetic>
          <button className='text-base text-white border border-white py-2 px-8 rounded-full'>
            SingUp
          </button>
          </Magnetic>
        </div>
      </div>
    
      { isMoblie && <Menu isOpen={isMenuOpen} onClose={() => setIsMeuOpen(false)}/>}

    </header>
  )
}

export default Navbar