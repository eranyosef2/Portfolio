"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 40px rgba(99, 102, 241, 0.6)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-4xl font-bold text-white">EY</span>
              </motion.div>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-sm"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
