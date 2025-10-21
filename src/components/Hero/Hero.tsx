// import { metadata } from "@/app/page";
import Link from "next/link";
import './Hero.css'
// primary
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="shadow-2xl min-h-screen relative z-10 overflow-hidden bg-DarkPurple pb-16 pt-[200px] mobile-padding md:pb-[120px] md:pt-[180px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="px-[1.5rem] md:px-0 ">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto w-full max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mx-auto mb-5 flex items-center justify-center text-center text-4xl font-bold leading-tight tracking-widest text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  Inspiring greatness,
                </h1>

                <h2 className="mx-auto mb-12 text-4xl font-bold leading-tight tracking-widest text-blue-50 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  One child at a time!
                </h2>
                <p className=" w-full md:w-[80%] lg:w-[60%] mx-auto text-white mb-12 text-2xl pfont !leading-relaxed lg:text-3xl md:text-2xl">
                We empower disadvantaged young students to achieve their full potential.
                </p>
                <div className="pb-5 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:gap-8 md:gap-6 gap-0">
                  <Link
                    href="/contact"
                    className="md:rounded-sm rounded-full border lg:border-solid bg-DarkPurple hover:bg-white hover:text-Teal text-white md:px-8 px-12 py-4 text-base font-semibold duration-300 ease-in-out hover:bg-primary/80 dark:text-black bg-primary uppercase"
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
            </div>
          </div>
        </div>
        <div className=" absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-100 animate-pulse">
          <svg
            width="900"
            height="1000"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="524"
              cy="524"
              r="360"
              fill="#311145"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="360"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="180.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="193.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#013220" />
                <stop offset="1" stopColor="#d1f1ee" stopOpacity="0.08" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#330066" stopOpacity="0" />
                <stop offset="1" stopColor="#330066" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#330066" />
                <stop offset="1" stopColor="#330066" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="md:block hidden absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100 animate-pulse">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="227"
              cy="227"
              r="180"
              fill="#311145"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#013220" />
                <stop offset="1" stopColor="#d1f1ee" stopOpacity="0.08" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#330066" stopOpacity="0" />
                <stop offset="1" stopColor="#330066" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#330066" />
                <stop offset="1" stopColor="#330066" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />

            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="-184.389"
                y1="-69.2405"
                x2="-184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#330066" stopOpacity="0" />
                <stop offset="1" stopColor="#330066" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#330066" stopOpacity="0" />
                <stop offset="1" stopColor="#330066" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#330066" />
                <stop offset="1" stopColor="#330066" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>

              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" />
              </linearGradient>
              
              <linearGradient
                id="paint1_linear_25:218"
                x1="300.389"
                y1="169.2405"
                x2="306.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#d1f1ee" stopOpacity="0" />
                <stop offset="1" stopColor="#d1f1ee" />
              </linearGradient>

            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
