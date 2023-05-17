import React,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './Components/About'
import Footer from './components/Footer'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

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
