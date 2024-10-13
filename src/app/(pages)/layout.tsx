"use client";

import Navbar2 from "@/components/Navbar2";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Curve from "@/components/curveanim/curve";

export default function Layout (
    { children }: { children: React.ReactNode }) 
    {
        const pathname = usePathname()

    return (
        <> 
            <AnimatePresence mode='wait'>
                <Curve key={pathname} >
                  <Navbar2 />
                  {children}
                </Curve>
            </AnimatePresence>
        </>
    )
}
