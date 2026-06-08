import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
// import Certifications from './components/Certifications'
import SelfLearning from './components/SelfLearning'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      if (totalScrollable > 0) {
        setScrollProgress((currentScroll / totalScrollable) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors duration-300">

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-[100] transition-all duration-75
                   bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* All Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        {/* <Certifications /> */}
        <SelfLearning />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}