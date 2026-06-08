import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'

// ✅ Resume file path (public folder me rakho)
const RESUME_URL = '/resume/Abhimanyu_Resume.pdf'

const NAV_LINKS = [
  { label: 'About',         href: '#about'          },
  { label: 'Skills',        href: '#skills'         },
  { label: 'Projects',      href: '#projects'       },
  { label: 'Education',     href: '#education'      },
  { label: 'Certificates',  href: '#certifications' },
  { label: 'Contact',       href: '#contact'        },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const id  = NAV_LINKS[i].href.replace('#', '')
        const el  = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveLink(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothScroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/90 dark:bg-dark-200/90 backdrop-blur-lg shadow-lg shadow-black/5'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => smoothScroll(e, '#home')}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500
                           to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="font-bold text-gray-800 dark:text-white hidden sm:block">
              Abhimanyu<span className="gradient-text">.</span>
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeLink === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => smoothScroll(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                    }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2">

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center
                         bg-gray-100 dark:bg-white/10
                         hover:bg-gray-200 dark:hover:bg-white/20
                         text-gray-600 dark:text-gray-300 transition-all"
            >
              {darkMode
                ? <FiSun  className="w-4 h-4 text-yellow-400" />
                : <FiMoon className="w-4 h-4" />
              }
            </button>

            {/* ✅ Download Resume — Desktop */}
            <a
              href={RESUME_URL}
              download="Abhimanyu_Resume.pdf"
              className="hidden md:flex items-center gap-2 btn-primary text-sm py-2 px-4"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                         bg-gray-100 dark:bg-white/10
                         hover:bg-gray-200 dark:hover:bg-white/20
                         text-gray-700 dark:text-gray-300 transition-all"
            >
              {menuOpen
                ? <FiX    className="w-5 h-5" />
                : <FiMenu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white/95 dark:bg-dark-200/95 backdrop-blur-lg
                        border-t border-gray-100 dark:border-white/10
                        px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeLink === id
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl
                            font-medium transition-colors duration-200
                  ${isActive
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
              >
                {link.label}
              </a>
            )
          })}

          {/* ✅ Download Resume — Mobile */}
          <div className="pt-2">
            <a
              href={RESUME_URL}
              download="Abhimanyu_Resume.pdf"
              className="btn-primary w-full justify-center flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}