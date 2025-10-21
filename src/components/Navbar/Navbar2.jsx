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

const Navbar2 = () => {

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
      } fixed w-full top-0 z-50 px-0  `}
    >
      <div>
        <div
          className={`${
            active ? " relative py-2 md:py-4 transition-all duration-300 px-4 md:px-16" : "py-4"
          }   w-full flex items-center justify-center px-0 md:px-2 lg:px-4 `}
        >


            <div className="w-full mx-auto flex items-center justify-center gap-4 lg:gap-8 tracking-wide lg:tracking-tight font-medium">
              <Link href='/'>
                <Image src={Logo} className="md:h-10 md:w-10 w-8 h-8" alt="Gideon Youth Foundation" />
              </Link>
              <Link href='/' className={`${active ? 'text-white hidden md:flex' : ' text-white/90'} text-lg md:text-2xl hidden md:flex items-start flex-wrap lg:flex-nowrap hover:text-HummingBird hover:font-bold`}>
                Gideon Youth Foundation
              </Link>
              <span className="px-1 text-2xl md:text-3xl lg:text-4xl text-HummingBird">|</span>
              <Link href='/' className="text-lg md:text-2xl hover:text-HummingBird text-white hover:font-bold">
                Home
              </Link>
              <Link href='/about' className="text-lg md:text-2xl hover:text-HummingBird text-white hover:font-bold">
                About
              </Link>
              <Link href='/contact' className="text-lg md:text-2xl hover:text-HummingBird text-white hover:font-bold">
                Contact
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
