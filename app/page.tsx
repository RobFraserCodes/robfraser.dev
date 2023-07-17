import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  )
}
