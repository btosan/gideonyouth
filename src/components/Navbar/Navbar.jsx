'use client'

import React, { useEffect, useState, useRef } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import Logo from '../../assets/gyflogo2.png';
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);


  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
    textDecoration: 'underline',
  };
// shadow
  return (
    <div
      className={`${
        active ? "shadow-md bg-DarkPurple/90 text-white py-3" : "py-3 bg-DarkPurple/10 text-white/90"
      } fixed w-full left-0 top-0 z-50 px-0  `}
    >
      <div>
        <div
          className={`${
            active ? " relative py-2 md:py-4 transition-all duration-300 px-4 md:px-16" : "py-4"
          }   w-full flex items-center justify-between px-0 md:px-2 lg:px-4`}
        >
          {/* <div className="flex items-center gap-4"> */}


            <a href='/#' className="md:pl-8 lg:pl-4 pl-5 flex items-center justify-center gap-2 lg:gap-3 tracking-wide lg:tracking-tight font-medium">
              <Image src={Logo} className="md:h-10 md:w-10 w-8 h-8" alt="Gideon Youth Foundation" />
              <span className={`${active ? 'text-white hidden md:flex' : ' text-white/90'} text-lg md:text-2xl flex items-start flex-wrap lg:flex-nowrap`}>
                Gideon Youth Foundation
              </span>
            </a>


          <div className={`${active ? 'text-HummingBird ': 'text-white'} lg:z-50 lg:flex items-center justify-center hidden text-lg uppercase font-light `}>
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>

          <div className="pr-5 lg:hidden">
            <HiMenuAlt1
              className={`${active ? "text-white" : "text-white/90" } text-3xl lg:hidden cursor-pointer rotate-180`}
              onClick={() => setToggle(true)}
            />
          </div>
          
          {toggle && (
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed w-full h-[90vh] top-0 right-0 z-20 bg-DarkPurple text-white flex flex-col justify-center items-center shadow-lg gap-8 py-24"
            > 
              <div className="flex flex-col gap-2 items-center justify-center lg:hidden pb-8 text-HummingBird">
                <Image src={Logo} className="md:h-8 md:w-8 w-6 h-6" alt="Gideon Youth Foundation" />
                <h2 className="tracking-widest text-white text-lg">Gideon Youth Foundation</h2>
                <p className="italic text-sm text-HummingBird">Empowering one child at a time!</p>
              </div>
              
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-8 text-3xl cursor-pointer "
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
