import React from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Hero from './components/sections/Hero.jsx'
import Navbar from './components/layout/Navbar.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
function App() {
  return (
    // min-h-screen ensures the black background covers the whole page
    // text-white is usually helpful if the background is black
    <div className='min-h-screen bg-black text-white selection:bg-blue-500/30'>
      <Navbar />
      
      <main>
        {/* If Navbar is fixed, Hero needs pt-16 or similar to not be covered */}
        <Hero />
        {/* You'll likely add more sections here later */}
        <About />
        {/* <Skills /> */}
        {/**Projects */}
        <Projects/>
        
        <Skills/>
        {/**Contact */}
        <Contact/>
      </main>
      
      {/* <Footer /> */}
      <Footer/>
      <SpeedInsights />
    </div>
  )
}

export default App