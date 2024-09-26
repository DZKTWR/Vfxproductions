import React from "react";
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
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                       
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        
                        <span className="text-[15px] ml-[6px]">Tiktok</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Policy</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                       
                        <span className="text-[15px] ml-[6px]">Privacy Policy</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Terms of service</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Cookies</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contant</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Sevices@vfx.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Dazkon@vfx.com</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Do you want to help me ?</div>
                   <p className="flex flex-row items-center my-[15px]">
                        <span className="text-[15px] ml-[6px] block"> Donate here!</span> 
                        <span className="text-[15px] ml-[6px] block"> ↓ </span>  
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Paypal</span>    
                    </p>
                </div>
            </div>

            <div className="mt-20 mb-[20px] text-[6rem] text-center font-text text-[#ffffff1b]">
             VFX &nbsp; PRODUCTIONS
            </div>
        </div>
    </div>
  )
}

export default Footer