import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Summary from "../components/Summary";
import Certifications from "../components/Certifications";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Summary />
      <Footer />
    </>
  );
}

export default Home;
