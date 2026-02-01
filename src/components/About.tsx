"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CodeTerminal from "./CodeTerminal";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  async function handleDownloadCV() {
  try {
    const response = await fetch("/Portfolio/CV-ERAN-YOSEF.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV ERAN YOSEF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch {
    window.open("/Portfolio/CV-ERAN-YOSEF.pdf", "_blank");
  }

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-medium">Get To Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-text">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <CodeTerminal />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a motivated and precise <span className="text-white font-semibold">Full Stack Engineer</span> with
              a strong foundation in web development, gained through the Full Stack Bootcamp at Coding Academy.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building and maintaining modern web applications using{" "}
              <span className="text-indigo-400">JavaScript</span>,{" "}
              <span className="text-purple-400">TypeScript</span>,{" "}
              <span className="text-cyan-400">React</span>,{" "}
              <span className="text-white">Next.js</span>, and{" "}
              <span className="text-green-400">Node.js</span>. I'm experienced in creating
              responsive user interfaces with CSS, SCSS, Tailwind, and Figma.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working at <span className="text-white font-semibold">Mothership</span>, where I develop
              interactive and dynamic web pages using modern frontend technologies, implementing responsive
              layouts, animations, and component-based architecture.
            </p>

            <motion.a
              href="/Portfolio/CV-ERAN-YOSEF.pdf"
              download="CV ERAN YOSEF.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
