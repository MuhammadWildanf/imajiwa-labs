import Image from "next/image";
import Hero from "./Home/Hero";
import About from "./Home/About";
import Project from "./Home/Project";
import Process from "./Home/Process";
import Team from "./Home/Team";
import Blog from "./Home/Blog";
import Contact from "./Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Process />
      <Team />
      <Contact />
      <Blog />
    </div>
  );
}
