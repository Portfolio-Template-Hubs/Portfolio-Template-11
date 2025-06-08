import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Stats from './components/Stats/Stats'
import Experience from './components/Experience/Experience'
import Timeline from './components/Timeline/Timeline'
import Projects from './components/Projects/Projects'
import Testimonials from './components/Testimonials/Testimonials'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Stats />
      <Experience />
      <Timeline />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
