"use client";
import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import {initial, fadeInUp, stagger, fadeInThree} from "../../animations/animations"
import ContactForm from './ContactForm'
import Form from './Form'

const Contact = () => {
  return (
    <Element name="contact">
      <div className="px-8 pb-16 bg-Solitude" >
      <div className="text-center md:max-w-[640px] lg:w-[800px] max-w-[500px] lg:max-w-[800px] w-full mx-auto  ">
        <motion.div 
          className="sm:text-3xl text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-DarkTeal pt-8 md:pt-16">
          Contact Us
        </motion.div>
        <motion.p 
          className="text-lg md:text-xl leading-7 md:mb-3 mb-1 text-black font-medium">
          <span className="font-bold text-DarkPurple">Call us:</span> 
          <a href="tel:+2348055311813" className="ml-3 hover:underline hover:underline-offset-8 hover:font-bold hover:tracking-widest hover:text-DarkPurple font-normal" >+2348055311813</a>
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl leading-7 md:mb-3 mb-1 text-black font-medium">
          <span className="font-bold text-DarkPurple">Email us: </span>
          <a href="mailto:info@gideonyouth.org" className="ml-3 hover:underline hover:underline-offset-8 hover:font-bold hover:tracking-widest hover:text-DarkPurple font-normal">info@gideonyouth.org</a>
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl leading-7 mb-8 text-DarkPurple font-medium">
          Or fill out the contact form below: <br />
          
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className=" divide-y-2 divide-DarkPurple w-full"
        >
          <Form />
        </motion.div>
      </div>
      </div>
    </Element>
  );
};

export default Contact;
