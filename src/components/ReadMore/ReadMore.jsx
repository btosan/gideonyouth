"use client"
import React, { useState }  from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { ChevronUpIcon } from '@heroicons/react/24/solid'


const ReadMore = ({ children, descriptionLength }) => {

  const fullText = children;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const ShowMore = () => {
    return (
      <div className='flex py-1 text-primary3 hover:text-purple dark:hover:text-secondary3 hover:cursor-pointer underline underline-offset-8 decoration-dotted text-sm'>
        {/* <span className='pr-1'>Read more</span>       */}
        <span className="text-sm font-normal">
          Show more
        </span>
  
        <ChevronDownIcon className='h-4 font-black mt-1'/>
      </div>
    )
  }
  
  const ShowLess = () => {
    return (
      <div className='mt-5 flex items-center justify-center  py-1 hover:text-purple dark:hover:text-secondary3 hover:cursor-pointer underline underline-offset-8 decoration-dotted text-sm'>
        <span className=' '>Show less</span>
        <ChevronUpIcon className='h-4 ml-2 font-black'/>
      </div>
    )
  }



  return (
    <>
      <div className='w-full text-sm  text-center' suppressHydrationWarning={true} >
      {isExpanded ? fullText : `${fullText.toString().slice(0, descriptionLength)}`}
        <span onClick={toggleText} className=' py-2 '>
            {isExpanded ? (<ShowLess/>) : ( <ShowMore />)  }
        </span>
      </div>
    </>
  )
}

export default ReadMore
