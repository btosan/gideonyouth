'use client'
import React from 'react'
import Form from './Form'

const ContactUs = () => {
  return (
    <div className='relative bg-HummingBird py-16 md:py-16 lg:py-24'>
    <div className='bg-DarkPurple h-24 absolute top-0 w-full'></div>
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
            <div className="mb-8 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="mb-2 text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-Teal">
                    Contact Us
                </p>
                <h2
                    className=" mb-4 font-bold tracking-tight text-DarkPurple text-3xl sm:text-5xl">
                    Get In Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-black w-w-[90%] md:w-[70%] lg:w-[60%] ">Call us, send us an email, or fill the form below, and we will get back to you as soon as possible.
                </p>
            </div>
        </div>
        <div className="flex items-stretch justify-center ">
            <div className="grid md:grid-cols-2 ">
                <div className="h-full pr-6 mt-8 lg:mt-16 ">
                    <ul className="mb-6 md:mb-0 px-4 md:px-0">
                        <li className="flex mb-2 md:mb-5 lg:mb-8">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-Teal text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 md:mb-4 text-lg md:text lg:text-2xl uppercase font-semibold leading-6 text-DarkPurple ">Contact
                                </h3>
                                <a href='tel:+2348055311813' className="text-black mb-2 text-lg md:text lg:text-2xl">Call: +2348055311813</a> <br />
                                <a href='mailto:info@gideonyouth.org' className="text-black mb-2 text-lg md:text lg:text-2xl">Mail: info@gideonyouth.org</a>
                            </div>
                        </li>
                        <li className="flex mb-2 md:mb-5 lg:mb-8">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-Teal text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 md:mb-4 text-lg md:text lg:text-2xl uppercase font-semibold leading-6 text-DarkPurple ">Our Address
                                </h3>
                                <p className="text-black mb-2 text-lg md:text lg:text-2xl"> House 8, Estate 9, </p>
                                <p className="text-black mb-2 text-lg md:text lg:text-2xl">Redemption Camp, Ogun State.</p>
                            </div>
                        </li>
                        
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-Teal text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 md:mb-4 text-lg md:text lg:text-2xl uppercase font-semibold leading-6 text-DarkPurple ">Working
                                    hours</h3>
                                <p className="text-black mb-2 text-lg md:text lg:text-2xl">Monday — Friday: 09:00 — 17:00</p>
                                {/* <p className="text-black">Saturday &amp; Sunday: 08:00 - 12:00</p> */}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12 -mb-24 md:-mb-28 lg:-mb-32" id="form">
                    <h2 className="mb-4 md:text-xl text-lg font-medium text-DarkPurple ">Ready to Get Started?</h2>
                    <Form />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs