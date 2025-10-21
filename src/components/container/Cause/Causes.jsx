"use client"
// infinite
import React from "react";
import { categories } from "../../../Data";
import { causes } from "../../../Data";
import Categories from "./Categories";
import Cause from "./Cause";
import { motion } from "framer-motion";
import Link from "next/link";
import { Element } from "react-scroll";
import {initial, fadeInUp, stagger, fadeInThree} from "../../../animations/animations"

const Causes = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Element id="causes">
      <div className="pt-12 pb-16 md:pt-24 min-h-screen " >

      <motion.div
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp} 
        
        className="text-center container mx-auto pb-16 pt-0 px-6">
        <h2 className="text-black md:text-4xl text-3xl lg:text-5xl font-bold lg:mt-2 md:mt-0 lg:mb-8 mt-2 md:mb-5 mb-5">
          What <span className="text-Teal">We Do</span>
        </h2>
        <motion.h3 
          initial={initial}
          viewport={{once: false}}
          whileInView={stagger}
          className="text-lg lg:text-xl text-black leading-7 max-w-[700px] mx-auto">
        We help disadvantaged young people to escape a future of low self-esteem, drugs, poverty, and being excluded from society.
        </motion.h3>
      </motion.div>
      <motion.div
        initial={initial}
        viewport={{once: false}}
        whileInView={fadeInUp} 
        className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 gap-6 container mx-auto px-8 md:px-6 lg:px-10"
      >
        {categories.map((category) => {
          return <Categories key={category?.id} {...category} />;
        })}

      </motion.div>

      
      <div className="py-8 my-8 flex items-center justify-center w-full mx-auto">
          <Link href='/about' className="text-lg lg:text-xl text-DarkPurple hover:text-white text-center  px-8 py-3 w-64 border border-DarkPurple bg-transparent hover:bg-DarkPurple">
            About Us
          </Link>
      </div>
      
      <motion.div 
        initial={initial}
        viewport={{once: true}}
        whileInView={fadeInThree}
        className=" mx-auto md:px-4 lg:px-24 px-6 pt-16 bg-DarkPurple">
        <motion.h2 
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="uppercase tracking-widest text-white font-bold md:text-4xl text-3xl lg:text-5xl mx-auto mb-5 mt-8 w-full flex items-center justify-center text-center">
          Causes
        </motion.h2>

        <motion.h4 
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="tracking-widest text-[#f0f1f1] md:text-2xl text-xl mx-auto mb-8 w-full flex items-center justify-center text-center">
          {"Some of the causes we've championed"}
        </motion.h4>
      <div 
        className="mt-12 overflow-x-hidden  w-full relative container mx-auto">
        <div 
          className="flex md:gap-8 gap-8 pb-4 mb-4 md:w-full sm:w-[170%] xs:w-[400%] w-[600%] animate-slide">
          {causes.map((cause) => {
            return <Cause key={cause.id} {...cause} />;
          })}
        </div>
        <div className="flex items-center justify-center mx-auto w-full lg:py-12 py-8">
          <Link href='/about' className="text-lg lg:text-xl text-white hover:text-[#f0f1f1] text-center  px-8 py-3 w-64 border-2 md:border-4 border-gray bg-DarkTeal hover:bg-DarkPurple">
            Our Work
          </Link> 
        </div>
      </div>
      </motion.div>
      </div>
    </Element>
  );
};

export default Causes;
