
"use client"
import React from "react";
import student from "../../assets/students.jpg";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import {initial, fadeInUp, stagger, fadeInThree} from "../../animations/animations"

const About = () => {
  return (
    <Element name="about">
      <div className=" text-DarkPurple py-12 md:py-16 lg:py-24 md:px-8 shadow-md ">
      <motion.div 
        initial={initial}
        viewport={{once: false}}
        whileInView={fadeInUp}
        className="grid md:grid-cols-2 lg:gap-8 gap-4 place-items-center">
        <motion.div 
          initial={initial}
          viewport={{once: false}}
          whileInView={fadeInUp}
          className="md:border-[3px] border-[0px] md:border-solid lg:border-DarkPurple border-DarkTeal  md:rounded-lg"
        >
          <Image src={student} alt="Gideon Youth " height={400} width={400}  className="p-4" />
        </motion.div>
        <div className="lg:w-[90%] w-full lg:pt-0 pt-8 px-8 md:px-0">
          <motion.div 
            initial={initial}
            viewport={{once: false}}
            whileInView={stagger}
            className="font-bold tracking-wider text-black text-3xl md:text-4xl lg:text-5xl mb-5 lg:mb-8 lg:text-start text-center ">
            Who {" "}
            <span className="text-DarkPurple lg:text-start text-center">We Are</span>
          </motion.div>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="text-xl lg:text-2xl text-black leading-7 mb-4 lg:text-start text-center">
            {"Gideon Youth Foundation is a not-for-profit organization in Lagos State with the vision to re-ignite passion, greatness, and excellence in our public education system."}
          </motion.p>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="text-xl lg:text-2xl text-black leading-7 md:mb-4 mb-8  lg:text-start text-center">
            {"Gideon Youth Foundation was established out of a deep compassion for the Nigerian youth."}
          </motion.p>
          <motion.p 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:block hidden font-semibold text-sm md:text-lg text-black leading-7 mb-4 lg:text-start text-center">
            {"Gideon Youth Foundation is championing:"}
          </motion.p>
          <motion.ul 
            initial={initial}
            viewport={{once: false}}
            whileInView={fadeInUp}
            className="md:block hidden capitalize list-disc text-sm md:text-lg text-black leading-7 mb-8 lg:mb-12 lg:text-start px-8">
            <li className="my-2">
              School-based drug & substance prevention programs
            </li>
            <li className="my-2">
              Sex & Sexuality Education
            </li>
            <li className="my-2">
              Scholarships to academically gifted students
            </li>
            <li className="my-2">
              Leadership training
            </li>
            <li className="my-2">
              Education beyond the four walls
            </li>
          </motion.ul>
          <Link href="/about" className="">
            <motion.button 
              initial={initial}
              viewport={{once: false}}
              whileInView={fadeInUp}
              className="lg:py-3 px-8 py-3 lg:text-2xl text-xl border border-solid border-DarkPurple text-DarkPurple hover:bg-Teal hover:text-[#f0f1f1] rounded-lg font-normal lg:block flex items-center justify-center lg:mx-0 mx-auto">
            About Us
          </motion.button>
          </Link>

        </div>
      </motion.div>
      </div>
    </Element>
  );
};

export default About;
