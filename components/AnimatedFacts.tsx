"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedFactsProps {
  targetValue: number;
  label: string;
  delay?: number;
}

function AnimatedCounter({ targetValue, label, delay = 0 }: AnimatedFactsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000; // 2초 동안 애니메이션
      const increment = targetValue / (duration / 16); // 60fps 기준
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  return (
    <div className="bg-[#443F36] p-[20px] min-h-[106px] md:min-h-[200px]">
      <div className="font-sentient text-[2rem] md:text-[56px] leading-[0.9em] tracking-[-0.02em] text-white mb-[10px]">
        {count}
      </div>
      <p className="font-inter text-[1rem] md:text-[20px] leading-[0.9em] text-white">{label}</p>
    </div>
  );
}

export default function AnimatedFacts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
      <AnimatedCounter targetValue={133} label="Brand Research Studies" delay={0} />
      <AnimatedCounter targetValue={52} label="Sample Tastings" delay={200} />
      <AnimatedCounter targetValue={8} label="Global Partners" delay={400} />
      <AnimatedCounter targetValue={3} label="Countries of Direct Import Experience" delay={600} />
    </div>
  );
}
