"use client";

import { motion } from "framer-motion";

export default function AnimatedAvatar() {
  return (
    <div className="relative w-64 h-80 md:w-80 md:h-96">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* SVG Avatar */}
      <motion.svg
        viewBox="0 0 200 250"
        className="relative w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd5ce" />
            <stop offset="100%" stopColor="#f8b4a9" />
          </linearGradient>
          <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a88c" />
            <stop offset="100%" stopColor="#b8956f" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c1810" />
            <stop offset="100%" stopColor="#1a0f0a" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Body/Shirt */}
        <motion.ellipse
          cx="100"
          cy="230"
          rx="70"
          ry="45"
          fill="url(#shirtGradient)"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        {/* Neck */}
        <motion.rect
          x="85"
          y="150"
          width="30"
          height="40"
          fill="url(#skinGradient)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />

        {/* Head */}
        <motion.ellipse
          cx="100"
          cy="100"
          rx="55"
          ry="65"
          fill="url(#skinGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        />

        {/* Hair */}
        <motion.path
          d="M45 90 Q45 40 100 35 Q155 40 155 90 Q155 65 130 55 Q100 45 70 55 Q45 65 45 90"
          fill="url(#hairGradient)"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Hair detail - messy top */}
        <motion.path
          d="M60 55 Q70 30 100 28 Q130 30 140 55"
          fill="url(#hairGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Ears */}
        <motion.ellipse cx="45" cy="105" rx="8" ry="15" fill="url(#skinGradient)" />
        <motion.ellipse cx="155" cy="105" rx="8" ry="15" fill="url(#skinGradient)" />

        {/* Eyebrows */}
        <motion.path
          d="M65 80 Q78 75 88 80"
          stroke="#2c1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.path
          d="M112 80 Q122 75 135 80"
          stroke="#2c1810"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        {/* Glasses */}
        <motion.g
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {/* Left lens */}
          <rect
            x="58"
            y="88"
            width="32"
            height="26"
            rx="4"
            fill="none"
            stroke="#8b7355"
            strokeWidth="2"
          />
          {/* Right lens */}
          <rect
            x="110"
            y="88"
            width="32"
            height="26"
            rx="4"
            fill="none"
            stroke="#8b7355"
            strokeWidth="2"
          />
          {/* Bridge */}
          <path
            d="M90 100 Q100 95 110 100"
            stroke="#8b7355"
            strokeWidth="2"
            fill="none"
          />
          {/* Temple arms */}
          <line x1="58" y1="95" x2="48" y2="93" stroke="#8b7355" strokeWidth="2" />
          <line x1="142" y1="95" x2="152" y2="93" stroke="#8b7355" strokeWidth="2" />

          {/* Lens reflection */}
          <rect x="62" y="92" width="8" height="4" fill="rgba(255,255,255,0.2)" rx="1" />
          <rect x="114" y="92" width="8" height="4" fill="rgba(255,255,255,0.2)" rx="1" />
        </motion.g>

        {/* Eyes (behind glasses) */}
        <motion.g>
          <ellipse cx="74" cy="100" rx="6" ry="7" fill="#2c1810" />
          <ellipse cx="126" cy="100" rx="6" ry="7" fill="#2c1810" />
          {/* Eye highlights */}
          <motion.circle
            cx="76"
            cy="98"
            r="2"
            fill="white"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="128"
            cy="98"
            r="2"
            fill="white"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* Nose */}
        <motion.path
          d="M100 100 L100 120 Q95 125 100 125 Q105 125 100 125"
          stroke="url(#skinGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        {/* Beard/Stubble */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <ellipse cx="100" cy="145" rx="35" ry="20" fill="#2c1810" opacity="0.3" />
          <ellipse cx="100" cy="148" rx="30" ry="15" fill="#2c1810" opacity="0.2" />
        </motion.g>

        {/* Mouth/Smile */}
        <motion.path
          d="M85 140 Q100 150 115 140"
          stroke="#c9746a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Floating code symbols around avatar */}
        <motion.text
          x="20"
          y="60"
          fill="#6366f1"
          fontSize="14"
          fontFamily="monospace"
          animate={{ y: [60, 50, 60], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {"</>"}
        </motion.text>
        <motion.text
          x="165"
          y="70"
          fill="#8b5cf6"
          fontSize="12"
          fontFamily="monospace"
          animate={{ y: [70, 60, 70], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          {"{ }"}
        </motion.text>
        <motion.text
          x="25"
          y="180"
          fill="#06b6d4"
          fontSize="10"
          fontFamily="monospace"
          animate={{ y: [180, 170, 180], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          const
        </motion.text>
        <motion.text
          x="155"
          y="175"
          fill="#6366f1"
          fontSize="10"
          fontFamily="monospace"
          animate={{ y: [175, 165, 175], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
        >
          =&gt;
        </motion.text>
      </motion.svg>

      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${
              ["#6366f1", "#8b5cf6", "#06b6d4"][i % 3]
            }, transparent)`,
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos((i * 60 * Math.PI) / 180) * 120,
            y: Math.sin((i * 60 * Math.PI) / 180) * 120,
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
