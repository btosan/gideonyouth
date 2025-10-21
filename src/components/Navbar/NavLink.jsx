'use client'
import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-scroll";


const NavLink = ({ href, link }) => {


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


  return (
    <li className="list-none cursor-pointer mr-8 hover:underline underline-offset-[12px] font-black">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className={`${activeSection ? 'text-black ' : 'text-white'} font-bold transition-all duration-300`}

      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
