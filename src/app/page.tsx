"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ThemeToggle from "@/components/ThemeToggle";
import { ParallaxBackground, SmoothScroll } from "@/components/ParallaxWrapper";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <LoadingScreen />
      <SmoothScroll>
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left z-[100]"
          style={{ scaleX }}
        />

        <ParallaxBackground />
        <Navbar />
        <ThemeToggle />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />

        {/* Back to top button */}
        <BackToTop />
      </SmoothScroll>
    </>
  );
}

function BackToTop() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.a
      href="#home"
      className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
        scale: scrollYProgress.get() > 0.1 ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        opacity: useSpring(scrollYProgress, { stiffness: 100, damping: 30 }),
      }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.a>
  );
}
