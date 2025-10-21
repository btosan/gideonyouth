'use client'

import { useEffect, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link'
import { Element } from "react-scroll";
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import './Hero.css'
import Image1 from '../../assets/who-we-are.jpg'
import Image2 from '../../../public/assets/images/gyf111.jpg'
import Image3 from '../../../public/assets/images/gyf10.jpg'

const HomeHero = () => {

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
    
  //   const skipSections = [
  //     { start: 8, end: 11 },
  //     { start: 12, end: 17 }, 
  //     { start: 17, end: 31 },
  //     { start: 32, end: 40 },
  //     { start: 55, end: 59 },
  //     { start: 62, end: 65 },
  //     { start: 67, end: 89 },
  //   ];

  //   const handleTimeUpdate = () => {
  //     if (video) {
  //       const currentTime = video.currentTime;

  //       for (const section of skipSections) {
  //         if (currentTime >= section.start && currentTime <= section.end) {
  //           video.currentTime = section.end + 0.1; 
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   video.addEventListener("timeupdate", handleTimeUpdate);
  //   return () => {
  //     video.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, []);
  
  return (
    <Element name='home'>
    <section  className="relative bg-DarkPurple text-white  flex items-center justify-center md:h-screen md:py-4 py-20 md:px-4 px-8 z-20 overflow-hidden">
      <div className="hidden lg:block absolute inset-0 z-0 bg-DarkPurple/10">
          {/* <video 
            muted 
            autoPlay 
            playsInline 
            loop 
            preload="none"
            
            className="h-screen w-full object-cover "
            >
            <source src='/assets/videos/gyf.mp4' type="video/mp4" />
              Your browser does not support video.
          </video> */}
          <div className="hidden lg:block absolute top-0 left-0 h-full w-full bg-cover bg-center bg-[url('/assets/images/gyf111.jpg')] ">
          </div>
      </div>
      <div className="lg:hidden block absolute inset-0 z-0 bg-DarkPurple/10 ">
          {/* <video 
           
            muted 
            autoPlay 
            playsInline
            loop 
            
            preload="none" 
            
            className="h-full w-full  object-cover"
          >
            <source src='/assets/videos/gyf.mp4' type="video/mp4" />

              Your browser does not support video.
          </video> */}
            <div className="lg:hidden block absolute top-0 left-0 h-full w-full bg-cover bg-center bg-[url('/assets/images/gyf111.jpg')] ">
            </div>
      </div>

      <div className="relative z-10 text-center lg:px-4 ">
        <h1 className="w-full text-center mx-auto lg:mt-16 md:mt-5 mt-12 md:mb-5 mb-5 pb-2  font-bold leading-tight md:leading-snug lg:leading-normal tracking-wide px-0 uppercase">
          <span className='md:[text-shadow:_2px_2px_2px_rgb(240_230_140_/_0.5)] [text-shadow:_1px_1px_1px_rgb(240_230_140_/_0.8)] text-white text-4xl md:text-5xl lg:text-6xl tracking-widest'>Inspiring greatness</span> 
          <span className='hidden text-3xl md:text-5xl lg:text-7xl [text-shadow:_0_2px_2px_rgb(240_230_140_/_0.8)] text-white tracking-wide'>Beyond the four walls of education</span>
           
        </h1>
        <p className=" tracking-wide md:tracking-wider text-center mx-auto text-lg md:text-2xl lg:text-3xl lg:mb-40 md:mb-16 mb-32 lg:px-16 md:px-8 w-full md:w-[80%] lg:w-[70%]">
          We empower disadvantaged young students to achieve their full potential.
        </p>
        
        <div className="mb-8 lg:mb-4 md:mb-6 flex-col-reverse flex lg:flex-row justify-center items-center md:gap-4 gap-3 lg:px-8 md:px-16 px-2 w-full lg:w-[60%] mx-auto ">
          <Link href='/contact' className='uppercase rounded-sm w-full lg:w-[60%] inline-flex items-center justify-center md:px-4 md:py-4 py-3 px-3 bg-DarkPurple/70 dark:bg-white/40 md:text-xl text-lg font-medium text-white hover:bg-DarkTeal/50 lg:border-4 border-2 lg:border-white/30 border-DarkPurple/0 hover:border-DarkPurple/0 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Teal'>
            Learn More
          </Link>
          <Link href='/about' className='uppercase rounded-sm w-full lg:w-[40%] inline-flex items-center justify-center md:px-4 md:py-4 py-3 px-3 lg:border-4 border-2 bg-white/70 border-white/40 md:text-xl text-lg font-medium text-black hover:bg-white/70 hover:border-white/0 lg:hover:border-white lg:hover:font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-HummingBird'>
            About Us
          </Link>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default HomeHero;
