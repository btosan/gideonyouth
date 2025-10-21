import {
  About,
  Teacher,
  Contact,
  Causes,
} from "../components/index";
import {
  Navbar,
} from "../components/index";
import HomeHero from '../components/Hero/HomeHero'



export const metadata = {
  title: 'Gideon Youth Foundation — Education Beyond The Four Walls | Inspiring Greatness | One Child At A Time',
  description: "We help disadvantaged young people to escape a future of low self-esteem, drugs, poverty, and being excluded from society. ",
  // other metadata
};

export default function Home() {

  return (
    <main className="font-Poppins bg-Solitude">
        <Navbar />
        <HomeHero />
        <About />
        <Causes />
        <Teacher />
        <Contact />
    </main>
  )
}
