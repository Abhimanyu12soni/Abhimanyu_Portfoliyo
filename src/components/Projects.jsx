import { useState } from 'react'

// ── Project Data ────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Bean & Bloom Coffee',
    subtitle: 'Coffee Shop Website',
    description:
      'A beautifully designed, fully responsive coffee shop website featuring an elegant UI with smooth animations, interactive menu sections, and a modern aesthetic that captures the warmth of a premium coffee experience.',
    longDescription:
      'Built from scratch using React and Tailwind CSS, this project showcases a complete coffee brand experience — from a stunning hero section with parallax effects to a detailed menu with category filters, an about section with the brand story, customer testimonials carousel, and a contact form. The design focuses on warm tones, elegant typography, and seamless user experience across all devices.',
    image: '/projects/bean-bloom-coffee.png',
    tags: ['React.js', 'Tailwind CSS', 'Responsive Design', 'CSS Animations', 'Vite'],
    category: 'frontend',
    features: [
      'Fully responsive design for all screen sizes',
      'Interactive menu with category filtering',
      'Smooth scroll animations & transitions',
      'Customer testimonials carousel',
      'Contact form with validation',
      'Elegant dark/warm color theme',
    ],
    liveUrl: 'https://bean-bloom-coffee.vercel.app',
    githubUrl: 'https://github.com/yourusername/bean-bloom-coffee',
    status: 'completed',
    color: 'amber',
  },
  {
    id: 2,
    title: 'Voice Cloning App',
    subtitle: 'AI-Powered Voice Cloning & Translation',
    description:
      'An AI-powered voice cloning web application that clones voices using XTTS v2, transcribes speech with OpenAI Whisper, translates using Google Gemini API, and generates lip-synced video output — all through a clean web interface.',
    longDescription:
      'This full-stack application combines multiple AI technologies to deliver an end-to-end voice cloning pipeline. Users upload an audio sample, the app transcribes it using OpenAI Whisper, translates the text via Google Gemini API, and then generates cloned speech using Coqui XTTS v2. Audio is processed with pydub & FFmpeg, and lip-synced video is generated using OpenCV & Pillow. The Flask backend handles all AI processing while the frontend provides an intuitive interface built with vanilla HTML, CSS & JavaScript.',
    image: '/projects/voice-cloning-app.png',
    tags: [
      'Flask',
      'Python',
      'XTTS v2 (Coqui TTS)',
      'OpenAI Whisper',
      'Google Gemini API',
      'pydub',
      'FFmpeg',
      'OpenCV',
      'Pillow',
      'HTML/CSS/JS',
    ],
    category: 'fullstack',
    features: [
      'Voice cloning using XTTS v2 (Coqui TTS)',
      'Speech-to-Text transcription via OpenAI Whisper',
      'Multi-language translation using Google Gemini API',
      'Audio processing with pydub & FFmpeg',
      'Lip-synced video generation using OpenCV & Pillow',
      'Clean & intuitive web interface (HTML/CSS/JS)',
      'Flask backend handling all AI pipelines',
      'Audio file upload with real-time progress',
    ],
    liveUrl: 'https://voice-clone-app.vercel.app',
    githubUrl: 'https://github.com/yourusername/voice-cloning-app',
    status: 'completed',
    color: 'purple',
  },
]

const CATEGORIES = [
  { key: 'all',       label: 'All Projects' },
  { key: 'frontend',  label: 'Frontend'     },
  { key: 'fullstack', label: 'Full Stack'   },
]

// ── Color Maps ──────────────────────────────────────────────────
const STATUS_STYLE = {
  completed:
    'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  inprogress:
    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
}

const ACCENT = {
  amber: {
    border:   'border-amber-400',
    bg:       'bg-amber-50 dark:bg-amber-900/20',
    text:     'text-amber-600 dark:text-amber-400',
    hover:    'hover:bg-amber-500',
    gradient: 'from-amber-500 to-orange-500',
  },
  purple: {
    border:   'border-purple-400',
    bg:       'bg-purple-50 dark:bg-purple-900/20',
    text:     'text-purple-600 dark:text-purple-400',
    hover:    'hover:bg-purple-500',
    gradient: 'from-purple-500 to-indigo-500',
  },
}

// ── Tech Stack Icons Mapping ────────────────────────────────────
const TECH_ICONS = {
  'Flask':               '🐍',
  'Python':              '🐍',
  'XTTS v2 (Coqui TTS)': '🗣️',
  'OpenAI Whisper':      '👂',
  'Google Gemini API':   '🌐',
  'pydub':               '🎵',
  'FFmpeg':              '🎞️',
  'OpenCV':              '👁️',
  'Pillow':              '🖼️',
  'HTML/CSS/JS':         '💻',
  'React.js':            '⚛️',
  'Tailwind CSS':        '🎨',
  'Responsive Design':   '📱',
  'CSS Animations':      '✨',
  'Vite':                '⚡',
}

// ── Sub-components ──────────────────────────────────────────────

function ProjectCard({ project, onSelect }) {
  const accent = ACCENT[project.color]

  return (
    <div
      className="glass-card overflow-hidden group hover:shadow-xl
                 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-10`}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105
                     transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full flex items-center justify-center ${accent.bg}">
                <span class="text-5xl">${
                  project.color === 'amber' ? '☕' : '🎙️'
                }</span>
              </div>`
          }}
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold
                        ${STATUS_STYLE[project.status]}`}
          >
            {project.status === 'completed'
              ? '✅ Completed'
              : '🚧 In Progress'}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold
                        ${accent.bg} ${accent.text}`}
          >
            {project.category === 'fullstack'
              ? '🔗 Full Stack'
              : '🎨 Frontend'}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-black/50 opacity-0
                     group-hover:opacity-100 transition-opacity duration-300
                     flex items-center justify-center gap-3"
        >
          <span
            className="px-4 py-2 bg-white rounded-lg text-sm font-semibold
                       text-gray-800 shadow-lg"
          >
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p
          className={`text-xs font-semibold uppercase tracking-wider mb-1 ${accent.text}`}
        >
          {project.subtitle}
        </p>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-medium rounded-md
                         bg-gray-100 dark:bg-gray-700/50
                         text-gray-600 dark:text-gray-300"
            >
              {TECH_ICONS[tag] ? `${TECH_ICONS[tag]} ` : ''}
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="px-2 py-0.5 text-xs font-medium rounded-md
                         bg-gray-100 dark:bg-gray-700/50
                         text-gray-400 dark:text-gray-500"
            >
              +{project.tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  if (!project) return null
  const accent = ACCENT[project.color]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl
                   max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className={`p-6 border-b border-gray-200 dark:border-gray-700
                      bg-gradient-to-r ${accent.gradient} bg-opacity-5`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-1 ${accent.text}`}
              >
                {project.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <span
                className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs
                            font-semibold ${STATUS_STYLE[project.status]}`}
              >
                {project.status === 'completed'
                  ? '✅ Completed'
                  : '🚧 In Progress'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center
                         bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
                         dark:hover:bg-gray-700 transition-colors text-gray-500"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
              📋 About This Project
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
              ✨ Key Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`mt-0.5 text-sm ${accent.text}`}>●</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
              🛠️ Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium
                              ${accent.bg} ${accent.text} border border-current/20`}
                >
                  {TECH_ICONS[tag] ? `${TECH_ICONS[tag]} ` : '🔧 '}
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Info — Only for Voice Cloning */}
          {project.id === 2 && (
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                🏗️ Architecture Overview
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Backend',          value: 'Flask (Python 3.10)', icon: '🐍' },
                  { label: 'Voice Cloning',    value: 'XTTS v2 (Coqui TTS)', icon: '🗣️' },
                  { label: 'Speech-to-Text',   value: 'OpenAI Whisper',      icon: '👂' },
                  { label: 'Translation',      value: 'Google Gemini API',   icon: '🌐' },
                  { label: 'Audio Processing', value: 'pydub + FFmpeg',      icon: '🎵' },
                  { label: 'Video Generation', value: 'OpenCV + Pillow',     icon: '🎬' },
                  { label: 'Frontend',         value: 'HTML / CSS / JS',     icon: '💻' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/10
                               border border-purple-100 dark:border-purple-800/30"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <p className="text-xs text-purple-500 dark:text-purple-400
                                  font-semibold uppercase tracking-wide mt-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 py-3 rounded-xl text-center text-sm font-semibold
                          text-white bg-gradient-to-r ${accent.gradient}
                          hover:opacity-90 transition-opacity shadow-lg`}
            >
              🚀 Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl text-center text-sm font-semibold
                         border-2 border-gray-300 dark:border-gray-600
                         text-gray-700 dark:text-gray-300
                         hover:bg-gray-50 dark:hover:bg-gray-800
                         transition-colors"
            >
              💻 GitHub Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────────
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-300">
      <div className="section-container">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p
            className="text-primary-500 font-mono text-sm font-semibold
                       tracking-widest uppercase mb-2"
          >
            My Work
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
            Here are some projects I've built to practice and showcase my
            development skills — from frontend websites to AI-powered
            applications.
          </p>
        </div>

        {/* ── Category Filter ── */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-white/5
                       shadow-sm gap-1"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold
                            transition-all duration-200
                  ${
                    activeCategory === cat.key
                      ? 'bg-primary-500 text-white shadow'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Project Cards Grid ── */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* ── Empty State ── */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-12">
          <div className="glass-card inline-block px-8 py-5">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              🚀 More projects coming soon as I continue learning!
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         text-sm font-semibold bg-gray-900 dark:bg-white
                         text-white dark:text-gray-900 hover:opacity-90
                         transition-opacity"
            >
              💻 View All on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ── Project Detail Modal ── */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}