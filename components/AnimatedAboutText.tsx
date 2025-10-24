"use client";

import { motion } from "framer-motion";

export default function AnimatedAboutText() {
  return (
    <div className="text-[1.5rem] leading-[1.4em] text-white font-inter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut",
          delay: 0.5
        }}
      >
        생각했습니다. 이 한 잔이 누군가에겐
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          ease: "easeOut",
          delay: 1.2
        }}
      >
        안신하고 마실 수 있는 '작은 위로'가 될 거라는 걸.
      </motion.div>
    </div>
  );
}
