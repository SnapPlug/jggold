"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AnimatedFooter() {
  const [showCompanyPopover, setShowCompanyPopover] = useState(false);

  // 팝오버 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.company-popover-container')) {
        setShowCompanyPopover(false);
      }
    };

    if (showCompanyPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCompanyPopover]);

  return (
    <footer className="w-full h-[388px] bg-black text-white">
      <div className="w-full px-3 md:px-[30px]">
        <div className="max-w-full mx-auto">
          {/* 상단 네비게이션 섹션 */}
          <div className="flex justify-top h-[288px] pt-1 gap-4 md:gap-0">
            {/* Pages 섹션 */}
            <div className="h-[194px] py-[47px] w-[150px] md:w-[300px]">
                <h3 className="text-[#f5f5f5]/40 text-[0.8rem] md:text-[1rem] leading-[19px] mb-[10px] font-medium">Pages</h3>
                <ul className="space-y-[10px]">
                <li><a href="#" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Home</a></li>
                <li><a href="/about" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">About</a></li>
                <li><a href="/#partners" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Partners</a></li>
                <li><a href="/#products" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Products</a></li>
                <li><a href="/contact" className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Socials 섹션 */}
            <div className="h-[194px] py-[47px] w-[120px] md:w-auto">
              <h3 className="text-[#f5f5f5]/40 text-[0.8rem] md:text-[1rem] leading-[19px] font-medium mb-[10px]">Socials</h3>
              <ul className="space-y-[10px]">
                <li>
                  <a
                    href="https://www.instagram.com/jung.kh_?igsh=cXdnNGM0Ymp2ZnFp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.com/@jung.kh_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[0.8rem] md:text-[1rem] leading-[19px] hover:text-white/70 transition-colors"
                  >
                    Thread
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* 하단 로고 및 저작권 섹션 */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-auto md:h-[80px] space-y-2 md:space-y-0">
            {/* 로고 */}
            <div className="relative order-1 md:order-1 mt-5 md:mt-0" style={{ width: '150px', height: '19px' }}>
              <Image
                src="/JG_Logo.png"
                alt="JG Gold Logo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* 저작권 및 법적 링크들 */}
            <div className="flex flex-col md:flex-col items-center md:items-end order-2 md:order-2 space-y-1 md:space-y-1">
              {/* 저작권 */}
              <div className="text-white text-[12px] md:text-[14px]">
                © 2025 JG Gold Company
              </div>
              
              {/* 법적 링크들 */}
              <div className="flex justify-center md:justify-end space-x-6 md:space-x-8">
                <a href="https://www.notion.so/Privacy-Policy-2a0444cd953d807db865e1ff6d9bc787?source=copy_link" target="_blank" rel="noopener noreferrer" className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors">Privacy</a>
                <a href="https://www.notion.so/Terms-of-Service-2a0444cd953d803dade1fdb882db2b25?source=copy_link" target="_blank" rel="noopener noreferrer" className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors">Terms of Service</a>
                <div className="relative company-popover-container">
                  <button 
                    onClick={() => setShowCompanyPopover(!showCompanyPopover)}
                    className="text-white text-[12px] md:text-[14px] hover:text-white/70 transition-colors"
                  >
                    Company
                  </button>
                  
                  {/* 팝오버 */}
                  {showCompanyPopover && (
                    <div className="absolute bottom-full right-0 mb-2 bg-black border border-gray-600 rounded-lg p-4 shadow-lg z-50 min-w-[200px] max-w-[calc(100vw-32px)]">
                      {/* 화살표 */}
                      <div className="absolute top-full right-4 transform translate-x-0 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                      
                      {/* 사업자 정보 */}
                      <div className="text-white text-sm space-y-1">
                        <div className="font-semibold text-base">(주) 정금금속</div>
                        <div>사업자등록번호: 127-46-67605</div>
                        <div>대표자: 정경희</div>
                        <div>Email: stacyjung@jggoldcompany.com</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
