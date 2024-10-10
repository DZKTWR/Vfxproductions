'use client';

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { text, curve, translate } from './anim'

interface Routes {
  [key: string]: string;
}

const routes: Routes = {
  "/About": "About",
  "/Courses": "Courses",
  "/Gallery": "Gallery",
  "/Recourses": "Recourses",
}

interface AnimProps {
  variants: any;
  initial: string;
  animate: string;
  exit: string;
}

const anim = (variants: any): AnimProps => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit"
  }
}

interface CurveProps {
  children: React.ReactNode;
}

interface Dimensions {
  width: number | null;
  height: number | null;
}

export default function Curve({ children }: CurveProps) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null
  })

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    resize();
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div className='page curve'>
      <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
      <motion.p className='route' {...anim(text)}>
        {routes[pathname]}
      </motion.p>
      {dimensions.width != null && dimensions.height != null && <SVG width={dimensions.width} height={dimensions.height} />}
      {children}
    </div>
  )
}

interface SVGProps {
  height: number;
  width: number;
}

const SVG = ({ height, width }: SVGProps) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `

  return (
    <motion.svg {...anim(translate)} style={{zIndex: 91}}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  )
}