"use client";

import Image from "next/image";

export default function AnimatedFooter() {
  return (
    <footer className="w-full h-[388px] bg-black text-white">
      <div className="w-full px-3 md:px-[30px]">
        <div className="max-w-full mx-auto">
          {/* 상단 네비게이션 섹션 */}
          <div className="flex justify-top h-[288px] pt-1">
            {/* Pages 섹션 */}
            <div className="h-[194px] py-[47px] w-[300px]">
                <h3 className="text-[#f5f5f5]/40 text-[1rem] leading-[19px] mb-[10px] font-medium">Pages</h3>
                <ul className="space-y-[10px]">
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Home</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">About</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Partners</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Products</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Contact</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Partnership Inquiry</a></li>
              </ul>
            </div>
            
            {/* Socials 섹션 */}
            <div className="h-[194px] py-[47px]">
              <h3 className="text-[#f5f5f5]/40 text-[1rem] leading-[19px] font-medium mb-[10px]">Socials</h3>
              <ul className="space-y-[10px]">
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-white text-[1rem] leading-[19px] hover:text-white/70 transition-colors">Thread</a></li>
              </ul>
            </div>
          </div>
          
          {/* 하단 로고 및 저작권 섹션 */}
          <div className="flex justify-between items-center h-[59px]">
            {/* 로고 */}
            <div className="relative" style={{ width: '150px', height: '19px' }}>
              <Image
                src="/JG_Logo.png"
                alt="JG Gold Logo"
                fill
                className="object-contain"
              />
            </div>
            
            {/* 저작권 */}
            <div className="text-white text-[14px]">
              © 2025 JG Gold Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
