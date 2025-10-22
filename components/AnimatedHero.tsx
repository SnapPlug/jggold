"use client";

import { motion } from "framer-motion";

export default function AnimatedHero() {
  const words1 = "More than Coffee.".split(" ");
  const words2 = "커피 그 이상의 커피를 제안합니다.".split(" ");

  return (
    <div className="text-center relative z-10">
      <motion.h2 
        className="text-white font-normal text-[30.4px] leading-[51.68px] w-[864px] mx-auto"
        style={{
          '--framer-text-alignment': 'center',
          '--framer-text-color': 'rgb(255, 255, 255)'
        } as React.CSSProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {words1.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2 + (index * 0.2), 
              duration: 0.5 
            }}
            style={{
              display: 'inline-block',
              opacity: 1,
              filter: 'blur(0px)',
              transform: 'none',
              willChange: 'transform'
            }}
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
        <br />
        {words2.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6 + (index * 0.2), 
              duration: 0.5 
            }}
            style={{
              display: 'inline-block',
              opacity: 1,
              filter: 'blur(0px)',
              transform: 'none',
              willChange: 'transform'
            }}
            className="mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}
