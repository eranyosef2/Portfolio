"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Mothership",
    location: "Remote",
    period: "August 2025 - Present",
    description: [
      "Specialized in integrating and developing interactive and dynamic web pages using modern frontend technologies",
      "Implemented responsive layouts, animations, and component-based architecture to enhance user engagement",
      "Worked closely with designers and backend developers to optimize performance and scalability across multiple platforms",
      "Contributed to continuous improvement of code quality, accessibility, and user experience",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Supervisor",
    company: "Or Gadol Association",
    location: "",
    period: "2022 - 2024",
    description: [
      "Led a sales training program, training over 50 individuals to succeed in customer-facing roles",
      "Oversaw and improved the organization's website transaction system, managing 300+ monthly transactions efficiently",
      "Led improvements in the organization's digital workflows and provided operational support for online activities",
    ],
    tags: ["Leadership", "Web Management", "Training"],
  },
  {
    title: "Operations Command Center",
    company: "IDF",
    location: "",
    period: "2019 - 2022",
    description: [
      "Awarded a Certificate of Excellence for exceptional leadership and effective handling of complex communication and defense systems",
      "Gained expertise in military-grade defensive systems, including advanced camera and communication technologies",
      "Managed and mentored a team of 7 soldiers to meet key operational objectives",
    ],
    tags: ["Leadership", "Communication Systems", "Team Management"],
  },
];

const education = [
  {
    title: "Full Stack Bootcamp",
    institution: "Coding Academy",
    location: "Online / Ramat Gan",
    period: "2024",
    description: "Intensive full-stack web development program covering JavaScript, React, Node.js, MongoDB, and modern development practices.",
  },
  {
    title: "Bagrut Certification",
    institution: "Golda",
    location: "Petah-Tikva",
    period: "",
    description: "Israeli high school matriculation diploma.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Experience & Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500" />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-slate-900 border-4 border-indigo-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-2xl glass"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <span className="text-sm text-indigo-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-purple-400 font-medium mb-4">{exp.company}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl glass"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.title}</h4>
                    {edu.period && (
                      <span className="text-sm text-cyan-400 font-medium">{edu.period}</span>
                    )}
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-gray-500 text-sm mb-2">{edu.location}</p>
                  )}
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl glass"
            >
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Achievements
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span>Certificate of Excellence - IDF Operations Command Center</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Full Stack Development Certification - Coding Academy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
