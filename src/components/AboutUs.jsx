'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import Image1 from '../../public/assets/images/gyf9.jpg'
import Image2 from '../../public/assets/images/who-we-are.jpg'


const AboutUs = () => {
  return (
    <div>

    < div className="py-16 md:py-24 lg:py-32 relative bg-DarkPurple">
    {/* <Link href='/' className='px-8 w-full mx-auto flex items-center justify-center gap-2 tracking-widest hover:text-HummingBird'>
              <ArrowLeftIcon className='h-4 w-4'/>
              <small>Back to homepage</small>
            </Link> */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 pt-16 ">
                <div className="">
                    <Image src={Image1} 
                        alt="Gideon Youth Foundation"
                        height={500}
                        width={500}
                        className="rounded-3xl hover:rounded-none max-lg:mx-auto object-cover hover:scale-105 lg:hover:scale-150 touch-pinch-zoom "
                    />
                </div>
                <div className="lg:pl-[100px] flex items-center">
                    <div className="data w-full">
                        <h2
                            className=" font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center relative">
                            About Us 
                        </h2>
                        <p className=" md:text-lg text-sm leading-8 tracking-wider text-white max-lg:text-center max-w-2xl mx-auto">
                            {"Gideon Youth Foundation, a non-profit organization based in Lagos, is committed to revitalizing Nigeria's public education system. Through comprehensive programs addressing drug prevention, sexual health, academic excellence, leadership development, and social empowerment, we empower disadvantaged youth to break the cycle of poverty and exclusion."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* -mb */}
    <div className="py-16 lg:py-24 relative bg-DarkPurple text-white border-t-[6px] lg:border-t-[8px] border-DarkTeal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9  ">

                <div className="lg:pr-24 flex items-center">
                    <div className="px-4 lg:px-0 w-full">
                        <Image src={Image2} 
                            alt="Gideon Youth Foundation"
                            height={500}
                            width={500}
                            className="block lg:hidden rounded-3xl hover:rounded-none mb-9 mx-auto object-cover hover:scale-105 touch-pinch-zoom"
                        />
                        <h2 className=" font-bold text-4xl lg:text-5xl text-HummingBird mb-9 max-lg:text-center">
                        Our Mission
                        </h2>
                        <ul className='px-4 list-disc '>
                        <li className="font-normal md:text-lg text-sm leading-8 max-lg:text-center max-w-2xl mx-auto my-2">
                            {"We inspire young minds by teaching them about personal effectiveness and leadership."}
                        </li>
                        <li className="font-normal text-sm md:text-lg leading-8 max-lg:text-center max-w-2xl mx-auto my-2">
                            {"We create awareness and strategies to avoid the pitfalls of drug abuse and premature sexual activity."}
                        </li>
                        <li className="font-normal text-sm md:text-lg leading-8 max-lg:text-center max-w-2xl mx-auto my-2">
                            {"We create an atmosphere of dignity for students to learn by providing furniture and refurbishing classrooms."}
                        </li>
                        <li className="font-normal text-sm md:text-lg leading-8 max-lg:text-center max-w-2xl mx-auto my-2">
                            {"We are committed to ensuring that deserving students from amongst our target group get the utmost support in their academic pursuits."}
                        </li>
                        <li className="font-normal text-sm md:text-lg leading-8 max-lg:text-center max-w-2xl mx-auto my-2">
                            {"We pay mandatory exam fees and offer scholarships to the most motivated students."}
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="h-[28rem] hidden lg:block ">
                    <Image src={Image2} 
                      alt="Gideon Youth Foundation"
                      height={500}
                      width={500}
                      className="hidden lg:block object-center h-full w-full rounded-3xl hover:rounded-none object-cover hover:scale-125"
                    />
                </div>
            </div>
        </div>
    </div>



    <div className=" py-8 md:py-16 bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-5 md:mb-8 rounded-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold  text-center pt-4 lg:pt-0">How we work</h2>
          </div>
    
          <div className="">
            <div className="">
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="md:text-lg text-sm leading-8 mb-8 text-center">
                      {"We target schools in our immediate vicinity and draw up a program of events which include training on personal effectiveness and development, sex education, drugs and substance abuse awareness, testimonials from people who have succeeded in spite of their circumstances and leadership training."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                 
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="md:text-lg text-sm  leading-8 mb-8 text-center">
                      {"We also provide practical aid by improving school infrastructure through refurbishment of class rooms and provision of furniture."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
    
        </div>
      </div>

      <div className="md:py-16 lg:py-20 py-12 bg-DarkPurple text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className=" text-4xl text-center  font-bold lg:mb-12 mb-10">What We Do</h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3  p-6 rounded-2xl shadow-sm md:shadow-md shadow-blue-gray-500 border-2 md:border-4 border-gray">
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <h4 className="text-xl lg:text-2xl  font-semibold mb-3 md:mb-5">Leadership Training</h4>
                            <p className="md:text-lg text-sm leading-5">
                               {"We provide young students with essential leadership training, giving them tools and skills to create their best life. Empowering young people, one child at a time."}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3  p-6 rounded-2xl shadow-sm md:shadow-md shadow-blue-gray-500 border-2 md:border-4 border-gray">
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <h4 className="text-xl lg:text-2xl  font-semibold mb-3 md:mb-5">Drug & Substance Awareness & Prevention</h4>
                            <p className="md:text-lg text-sm  leading-5">
                                {"We don't just create awareness, we furnish the children with practical strategies to avoid the pitfalls of drug."} 
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3  p-6 rounded-2xl shadow-sm md:shadow-md shadow-blue-gray-500 border-2 md:border-4 border-gray">
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <h4 className="text-xl lg:text-2xl  font-semibold mb-3 md:mb-5">Sex & Sexuality Education</h4>
                            <p className="md:text-lg text-sm leading-5">
                                {"GYF Sex And Peers program includes discussions of abstinence to help young people avoid unintended pregnancy or disease."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className=" text-4xl text-center text-black font-bold mb-12">Our impact in numbers</h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm md:shadow-md shadow-DarkPurple md:shadow-DarkPurple border md:border-2 border-[#f1f1f1]">
                    <div className="flex gap-5">
                        <div className=" text-2xl md:text-xl font-bold text-DarkPurple">
                            20,000+
                        </div>
                        <div className="flex-1">
                            <h4 className="md:text-xl text-lg text-DarkPurple font-semibold mb-2">Students Reached</h4>
                            <p className="md:text-lg text-sm text-black leading-5">
                                {"Our school-based drug and substance prevention programs have reached over 20,000 students, fostering awareness and empowering them to make informed choices."}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm md:shadow-md shadow-DarkPurple md:shadow-DarkPurple border md:border-2 border-[#f1f1f1] ">
                    <div className="flex gap-5">
                        <div className=" text-2xl md:text-xl font-bold text-DarkPurple">
                            10,000+
                        </div>
                        <div className="flex-1">
                            <h4 className="md:text-xl text-lg text-DarkPurple font-semibold mb-2">Young Leaders Trained</h4>
                            <p className="md:text-lg text-sm text-black leading-5">
                                 {" Our leadership training programs have impacted over 2,000 young individuals, equipping them with the skills and knowledge to become responsible and effective leaders."}
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm md:shadow-md shadow-DarkPurple md:shadow-DarkPurple border md:border-2 border-[#f1f1f1]">
                    <div className="flex gap-5">
                        <div className=" text-2xl md:text-xl font-bold text-DarkPurple">
                            20+
                        </div>
                        <div className="flex-1">
                            <h4 className="md:text-xl text-lg text-DarkPurple font-semibold mb-2  ">Scholarships Given</h4>
                            <p className="md:text-lg text-sm text-black leading-5">
                                {"We've provided scholarships to over 20 academically gifted students, enabling them to pursue their dreams and contribute to a brighter future. We've also registered over 60 students for WAEC, NECO, and UTME exams."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="mx-auto w-full py-12 md:py-16 bg-white text-black border-t-2 border-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-5 md:mb-8 rounded-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-DarkPurple  font-bold  text-center lg:text-start mx-auto lg:max-w-4xl max-w-full">Why we founded Gideon Youth Foundation</h2>
          </div>
    
          <div className="px-4 lg:px-0">
            <div className="">
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                    {"Gideon Youth Foundation was born out of deep compassion for the fate of the average public school student as most public schools fall short as places of learning and development."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                 
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"Overpopulated classrooms, dilapidated or non-existent infrastructure are just a few of the challenges facing our public school system."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                 
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                      {"These challenges, coupled with the socio-economic difficulties of families who are forced to use the system, lead to low morale and poor outcomes for the students. "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"It is in view of the aforementioned challenges that we have decided to step in the gap one school at a time."}
                    </p>
                  </div>
                </div>
              </div>


            </div>

          </div>
    
        </div>
      </div>


      <div className="relative bg-white text-black pb-16 md:pb-20 w-full mx-auto">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 relative">
          <div className="mb-5 md:mb-8 rounded-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-DarkPurple  font-bold  text-center lg:text-start mx-auto lg:max-w-4xl max-w-full">Background to our name, Gideon</h2>
          </div>
    
          <div className="px-4 lg:px-0">
            <div className="">
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                    {"Gideon was one of Israel’s leaders and his story is recorded in the book of Judges Chapters 6-8; he was potentially a great warrior who was said to be hiding away ‘threshing wheat in a winepress’."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                 
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"This can be interpreted to mean he was living below potential and not fulfilling purpose because a winepress, as the name suggests, is a place for processing grapes for wine and not for threshing wheat!"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                 
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                      {"He was in the wrong place using the wrong tools and probably not getting any substantial results. "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"He was said to be hiding away from the Midianites who were the oppressors of Israel at that time i.e. the state of the nation had placed him in a position of fear."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"He was forced to use the wrong tools; the state of the nation was literally robbing him of his God given potential. This is what is observed with school age children roaming the streets, especially those who are supposed to be in secondary school."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"When they are on the streets instead of in their classrooms, they are in the wrong place and potentially developing the wrong skills for a fulfilling life."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative mb-3 ">
                  <div className="max-w-max mx-auto lg:max-w-3xl">
                    <p className="md:text-lg text-sm tracking-wider  leading-8 mb-3 text-start">
                     {"It is important to note that Gideon’s story changed as soon as he assumed his God-given role and this is what we must inspire our youth to do."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href='/' className='flex items-center justify-center mx-auto w-full gap-2 tracking-widest text-DarkPurple hover:text-black  absolute bottom-8'>
              
              <ArrowLeftIcon className='h-4 w-4'/>
              <small>Back to homepage</small>
            </Link>
      </div>

                                            
    </div>
  )
}

export default AboutUs