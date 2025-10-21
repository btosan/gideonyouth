'use client'

import React, {useState} from "react";
import { motion } from "framer-motion";
import {initial, fadeInUp, stagger, fadeInThree} from "../../../animations/animations"



const Categories = ({ icon, category, more }) => {

  const [visibleMore, setVisibleMore] = useState(false)

  const showMore = () => {
    setVisibleMore(!visibleMore);
  };


  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={initial}
      viewport={{once: false}}
      whileInView={fadeInUp}
      className="flex items-center flex-col gap-4 text-xl text-black hover:text-black hover:cursor-pointer bg-white hover:bg-HummingBird shadow-md shadow-[#766083] border border-[#766083] hover:border hover:border-[#766083] p-8 rounded-md"
    >
      <div className="lg:text-6xl md:text-5xl text-4xl ">{icon}</div>
      <div className="inline-flex items-center justify-center text-center font-bold lg:text-3xl text-xl text-black ">{category}</div>

      <div className='flex items-center justify-center' >
        <p className='font-normal text-center text-lg md:'>{more}</p>
      </div>

    </motion.div>
  );
};

export default Categories;
