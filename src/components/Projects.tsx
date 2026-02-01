"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Airdnd",
    description: "A full-featured Airbnb clone with accommodation listings, booking system, user authentication, and responsive design. Built as a team project at Coding Academy.",
    image: "https://raw.githubusercontent.com/eranyosef2/eranyosef2/main/871e4923-0467-49d5-ab78-06fde437a4bc.png",
    tags: ["React", "Node.js", "MongoDB", "SCSS", "WebSockets"],
    liveUrl: "https://airdnd-w3rd.onrender.com/",
    githubUrl: "https://github.com/eranyosef2/Airdnd.sprint4",
    featured: true,
  },
  {
    title: "Mail App",
    description: "A Gmail-inspired email application with inbox management, compose functionality, and search features. Part of the Appsus project at Coding Academy.",
    image: "https://raw.githubusercontent.com/eranyosef2/eranyosef2/main/07740474-67c4-4545-8d81-5f7c4b9fcd8e.png",
    tags: ["React", "JavaScript", "CSS", "REST API"],
    liveUrl: "https://oferkoren.github.io/appsus-proj/#/mail?status=inbox",
    githubUrl: "https://github.com/eranyosef2/Appsus-Sprint-3",
    featured: true,
  },
  {
    title: "Meme Generator",
    description: "A fun meme creation tool allowing users to add custom text to images and download their creations.",
    image: null,
    tags: ["JavaScript", "Canvas API", "CSS3"],
    liveUrl: null,
    githubUrl: "https://github.com/eranyosef2/Meme-Generator",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = filter === "featured"
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 font-medium">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">Featured Projects</h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "all"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "featured"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "glass text-gray-400 hover:text-white"
            }`}
          >
            Featured
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group rounded-3xl overflow-hidden glass ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-slate-900">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🎨</div>
                      <span className="text-lg font-medium text-gray-400">{project.title}</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-indigo-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white text-indigo-500"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white text-indigo-500"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/eranyosef2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
