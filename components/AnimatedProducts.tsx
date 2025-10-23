"use client";

import Image from "next/image";

export default function AnimatedProducts() {
  return (
    <div className="w-full h-[780px] bg-white p-[30px]">
      <div className="w-full h-full flex flex-col justify-top items-center">
        {/* 헤더 */}
        <div className="w-full max-w-full mb-16">
          <h2 className="text-[1.9rem] leading-[0.9] font-bold mb-[30px]" style={{ color: '#112211' }}>
            Products
          </h2>
          <div className="text-[1rem] leading-[1.2]" style={{ color: '#112211' }}>
            <p>커피를 포기하지 않아도 되는 방법이 여기 있습니다.</p>
            <p>당신의 하루를 부드럽게 마술한잔을 만나보세요.</p>
          </div>
        </div>
        
        {/* 제품 그리드 */}
        <div className="w-full max-w-full h-[513px] grid grid-cols-4 gap-16">
          {/* 제품 1 - Favrichon */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[440px] mb-4 relative overflow-hidden group cursor-pointer">
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
            </div>
            <div className="text-center">
              <h3 className="text-[16px] leading-[1.2em] font-medium mb-2" style={{ color: '#000000' }}>
                [Favrichon] 치커리 커피 100g
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[16px] line-through text-black">25,000원</span>
                <span className="text-[16px] text-[#800000]">19,500원</span>
              </div>
            </div>
          </div>
          
          {/* 제품 2 - LUPI COFFEE Original */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[440px] mb-4 relative overflow-hidden group cursor-pointer">
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
              <h3 className="text-[16px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] ORIGINAL 200g
              </h3>
              <p className="text-[16px] leading-[1.2em] " style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
          
          {/* 제품 3 - LUPI COFFEE Intense */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[440px] mb-4 relative overflow-hidden group cursor-pointer">
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
              <h3 className="text-[16px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] INTENSE 200g
              </h3>
              <p className="text-[16px] leading-[1.2em]" style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
          
          {/* 제품 4 - LUPI COFFEE Dark */}
          <div className="flex flex-col items-center">
            <div className="w-full h-[440px] mb-4 relative overflow-hidden group cursor-pointer">
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
              <h3 className="text-[16px] leading-[1.2em] mb-2" style={{ color: '#000000' }}>
                [LUPI COFFEE] DARK 200g
              </h3>
              <p className="text-[16px] leading-[1.2em]" style={{ color: '#000000' }}>
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
