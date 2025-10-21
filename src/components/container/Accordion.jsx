'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export default function AccordionCustom() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="text-black">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          What is Gideon Youth Foundation's mission?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Gideon Youth Foundation's mission is to empower Nigerian youth through education, leadership development, and community engagement, ultimately contributing to a brighter future for Nigeria."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          How can I partner with Gideon Youth Foundation?

        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"We welcome partnerships with organizations, businesses, and individuals who share our vision. Partnerships can take various forms, such as financial support, volunteerism, or in-kind donations."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          How can I volunteer with Gideon Youth Foundation?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"We welcome volunteers who share our passion for youth development. Please visit our website or contact us directly to learn about current volunteer opportunities. "}
          <br />
          <br />
          <div>
          Call us: 
          <a href="" className="ml-3 hover:underline hover:underline-offset-8 font-normal" >+2348055311813</a> <br />
          Email us: 
          <a href="mailto:info@gideonyouth.org" className="ml-3 hover:underline hover:underline-offset-8 font-normal">info@gideonyouth.org</a>
          </div>
          <br />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text- text-DarkPurple`}
        >
          How can I donate to Gideon Youth Foundation?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"You can donate online through our website or by contacting our office. Your generous contributions will directly impact the lives of Nigerian youth."}
          <br />
          <br />
          <div>
          Call us: 
          <a href="" className="ml-3 hover:underline hover:underline-offset-8 font-normal" >+2348055311813</a> <br />
          Email us: 
          <a href="mailto:info@gideonyouth.org" className="ml-3 hover:underline hover:underline-offset-8 font-normal">info@gideonyouth.org</a>
          </div>
          <br />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          What specific programs does Gideon Youth Foundation offer?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          <p className="mb-2">Our programs include:</p>
          <ul className="list-disc text-black mx-3 px-3">
            <li className="my-1">
            School-based drug and substance prevention
            </li>
            <li className="my-1">
            Sex and sexuality education
            </li>
            <li className="my-1">
            Scholarships for academically gifted students
            </li>
            <li className="my-1">
            Leadership training
            </li>
            <li className="my-1">
            Classroom renovations
            </li>
            <li className="my-1">
            Textbook and uniform provision
            </li>
            <li className="my-1">
            Education beyond the classroom
            </li>

          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors ${
            open === 6 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          How does Gideon Youth Foundation select scholarship recipients?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Scholarship recipients are selected based on academic merit, financial need, and community involvement. A rigorous selection process is followed to ensure that the most deserving students receive support."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition-colors ${
            open === 7 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
           How does Gideon Youth Foundation ensure the effectiveness of its programs?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"We evaluate the impact of our programs through regular monitoring and evaluation. We use data-driven insights to improve our programs and maximize their effectiveness."}
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} icon={<Icon id={8} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`border-b-0 transition-colors ${
            open === 8 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          What is the geographic scope of Gideon Youth Foundation's work?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Currently, our primary focus is on Lagos State, Nigeria. However, we aspire to expand our reach to other states in the future."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className={`border-b-0 transition-colors ${
            open === 9 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          How has Gideon Youth Foundation impacted the lives of Nigerian youth?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Gideon Youth Foundation has positively impacted the lives of Nigerian youth by providing them with quality education, leadership skills, and opportunities for personal growth."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className={`border-b-0 transition-colors ${
            open === 10 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          Does Gideon Youth Foundation have a physical office?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Yes, we have a physical office located at Redemption Camp, House 8, El-Shaddai Crescent, Estate 9, Ogun State."}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} icon={<Icon id={11} open={open} />} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className={`border-b-0 transition-colors ${
            open === 11 ? "text-DarkPurple hover:!text-black" : "text-DarkTeal"
          } text-sm md:text-lg lg:text-xl text-DarkPurple`}
        >
          Is Gideon Youth Foundation registered with the appropriate government agencies?
        </ AccordionHeader>
        <AccordionBody className="pt-0 text-black text-sm md:text-lg font-normal">
          {"Yes, Gideon Youth Foundation is duly registered with the relevant government agencies in Nigeria."}
        </AccordionBody>
      </Accordion>
    </div>
    </>
  );
}

// import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
// import { motion, AnimatePresence } from "framer-motion";
// import { answers } from "../../Data";


// const Accordion = ({ id, title }) => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const handleClick = (id) => {
//     setActiveIndex(id === activeIndex ? null : id);
//   };
//   return (
//     <div className="pb-8">
//       <div className="flex items-center justify-between">
//         <div className="sm:text-xl text-base font-bold text-black">{title}</div>
//         <BsChevronDown
//           className={`${
//             id === activeIndex ? "rotate-180" : "rotate-0"
//           } cursor-pointer transition-all duration-300 text-Teal`}
//           onClick={() => handleClick(id)}
//         />
//       </div>
//       <AnimatePresence>
//         {id === activeIndex && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             transition={{ duration: 0.3 }}
//             style={{ overflow: "hidden" }}
//             className="pt-4"
//           >
//             <p className="text-sm leading-7 text-gray">
//             {answers.map((answer) => {
//             return <div key={answer.id}>
//                 {answer}
//             </div>
            
//           })}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Accordion;
