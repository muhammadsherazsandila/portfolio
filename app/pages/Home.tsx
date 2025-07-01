import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Summary from '../components/Summary'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Summary />
            <Footer />
        </>
    )
}

export default Home