// import { FiAward, FiCheckCircle } from 'react-icons/fi'

// const CERTS = [
//   {
//     icon: '☕',
//     title: 'Programming Using Java',
//     issuer: 'Infosys Springboard',
//     description:
//       'Covered Core Java fundamentals, Object-Oriented Programming concepts, and real-world programming practices.',
//     topics: ['Core Java', 'OOP Concepts', 'Exception Handling', 'Collections', 'Programming Fundamentals'],
//     gradient: 'from-blue-500 to-indigo-600',
//     verified: true,
//   },
// ]

// export default function Certifications() {
//   return (
//     <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-300">
//       <div className="section-container">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-primary-500 font-mono text-sm font-semibold
//                         tracking-widest uppercase mb-2">
//             Credentials
//           </p>
//           <h2 className="section-title">
//             My <span className="gradient-text">Certifications</span>
//           </h2>
//         </div>

//         <div className="max-w-2xl mx-auto space-y-6">
//           {CERTS.map((cert) => (
//             <div
//               key={cert.title}
//               className="glass-card overflow-hidden
//                          hover:shadow-xl hover:shadow-primary-500/10
//                          hover:-translate-y-0.5 transition-all duration-300"
//             >
//               <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />

//               <div className="p-6">
//                 <div className="flex items-start gap-5">

//                   {/* Icon */}
//                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
//                                    text-3xl bg-gradient-to-br ${cert.gradient}
//                                    shadow-lg flex-shrink-0`}>
//                     {cert.icon}
//                   </div>

//                   <div className="flex-1 min-w-0">
//                     {/* Title & Badge */}
//                     <div className="flex items-start justify-between
//                                     flex-wrap gap-2 mb-1">
//                       <h3 className="font-bold text-gray-800 dark:text-white text-lg">
//                         {cert.title}
//                       </h3>
//                       {cert.verified && (
//                         <span className="flex items-center gap-1 px-2.5 py-1 rounded-full
//                                          text-xs font-semibold
//                                          bg-green-100 dark:bg-green-900/30
//                                          text-green-700 dark:text-green-400">
//                           <FiCheckCircle className="w-3 h-3" />
//                           Verified
//                         </span>
//                       )}
//                     </div>

//                     {/* Issuer */}
//                     <p className="text-primary-500 dark:text-primary-400 font-semibold
//                                   text-sm mb-3 flex items-center gap-1.5">
//                       <FiAward className="w-4 h-4" />
//                       {cert.issuer}
//                     </p>

//                     {/* Description */}
//                     <p className="text-gray-600 dark:text-gray-400 text-sm
//                                   mb-4 leading-relaxed">
//                       {cert.description}
//                     </p>

//                     {/* Topics */}
//                     <div className="flex flex-wrap gap-2">
//                       {cert.topics.map((topic) => (
//                         <span key={topic} className="skill-badge text-xs">
//                           {topic}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* In-progress card */}
//           <div className="glass-card p-8 text-center border-2 border-dashed
//                           border-gray-300 dark:border-gray-600">
//             <p className="text-4xl mb-3">📖</p>
//             <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-2">
//               More Certifications in Progress
//             </h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               Planning to complete Spring Boot &amp; Java 8 certifications
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }