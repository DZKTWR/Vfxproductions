"use client";

import React from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from "@/components/magnetic";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
    {path: "/Courses", label: "Courses"},
    {path: "/Gallery", label: "Gallery"},
    {path: "/Recourses", label: "Recourses"},
    {path: "/About", label: "About"},
  ];
const menuVariants = {
  closed: { 
    clipPath: "circle(0% at 100% 0)",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  open: { 
    clipPath: "circle(150% at 100% 0)",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  }
};

const linkVariants = {
  closed: { y: 50, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 * i, duration: 0.5 }
  })
};

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 bg-blue-500 flex flex-col items-center justify-center z-[62]"
        >
          <div className="absolute top-[20px] right-6  cursor-pointer" onClick={onClose}>
            <p className="text-white text-2xl">&#x2715;</p>
          </div>
          <nav className="flex flex-col items-center">
            {menuLinks.map((link, index) => (
              <motion.div
                key={link.path}
                custom={index}
                variants={linkVariants}
                className="my-4"
              >
                <Magnetic>
                   <Link href={link.path} className="text-white text-2xl hover:text-blue-200 transition-colors" onClick={onClose}>
                     {link.label}
                   </Link>
                </Magnetic>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-8 text-white"
          >
            <p>info@codegrid.com</p>
            <p>232 2342 2342</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;