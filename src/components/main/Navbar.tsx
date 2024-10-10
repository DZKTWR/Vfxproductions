"use client";

import React from 'react';
import Link from "next/link";
import  { useEffect, useRef , useState } from 'react';
import Image from "next/image";

const Navbar = () => {
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

        // Ajusta el estilo directamente
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

  return (
    <header className='z-[59]'>
      <div
      id="header"
      className='base-navbar py-2 px-9 flex items-center fixed top-[20px] max-w-[35rem] mx-auto z-[60]
      justify-between inset-x-0 border dark:border-white/[0.7]  bg-[#454545]/40 backdrop-blur-xl rounded-full' 
      > 
        <div className='menu-icon'>
          <Image width={30} height={30} src="/icon-menu.png" alt='imagen de menu' />
        </div>
        <nav 
        className='flex flex-grow justify-evenly navbar'>
                <ul ref={listItemRef}
                className='flex text-[#dbe3e9] text-base [&>li>a]:font-[500] [&>li>a]:inline-block 
                [&>li>a]:px-5 [&>li>a]:py-2 [&>li>a]:roboto-font'>
                    <li><Link href="/Courses" >Courses</Link></li>
                    <li><Link href="/Gallery" >Gallery</Link></li>
                    <li><Link href="/Recourses">Recourses</Link></li>
                    <li><Link href="/About">About</Link></li>
               </ul>
        </nav>
        <button className='border border-white rounded-3xl py-2 px-6 text-white button-login hover:bg-white/5 backdrop-blur-lg'>Login</button>
        <div
          id="menu-backdrop"
          ref={menuBackDropRef}
          className="absolute bg-white/5 backdrop-blur-lg rounded 
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-[2.5rem]
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500 ease-in-out
          opacity-0 -z-10"
        />
      </div>
    </header>

  )
}

export default Navbar