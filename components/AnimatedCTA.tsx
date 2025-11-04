"use client";

import Image from "next/image";

export default function AnimatedCTA() {
  return (
    <div className="w-full h-[548px] md:h-[820px] relative">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/14. Home_Partnership Inquiry.png"
          alt="Partnership Inquiry Background"
          fill
          className="object-cover object-[70%_center] md:object-center"
        />
      </div>
      
      {/* 오버레이 콘텐츠 */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-3 md:px-[120px]">
          <div className="max-w-full mx-auto">
            <div className="flex items-center">
              {/* 텍스트 영역 */}
              <div className="text-white">
                <h2 className="text-[1.2rem] md:text-[36px] leading-[1.7em] mb-[16px]">
                  JG Gold Company와<br />
                  파트너십을 맺고 싶으신가요?
                </h2>
                
                {/* 프로필 정보 */}
                <div className="flex items-center mb-[30px]">
                  <div className="w-[50px] h-[50px] mr-4 relative overflow-hidden" style={{ borderRadius: '23px' }}>
                    <Image
                      src="/2. About_CEO.jpg"
                      alt="CEO Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white/70 text-[0.8rem] md:text-[18px] leading-[1.2em] mb-[2px]">Stacy Jung</p>
                    <p className="text-white/70 text-[0.8rem] md:text-[18px] leading-[1.2em]">CEO</p>
                  </div>
                </div>
                
                {/* CTA 버튼 */}
                <a 
                  href="/partnership-inquiry"
                  className="font-medium transition-colors duration-300 inline-block"
                  style={{
                    backgroundColor: '#f8f8f6',
                    color: '#121212',
                    border: '1px solid #222225',
                    padding: '10px 24px',
                    fontSize: '20px',
                    lineHeight: '1.2em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#443F36';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f8f6';
                    e.currentTarget.style.color = '#121212';
                  }}
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
