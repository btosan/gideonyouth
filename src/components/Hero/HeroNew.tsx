import React from 'react'
import Link from "next/link";
import Image from "next/image";
// import Gideon from "../../assets/gyf111.PNG";


const HeroNew = () => {
  return (
    <section
        id='home' 
        className="lg:shadow-lg lg:shadow-DarkTeal min-h-screen relative z-10 overflow-hidden bg-DarkPurple pb-4 pt-28  md:pb-16 lg:pb-4 md:pt-[180px] lg:pt-24"
    >
    <div className="font-sans">
      <div className="grid lg:grid-cols-2 items-center lg:gap-y-6">
        <div className=" max-lg:order-1 lg:pl-32 pl-0 max-lg:text-center sm:p-12 p-4 flex flex-col w-full items-center lg:items-start">
          <h1 className="px-4 lg:px-0 text-center lg:text-left text-white lg:text-6xl md:text-5xl text-4xl font-bold leading-tight tracking-wide mb-2 ">Inspiring greatness</h1>
          
          <p className="px-4 lg:px-0 text-white w-full lg:w-[90%] lg:items-start text-center lg:text-left mt-6 mb-12 text-xl md:text-2xl leading-relaxed tracking-widest">We empower disadvantaged young students to achieve their full potential.</p>
          <div className=" pb-5 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:gap-8 md:gap-6 gap-0">
                  <Link
                    href="/contact"
                    className="md:rounded-sm  border border-x-gray lg:border-solid bg-DarkPurple hover:bg-white hover:text-Teal text-white md:px-8 px-12 py-4 text-base font-semibold duration-300 ease-in-out hover:bg-primary/80 dark:text-black bg-primary uppercase"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/about"
                    className="hidden md:inline-block rounded-sm md:px-8 px-12 py-4 bg-[#f1f1f1] text-black hover:bg-Teal/90 hover:text-white hover:border hover:border-blue-50 uppercase"
                  >
                    About Us
                  </Link>
          </div>
        </div>

        <div className="lg:h-[600px] h-[400px] flex items-center ">
          {/* <Image height={500} width={500} src={Gideon} alt='Gideon Youth Foundation' className="w-full h-full object-cover lg:rounded-full rounded-none" /> */}
        </div>
      </div>
    </div>
        
    </section>
  )
}

export default HeroNew