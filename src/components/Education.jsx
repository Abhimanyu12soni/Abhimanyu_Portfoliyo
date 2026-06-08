import { FiCalendar, FiMapPin } from 'react-icons/fi'

const EDUCATION = [
  {
    icon: '🎓',
    degree: 'Bachelor of Technology — B.Tech',
    field: 'Computer Science Engineering',
    institution: 'Arya Institute of Engineering & Technology',
    location: 'Jaipur',
    affiliation: 'RTU Kota',
    period: 'Aug 2022 – June 2026',
    status: 'Pursuing',
    statusColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    gradient: 'from-primary-500 to-purple-600',
    subjects: ['Core Java', 'OOP', 'DBMS', 'Data Structures', 'Software Engineering', 'Computer Networks'],
  },
  {
    icon: '🏫',
    degree: 'Senior Secondary (Class XII)',
    field: 'Science — PCM (Physics, Chemistry, Maths)',
    institution: 'Impulse Science Academy School',
    location: 'Lalsot, Rajasthan',
    affiliation: '',
    period: 'April 2020 – March 2022',
    status: 'Completed',
    statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    gradient: 'from-green-500 to-teal-600',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-200">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm font-semibold
                        tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">

          {/* Vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-0.5
                          bg-gradient-to-b from-primary-500 to-purple-600
                          hidden sm:block" />

          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative sm:pl-16">

                {/* Timeline dot */}
                <div className={`hidden sm:flex absolute left-2.5 top-7
                                 w-5 h-5 rounded-full
                                 bg-gradient-to-br ${edu.gradient}
                                 items-center justify-center shadow-md -translate-x-1/2`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="glass-card overflow-hidden
                                hover:shadow-xl hover:shadow-primary-500/10
                                hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`h-1 bg-gradient-to-r ${edu.gradient}`} />

                  <div className="p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between
                                    flex-wrap gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h3 className="font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-500 dark:text-primary-400
                                        font-medium text-sm">
                            {edu.field}
                          </p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs
                                        font-semibold ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm
                                    text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        {edu.institution}, {edu.location}
                        {edu.affiliation && ` • ${edu.affiliation}`}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="w-3.5 h-3.5 flex-shrink-0" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((s) => (
                        <span key={s} className="skill-badge text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}