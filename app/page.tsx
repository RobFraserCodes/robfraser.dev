import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
