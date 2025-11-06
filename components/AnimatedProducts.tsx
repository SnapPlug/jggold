"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function AnimatedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [clickedProductIndex, setClickedProductIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      image: "/10. Products_1.png",
      name: "[Favrichon] 치커리 커피 100g",
      price: "19,500원",
      originalPrice: "25,000원",
      isComingSoon: false
    },
    {
      image: "/11. Products_2.png",
      name: "[LUPI COFFEE] ORIGINAL 200g",
      price: "COMING SOON",
      originalPrice: null,
      isComingSoon: true
    },
    {
      image: "/12. Products_3.png",
      name: "[LUPI COFFEE] INTENSE 200g",
      price: "COMING SOON",
      originalPrice: null,
      isComingSoon: true
    },
    {
      image: "/13. Products_4.png",
      name: "[LUPI COFFEE] DARK 200g",
      price: "COMING SOON",
      originalPrice: null,
      isComingSoon: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 슬라이드 변경 시 클릭 상태 초기화
  useEffect(() => {
    setClickedProductIndex(null);
  }, [currentSlide]);

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
    <div id="products" className="w-full h-[708px] md:h-[920px] bg-white p-3 md:p-[120px]">
      <div className="w-full h-full flex flex-col justify-top items-center">
        {/* 헤더 */}
        <div className="w-full max-w-full md:mb-8">
          <h2 className="text-[1.2rem] md:text-[36px] leading-[0.9] font-bold mb-[30px]" style={{ color: '#112211' }}>
            Products
          </h2>
          <div className="text-[0.8rem] md:text-[20px] leading-[1.2]" style={{ color: '#112211' }}>
            <p>커피를 포기하지 않아도 되는 방법이 여기 있습니다.</p>
            <p>당신의 하루를 부드럽게 바꿔줄 한 잔을 만나보세요.</p>
          </div>
        </div>
        
        {/* 모바일: 슬라이딩 캐러셀 */}
        <div className="md:hidden flex-1 flex flex-col justify-center w-full">
          <div 
            ref={containerRef}
            className="relative w-full h-[400px] overflow-hidden"
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
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center px-4">
                  <div 
                    className="w-full h-[300px] mb-4 relative overflow-hidden cursor-pointer"
                    onClick={() => {
                      if (!isDragging) {
                        setClickedProductIndex(clickedProductIndex === index ? null : index);
                      }
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                    {/* Favrichon 제품(index 0)에만 오버레이 표시 */}
                    {index === 0 && clickedProductIndex === index && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 text-white">
                        <p className="text-center text-[12px] leading-[1.2em] mb-2">
                          135년 프랑스 전통과 청정 스위스의 조화
                        </p>
                        <p className="text-center text-[12px] leading-[1.2em] mb-4">
                          가장 완벽한 제로카페인 커피
                        </p>
                        <a 
                          href="#products" 
                          className="text-white text-[14px] font-medium underline hover:text-gray-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View More +
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-[0.8rem] leading-[1.2em] font-medium mb-2" style={{ color: '#000000' }}>
                      {product.name}
                    </h3>
                    {product.isComingSoon ? (
                      <p className="text-[0.8rem] leading-[1.2em]" style={{ color: '#000000' }}>
                        {product.price}
                      </p>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-[0.8rem] line-through text-black">{product.originalPrice}</span>
                        <span className="text-[0.8rem] text-[#800000]">{product.price}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 페이지네이션 */}
          <div className="flex justify-center mt-4">
            <div className="bg-gray-500/50 rounded-full px-4 py-2 flex space-x-2 shadow-lg">
              {products.map((_, index) => (
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
        
        {/* 데스크톱: 제품 그리드 */}
        <div className="hidden md:grid w-full max-w-full h-[552px] grid-cols-4 gap-16">
          {/* 제품 1 - Favrichon */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[495px] mb-4 relative overflow-hidden group cursor-pointer">
              <Image
                src="/10. Products_1.png"
                alt="Favrichon Chicory Coffee"
                fill
                className="object-contain transition-all duration-500 group-hover:brightness-110"
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
              {/* 호버 시 오버레이 및 텍스트 */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-4 text-white pointer-events-none">
                <p className="text-center text-[13px] leading-[1.2em] mb-2">
                  135년 프랑스 전통과 청정 스위스의 조화
                </p>
                <p className="text-center text-[13px] leading-[1.2em] mb-4">
                  가장 완벽한 제로카페인 커피
                </p>
                <a 
                  href="#products" 
                  className="text-white text-[16px] font-medium underline pointer-events-auto hover:text-gray-300 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View More +
                </a>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-[18px] leading-[1.2em] font-medium mb-2" style={{ color: '#000000' }}>
                [Favrichon] 치커리 커피 100g
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[18px] line-through text-black">25,000원</span>
                <span className="text-[18px] text-[#800000]">19,500원</span>
              </div>
            </div>
          </div>
          
          {/* 제품 2 - LUPI COFFEE Original */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[495px] mb-4 relative overflow-hidden group cursor-pointer">
              <Image
                src="/11. Products_2.png"
                alt="LUPI COFFEE Original"
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
            <div className="text-center">
              <h3 className="text-[18px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] ORIGINAL 200g
              </h3>
              <p className="text-[18px] leading-[1.2em] " style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
          
          {/* 제품 3 - LUPI COFFEE Intense */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[495px] mb-4 relative overflow-hidden group cursor-pointer">
              <Image
                src="/12. Products_3.png"
                alt="LUPI COFFEE Intense"
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
            <div className="text-center">
              <h3 className="text-[18px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] INTENSE 200g
              </h3>
              <p className="text-[18px] leading-[1.2em]" style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
          
          {/* 제품 4 - LUPI COFFEE Dark */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[495px] mb-4 relative overflow-hidden group cursor-pointer">
              <Image
                src="/13. Products_4.png"
                alt="LUPI COFFEE Dark"
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
            <div className="text-center">
              <h3 className="text-[18px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] DARK 200g
              </h3>
              <p className="text-[18px] leading-[1.2em]" style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
