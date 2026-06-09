import { useState } from 'react'

// ── Data ────────────────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    color: 'blue',
    skills: [
      { name: 'HTML5',       pct: 85 },
      { name: 'CSS3',        pct: 75 },
      { name: 'JavaScript',  pct: 60 },
      { name: 'Python',  pct: 55 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'purple',
    skills: [
      { name: 'React.js',        pct: 50 },
      { name: 'Tailwind CSS',    pct: 55 },
      { name: 'Bootstrap',       pct: 60 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'green',
    skills: [
      { name: 'Git & GitHub',    pct: 62 },
      { name: 'VS Code',         pct: 70 },
      // { name: 'Figma (Basic)',   pct: 45 },
    ],
  },
  {
    title: 'Other Skills',
    color: 'orange',
    skills: [
      { name: 'Wordprees CMS website',   pct: 75 },
      { name: 'REST API Integration', pct: 55 },
      { name: 'npm / Vite',          pct: 60 },
    ],
  },
]

const LEARNING_NOW  = ['Next.js', 'TypeScript']
const EAGER_LEARN   = ['Redux Toolkit', 'React Query', 'Framer Motion', 'Node.js (Basics)', 'Firebase', 'Testing (Jest)', 'GraphQL', 'Storybook']

// ✅ Har skill ki apni rating (1 se 5 ke beech)
const SOFT_SKILLS = [
  { emoji: '⚡', skill: 'Quick Learner',        rating: 5 },
  { emoji: '🎨', skill: 'UI/UX Awareness',      rating: 3 },
  { emoji: '🧩', skill: 'Problem Solving',      rating: 4 },
  { emoji: '🎯', skill: 'Attention to Detail',  rating: 4 },
  { emoji: '🔄', skill: 'Adaptability',         rating: 4 },
  { emoji: '💬', skill: 'Communication',        rating: 3 },
  { emoji: '📚', skill: 'Willingness to Learn', rating: 4 },
  { emoji: '⏰', skill: 'Time Management',      rating: 5 },
]

// ── Color maps ───────────────────────────────────────────────────
const BAR_COLOR = {
  blue:   'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-purple-600',
  green:  'from-emerald-500 to-green-600',
  orange: 'from-orange-500 to-amber-500',
}

const TITLE_COLOR = {
  blue:   'text-blue-600   dark:text-blue-400',
  purple: 'text-purple-600 dark:text-purple-400',
  green:  'text-emerald-600 dark:text-emerald-400',
  orange: 'text-orange-600 dark:text-orange-400',
}

// ── Sub-components ───────────────────────────────────────────────
function SkillBar({ name, pct, color }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
          {pct}%
        </span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700/60 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${BAR_COLOR[color]}`}
          style={{ width: `${pct}%`, transition: 'width 1s ease' }}
        />
      </div>
    </div>
  )
}

function Badges({ items, variant = 'default' }) {
  const cls = {
    default: 'skill-badge',
    yellow:
      'px-3 py-1.5 rounded-lg text-sm font-medium bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50',
    green:
      'px-3 py-1.5 rounded-lg text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50',
  }
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={cls[variant]}>
          {item}
        </span>
      ))}
    </div>
  )
}

// ── Main Component ───────────────────────────────────────────────
export default function Skills() {
  const [tab, setTab] = useState('technical')

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-200">
      <div className="section-container">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm font-semibold tracking-widest uppercase mb-2">
            What I Know
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
            Focused on building clean, responsive, and interactive web interfaces
            using modern frontend technologies.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 dark:bg-white/5 gap-1">
            {['technical', 'soft'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold capitalize
                            transition-all duration-200
                  ${tab === t
                    ? 'bg-white dark:bg-primary-600 shadow text-primary-600 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
              >
                {t} Skills
              </button>
            ))}
          </div>
        </div>

        {/* ── TECHNICAL TAB ── */}
        {tab === 'technical' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="glass-card p-6">
                  <h3
                    className={`font-bold text-sm uppercase tracking-wide mb-5 ${TITLE_COLOR[cat.color]}`}
                  >
                    {cat.title}
                  </h3>
                  {cat.skills.map((s) => (
                    <SkillBar key={s.name} {...s} color={cat.color} />
                  ))}
                </div>
              ))}
            </div>

            <div className="glass-card p-6 border-l-4 border-yellow-400">
              <div className="mb-5">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  🚀 Currently Learning
                </h3>
                <Badges items={LEARNING_NOW} variant="green" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  📚 Eager to Learn Next
                </h3>
                <Badges items={EAGER_LEARN} variant="yellow" />
              </div>
            </div>
          </div>
        )}

        {/* ── SOFT SKILLS TAB ── */}
        {tab === 'soft' && (
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* ✅ rating ko destructure kiya */}
              {SOFT_SKILLS.map(({ emoji, skill, rating }) => (
                <div
                  key={skill}
                  className="glass-card p-5 flex items-center gap-4
                             hover:shadow-lg hover:-translate-y-0.5
                             transition-all duration-200 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                                text-2xl bg-primary-50 dark:bg-primary-900/20
                                group-hover:bg-primary-500 transition-colors duration-200
                                flex-shrink-0"
                  >
                    <span>{emoji}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {skill}
                    </span>
                    {/* ✅ Individual rating dots */}
                    <div className="flex gap-1 mt-1.5">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-5 h-1.5 rounded-full transition-colors duration-300
                            ${j < rating
                              ? 'bg-primary-500'
                              : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8">
              💡 I believe great UI is built not just with code, but with empathy,
              creativity, and a passion for clean user experiences.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}