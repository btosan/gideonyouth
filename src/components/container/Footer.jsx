'use client'

import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

import Link from 'next/link';

import {motion} from "framer-motion"
import {initial, fadeInUp, stagger, fadeInThree} from "../../animations/animations"

const Footer = () => {
  return (
    <div
      className="bg-DarkPurple p-10"
    >
      <div className="pt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 place-items-center md:gap-8 gap-4 text-white">
        <div>
          <div className="font-bold mb-4 text-sm md:text-lg">About Us</div>
          <p className="text-xs md:text-sm leading-7">
          Gideon Youth Foundation is a not-for-profit organization in Lagos State with the vision to re-ignite passion, greatness, and excellence in our public education system.
          </p>
        </div>
        <div>
          <div className="font-bold mb-6 text-sm md:text-lg">About</div>
          <div className="flex flex-col gap-4">
            
            <Link href="/#causes" className="text-xs md:text-sm hover:underline">
              Causes
            </Link>
            <Link href="/about" className="text-xs md:text-sm hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-xs md:text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="/#volunteer" className="text-xs md:text-sm hover:underline mb-4">
              Volunteer
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-4 text-sm md:text-lg">Head Office</div>
          <h3 className=" text-xs md:text-sm">
            Visit Us: <br />@ Redemption Camp, House 8, <br /> El-Shaddai Crescent, <br /> Estate 9, Ogun State.
          </h3>
  
        </div>
        <div>
          <div className="font-bold mb-4 text-sm md:text-lg">Contact Us</div>
          
          <div className="text-sm md:text-lg mb-3"><a href="mailto:info@gideonyouth.org" className="text-xs md:text-sm hover:underline hover:underline-offset-8 hover:font-medium font-normal">Email:  info@gideonyouth.org</a></div>
          <div className="text-sm md:text-lg mb-3"><a href="tel:+2348055311813" className="text-xs md:text-sm hover:underline hover:underline-offset-8 hover:font-medium hover:tracking-widest font-normal" >Call:  +2348055311813</a></div>
          <div className="flex items-center justify-center flex-col gap-4 mt-4">
            <a href="https://www.instagram.com/gideonyouthfoundation/" className=" text-xs md:text-sm">
              Follow us on Instagram
            </a>
            <a href="https://www.instagram.com/gideonyouthfoundation/" className="hover:scale-110">
              <BsInstagram className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"/>
            </a>
          </div>
        </div>
      </div>

      <motion.div 
            initial={initial}
            viewport={{once: false}}
            whileInView={stagger}
            className="mt-6 py-8 px-6  text-white text-center text-sm md:text-lg ">
            <span>Copyright © {(new Date().getFullYear())} </span>
            <Link
                className="font-semibold"
                href="/"
            >
                <motion.span 
                    initial={initial}
                    viewport={{once: false}}
                    whileInView={fadeInUp}
                    className='text-[#f1ffff] text-sm md:text-lg pl-2'> | Gideon Youth Foundation </motion.span>
            </Link>
        </motion.div>
        <div className="flex items-center justify-center w-full text-xs md:text-sm text-HummingBird hover:text-white hover:underline hover:underline-offset-[10px] ">
          <a href="https://tosanx.com" target="blank">Developed by Tosan X</a>
        </div>
    </div>
  );
};

export default Footer;
