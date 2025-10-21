"use client"
import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import AccordionCustom from "./Accordion";
import Image from 'next/image'
import Link from 'next/link'
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {initial, fadeInUp, stagger, fadeInThree} from "../../animations/animations"
import Image1 from '../../../public/assets/images/gyf11.jpg'
import Image2 from '../../../public/assets/images/gyf7.jpg'

const Teacher = () => {
  return (
  <Element id="volunteer">  
    <motion.div 
      initial={initial}
      viewport={{once: false}}
      whileInView={fadeInUp}
      className="lg:section lg:px-0 md:px-8 px-6 " >
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center md:gap-16 gap-8">
        <div className="lg:pl-5">
          <motion.div 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="font-bold text-DarkPurple text-3xl md:text-4xl lg:text-4xl mb-8 lg:mb-8 text-center lg:text-start">
            Become <span className="text-Teal">a Volunteer</span> 
          </motion.div>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:text-xl text-lg text-black leading-7 md:mb-4 mb-3 lg:text-start text-center">
            {"We can’t do it alone. We need your help. Your small help can bring a big change."}
          </motion.p>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:text-xl text-lg text-black leading-7 md:mb-4 mb-8 lg:text-start text-center">
            {"It’s impossible to help people without people helping others. We always need volunteer who love to help."}
          </motion.p>

          <Link href='/contact'>
            <motion.button 
              initial={initial}
              viewport={{once: false}}
              whileInView={fadeInUp}
              className="py-3 px-8 md:px-10 lg:py-4 lg:px-12 mt-5 mb-8 lg:mb-0 lg:mt-8 bg-Teal hover:bg-DarkPurple text-white rounded-lg text-lg lg:text-xl font-bold lg:block flex items-center justify-center lg:mx-0 mx-auto">
              Contact Us
            </motion.button>
          </Link>
        </div>
        <motion.div
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="md:p-6 w-full sm:row-start-1 border-2 lg:border-4 lg:rounded-xl rounded-lg border-DarkPurple">
          <Image height={500} width={500} src={Image1} alt="Gideon Youth Foundation" />
        </motion.div>
        <div className="lg:pl-5 lg:pt-0 pt-5">
          <motion.h2 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="font-bold text-DarkPurple text-3xl md:text-4xl lg:text-4xl mb-8 lg:mb-8 text-center lg:text-start">
            Empowering <span className="text-Teal">Young</span> Minds
          </motion.h2>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:text-xl text-lg text-black leading-7 md:mb-4 mb-3 lg:text-start text-center">
            {"Every child deserves a quality education. Your support can help us provide disadvantaged students with the resources they need to succeed in their WAEC, NECO, and UTME exams."}
          </motion.p>

          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:text-xl text-lg text-black leading-7 md:mb-4 mb-8 lg:text-start text-center">
            {"From scholarships to refurbished classrooms, school uniforms and new books, your donation will make a real difference. Join us in building a brighter future for Nigeria’s youth."}
          </motion.p>

          <Link href='/contact'>
            <motion.button 
              initial={initial}
              viewport={{once: false}}
              whileInView={fadeInUp}
              className="py-3 px-8 md:px-10 lg:py-4 lg:px-12 mt-5 lg:mt-8 bg-Teal hover:bg-DarkPurple text-white rounded-lg text-lg lg:text-xl font-bold lg:block flex items-center justify-center lg:mx-0 mx-auto lg:mb-0 mb-8 ">
              Get Started
            </motion.button>
          </Link>
        </div>
        <motion.div 
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="md:p-4 md:w-3/4 w-full lg:border-4 border-2 rounded-md border-Teal"
        >
          <Image height={500} width={500} src={Image2} alt="Gideon Youth Foundation" />
        </motion.div>
      </div>
      <motion.div 
        initial={initial}
        viewport={{once: false}}
        whileInView={fadeInUp}
        className="py-4 mt-12 lg:mt-24 border-b-2 border-t-2 border-DarkPurple ">
        <h2 className=" text-DarkPurple md:mt-8 mt-4 mb-8 font-bold sm:text-[1.975rem] text-[1.7rem] text-center mx-auto w-full">
          Frequently Asked Questions
        </h2>
        <motion.div 
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="mt-5 mb-5 md:mb-8 lg:mb-12 max-w-[700px] mx-auto"
        >
          <AccordionCustom />
        </motion.div>
      </motion.div>
    </motion.div>
    </Element>
  );
};

export default Teacher;
