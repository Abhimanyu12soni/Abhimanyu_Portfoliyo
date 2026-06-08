const ITEMS = [
  {
    emoji: '⚛️',
    title: 'React.js Deep Dive',
    desc: 'Daily practice on components, hooks, state management, and building reusable UI patterns.',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    progress: 4,
  },
  {
    emoji: '🎨',
    title: 'CSS & Tailwind Mastery',
    desc: 'Sharpening skills in Flexbox, Grid, animations, responsive design, and Tailwind utility classes.',
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    progress: 4,
  },
  {
    emoji: '✨',
    title: 'JavaScript (ES6+)',
    desc: 'Strengthening fundamentals — closures, promises, async/await, destructuring, array methods.',
    color: 'from-yellow-500 to-amber-600',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    progress: 3,
  },
  {
    emoji: '🚀',
    title: 'Next.js & TypeScript',
    desc: 'Currently exploring Next.js for SSR/SSG and TypeScript for type-safe frontend development.',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    progress: 2,
  },
  {
    emoji: '🔧',
    title: 'Git, GitHub & Deployment',
    desc: 'Using Git for version control, GitHub for portfolio, and Vercel/Netlify for deploying projects.',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    progress: 3,
  },
]

export default function SelfLearning() {
  return (
    <section id="learning" className="py-20 bg-white dark:bg-dark-200">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm font-semibold
                        tracking-widest uppercase mb-2">
            Growth Mindset
          </p>
          <h2 className="section-title">
            Self Learning &amp;{' '}
            <span className="gradient-text">Development</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Building frontend expertise through daily self-directed learning
            and hands-on projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ITEMS.map(({ emoji, title, desc, color, bg, progress }) => (
            <div
              key={title}
              className="glass-card p-6
                         hover:shadow-xl hover:shadow-primary-500/10
                         hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${bg} flex items-center
                            justify-center text-3xl mb-5
                            group-hover:scale-110 transition-transform duration-200`}
              >
                {emoji}
              </div>

              {/* Progress dot strip — individual progress */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full bg-gradient-to-r ${color}
                      ${i < progress ? 'opacity-100' : 'opacity-20'}`}
                  />
                ))}
              </div>

              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}

          {/* Daily consistency card */}
          <div
            className="glass-card p-6 bg-gradient-to-br
                        from-primary-50 to-purple-50
                        dark:from-primary-900/20 dark:to-purple-900/20
                        border-primary-200 dark:border-primary-800/50
                        sm:col-span-2 lg:col-span-1"
          >
            <div className="text-center h-full flex flex-col justify-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                Daily Consistency
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Committed to coding & learning something new every day
              </p>

              {/* Week tracker */}
              <div className="flex justify-center gap-1.5">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center
                        text-xs font-bold
                        ${i < 5
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                        }`}
                    >
                      {i < 5 ? '✓' : day}
                    </div>
                    <span className="text-[10px] text-gray-400">{day}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                6/7 days this week 🔥
              </p>

              {/* Learning Resources */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400
                              uppercase tracking-wide mb-2">
                  Learning From
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {['YouTube', 'Docs', 'Udemy', 'Arena', 'ChatGPT'].map(
                    (src) => (
                      <span
                        key={src}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md
                                   bg-primary-50 dark:bg-primary-900/20
                                   text-primary-600 dark:text-primary-400"
                      >
                        {src}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}