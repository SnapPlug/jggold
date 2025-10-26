"use client";

import Image from "next/image";

export default function AnimatedPartners() {
  return (
    <div className="w-full py-20" style={{ backgroundColor: '#A2AD71' }}>
      <div className="w-full px-3 md:px-[30px]">
        <h2 className="text-[1.9rem] leading-[0.9] font-bold text-white mb-[30px]">Partners</h2>
        <div className="text-white text-[1rem] leading-[1.2]">
          <p>이 여정에 뜻을 함께한 파트너들이 있습니다.</p>
          <p>우리는 서로의 철학과 진심으로 연결되어,</p>
          <p>세상에 '건강한 커피의 또 다른 가능성'을 전합니다.</p>
        </div>
      </div>
      
      {/* 파트너 그리드 */}
      <div className="grid grid-cols-2 gap-24 px-3 md:px-[30px] mt-[20px] mb-[60px]">
        {/* Favrichon */}
        <div className="h-[452px] relative">
          <div className="h-[452px] w-full overflow-hidden group cursor-pointer relative">
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
            <h3 className="text-[1.4rem] leading-[1.2] font-bold text-white mb-[5px]">Favrichon</h3>
            <p className="text-white text-[1rem] leading-[1.2] opacity-70">스위스에서 제조하는 135년 전통의 프랑스 브랜드</p>
          </div>
        </div>
        
        {/* LUPI COFFEE */}
        <div className="h-[452px] relative">
          <div className="h-[452px] w-full overflow-hidden group cursor-pointer relative">
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
            <h3 className="text-[1.4rem] leading-[1.2] font-bold text-white mb-[5px]">LUPI COFFEE</h3>
            <p className="text-white text-[1rem] leading-[1.2] opacity-70">프랑스 대체커피 NO.1 루핀커피 전문 브랜드</p>
          </div>
        </div>
        
        {/* Coming Soon 1 */}
        <div className="h-[452px] relative">
          <div className="h-[452px] w-full overflow-hidden group cursor-pointer relative">
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
            <h3 className="text-[1.4rem] leading-[1.2] font-bold text-white mb-[5px]">Coming Soon</h3>
            <p className="text-white text-[1rem] leading-[1.2] opacity-70">곧 다양한 글로벌 파트너사가 소개됩니다.</p>
          </div>
        </div>
        
        {/* Coming Soon 2 */}
        <div className="h-[452px] relative">
          <div className="h-[452px] w-full overflow-hidden group cursor-pointer relative">
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
            <h3 className="text-[1.4rem] leading-[1.2] font-bold text-white mb-[5px]">Coming Soon</h3>
            <p className="text-white text-[1rem] leading-[1.2] opacity-70">기대하셔도 좋습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
