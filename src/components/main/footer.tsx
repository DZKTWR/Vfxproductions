import React from "react";
import Link from "next/link";
import Youtube from "../../../public/youtube.webp";
import Instagram from "../../../public/Instagram.webp";
import Tiktok from "../../../public/TikTok-logo.webp";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                       
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Tiktok</span>    
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Policy</div>
                    <Link href="#"className="flex flex-row items-center my-[15px] cursor-pointer">
                       
                        <span className="text-[15px] ml-[6px]">Privacy Policy</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Terms of service</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Cookies</span>    
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contant</div>
                   <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Sevices@vfx.com</span>    
                    </Link>
                    <Link href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Dazkon@vfx.com</span>    
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Do you want to help me ?</div>
                   <Link href="#" className="flex flex-row items-center my-[15px]">
                        <span className="text-[15px] ml-[6px] block"> Donate here!</span> 
                        <span className="text-[15px] ml-[6px] block"> ↓ </span>  
                    </Link>
                    <Link href="#"className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Paypal</span>    
                    </Link>
                </div>
            </div>

            <div className="mt-32 mb-[20px] text-[10rem] text-center font-textfooter ">
             VFX &nbsp; PRODUCTIONS
            </div>
        </div>
    </div>
  )
}

export default Footer