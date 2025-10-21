"use client"

import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import Image from 'next/image';

const Cause = ({ imgCause, category, title, participants }) => {
  return (
    <div className="p-4 shadow-sm lg:min-w-[20rem] min-w-[15rem] md:border-4 border-2 hover:text-black text-white border-gray hover:border-HummingBird bg-DarkPurple hover:bg-[#f0f1f1] hover:cursor-pointer rounded-lg">
      <Image 
        src={imgCause} 
        alt="Gideon Youth" 
        height={500} 
        width={500} 
        className="h-48 lg:h-52 w-full object-cover" 
      />
      <div className="mt-2 text-xs ">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <div className="bg-HummingBird p-1 rounded-full">
            <AiOutlineUser className="" />
          </div>
          <div className="text-sm font-normal ">About {participants} participants</div>
        </div>
        {/* <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineStar className="text-yellow" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">${price}</div> */}
      </div>
    </div>
  );
};

export default Cause;
