import { useState, useEffect } from 'react'
import {
  FiGithub, FiLinkedin, FiMail,
  FiPhone, FiMapPin, FiArrowDown,
} from 'react-icons/fi'

const ROLES = [
  'Aspiring Frontend Developer',
  'B.Tech CSE Student',
  'React & Tailwind Practitioner',
  'UI/UX Explorer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex,  setRoleIndex]  = useState(0)
  const [charIndex,  setCharIndex]  = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [deleting,   setDeleting]   = useState(false)

  // Typewriter
  useEffect(() => {
    const fullText = ROLES[roleIndex]
    let timeout

    if (!deleting && charIndex <= fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 100)
    } else if (!deleting && charIndex > fullText.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 55)
    } else if (deleting && charIndex < 0) {
      setDeleting(false)
      setRoleIndex((r) => (r + 1) % ROLES.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const scrollDown = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 overflow-hidden bg-white dark:bg-dark-200 pt-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full
                      bg-primary-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full
                      bg-purple-500/10 blur-3xl animate-pulse-slow"
           style={{ animationDelay: '1.5s' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full section-container flex flex-col
                      items-center text-center gap-6">

        {/* Status Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full
                        bg-green-50 dark:bg-green-900/20
                        border border-green-200 dark:border-green-800">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 dark:text-green-400 text-sm font-medium">
            Open to Internship Opportunities
          </span>
        </div>

        {/* Avatar */}
        <div className="relative animate-float">
          <div className="w-32 h-32 rounded-full
                          bg-gradient-to-br from-primary-500 to-purple-600
                          flex items-center justify-center shadow-2xl
                          shadow-primary-500/30">
            <span className="text-5xl font-black text-white select-none">AS</span>
          </div>
          {/* Animated ring */}
          <div className="absolute inset-0 rounded-full border-4
                          border-primary-400/40 animate-ping"
               style={{ animationDuration: '2.5s' }} />
        </div>

        {/* Name */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-gray-800 dark:text-white">Abhimanyu</span>
            <span className="gradient-text">Soni</span>
          </h1>
        </div>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center">
          <span className="text-lg sm:text-2xl font-mono font-semibold
                           text-primary-500 dark:text-primary-400">
            {displayed}
            <span className="inline-block w-[2px] h-6 bg-primary-500
                             ml-0.5 animate-pulse align-middle" />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-xl text-gray-600 dark:text-gray-400
                      text-base sm:text-lg leading-relaxed">
          Passionate about frontend web development and modern UI/UX practices.
          Seeking an internship to learn industry-level web development under
          experienced professionals.
        </p>

        {/* Contact Info Chips */}
        {/* <div className="flex flex-wrap justify-center gap-2">
          {[
            {
              icon: <FiPhone className="w-3.5 h-3.5" />,
              text: '+91-6378841247',
              href: 'tel:+916378841247',
            },
            {
              icon: <FiMail className="w-3.5 h-3.5" />,
              text: 'Soniabhimanyu931@gmail.com',
              href: 'mailto:Soniabhimanyu931@gmail.com',
            },
            {
              icon: <FiMapPin className="w-3.5 h-3.5" />,
              text: 'Jaipur, Rajasthan',
              href: null,
            },
          ].map(({ icon, text, href }) => (
            <a
              key={text}
              href={href || undefined}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                         text-xs sm:text-sm font-medium
                         bg-gray-100 dark:bg-white/5
                         text-gray-600 dark:text-gray-400
                         hover:bg-primary-50 dark:hover:bg-primary-900/20
                         hover:text-primary-600 dark:hover:text-primary-400
                         border border-gray-200 dark:border-white/10
                         transition-all duration-200"
            >
              {icon} {text}
            </a>
          ))}
        </div> */}

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            <FiMail className="w-4 h-4" />
            Get In Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            View Projects
          </a>
        </div>

        {/* Social Links */}
        {/* <div className="flex items-center gap-3">
          {[
            {
              icon: <FiGithub className="w-5 h-5" />,
              href: 'https://github.com',
              label: 'GitHub',
            },
            {
              icon: <FiLinkedin className="w-5 h-5" />,
              href: 'https://linkedin.com/in/',
              label: 'LinkedIn',
            },
            {
              icon: <FiMail className="w-5 h-5" />,
              href: 'mailto:Soniabhimanyu931@gmail.com',
              label: 'Email',
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl flex items-center justify-center
                         bg-gray-100 dark:bg-white/5
                         text-gray-600 dark:text-gray-400
                         hover:bg-primary-500 hover:text-white
                         dark:hover:bg-primary-500 dark:hover:text-white
                         border border-gray-200 dark:border-white/10
                         hover:border-primary-500
                         hover:-translate-y-1 hover:shadow-lg
                         hover:shadow-primary-500/30
                         transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div> */}

        {/* Scroll Down */}
        <button
          onClick={scrollDown}
          aria-label="Scroll down"
          className="mt-4 flex flex-col items-center gap-1
                     text-gray-400 dark:text-gray-600
                     hover:text-primary-500 transition-colors animate-bounce"
        >
          <span className="text-xs">Scroll Down</span>
          <FiArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}