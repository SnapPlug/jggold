"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

export default function AnimatedService() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const slides = [
    {
      image: "/3. Mood_1.png",
      title: "Alternative Coffee — A New Way to Live",
      subtitle: "커피의 대안, 일상을 바꾸는 새로운 선택"
    },
    {
      image: "/4. Mood_2.png", 
      title: "Beyond Caffeine.",
      subtitle: "100% 제로 카페인 커피의 세계를 경험하세요."
    },
    {
      image: "/5. Mood_3.png",
      title: "Experience a Flavor Deeper Than Coffee.",
      subtitle: "커피보다 더 깊은 풍미를 느끼실 수 있어요."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    const threshold = 50; // 최소 스와이프 거리

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // 왼쪽으로 스와이프 (다음 슬라이드)
        nextSlide();
      } else {
        // 오른쪽으로 스와이프 (이전 슬라이드)
        prevSlide();
      }
    }
    
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const endX = e.clientX;
    const diffX = startX - endX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className="w-full">
      {/* 모바일: 슬라이딩 캐러셀 */}
      <div className="md:hidden relative">
        <div 
          ref={containerRef}
          className="relative w-full h-[80vh] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-[80vh] flex-shrink-0 relative">
                <Image
                  src={slide.image}
                  alt={`Service Mood ${index + 1}`}
                  fill
                  className={`object-cover ${index === 1 ? 'object-[75%_center]' : ''}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full px-3 flex items-center justify-center">
                    <h3 className="font-sans text-[1.1rem] md:text-[1.5rem] leading-[1.4] text-white text-center">
                      {slide.title} <br />
                      {slide.subtitle}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 페이지네이션 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-500/50 rounded-full px-4 py-2 flex space-x-2 shadow-lg">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-white shadow-md' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 데스크톱: 기존 세로 배치 */}
      <div className="hidden md:flex flex-col">
        {slides.map((slide, index) => (
          <motion.div 
            key={index}
            className="relative w-full h-[820px] max-w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src={slide.image}
              alt={`Service Mood ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[632px] h-[67px] flex items-center justify-center">
                <h3 className="font-sans text-[1.9rem] leading-[1.4] text-white text-center">
                  {slide.title} <br />
                  {slide.subtitle}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
