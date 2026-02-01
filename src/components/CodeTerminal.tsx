"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "const developer = {", color: "text-purple-400" },
  { text: '  name: "Eran Yosef",', color: "text-gray-300" },
  { text: '  role: "Full Stack Engineer",', color: "text-gray-300" },
  { text: "  skills: [", color: "text-gray-300" },
  { text: '    "React", "Next.js",', color: "text-green-400" },
  { text: '    "TypeScript", "Node.js"', color: "text-green-400" },
  { text: "  ],", color: "text-gray-300" },
  { text: "  passion: true,", color: "text-cyan-400" },
  { text: "  available: true", color: "text-cyan-400" },
  { text: "};", color: "text-purple-400" },
];

export default function CodeTerminal() {
  const [displayedLines, setDisplayedLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev < codeLines.length) return prev + 1;
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full max-w-md"
    >
      {/* Terminal window */}
      <div className="rounded-2xl overflow-hidden glass border border-slate-700/50 shadow-2xl">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-2 font-mono">developer.ts</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-sm bg-slate-900/50 min-h-[280px]">
          {codeLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: idx < displayedLines ? 1 : 0,
                x: idx < displayedLines ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <span className="text-gray-600 w-6 select-none">{idx + 1}</span>
              <span className={line.color}>{line.text}</span>
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-indigo-400 ml-6 mt-1"
          />
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-4 -right-4 p-3 rounded-xl glass text-2xl"
      >
        ⚛️
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        className="absolute -bottom-4 -left-4 p-3 rounded-xl glass text-2xl"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 -right-6 p-2 rounded-lg glass text-lg"
      >
        TS
      </motion.div>
    </motion.div>
  );
}
