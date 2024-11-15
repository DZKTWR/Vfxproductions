"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/magnetic";
import Youtube from "../../../public/youtube-svgrepo-com.svg";
import Instagram from "../../../public/Instagram.png";
import Tiktok from "../../../public/TikTok-logo.png";
import { useLanguage } from '@/components/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage()
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg mt-32">
        <div className="w-full flex flex-col items-center justify-center ">
            <div className="w-full h-full flex flex-row justify-around flex-wrap m-auto p-[15px] gap-12">
                
                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px]">{t("Social Media")}</div>
                    <Magnetic>
                        <Link href="https://www.youtube.com/@dazkonx" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                            <Image src={Youtube} width={20} height={20} alt="Image of youtube"/>
                            <span className="text-[15px] ml-[6px]">Youtube</span>    
                        </Link>
                    </Magnetic>


                    <Magnetic>
                        <Link href="https://www.tiktok.com/@dazkon" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                             <Image src={Tiktok} width={20} height={20} alt="Image of Tiktok"/>
                            <span className="text-[15px] ml-[6px]">Tiktok</span>    
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <Link href="https://www.instagram.com/dazkonx" target="_blank" className="flex flex-row items-center my-[15px] cursor-pointer">
                             <Image src={Instagram} width={20} height={20} alt="Image of Instagram"/>
                             <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </Link>
                    </Magnetic>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px]">{t("Policy")}</div>
                    <Magnetic>
                      <Link href="#"className="flex flex-row items-center my-[15px] cursor-pointer">
                          <span className="text-[15px] ml-[6px]">{t("Privacy Policy")}</span>    
                      </Link>
                    </Magnetic>

                    <Magnetic>
                      <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                          <span className="text-[15px] ml-[6px]">{t("Terms of service")}</span>    
                      </Link>   
                    </Magnetic>

                    <Magnetic>
                     <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                         <span className="text-[15px] ml-[6px]">Cookies</span>    
                     </Link>
                    </Magnetic>
                     
                </div>
                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px]">Contant</div>
                   <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Sevices@vfx.com</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Dazkon@vfx.com</span>    
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col justify-start">
                    <div className="font-bold text-[16px]">{t("Do you want to help me ?")}</div>
                   <div className="flex flex-row items-center my-[15px]">
                        <span className="text-[15px] ml-[6px] block"> {t("Donate here!❤️")}</span> 
                        <span className="text-[15px] ml-[6px] block"> ↓ </span>  
                    </div>
                     <Link href="https://paypal.me/diegoacosta332?country.x=CO&locale.x=es_XC"className="flex flex-row items-center my-[15px] cursor-pointer">
                         <span className="text-[15px] ml-[6px]">Paypal</span>    
                     </Link>
                      
                </div>
            </div>

            <div className="mt-32 mb-[20px] text-center font-textfooter ">
             VFX PRODUCTIONS
            </div>
        </div>
    </div>
  )
}

export default Footer
