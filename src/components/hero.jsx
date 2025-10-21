
"use client"
import React from "react";
import Image from 'next/image';
import MobileApp from "../assets/mobile-app.webp";
import OnLoadDownToUp from "./animation/onLoadDownToUp";


export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-white pt-32 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-0 px-0 md:px-8 lg:px-0">
      <OnLoadDownToUp>
        <div className="w-full mx-auto flex lg:flex-row flex-col lg:gap-4 md:gap-4 items-center justify-center lg:justify-center lg:px-32 md:px-24 px-0 md:pt-16 lg:pt-32">
          <div className=" md:px-0 px-4">
            <h1 className=" text-center tracking-wider flex flex-col items-center justify-center text-3xl lg:text-6xl md:text-4xl font-bold text-Teal mb-8 lg:mb-12 max-w-full md:max-w-xl lg:max-w-2xl ">
             Inspiring greatness {" "} <br /> <span className="text-DarkPurple mt-3 md:mt-5"> One child at a time!</span>  
            </h1>
            <h2 className="text-center flex items-center justify-center text-Teal mb-8 lg:mb-12 text-sm md:text-xl lg:text-2xl w-full px-4 lg:px-0 tracking-widest">
              We empower disadvantaged young students to achieve their full potential.
            </h2>
            <div className="lg:mt-16 mt-8 pb-8 lg:pb-0 flex items-center justify-center gap-4 lg:items-start lg:gap-8">
              <button className="px-4 lg:px-6 py-3 border lg:border-solid bg-DarkPurple hover:bg-white hover:text-Teal text-white  rounded-lg text-sm lg:text-xl">
                Learn More
              </button>
              <button className="md:block hidden px-4 lg:px-6 py-3 bg-[#f1f1f1] text-black hover:bg-Teal hover:text-white border border-DarkPurple hover:border hover:border-Teal rounded-lg text-sm lg:text-xl">
                About Us
              </button>
          </div>
            {/* <NotifyBtn text={"Get Notified"} /> */}
          </div>
          {/* <div className="relative md:pt-16 lg:pt-0 pt-8 lg:-mt-16 lg:z-20 w-auto min-h-[576px] lg:min-h-screen min-w-[90%] lg:min-w-[328px] flex items-center justify-center lg:justify-start lg:flex md:block">
            <Image
              src={MobileApp}
              alt="mobile app view"
              className="object-contain lg:object-cover lg:h-screen"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              priority={true}
              quality={75}
            />
          </div> */}
        </div>
      </OnLoadDownToUp>
    </div>
  );
}
