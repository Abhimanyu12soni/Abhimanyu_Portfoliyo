import { useState } from 'react'
import {
  FiMail, FiPhone, FiMapPin,
  FiLinkedin, FiGithub, FiSend, FiCheck,
} from 'react-icons/fi'

const CONTACT_INFO = [
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91-6378841247',
    href: 'tel:+916378841247',
    color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    label: 'Email',
    value: 'Soniabhimanyu931@gmail.com',
    href: 'mailto:Soniabhimanyu931@gmail.com',
    color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
    color: 'text-red-500 bg-red-50 dark:bg-red-900/20',
  },
]

const SOCIALS = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/Abhimanyu12soni',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhimanyu-soni-b94bbb258?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL)
  const [loading, setLoading] = useState(false)
  const [sent,    setSent]    = useState(false)
  const [errors,  setErrors]  = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.email.trim())   errs.email   = 'Email is required'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm(INITIAL)
      setTimeout(() => setSent(false), 4000)
    }, 1800)
  }

  const inputBase = `input-field text-sm`

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-300">
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm font-semibold
                        tracking-widest uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Open to internship opportunities, project collaborations &amp; mentorship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* ── LEFT — Contact Info ── */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Let's work{' '}
                <span className="gradient-text">together!</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm actively seeking internship opportunities in Frontend Web development
                where I can apply my skills, learn best practices, and contribute to
                real-world projects under experienced developers.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href || undefined}
                  className="flex items-center gap-4 p-4 glass-card
                             hover:shadow-lg hover:-translate-y-0.5
                             transition-all duration-200 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center
                                   justify-center flex-shrink-0 ${color}`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                      {label}
                    </p>
                    <p className="font-medium text-sm text-gray-800 dark:text-white
                                  group-hover:text-primary-500
                                  dark:group-hover:text-primary-400 transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3">
                Connect with me on
              </p>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                               text-sm font-medium
                               bg-white dark:bg-white/5
                               text-gray-700 dark:text-gray-300
                               border border-gray-200 dark:border-white/10
                               hover:bg-primary-500 hover:text-white
                               hover:border-primary-500
                               dark:hover:bg-primary-500 dark:hover:text-white
                               transition-all duration-200"
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold
                                    text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputBase}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold
                                    text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ABCD@example.com"
                    className={inputBase}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold
                                  text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject *
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Collaboration"
                  className={inputBase}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold
                                  text-gray-700 dark:text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the opportunity or how we can work together..."
                  className={`${inputBase} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || sent}
                className={`w-full py-3 rounded-xl font-semibold flex items-center
                           justify-center gap-2 transition-all duration-200
                           ${sent
                             ? 'bg-green-500 text-white cursor-default'
                             : loading
                             ? 'bg-primary-400 text-white cursor-not-allowed opacity-80'
                             : 'btn-primary'
                           }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40
                                     border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : sent ? (
                  <>
                    <FiCheck className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}