import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const FOOTER_LINKS = [
  { label: 'About',        href: '#about'          },
  { label: 'Skills',       href: '#skills'         },
  { label: 'Projects',     href: '#projects'       },
  { label: 'Education',    href: '#education'      },
  { label: 'Contact',      href: '#contact'        },
]

const SOCIALS = [
  { icon: <FiGithub className="w-4 h-4" />,   href: 'https://github.com',   label: 'GitHub'   },
  { icon: <FiLinkedin className="w-4 h-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiMail className="w-4 h-4" />,     href: 'mailto:Soniabhimanyu931@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  const smoothScroll = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-dark-300
                       border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-12 flex flex-col items-center gap-8">

          {/* Brand */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br
                            from-primary-500 to-purple-600
                            flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-black text-lg">AS</span>
            </div>
            <p className="font-bold text-gray-800 dark:text-white">
              Abhimanyu Soni
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Aspiring Web Developer • B.Tech CSE 2026
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium
                           text-gray-500 dark:text-gray-400
                           hover:text-primary-500 dark:hover:text-primary-400
                           hover:bg-gray-50 dark:hover:bg-white/5
                           transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl flex items-center justify-center
                           bg-gray-100 dark:bg-white/5
                           text-gray-500 dark:text-gray-400
                           hover:bg-primary-500 hover:text-white
                           dark:hover:bg-primary-500 dark:hover:text-white
                           border border-gray-200 dark:border-white/10
                           transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px
                          bg-gradient-to-r from-transparent
                          via-gray-200 dark:via-white/10 to-transparent" />

          {/* Bottom row */}
          <div className="flex items-center justify-between w-full max-w-sm">
            <p className="text-xs text-gray-400 dark:text-gray-600
                          flex items-center gap-1">
              Made with{' '}
              <FiHeart className="w-3 h-3 text-red-500 fill-red-500" />{' '}
              by AS • {new Date().getFullYear()}
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg flex items-center justify-center
                         bg-gray-100 dark:bg-white/5
                         text-gray-500 dark:text-gray-400
                         hover:bg-primary-500 hover:text-white
                         transition-all duration-200"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}