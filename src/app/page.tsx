import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="container-x">
          <hr className="chrome-line" />
        </div>
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
