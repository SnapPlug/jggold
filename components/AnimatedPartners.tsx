"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function AnimatedPartners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      image: "/6. Partners_1.png",
      name: "Favrichon",
      description: "스위스에서 제조하는 135년 전통의 프랑스 브랜드"
    },
    {
      image: "/7. Partners_2.png", 
      name: "LUPI COFFEE",
      description: "프랑스 대체커피 NO.1 루핀커피 전문 브랜드"
    },
    {
      image: "/8. Partners_3.png",
      name: "Coming Soon",
      description: "곧 다양한 글로벌 파트너사가 소개됩니다."
    },
    {
      image: "/9. Partners_4.png",
      name: "Coming Soon",
      description: "기대하셔도 좋습니다."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
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
    <div id="partners" className="w-full h-[554px] md:h-[1706px] md:py-20" style={{ backgroundColor: '#A2AD71' }}>
      <div className="w-full px-3 md:px-[120px] h-full md:h-auto flex flex-col">
        <div className="pt-[30px] md:pt-0 md:mb-0">
          <h2 className="text-[1.2rem] md:text-[36px] leading-[0.9] font-bold text-white mb-[30px]">Partners</h2>
          <div className="text-white text-[0.8rem] md:text-[20px] leading-[1.2]">
            <p>이 여정에 뜻을 함께한 파트너들이 있습니다.</p>
            <p>우리는 서로의 철학과 진심으로 연결되어,</p>
            <p>세상에 '건강한 커피의 또 다른 가능성'을 전합니다.</p>
          </div>
        </div>
        
        {/* 모바일: 슬라이딩 캐러셀 */}
        <div className="md:hidden flex-1 flex flex-col justify-center">
          <div 
            ref={containerRef}
            className="relative w-full h-[280px] overflow-hidden"
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
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="h-[200px] relative mb-4">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} Partner`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-[1rem] md:text-[1.2rem] leading-[1.2] font-bold text-white mb-1">{partner.name}</h3>
                    <p className="text-white text-[0.8rem] md:text-[0.9rem] leading-[1.2] opacity-90">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 페이지네이션 */}
          <div className="flex justify-center mt-4">
            <div className="bg-[#8A9468] rounded-full px-4 py-2 flex space-x-2 shadow-lg">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-white shadow-md' : 'bg-[#A2AD71]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* 데스크톱: 파트너 그리드 */}
      <div className="hidden md:grid grid-cols-2 gap-24 px-3 md:px-[120px] mt-[20px] mb-[60px]">
        {/* Favrichon */}
        <div className="h-[570px] relative">
          <div className="h-[570px] w-full overflow-hidden group cursor-pointer relative">
            <Image
              src="/6. Partners_1.png"
              alt="Favrichon Partner"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110"
              style={{ 
                transformOrigin: 'center',
                transform: 'scale(1)',
                transition: 'transform 500ms ease-out, filter 500ms ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          
          <div className="mt-[15px]">
            <h3 className="text-[28px] leading-[1.2] font-bold text-white mb-[5px]">Favrichon</h3>
            <p className="text-white text-[18px] leading-[1.2]">스위스에서 제조하는 135년 전통의 프랑스 브랜드</p>
          </div>
        </div>
        
        {/* LUPI COFFEE */}
        <div className="h-[570px] relative">
          <div className="h-[570px] w-full overflow-hidden group cursor-pointer relative">
            <Image
              src="/7. Partners_2.png"
              alt="LUPI COFFEE Partner"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110"
              style={{ 
                transformOrigin: 'center',
                transform: 'scale(1)',
                transition: 'transform 500ms ease-out, filter 500ms ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          
          <div className="mt-[15px]">
            <h3 className="text-[28px] leading-[1.2] font-bold text-white mb-[5px]">LUPI COFFEE</h3>
            <p className="text-white text-[18px] leading-[1.2]">프랑스 대체커피 NO.1 루핀커피 전문 브랜드</p>
          </div>
        </div>
        
        {/* Coming Soon 1 */}
        <div className="h-[570px] relative">
          <div className="h-[570px] w-full overflow-hidden group cursor-pointer relative">
            <Image
              src="/8. Partners_3.png"
              alt="Coming Soon Partner 1"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110"
              style={{ 
                transformOrigin: 'center',
                transform: 'scale(1)',
                transition: 'transform 500ms ease-out, filter 500ms ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          <div className="mt-[15px]">
            <h3 className="text-[28px] leading-[1.2] font-bold text-white mb-[5px]">Coming Soon</h3>
            <p className="text-white text-[18px] leading-[1.2]">곧 다양한 글로벌 파트너사가 소개됩니다.</p>
          </div>
        </div>
        
        {/* Coming Soon 2 */}
        <div className="h-[570px] relative">
          <div className="h-[570px] w-full overflow-hidden group cursor-pointer relative">
            <Image
              src="/9. Partners_4.png"
              alt="Coming Soon Partner 2"
              fill
              className="object-cover transition-all duration-500 group-hover:brightness-110"
              style={{ 
                transformOrigin: 'center',
                transform: 'scale(1)',
                transition: 'transform 500ms ease-out, filter 500ms ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          <div className="mt-[15px]">
            <h3 className="text-[28px] leading-[1.2] font-bold text-white mb-[5px]">Coming Soon</h3>
            <p className="text-white text-[18px] leading-[1.2] ">기대하셔도 좋습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
