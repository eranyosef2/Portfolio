"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "React Native", level: 75 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "WebSockets", level: 70 },
    ],
  },
  {
    title: "Styling & Design",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "CSS", level: 90 },
      { name: "SCSS", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    title: "Databases",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    title: "AI & Modern Tools",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "OpenAI", level: 80 },
      { name: "Claude Code", level: 90 },
      { name: "Cursor IDE", level: 90 },
      { name: "Git", level: 85 },
    ],
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎯" },
];

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium">What I Work With</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Skills & Technologies</h2>
        </motion.div>

        {/* Tech Stack Marquee */}
        <div className="relative mb-20 overflow-hidden py-4">
          <div className="flex animate-scroll">
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 mx-4 px-6 py-3 rounded-2xl glass flex items-center gap-3"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1 }}
              className="p-6 rounded-3xl glass"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIdx * 0.1 + skillIdx * 0.05, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-3xl glass text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-white">Languages</h3>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇱</span>
              <span className="text-gray-300">Hebrew (Native)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-gray-300">English (Proficient)</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
