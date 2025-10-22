"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedService() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        {/* 첫 번째 이미지 */}
        <motion.div 
          className="relative w-full h-[80vh] max-w-[1440px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/3. Mood_1.png"
            alt="Service Mood 1"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[632px] h-[67px] flex items-center justify-center">
              <h3 className="font-sans text-[1.5rem] leading-[1.4] text-white text-center">
                Alternative Coffee — A New Way to Live <br />
                커피의 대안, 일상을 바꾸는 새로운 선택
              </h3>
            </div>
          </div>
        </motion.div>
        
        {/* 두 번째 이미지 */}
        <motion.div 
          className="relative w-full h-[80vh] max-w-[1440px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/4. Mood_2.png"
            alt="Service Mood 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[632px] h-[67px] flex items-center justify-center">
              <h3 className="font-sans text-[1.5rem] leading-[1.4] text-white text-center">
                Beyond Caffeine.<br />
                100% 제로 카페인 커피의 세계를 경험하세요.
              </h3>
            </div>
          </div>
        </motion.div>
        
        {/* 세 번째 이미지 */}
        <motion.div 
          className="relative w-full h-[80vh] max-w-[1440px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src="/5. Mood_3.png"
            alt="Service Mood 3"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[632px] h-[67px] flex items-center justify-center">
              <h3 className="font-sans text-[1.5rem] leading-[1.4] text-white text-center">
                Experience a flavor deeper than coffee. <br />
                커피보다 더 깊은 풍미를 느끼실 수 있어요.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
