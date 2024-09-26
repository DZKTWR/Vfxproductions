"use client";

import React from 'react'
import Link from "next/link";
import  { useEffect, useRef } from 'react';

const Navbar = () => {
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

  return (
    <header className='z-[59]'>
      <div
      id="header"
      className='py-5 px-24 flex items-center fixed top-0 z-[60]
      justify-between inset-x-0 bg-[#454545]/40
      backdrop-blur-xl ' 
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
        <div className='flex flex-grow justify-end basis-0 gap-10'>
          <button className='text-base text-white'>
            Login
          </button>
          <button className='text-base text-white'>
            SingUp
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar