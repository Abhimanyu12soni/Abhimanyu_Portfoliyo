import { FiUser, FiMapPin, FiCalendar } from 'react-icons/fi'
 
//  import { FiTarget, FiCode, FiBook, } from 'react-icons/fi'
// const HIGHLIGHTS = [
//   {
//     icon: <FiTarget className="w-5 h-5" />,
//     title: 'Career Goal',
//     desc: 'Become a skilled Frontend developer contributing to real-world software solutions.',
//     color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
//   },
//   {
//     icon: <FiCode className="w-5 h-5" />,
//     title: 'Core Skills',
//     desc: 'Strong foundation in React, JavaScript, Tailwind CSS, and problem-solving.',
//     color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
//   },
//   {
//     icon: <FiBook className="w-5 h-5" />,
//     title: 'Always Learning',
//     desc: 'Exploring advanced React, REST APIs, and Python with consistent daily practice.',
//     color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
//   },
// ]

const INFO_ITEMS = [
  {
    icon: <FiUser className="w-4 h-4" />,
    label: 'Name',
    value: 'Abhimanyu Soni',
  },
  {
    icon: <FiCalendar className="w-4 h-4" />,
    label: 'Degree',
    value: 'B.Tech CSE • 2026',
  },
  {
    icon: <FiMapPin className="w-4 h-4" />,
    label: 'Location',
    value: 'Jaipur, Rajasthan',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-300">
      <div className="section-container">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm font-semibold
                        tracking-widest uppercase mb-2">
            Who I Am
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ════════════════════════════════
              LEFT — Visual Card  (fixed height)
          ════════════════════════════════ */}
          <div className="flex justify-center lg:sticky lg:top-24">
            <div className="relative w-72">

              {/* ── Main gradient card ── */}
<div className="w-full aspect-[3/4] rounded-3xl overflow-hidden
                shadow-2xl shadow-primary-500/25 relative">

  {/* ── Your Photo ── */}
  <img
    src="/images/abhimanyu.png"
    alt="Abhimanyu Soni"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* ── Gradient Overlay (photo ke upar) ── */}
  <div className="absolute inset-0 bg-gradient-to-br
                  from-primary-500/40 to-purple-600/60" />

  {/* ── Dark overlay bottom (text readable rahe) ── */}
  <div className="absolute inset-0 bg-gradient-to-t
                  from-black/80 via-black/20 to-transparent" />

  {/* Big initials watermark */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-[140px] font-black text-white/10
                     select-none leading-none">
      AS
    </span>
  </div>

  {/* Decorative circles */}
  <div className="absolute top-8 right-8 w-20 h-20 rounded-full
                  bg-white/5 border border-white/10" />
  <div className="absolute top-16 right-16 w-10 h-10 rounded-full
                  bg-white/5 border border-white/10" />

  {/* Info chips — stacked inside card */}
  <div className="absolute top-6 left-6 space-y-2 z-10">
    {INFO_ITEMS.map(({ icon, label, value }) => (
      <div
        key={label}
        className="flex items-center gap-2
                   bg-black/30 backdrop-blur-md
                   border border-white/20
                   rounded-xl px-3 py-1.5"
      >
        <span className="text-white/70">{icon}</span>
        <div>
          <p className="text-white/50 text-[10px] leading-none mb-0.5">
            {label}
          </p>
          <p className="text-white text-xs font-semibold leading-none">
            {value}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Bottom overlay with name */}
  <div className="absolute bottom-0 inset-x-0 p-6 z-10">
    <p className="text-white font-bold text-lg leading-tight">
      Abhimanyu Soni
    </p>
    <p className="text-white/70 text-sm mt-0.5">
      Aspiring Web Developer
    </p>

    {/* Skill pills */}
    <div className="flex flex-wrap gap-1.5 mt-3">
      {['React', 'JavaScript', 'Tailwind', 'Python'].map((skill) => (
        <span
          key={skill}
          className="text-[10px] font-semibold px-2 py-0.5
                     rounded-full bg-white/15 text-white
                     border border-white/20 backdrop-blur-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>

              {/* ── Floating badge — top right ── */}
              <div className="absolute -top-9 -right-9 glass-card px-4 py-3
                              text-center shadow-xl shadow-black/5 min-w-[72px]">
                <p className="text-2xl font-black text-blue-500 dark:text-blue-400 leading-none">3+</p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400
                              font-medium mt-0.5">
                  Years<br />Learning
                </p>
              </div>

              {/* ── Floating badge — bottom left ── */}
              <div className="absolute -bottom-9 -left-9 glass-card px-4 py-3
                              text-center shadow-xl shadow-black/5 min-w-[72px]">
                <p className="text-2xl font-black text-blue-500 dark:text-blue-400 leading-none">5+</p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400
                              font-medium mt-0.5">
                  Projects<br />Built
                </p>
              </div>

            </div>
          </div>

          {/* ════════════════════════════════
              RIGHT — Text Content
          ════════════════════════════════ */}
          <div className="space-y-6">

            {/* ── Heading ── */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold
                             text-gray-800 dark:text-white mb-4">
                Aspiring{' '}
                <span className="gradient-text">
                  Frontend & Python Web Developer
                </span>
              </h3>

              {/* ── Bio paragraphs ── */}
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate Computer Science student at{' '}
                  <strong className="text-gray-800 dark:text-gray-200">
                    Arya Institute of Engineering &amp; Technology, Jaipur
                  </strong>{' '}
                  (2022–2026). My journey into programming began with a fascination
                  for how technology solves real-world problems, and it has evolved
                  into a strong focus on frontend development.
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I've built responsive websites, dashboards, and portfolio projects
                  using{' '}
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map(
                    (tech, i, arr) => (
                      <span key={tech}>
                        <span className="text-primary-500 font-medium">{tech}</span>
                        {i < arr.length - 1 ? ', ' : ''}
                      </span>
                    )
                  )}
                  — always aiming for clean design and seamless user interaction.
                </p>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  As a fresher frontend developer, I'm eager to learn, experiment,
                  and grow by contributing to projects that combine design thinking
                  with technical precision. My goal is to craft user experiences
                  that are not only functional but also inspiring.
                </p>
              </div>
            </div>

            {/* ── Career objective quote ── */}
            <div className="relative p-5 rounded-2xl
                            bg-primary-50 dark:bg-primary-900/20
                            border-l-4 border-primary-500">
              <p className="text-gray-700 dark:text-gray-300 text-sm
                            italic leading-relaxed">
                "Seeking an internship to apply my programming fundamentals,
                learn industry-level development practices, and grow as a Web
                developer under the guidance of experienced professionals."
              </p>
            </div>

            {/* ── Highlight Cards ── */}
            {/* <div className="grid sm:grid-cols-3 gap-3">
              {HIGHLIGHTS.map(({ icon, title, desc, color }) => (
                <div
                  key={title}
                  className="glass-card p-4 rounded-2xl
                             hover:shadow-lg hover:-translate-y-1
                             transition-all duration-200 cursor-default"
                > */}
                  {/* Icon box */}
                  {/* <div className={`w-9 h-9 rounded-xl flex items-center
                                   justify-center mb-3 ${color}`}>
                    {icon}
                  </div> */}

                  {/* Title */}
                  {/* <h4 className="font-bold text-gray-800 dark:text-white
                                 text-sm mb-1">
                    {title}
                  </h4> */}

                  {/* Description */}
                  {/* <p className="text-xs text-gray-500 dark:text-gray-400
                                leading-relaxed">
                    {desc}
                  </p> */}
                {/* </div>
              ))}
            </div> */}

          </div>
          {/* end RIGHT */}

        </div>
      </div>
    </section>
  )
}