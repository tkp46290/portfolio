import React,{ useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

function App() {

  return (
    <div >
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
